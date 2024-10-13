---
title: "Make your Life Easier by Running AWS CDK in a Docker Container"
date: "2022-02-22"
categories: 
  - "aws"
tags: 
  - "3-musketeers"
  - "aws"
  - "cdk"
cover:
  Image: "/images/3Musketeers-and-AWS-CDK.png"
author: "chart"
url: "/aws/2022/02/22/make-your-life-easier-by-running-aws-cdk-in-a-docker-container/"
---

Cross post from [Medium](https://medium.com/contino-engineering/rescue-your-soul-from-aws-cdk-dependency-hell-and-improve-your-devex-with-3-musketeers-4293815d01a8)  
Tags: [CDK](https://arcadian.cloud/tag/cdk/), [3 Musketeers](https://arcadian.cloud/tag/3-musketeers/), [AWS](https://arcadian.cloud/tag/aws/)  
This is an example of AWS CDK in a docker container following the 3 Musketeers pattern.

_GitHub Repo:_ [_https://github.com/chrishart0/aws-cdk-typescript-3-musketeers_](https://github.com/chrishart0/aws-cdk-typescript-3-musketeers)

## What Is This 3 Musketeers Thing Anyway and Why Would I Want to Do Such a Thing as to Containerize the AWS CDK?

Links:

- [3 Musketeers for an epic Developer Experience](https://www.drewkhoury.com/post/gsd/3-musketeers-for-an-epic-developer-experience-8676ddaf33b2/)

- [What is 3 Musketeers?](https://3musketeers.io/)

- [What is AWS CDK](https://aws.amazon.com/cdk/)

There are a host of benefits to the 3 Musketeers pattern, which mostly center around Developer Experience. 3 Musketeers packages all the dependencies up into one container, making it easy for the whole team to stay up-to-date. The other substantial benefit I see of the 3 Musketeers pattern is just how darn easy it makes it to set up new developers. Simply make sure they install docker, docker-compose, and make (also WSL on Windows). Now setup for new projects is as simple as cloning down the repo and running _make install_.

If you’ve worked on any number of CDK projects, you’ve probably run into hiccups with dependency management, and you know how difficult these issues can be to fight through, especially for developers new to Node. It should be obvious now how 3 Musketeers can mitigate these by packaging up all the AWS CDK tooling into a docker container.

## Getting Started

Now that we’ve seen why it’s a good idea to use the 3 Musketeers pattern with the AWS CDK, let’s jump right into it.

Start by cloning down this repo from GitHub: [https://github.com/chrishart0/aws-cdk-typescript-3-musketeers](https://github.com/chrishart0/aws-cdk-typescript-3-musketeers)

This will have everything you need to try out containerized AWS CDK. Let’s go through the contents of this repo first.

Notice that the [_infrastructure_](https://github.com/chrishart0/aws-cdk-typescript-3-musketeers/tree/master/infrastructure) directory is the output of running the command _cdk init sample-app — language typescript._ This gives us a basic sample app to work with. If you aren’t familiar with the AWS CDK in typescript, the [_infrastructure/lib/infrastructure-stack.ts_](https://github.com/chrishart0/aws-cdk-typescript-3-musketeers/blob/master/infrastructure/lib/infrastructure-stack.ts) file is where the infrastructure to be deployed is located. You will notice an SQS queue and an SNS topic have been defined with the queue subscribed to the SNS topic.

You can use this repo as is or replace the contents of [_infrastructure_](https://github.com/chrishart0/aws-cdk-typescript-3-musketeers/tree/master/infrastructure) with your work.

## How to Use this Repo as a Starting Point

_Note: You don’t need an AWS account setup to test this locally_

Open up the CLI into the root of the repo you’ve cloned down locally.

Run the command _make;_ this will do all the needed setup and run _cdk synth_ from within the docker container.

```
$ make
```

If you have never used AWS CDK in your configured AWS account before then you must run the CDK bootstrapper. If you simply want to test this repo out locally you can skip this step.

```
$ make bootstrap
```

You are now free to run any other commands available such as _`cdk diff`_, `c_dk deploy_`, and _`cdk destroy`_

![AWS CDK in a docker container with 3 Musketeers](/images/Demo-of-setup-and-diff.gif)

## Use this in an existing project

If you have an existing project and would like to use this 3 Musketeers pattern then follow these steps

1. Copy the `Makefile`, `Dockerfile`, and `docker-compose.yaml` files into the root of your project

3. Update the `CDK_PATH` variable in `three_musketeers.env` and `Makefile`

5. Run _`make`_ to do initial setup and output cdk synth to verify everything is configured right

For more information refer to the [README](https://github.com/chrishart0/aws-cdk-typescript-3-musketeers) on the GitHub repo. I’d love to hear any thoughts, comments, or critiques in the comments below.

Also, checkout my other CDK related posts here: [https://arcadian.cloud/tag/cdk/](https://arcadian.cloud/tag/cdk/)
