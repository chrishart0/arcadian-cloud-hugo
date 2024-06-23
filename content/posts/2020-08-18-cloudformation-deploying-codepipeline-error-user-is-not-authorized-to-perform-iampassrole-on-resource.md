---
title: "CloudFormation deploying CodePipeline error: User:  is not authorized to perform: iam:PassRole on resource: ..."
date: "2020-08-18"
categories: 
  - "aws"
coverImage: "Codepipeline-Update-Failed2.png"
author: "chart"
url: "/aws/2020/08/18/cloudformation-deploying-codepipeline-error-user-is-not-authorized-to-perform-iampassrole-on-resource/"
---

A quick guide to how to fix this cloudformation error: _is not authorized to perform: iam:PassRole on resource:_

## The Problem: _is not authorized to perform: iam:PassRole on resource:_

Yesterday I ran into this slightly miss leading error shown below:

```
User: arn:aws:iam::123456789123:user/myUser is not authorized to perform: iam:PassRole on resource: CFDeployRole-lkjh1234lhj1324(Service: AWSCodePipeline; Status Code: 400; Error Code: AccessDeniedException; Request ID: xxxxxxxxx-1111-xxxx-1111-xxxxxxxxx; Proxy: null)
```

I ran into this while deploying an IAM role in CloudFormation and then using it as the `RoleARN` for one action in a CodePipeline deployed by the same CloudFormation template. Specifically, it was used in a CloudFormation CREATE\_UPDATE action. A cut-down example of what I mean is below:

```
...
  CFDeployRole:
    Type: "AWS::IAM::Role"
    Properties:
      AssumeRolePolicyDocument:
        Version: '2012-10-17'
        Statement:
          - Action:
            - 'sts:AssumeRole'
            Effect: Allow
            Principal:
              Service:
              - "cloudformation.amazonaws.com"
      Policies:
        - PolicyName: "CodePipeline-Permissions"
          PolicyDocument:
            Version: "2012-10-17"
            Statement:
              - Effect: "Allow"
                Action:
                  - "cloudformation:CreateChangeSet"
                  - ...
                Resource:
                  - ...
...
  CodePipeline:
    Type: AWS::CodePipeline::Pipeline
    Properties:
      ArtifactStore:
        Location: !Ref CodePipelineArtifactStore
        Type: "S3"
      Name: CodePipelineName
      RoleArn:
        Fn::ImportValue: !Sub "${IamStack}-CodePipelineRoleARN"
      Tags:
        - Key: "Example"
          Value: "Example"
      Stages:
        - Actions:
            - Name: "BuildSource"
              ActionTypeId:
                Category: "Source"
                Owner: "AWS"
                Provider: "S3"
                Version: "1"
              OutputArtifacts:
                - Name: BuildArtifact
              Configuration:
                S3Bucket: !Ref BucketID
                S3ObjectKey: !Ref BucketKey
              RunOrder: 1
          Name: "BuildSource"
          - Name: "CloudFormation-Deploy-Stage"
            ActionTypeId:
              Category: "Deploy"
              Owner: "AWS"
              Provider: "CloudFormation"
              Version: "1"
            Configuration:
              ActionMode: CREATE_UPDATE
              StackName: !Sub '${Environment}-Example-CF-Deploy'
              Capabilities: CAPABILITY_IAM,CAPABILITY_AUTO_EXPAND
              ParameterOverrides: !Sub '{"Environment": "${Environment}", "ScheduleRate": "${ScheduleRate}"}'
              RoleArn: !Ref CFDeployRole
              TemplatePath: 'BuildArtifact::package.yml'
            RunOrder: 2
            InputArtifacts:
              - Name: BuildArtifact
          Name: "Deploy"
```

If you look close at the `RoleARN` in the deploy CodePipeline action you'll notice it is `!Ref CFDeployRole`. For some resources this will give you the ARN, some it gives you the name. In this case, `!Ref CFDeployRole` is only providing the name.

## The Solution

The solution is to use `!GetAtt CFDeployRole.Arn` instead of `!Ref CFDeployRole`.

`RoleArn:` needs an ARN, `!Ref CFDeployRole` is only passing in the role name. Once the problem is know the solution is pretty clear, the error thrown does not make the issue obvious though, requiring a bit of troubleshooting.

Example cut-down CodePipeline resource with the correct `RoleArn:`

```
  CodePipeline:
    Type: AWS::CodePipeline::Pipeline
    Properties:
      ArtifactStore:
        Location: !Ref CodePipelineArtifactStore
        Type: "S3"
      Name: CodePipelineName
      RoleArn:
        Fn::ImportValue: !Sub "${IamStack}-CodePipelineRoleARN"
      Tags:
        - Key: "Example"
          Value: "Example"
      Stages:
        - Actions:
            - Name: "BuildSource"
              ActionTypeId:
                Category: "Source"
                Owner: "AWS"
                Provider: "S3"
                Version: "1"
              OutputArtifacts:
                - Name: BuildArtifact
              Configuration:
                S3Bucket: !Ref BucketID
                S3ObjectKey: !Ref BucketKey
              RunOrder: 1
          Name: "BuildSource"
          - Name: "CloudFormation-Deploy-Stage"
            ActionTypeId:
              Category: "Deploy"
              Owner: "AWS"
              Provider: "CloudFormation"
              Version: "1"
            Configuration:
              ActionMode: CREATE_UPDATE
              StackName: !Sub '${Environment}-Example-CF-Deploy'
              Capabilities: CAPABILITY_IAM,CAPABILITY_AUTO_EXPAND
              ParameterOverrides: !Sub '{"Environment": "${Environment}", "ScheduleRate": "${ScheduleRate}"}'
              RoleArn: !GetAtt CFDeployRole.Arn
              TemplatePath: 'BuildArtifact::package.yml'
            RunOrder: 2
            InputArtifacts:
              - Name: BuildArtifact
          Name: "Deploy"
```
