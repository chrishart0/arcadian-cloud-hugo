---
title: "aws:asset:path - Guide to using aws:asset:path in CloudFormation"
date: "2022-09-22"
categories: 
  - "sam"
tags: 
  - "aws"
  - "cloudformation"
  - "devex"
  - "lambda"
  - "sam"
cover:
  Image: "/images/AWSSAM-1.webp"
author: "chart"
url: "/aws/sam/2022/09/22/cfn-aws-asset-path/"
---

aws:asset:path is a type of metadata which can be configured in CloudFromation for a Lambda function. Below are my notes on how to use it, specifically for use with AWS SAM directly with standard CloudFormation.

## Use aws:asset:path to specify the location of code for Lambda Function in CloudFormation for use with SAM.

Using SAM with a plain CloudFormation template, not a SAM template, works just fine. In order to use AWS SAM though you must provide a Metadata section for the lambda function at the same level as _Type:_ and _Properties:_. This metadata section will give SAM what it needs to run your function locally. You'll need to specify a aws:asset:path and an aws:asset:property and the SAM will have what it needs to build and run locally.

aws:asset:property must be the directory which contains the file which _Handler_ is looking for.

```
# app.y is in C:\my\path\to\lambda\code
MyLambdaFunction:
    Type: AWS::Lambda::Function
    Properties:
        Handler: app.lambda_handler
        ....
    Metadata:
        aws:asset:path: "C:\\my\\path\\to\\lambda\\code"
        aws:asset:property: "Code"
```

## Use a relative path for code location

It's quite inconvenient to use a hard coded path to the location of the code. Developers will put code in different location and will likely be using different operation systems.

For the Metadata aws:asset:path of your lambda function, pass in a relative path as shown below. It's quite simple really.

```
# If your code is a level deeper than your template.yaml    
Metadata:
        aws:asset:path: ".\\dirWithMyCode"
        aws:asset:property: "Code"

# If your code is a the same level as your template.yaml
Metadata:
        aws:asset:path: ".\\dirWithMyCode"
        aws:asset:property: "Code"
```

## Links to Documentation

AWS doesn't have much in the way of docs for this. I learned about it using SAM templates produced by CDK synth, but you can use this just fine by adding it to your own CFN templates without using the CDK.

[https://docs.aws.amazon.com/cdk/v2/guide/assets.html](https://docs.aws.amazon.com/cdk/v2/guide/assets.html): These docs are specifically for the CDK, but provide some useful info, particularly at the very bottom.

[Point lambda `aws:asset:path` to source code instead of `.cdk.staging`](https://github.com/aws/aws-cdk/issues/2586): Useful when you are using the CDK only.

## Use SAM with the AWS CDK

If you're trying to use AWS SAM to develop lambda functions with the AWS CDK / CloudFormation exported from the CDK. I have a guide on that. [Click the link and give it a read please.](https://arcadian.cloud/aws/sam/2021/09/17/how-to-increase-your-python-aws-cdk-lambda-development-speed-by-testing-locally-with-aws-sam/)

https://arcadian.cloud/aws/sam/2021/09/17/how-to-increase-your-python-aws-cdk-lambda-development-speed-by-testing-locally-with-aws-sam/
