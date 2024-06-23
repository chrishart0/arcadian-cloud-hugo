---
title: "How to Increase Your Python Aws Cdk Lambda Development Speed by Testing Locally with AWS SAM"
date: "2021-09-17"
categories: 
  - "sam"
tags: 
  - "aws"
  - "cdk"
  - "cli"
  - "devex"
  - "lambda"
  - "sam"
coverImage: "SAMCLIPic.png"
author: "chart"
url: "/aws/sam/2021/09/17/how-to-increase-your-python-aws-cdk-lambda-development-speed-by-testing-locally-with-aws-sam/"
---

Cross-post from: [Medium](https://medium.com/contino-engineering/increase-your-aws-cdk-lambda-development-speed-by-testing-locally-with-aws-sam-48a70987515c)  
This article explains how to locally test, with [AWS SAM](https://aws.amazon.com/serverless/sam/) (Serverless Application Model), a Lambda function + API Gateway created with [AWS CDK](https://aws.amazon.com/cdk/) (Cloud Development Kit). Python AWS CDK and SAM are a match made in heaven, or at least a match made in the cloud. This example uses the AWS CDK in Python.

## Using Python AWS CDK and SAM

When using [AWS CDK](https://aws.amazon.com/cdk/) for your infrastructure as code, it can be a pain to figure out how to efficiently test your Lambda functions. Deploying your code to AWS with `cdk deploy` for every change is slow, having to run a deploy for every code change is not ideal. Luckily it is straightforward to use [AWS SAM](https://aws.amazon.com/serverless/sam/) to test your function locally.

_For scenarios where local dev isn’t feasible, get faster deployments to Lambda with_ `[_cdk deploy --hotswap_](https://github.com/aws/aws-cdk/blob/master/packages/aws-cdk/README.md#hotswap-deployments-for-faster-development)`

<figure>

![](/images/1*4ww7GVMA_oAUNthzU8u3-w.gif)

<figcaption>

Demonstrates using SAM to test Lambda + API Gateway generated with CDK.  


</figcaption>

</figure>

Steps 0–2 help you set up a fresh CDK project. **_If you already have a CDK project which creates a Lambda function and API Gateway, skip ahead to step 3._**

## 0) Prerequisites, Assumptions, and Environment

- NPM Installed
- Python Installed
- Docker Installed
- If you don’t have AWS CDK installed follow [this guide](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html)
- If you don’t have AWS SAM installed, follow [this guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)

## 1) Initialize a Python CDK project

_Note: If this is your first time using AWS CDK with Python, I recommend you try out the CDK Workshop from AWS:_ [_https://cdkworkshop.com/30-python/20-create-project/100-cdk-init.html_](https://cdkworkshop.com/30-python/20-create-project/100-cdk-init.html)

[⚠️](https://emojipedia.org/warning/) _Optionally: you can clone the completed repo_ [_found here_](https://github.com/chrishart0/aws-cdk-sam-demo) _and skip to step 3_

Create a directory for your project and `cd` into it

```
$ mkdir aws-sam-cdk-demo
$ cd aws-sam-cdk-demo
```

Then, initialize your CDK project

```
$ cdk init app --language python
```

Create and source a python virtual environment

```
$ python3 -m venv .venv
$ source .venv/bin/activate
```

Install CDK requirements

```
$ pip install -r requirements.txt
```

Run CDK synth to ensure everything is setup correctly

```
$ cdk synth
```

You should see a small CloudFormation template get created with only the `_CDKMetadata_` resource and some conditions:

![](/images/0_aTxrVDLx6iCPVVa2.png)

## 2) Create a Lambda function

In this example, I’ll be making an API that provides a greeting from a list of greetings I have hard coded.

Create a directory for the lambda code and create a file for the code

```
$ mkdir lambda$ touch lambda/greeting_generator.py
```

Go ahead and add some code to your function. You can copy the code from my function and tweak it as you see fit: [https://github.com/chrishart0/aws-cdk-sam-demo/blob/master/lambda/greeting\_generator.py](https://github.com/chrishart0/aws-cdk-sam-demo/blob/master/lambda/greeting_generator.py)

### Install the lambda and API Gateway constructs

Add `aws-cdk.aws-lambda` and `aws-cdk.aws-apigateway` as lines to `requirements.txt`

![](https://miro.medium.com/max/697/0*BQzXAMgecWxaWOq_)

```
$ pip install -r requirements.txt
```

### Time to add lambda and API Gateway to your stack

The stack file is where you will define your infrastructure for CDK.

The stack file was created by `cdk init`, it follows the naming scheme `_same_as_your_parent_dir/same_as_your_parent_dir_stack.py_`

Example: Parent folder which init was run in is `aws-sam-cdk-demo`

- `aws_sam_cdk_demo/aws_sam_cdk_demo_stack.py`
- Example in GitHub: [https://github.com/chrishart0/aws-cdk-sam-demo/blob/master/aws\_sam\_cdk\_demo/aws\_sam\_cdk\_demo\_stack.py](https://github.com/chrishart0/aws-cdk-sam-demo/blob/master/aws_sam_cdk_demo/aws_sam_cdk_demo_stack.py)

![](/images/0_Po0SnfPw7IHyYBwj.png)

Import lambda at the top of the stack file referenced above. H_ow this file should look at the end is provided below or check the_ [_repo_](https://github.com/chrishart0/aws-cdk-sam-demo/blob/master/aws_sam_cdk_demo/aws_sam_cdk_demo_stack.py)_._

```
from aws_cdk import (    core,    aws_lambda as _lambda,    aws_apigateway as apigateway,)
```

Add code to your stack to generate a lambda function

```
greeting_function = _lambda.Function(            self, 'greeting_handler',            runtime=_lambda.Runtime.PYTHON_3_9,            code=_lambda.Code.asset('lambda'),            handler='greeting_generator.handler',        )
```

Add code for the API Gateway. Ensure the handler is the same as the variable for the lambda function.

```
greeting_apg = apigateway.LambdaRestApi(            self, 'greeting_endpoint',            handler=greeting_function,            description="Greeting API endpoint",        )
```

It should now look like the image below:

![](/images/0_6eFF66B3CNLjSZzF.png)

_Tip: Add links back to the CDK docs in your code; this will save you a lot of time hunting for the right page in the future._

Run `cdk synth` to ensure everything compiles. You should now see more resources in the CloudFormation output in your terminal.

## 3) Test that lambda function locally with SAM

Here is where things start to get a little… nutty 🐿️ (get it, like the [SAM squirrel mascot](https://aws.amazon.com/serverless/build-a-web-app/)???)

**If you already have a CDK application with a lambda function start here!**

Synthesize a template and write it to `template.yaml`

```
$ cdk synth --no-staging > template.yaml
```

Test the API with SAM

```
$ sam local start-api
```

In your browser or in another terminal hit the endpoint `[http://127.0.0.1:3000/](http://127.0.0.1:3000/)`

![](https://miro.medium.com/max/700/0*TuNWoXg5UeNWHFfX)

You can change the code of your lambda function on the fly, no need to restart SAM. Edit the source code in the `lambda/` dir and call the endpoint again.

![](https://miro.medium.com/max/700/0*ACKl3sNfcgrMqBrq)

You can also test individual invocations with simulated events, this is ideal if you are not using API Gateway.

```
$ sam local invoke functionName -e event.json
```
