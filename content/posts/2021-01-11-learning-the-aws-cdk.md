---
title: "Learning the AWS CDK"
date: "2021-01-11"
categories: 
  - "aws"
tags: 
  - "aws"
  - "cdk"
  - "cloudformation"
  - "iac"
cover:
  Image: "/images/cdk2.png"
author: "chart"
url: "/aws/2021/01/11/learning-the-aws-cdk/"
---

### CloudFormation written in Python? Yes!

After using the [CDK](https://aws.amazon.com/cdk/) for a bit, I believe it will be replacing CloudFormation for most AWS IaC in the coming years.

The CDK is a layer of abstraction built on top of CloudFormation(CF). It allows you to write a condensed, but more powerful form of CF in one of several programming languages(JavaScript, TypeScript, Python, Java, and C#).

You utilize AWS Constructs to more concisely deploy infra. That is, you are using pre-made objects with some assumptions build in for ease of use, which are translated into fully fledged CF. To make CDK Constructs quicker and easier to implement AWS is assuming you will use some subset of the most common configurations for a given service. If the configuration you need is more unique the CDK also allows you to write resources in a less condensed manner translating directly to CF with no assumptions.

### Getting Started

To get started with CDK in Python start with the install process. Sadly, it does require you have NodeJS installed to install the CDK CLI tool.

**Install Guide:** [https://docs.aws.amazon.com/cdk/latest/guide/getting\_started.html](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html)

**Best tutorial I've found for learing CDK:** [https://cdkworkshop.com/30-python/20-create-project/100-cdk-init.html](https://cdkworkshop.com/30-python/20-create-project/100-cdk-init.html)

**Official CDK Python Examples:** [https://github.com/aws-samples/aws-cdk-examples/tree/master/python](https://github.com/aws-samples/aws-cdk-examples/tree/master/python)
