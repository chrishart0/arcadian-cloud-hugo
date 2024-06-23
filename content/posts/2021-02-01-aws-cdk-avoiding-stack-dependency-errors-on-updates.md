---
title: "AWS CDK: Avoiding CDK stack dependency errors on updates"
date: "2021-02-01"
categories: 
  - "aws"
tags: 
  - "aws"
  - "cdk"
  - "iac"
coverImage: "cdk2.png"
author: "chart"
url: "/aws/2021/02/01/aws-cdk-avoiding-stack-dependency-errors-on-updates/"
---

Have you encountered an error such as the one below?

```
Export my-stack-1:ExportsOutputRefMyResource6724B74E921810D3 cannot be deleted as it is in use by my-stack-2
```

This is because:

- A resource created by my-stack-1.py has created an export
- my-stack-2.py is using this export in one of it's resources
- You are attempting to change or remove the resource in my-stack-1.py, altering the export

**How can this error be worked around?**

One method would be to tear down my-stack-2, update my-stack-1, then re-deploy my-stack-2. This would be slow and is not a good solution.

A better solution is provided in [this GitHub issue](https://github.com/aws/aws-cdk/issues/3414).

```
#Deploy only my-stack-2, removing updating or removing the dependency
cdk deploy -e my-stack-2
#Deploy all stacks, creating the new output and updating my-stack-2 again with the correct output
```
