---
title: "Install AWS SAM CLI on Linux without Homebew"
date: "2020-07-17"
categories: 
  - "devops"
tags: 
  - "aws"
  - "cli"
  - "linux"
  - "sam"
coverImage: "SAMCLIPic.png"
author: "chart"
url: "/devops/2020/07/16/install-aws-sam-cli-on-linux-without-homebew/"
---

The official AWS installation docs for Linux tell you to install Homebew so that you can install the AWS SAM CLI. This is just plain dumb. You should not need to install a new package manager just to install one tool. Below are the steps to follow so that you do not have to.

## Prerequisites

- Ensure [Python 3](https://docs.python-guide.org/starting/install3/linux/) is install

- Ensure [PIP 3](https://www.tecmint.com/install-pip-in-linux/) is installed

- Ensure [AWS CLI v2](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-linux.html) is installed and configured

## Installation

```
pip3 install --user aws-sam-cli
```

**All done!** Yep, it is really that simple. If you already had all the prereqs installed like I did it should only take 20 seconds.

### If your terminal cannot find the `sam` command also run this

```
echo ‘export PATH=~/.local/bin:$PATH’ >> ~/.bashrc
```

## Updates

When it comes time to update SAM, run the following:

```
pip3 install --user --upgrade aws-sam-cli
```

This could be turned into a cron job for auto updates or if someone knows a better way for auto updating python3 packages please leave a comment.

## Sources

User **[siwyd](https://github.com/siwyd)** in this GitHub issue: [https://github.com/awslabs/aws-sam-cli/issues/1424](https://github.com/awslabs/aws-sam-cli/issues/1424)
