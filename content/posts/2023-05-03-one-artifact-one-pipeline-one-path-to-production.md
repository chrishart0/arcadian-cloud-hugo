---
title: "One Artifact, One Pipeline, One Path to Production"
date: "2023-05-03"
categories: 
  - "delivery"
tags: 
  - "thought-leadership"
author: "chart"
url: "/delivery/2023/05/03/one-artifact-one-pipeline-one-path-to-production/"
---

_One artifact, one pipeline, one path to production._ Remember this phrase and you now know the secret to building good CI/CD pipelines. You are now mere minutes away from being a significantly better developer, DevOps engineer, SRE, or really anyone who works in software, just read on.

One artifact, one pipeline, one path to production is a simple guideline to building good software delivery mechanisms. It's about not over complicating the process, reducing the cognitive load, keeping the team moving fast, and making sure the deployment process actually works consistently.

## One Artifact

The most important of these three principles is one artifact. You will get immense benefits from following the pattern of one artifact = 1 service.

### What does this apply to?

Before we get any further, these principles refer to a given service or micro service. I am not saying your whole company should be deploying everything through one pipeline, what I am saying is that each independently releasable service needs to be deployed in this manner, but that might mean many different things. How your individual services should be decoupled has much written about it elsewhere.

For this article we will use the example of a small, single page web app with a backend that counts page views, deployed to AWS via CloudFormation as the IaC. All of this together will be treated as one service. It would be perfectly viable, in some cases, to consider the UI a separate micro-service, which consumes the API for the view counter as another micro-service. So long as both of these pieces are designed to be decoupled and independently releasable, this is fine.

### What's an artifact you ask?

An artifact is a collection of resources which are used to deploy an application. If you have a good understanding of what an artifact is, skip the artifact example

#### Artifact example, understanding what an artifact is:

If your application is a single web page with an API that tracks page views, deploy to AWS, then you likely have several artifacts:

- Your webpage (HTML, CSS, and JS) is probably one artifact, let's say you deploy it to an AWS S3 bucket.
    - The artifact: if you are deploying your code via a script which copies the raw files to S3, then the artifact is whatever git commit you have checked out. Potentially you are zipping up the HTML, CSS, and JS and handing that off to a deployment pipeline. If so, your zip file is your artifact.

- Another artifact is your python code which iterates the view count by 1, stores the new value in the database, and returns the view count
    - The artifact: let's say you have Jenkins or GitHub actions hooked up to your repo, kicking off on each commit. Your build pipeline produces a zip file with the Python code and any dependencies it needs packages together in a zip, this zip is your artifact.

- Your final artifact might be your Infrastructure as Code which deploys the S3 Bucket, Lambda function or container with your python code, database, and the other needed infrastructure which make up your application. For your IaC, lets say you run the aws cli command to deploy a CloudFormation template. Or maybe you have an AWS CodePipeline which looks at your git repo which holds only your IaC.
    - The artifact: In both cases, you are deploying the IaC right from the git repo, so the commit ID of the git repo is the artifact. If you are deploying via the AWS CLI CloudFormation command, then whatever commit you have checked out if your artifact. If you have an AWS CodePipeline running on every git commit to deploy the CloudFormation stack, still the specific git commit is the artifact

It wouldn't be unusual for a team to have 3 different artifacts for all of these, which get version in separate repos, built with separate build processes, then deployed independently. The artifact is whatever it is you are deploying.

Another way to think about it is to ask yourself, "What do I deploy?" Whatever it is you are deploying, this is the artifact. Be it a specific commit of a repo, a build such as a .jar, or a zip file with code in it.

### Why one artifact?

#### Issues with multiple artifact

In our example, we have 3 artifacts. One for the web page, one for the backend application code, and one for the infrastructure. This means every deploy of our application requires 3 independently versioned artifacts to be managed and integrated. This doesn't scale.

When following the pattern of splitting artifacts like this, you will quickly end up with integration nightmares and several hour long deploys. Trying to get different artifact versions lined up the same way across different environments will lead to inevitable errors and make roll-backs impossible, I've seen it many times.

#### One single artifact solves these issues

All aspects of a given service are versioned together, the integration is done in the build process, there is no need to integrate during every single deploy.

### Now build your one artifact

So you have your one artifact. How did you produce it? For our example of a simple webpage, with 1 python lambda function, and a database. We could actually get away with no build pipeline, a commit of the git repo has everything we need since nothing there requires a build. If that wasn't the case, lets say you were using react for the UI, which requires a build, and you are putting your python code into a docker container, which will require a docker build.

For the second case, you'd use a tool like Jenkins or GitHub actions to build your UI. Then you'd need to build your docker container. That sure sounds like several artifacts. Nope. Our IaC takes a specific docker container reference from ECR, update the IaC to point to that, then bundle the UI and the IaC up into one zip, alternatively, just bundle a link to a zip of the UI stored in S3, artifactory, or somewhere else up with your IaC.

Now we have our one artifact, ready to deploy, with the specific versions of all the various pieces of our service. We can deploy this one artifact to any environment we wish, as many times as we wish. It will always be versioned the same.

## One Pipeline

Now that your service has one artifact, lets move on to one pipeline.

### Deploy your one artifact with one (deployment)pipeline

Naturally, one artifact leads us to one deployment pipeline. No longer do we have one artifact for every single function which makes up an endpoint, one artifact for the databases, and one artifact for the API gateway which the lambda functions or containers plug into. Since all of these things are in one place, lets deploy them via the same pipeline.

The rule of thumb is, design deployment pipeline so your service can be brought online, in working fashion, in one deploy. You should not have one pipeline for your databases, one pipeline for the each container/lambda, then another pipeline for the API Gateway. This creates integration nightmares. You need one pipeline which deploys all of components of your service.

This is about keeping the process simple, consistent, and strait forward. Every aspect of our service is needed to deliver the value, we make one artifact containing all of it, then deploy it together.

### Splitting the deployment

Once you've achieved one deployment pipeline, it is perfectly viable to split the actual deployment process. One pipeline may run several independent deployments. The right way to split this is by resource life cycle. Database IaC is likely on a much longer life cycle from the code for a lambda function. So you may deploy these in two different deployment steps, just make sure they come from the same artifact, in the same pipeline.

## One Path to Production

Bring the pain forward. Multiple paths to prod often are designed to hide the pain of a bad process.

### NO Hotfixes

Hotfixes? Don't need em'. Our process works, why would we? Just fix the bug and deploy it.

Hotfixes are a good metric actually, if your team has them, or someone has been asking about them, then you know your process needs to be fixed. Bring the pain forward. If it takes 3 weeks to deploy 1 new line of code into production, you need to fix that, not create a hack around the process.
