---
title: "ModuleNotFoundError: No module named 'distutils.cmd' [Fix ✔️]"
date: "2022-10-11"
categories: 
  - "sam"
tags: 
  - "aws"
  - "linux"
  - "sam"
author: "chart"
url: "/aws/sam/2022/10/11/fix-%e2%9c%94%ef%b8%8f-modulenotfounderror-no-module-named-distutils-cmd/"
---

How to resolve _ModuleNotFoundError: No module named 'distutils.cmd'_

1. **Check which version of python you are using**
    
    Run python --version
    
2. **Check if pip can find dist tools for you version of python**
    
    Python 3.9 example: `python3.9 -m pip --version`
    
3. **Install dist tools for your version of python**
    
    Example for python 3.9 on Ubuntu/Debian: _sudo apt install python3.9-distutils_
    

![ModuleNotFoundError: No module named 'distutils.cmd'](/images/distUtilsNotFound-1024x57.webp)

I got this error today with AWS SAM: _ModuleNotFoundError: No module named 'distutils.cmd'_, here is how I fixed it.

```
sudo apt-get install python3.9-distutils
```

Keep reading below for more details.

## Quick Fix for ModuleNotFoundError: No module named 'distutils.cmd'

The issue for me was pip, which comes with distutils, wasn't installed for python 3.9, which is what AWS SAM was trying to use. The fix is to make sure distutils is installed for python 3.9.

You can verify this is your issues by checking for pip with the specific Python version you are using:

```
python3.9 -m pip --version 
```

Running the above command threw the same error ModuleNotFoundError: No module named 'distutils.cmd'

### Ubuntu / Debian fix:

Install distutils for python3.9

```
sudo apt-get install python3.9-distutils
```

### Root Cause Details

The root cause of the error ModuleNotFoundError: No module named 'distutils.cmd' typically arises from a missing or improperly installed 'distutils' package in your Python environment. This package is essential for various tasks, such as building and distributing Python modules. This comprehensive guide hopefully helped you to fix the issue. If it didn't please leave a comment with your details and I'll see what I can do.

## Sources

[https://github.com/pypa/get-pip/issues/124](https://github.com/pypa/get-pip/issues/124)
