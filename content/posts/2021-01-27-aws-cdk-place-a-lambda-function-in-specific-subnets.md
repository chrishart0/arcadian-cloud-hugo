---
title: "AWS CDK: Place a Lambda function in specific subnets"
date: "2021-01-27"
categories: 
  - "aws"
  - "devops"
tags: 
  - "aws"
  - "cdk"
  - "devops"
  - "lambda"
  - "subnet"
  - "vpc"
cover:
  Image: "/images/cdk2.png"
author: "chart"
url: "/devops/2021/01/27/aws-cdk-place-a-lambda-function-in-specific-subnets/"
---

I struggled for a while today to figure out how to place a lambda function inside of a given SubnetType of a VPC generated in the same CDK stack.

To specify subnets for a lambda function it needs a `SubnetSelection` object passed in. I expected to find a method of ec2.VPC() which would give me an output with the type `SubnetSelection` but this doesn't exist.

After some reading of other people's posts online I found an example which showed what I needed to do:

```
vpc_subnets=ec2.SubnetSelection(subnet_type= ec2.SubnetType.ISOLATED)
```

Turns out `SubnetSelection` isn't a list of subnets, but a filter which generates a list of subnets. After looking over the `SubnetSelection` [documentation](https://docs.aws.amazon.com/cdk/api/latest/python/aws_cdk.aws_ec2/SubnetSelection.html#aws_cdk.aws_ec2.SubnetSelection) again this became obvious.

Here is a more complete example of how to use `SubnetSelection` to specify the subnets for a Lambda function.

```
vpc = ec2.Vpc(...)

#https://docs.aws.amazon.com/cdk/api/latest/python/aws_cdk.aws_lambda/Function.html
my_lambda = _lambda.Function(
    self, 'my_lambda',
    runtime=_lambda.Runtime.PYTHON_3_8,
    handler='my_lambda.handler',
    code=_lambda.Code.asset('lambda'),
    vpc=vpc,
    vpc_subnets=ec2.SubnetSelection(subnet_type= ec2.SubnetType.ISOLATED),
    environment={
        'my_env_var_key': 'my_env_var_value',
    }
)
```
