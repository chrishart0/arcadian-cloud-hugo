---
title: "AWS Amplify Fix: A deployment is in progress"
date: "2023-02-03"
categories: 
  - "aws"
tags: 
  - "amplify"
  - "aws"
author: "chart"
url: "/aws/2023/02/03/aws-amplify-fix-a-deployment-is-in-progress/"
---

In this [Arcadian.cloud](https://arcadian.cloud/hardware/2022/12/19/never-get-caught-without-power-again-the-ultimate-guide-to-portable-laptop-chargers/) help article I'll show you in this article how to quickly fix the error in AWS Amplify `A deployment is in progress`. Here's the summary. There are two reasons this may occur. 1: something went wrong while running an `amplify push`, your terminal disconnected and the deployment-state.json file got left in the wrong state. The deployment is actually still in progress, go check the Console to see the status in CloudFormation.

![A deployment is in progress.](/images/image.png)

### The full error:

You get this error from running some variant of `amplify push`, `amplify rebuild`, etc.

```
🛑 A deployment is in progress.
🛑 If the prior rollback was aborted, run:
🛑 "amplify push --iterative-rollback" to rollback the prior deployment
🛑 "amplify push --force" to re-deploy
```

Running `amplify rebuild` gave this error

```
🛑 Cannot iteratively rollback as the following step does not contain a previousMetaKey: {"status":"DEPLOYING"}
```

None of the suggested commands in the error actually worked.

## First, verify your deployment actually isn't still in progress

Open up the amplify console by running `amplify console` and selecting _AWS console_ as shown below.

![amplify console command](/images/open-aws-console.webp)

Verify that the backend deployment is in a completed state, not still in progress.

![Validate a deployment is in progress error isn't acurate.](/images/check-cf-console.webp)

Now that you've ruled out _A deployment is in progress_, lets fix the issue.

## Why does this happen?

The issue is amplify creates a file called [deployment-state.json](https://github.com/aws-amplify/amplify-cli/blob/master/packages/amplify-provider-awscloudformation/src/iterative-deployment/deployment-state-manager.ts#L15) which maintains the state of the deployment in the deployment S3 bucket. This file needs to be deleted so that next time you run amplify push it gets closed.

## Fix the error: _A deployment is in progress._

### 1: Locate the deployment bucket

Find the name of the deployment bucket. You'll find it in the file _amplify/team-provider-info.json_ as the parameter _DeploymentBucketName_.

### 2: Navigate to the deployment bucket

Open the S3 console([https://s3.console.aws.amazon.com/s3/buckets](https://s3.console.aws.amazon.com/s3/buckets)) and navigate to the deployment bucket you found in the previous step.

### 3: Delete the bad deployment-state.json file

Locate and delete the deployment-state.json file.

![](/images/find-deploy-state-file.webp)

### 4: Run a new deploy, successfully.

Rerun your amplify deploy command and it should be successful.

<figure>

![amplify error A deployment is in progress is fixed](/images/success.webp)

<figcaption>

My deploy kicked off after following the above steps

</figcaption>

</figure>

## Did this article help you?

If so please leave a comment and please share it on any other threads you've seen about this same issue online to help others out, I would appreciate it and so would the next troubleshooter.
