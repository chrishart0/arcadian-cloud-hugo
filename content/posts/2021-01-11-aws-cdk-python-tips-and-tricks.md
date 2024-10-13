---
title: "AWS CDK: Python Tips, Tricks, and Examples"
date: "2021-01-11"
categories: 
  - "aws"
tags: 
  - "aws"
  - "cdk"
  - "iac"
cover:
  Image: "/images/cdk2.png"
author: "chart"
url: "/aws/2021/01/11/aws-cdk-python-tips-and-tricks/"
---

## Examples

- Official CDK Python Examples: [https://github.com/aws-samples/aws-cdk-examples/tree/master/python](https://github.com/aws-samples/aws-cdk-examples/tree/master/python)

- Unofficial CDK best practices: [https://github.com/kevinslin/open-cdk](https://github.com/kevinslin/open-cdk)

## Basics

### Read the docs!

Run the following command to open the CDK docs in your browser:

```
cdk docs
```

### Set the deployment region

In the app.py in the root of your CDK construct: add env={'region': 'us-east-2'} to your ConstructStack(...). At time of writing this is on line 9 by default. It should look something like this:

```
app = core.App()
MyConstructStack(app, "my-construct", env={'region': 'us-east-2'})
```

### Install new packages

When working with a new services you may need to install them with a command similar to the one below:

```
pip install aws-cdk.aws_apigateway
```

### CDK leaving orphaned CloudFormation deployments

If you change the name of your stack in app.py CDK doesn't seem to be smart enough to delete the old stack. It deploys your new stack with its new name and orphans the old one. If you know of a workaround for this please let me know.

### Using a Secure String from Parameter Store in ECS

I recommend storing secrets in AWS Secrets manager, it is much easier to use with the CDK. If you must use parameter store then here is how.

#### Example

```
#You must add the task execution role to KMS key used to encrypt the secret for ECS to deploy the task successfully
parameter_store_location = ssm.StringParameter.from_secure_string_parameter_attributes( self, "ParameterStoreTest",
        parameter_name="/my/parametersrore/location", #Remeber, KMS permissions for task execution role for parameter store key!
        version=1
    )

my_container = my_task.add_container( "myContainer",
    ...
    secrets = {
        "PARAMETERSTORETEST": ecs.Secret.from_ssm_parameter( parameter_store_location )
    }
)
```

[Docs for parameter store.](https://docs.aws.amazon.com/cdk/api/latest/python/aws_cdk.aws_ssm/StringParameter.html?highlight=from_secure_string_parameter_attributes#aws_cdk.aws_ssm.StringParameter.from_secure_string_parameter_attributes)

[Docs for add\_container() method.](https://docs.aws.amazon.com/cdk/api/latest/python/aws_cdk.aws_ecs/FargateTaskDefinition.html#aws_cdk.aws_ecs.FargateTaskDefinition.add_container)

### AWS SSO Support

AWS SSO does not work with the CDK right out of the box. Check [this Git issue](https://github.com/aws/aws-cdk/issues/5455) for a solution that works for you.

### AWS CDK + AWS SAM

These tools can be used in conjunction, check these docs out:

- [https://docs.aws.amazon.com/cdk/latest/guide/sam.html](https://docs.aws.amazon.com/cdk/latest/guide/sam.html)

- [https://docs.aws.amazon.com/cdk/api/latest/docs/aws-sam-readme.html](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-sam-readme.html)
