---
title: "AWS SAM samcli.commands.exceptions.UserException: [WinError 145] The directory is not empty"
date: "2022-09-22"
categories: 
  - "sam"
tags: 
  - "aws"
  - "sam"
coverImage: "AWSSAM.webp"
author: "chart"
url: "/aws/sam/2022/09/22/aws-sam-samcli-commands-exceptions-userexception-winerror-145-the-directory-is-not-empty/"
---

## How to fix the AWS SAM error samcli.commands.exceptions.UserException: NodejsNpmBuilder:MoveDependencies - \[WinError 145\] The directory is not empty

```
samcli.commands.exceptions.UserException: NodejsNpmBuilder:MoveDependencies - [WinError 145] The directory is not empty: 'C:\\path\\to\\my\\lambda\\code\\.aws-sam\\auto-dependency-layer\\myLambdaFunction\\node_modeules\\module'
```

I've been seeing this error intermittently for some time. It comes intermittent.

## Fix for \[WinError 145\] The directory is not empty

Just delete the _.aws-sam_ directory whenever this error occurs or ignore it. If you run the command again it will complete successfully. I really don't know why it's happening or the long term fix, but it doesn't seem to be a big deal.

If anyone else finds a resolution or has any ideas please drop them in the comments and I'll put them into the article.

## Links to other people with the same issue

Here is what google brought up for this, none of these links had fixes at the time of writing but check them yourself, maybe someone has found something out since I wrote this article.

- [https://github.com/aws/aws-sam-cli/issues/2012](https://github.com/aws/aws-sam-cli/issues/2012)

- [https://github.com/aws/aws-toolkit-jetbrains/issues/1763](https://github.com/aws/aws-toolkit-jetbrains/issues/1763)
