---
title: "Fix error sam deploy unable to locate credentials using AWS SAM with AWS CLI v2 SSO"
date: "2020-10-07"
categories: 
  - "aws"
tags: 
  - "aws"
  - "cli"
  - "linux"
  - "sam"
coverImage: "AM_AWSSSOUseCases_120717a.png"
author: "chart"
url: "/aws/2020/10/07/fix-error-using-aws-sam-with-aws-cli-v2-sso/"
---

I got this error _sam deploy unable to locate credentials_ when trying to use AWS SAM with AWS CLIv2 SSO.

```
Error: Unable to upload artifact myAPIName referenced by CodeUri parameter of myAPIName resource.
Unable to locate credentials
```

In summary, the fix is to update SAM.

## The issue: sam deploy unable to locate credentials

First, I signed into AWS SSO with the profile I wanted to use.

```
$ aws sso login --profile new-dev-sso
```

Then, I tried to run `sam deploy`. This failed with the following error:

```
Error: Unable to upload artifact myAPIName referenced by CodeUri parameter of myAPIName resource.
Unable to locate credentials
```

![](/images/samnotusingsso-1024x270.png)

This [GitHub issue](https://github.com/aws/aws-sam-cli/issues/1843) shows that this may be a glitch with AWS SSO fixed in a newer SAM version.

Check your SAM version against the current version [found here under releases](https://github.com/aws/serverless-application-model/releases).

```
$ sam --version
SAM CLI, version 0.53.0
```

The current version is over 1.0.0 at the time of writing, so I am way out of date.

## The Fix

Update SAM CLI and check the new version

### Linux:

```
$ pip3 install --user --upgrade aws-sam-cli
Successfully installed aws-lambda-builders-1.1.0 aws-sam-cli-1.4.0 aws-sam-translator-1.27.0 boto3-1.14.63 botocore-1.17.63

$ sam --version
SAM CLI, version 1.4.0
```

### Windows:

If you run SAM on windows, please leave a comment with the update process for you so I can post it here.
