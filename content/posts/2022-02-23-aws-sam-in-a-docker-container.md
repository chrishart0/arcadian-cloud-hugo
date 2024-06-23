---
title: "AWS SAM in a Docker Container"
date: "2022-02-23"
categories: 
  - "aws"
  - "sam"
tags: 
  - "aws"
  - "cli"
  - "docker"
  - "sam"
coverImage: "SamAndDocker.png"
author: "chart"
url: "/aws/2022/02/23/aws-sam-in-a-docker-container/"
---

If you've worked on even one Lambda function then you know that development without local testing can be slow. In this article we will go over using AWS SAM to startup an API on port 3000 with API Gateway and Lambda locally inside of a docker container nested inside another Docker container running AWS SAM for portability, ease of use, and easier integration into larger products / end-to-end suites. If this sounds useful to you keep on reading.

## Why Would you Want to Run AWS SAM in a Docker Container?

Before getting to how to run AWS SAM in a Docker container, what even is AWS SAM ([docs](https://aws.amazon.com/serverless/sam/))? AWS SAM (Serverless Application Model) is a tool produced by AWS for making Serverless applications easier to develop, test, and deploy. For anyone trying to develop Lambda functions at AWS this is a must use tool.

The biggest benefits to SAM as I see it are:

- Local Lambda Function + API Gateway for faster feedback loops
- Lambda/API Gateway Unit and Integration tests precanned
- Built in deployment tool
- Condensed CloudFormation template format

### Why in a Docker Container though?

Let's go over the benefits of running SAM in a Docker Container:

- Manage your development environment with Docker-compose / [3 Musketeers](https://3musketeers.io/)
    - This is great for end-to-end testing and local development, easily spin up your full stack locally
    - See my article on AWS CDK with the [3 Musketeers dockerized local development pattern](https://arcadian.cloud/aws/2022/02/22/make-your-life-easier-by-running-aws-cdk-in-a-docker-container/)
- Improved consistency and control
    - Use the same container for new machines, for new devs, and even in your CI/CD
- Easier dependency management

## How to Run AWS SAM in a Docker Container

Reference repo: [https://github.com/chrishart0/containerized-aws-sam](https://github.com/chrishart0/containerized-aws-sam)

Specifically, I am referring to running \`sam local start-api\` in a container. This will startup a local API Gateway and Lambda container on port 3000. This is excellent for local development.

I'll be using examples from a project I am working on which pairs AWS SAM with the AWS CDK and some other tooling, so you'll notice some tooling not specific to SAM. Feel free to cut these examples down to size.

### Dockerfile

Firstly, define a Dockerfile in your repo.

[https://github.com/chrishart0/containerized-aws-sam/blob/master/Dockerfile](https://github.com/chrishart0/containerized-aws-sam/blob/master/Dockerfile)

```
FROM mcr.microsoft.com/playwright:focal

WORKDIR /app

#Install CDK and Frontend
RUN apt-get update && apt-get install -y \
    make \
    software-properties-common \
    && npm install -g aws-cdk ts-node

# Install deps for SAM Backend
RUN apt-get install -y \
    python3.9 \
    python3.8-venv python3.9-venv \
    && pip install pip \
    && pip install awscli aws-sam-cli==1.12.0 \
    && rm -rf /var/lib/apt/lists/*

# We are able to override the CMD instruction and execute any command successfully. 
# However, while we were successful, this process of overriding the CMD instruction 
# is rather clunky.
CMD ["make", "_run"]
```

### docker-compose.yaml

The Docker container alone won't be enough to get SAM working though. There are also some Docker networking and file system intricacies we need to work around, we will use Docker Compose to make this easier to manage.

[https://github.com/chrishart0/containerized-aws-sam/blob/master/docker-compose.yaml](https://github.com/chrishart0/containerized-aws-sam/blob/master/docker-compose.yaml)

```
version: '3.6'
services:
  sam:
    build: .
    environment:
      - TZ=Etc/GMT
      - SAM_CLI_TELEMETRY=false
      - DOCKER_HOST=unix:///var/run/docker.sock
    volumes:
      - $PWD:$PWD
      - /var/run/docker.sock:/var/run/docker.sock #Needed so a docker container can be run from inside a docker container
      - ~/.aws/:/root/.aws:ro
    working_dir: $PWD
    command: ['/bin/bash', "./entrypoint.sh"]
    ports:
      - "3000:3000"
    networks:
      - "backend"

networks:
  backend:
    name: aws_backend
    driver: bridge
```

### entrypoint.sh

This is the command which will run when the container starts up, starting up your lambda functions.

[https://github.com/chrishart0/containerized-aws-sam/blob/master/entrypoint.sh](https://github.com/chrishart0/containerized-aws-sam/blob/master/entrypoint.sh)

```
sam local start-api -p 3000 --host 0.0.0.0 --docker-network aws_backend
```

### Start up the container

Just run _`docker-compose up`_ and you'll have a Lambda function running locally, simple as that!

```
docker-compose up
```

![Docker and AWS SAM in VS Code](/images/docker-sam-demo.gif)

## More Info About SAM

[Checkout my other articles about AWS SAM](https://arcadian.cloud/tag/sam/)

## Gotchas and Tips

### AWS SAM not Auto Detecting Changes in Python

Warning! If you run _sam build_ you need to clear the build and cache. Without a build, SAM will automatically pick up every code change you make, at least in Python. If you have a build SAM will look to that and you must rebuild each time you make a change.

### SAM pegged to an old version

This will cause some issues but for now is the only way to make it work.
