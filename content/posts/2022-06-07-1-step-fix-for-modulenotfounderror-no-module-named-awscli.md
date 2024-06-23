---
title: "☑️1 Step Fix: ModuleNotFoundError: No module named 'awscli'"
date: "2022-06-07"
categories: 
  - "aws"
tags: 
  - "aws"
  - "cli"
coverImage: "ModuleNotFoundError.webp"
author: "chart"
url: "/aws/2022/06/07/1-step-fix-for-modulenotfounderror-no-module-named-awscli/"
---

**How to Fix: ModuleNotFoundError: No module named 'awscli'?**

You must install or reinstall the awscli pip module for python.

Quick Fix for the _`[ModuleNotFoundError: No module named 'awscli'](modulenotfounderror: No module named 'awscli')`error_

1. **Reinstall/Update the AWS cli**
    
    python3 -m pip install `--upgrade --force-reinstall` awscli
    
2. **Test the AWS CLI now works**
    
    aws --version
    

## ModuleNotFoundError: No module named 'awscli' error

Here is the full text of the error I got:

```
Traceback (most recent call last):
  File "/home/chart/.local/bin/aws", line 19, in <module>
    import awscli.clidriver
ModuleNotFoundError: No module named 'awscli'
```

This occurred when I was trying to run any AWS CLI command. It had previously been working, so at some point an update must have broken it.

## The Fix for ModuleNotFoundError: No module named 'awscli'

Simply run the command in your CLI. This command should work on Bash or ZSH for Linux/Mac and also in PowerShell for Windows.

```
python3 -m pip install --upgrade --force-reinstall  awscli
```

### Did that not work?

Try these commands:

```
python3 -m pip uninstall awscli
python3 -m pip install awscli
```

## More fixes

- Check python's list of available modules for awscli
    - Open the python REPL by running \`python3 `and then run the following command` \`help('modules')\`
    
    - Check the listed modules for awscli
    
    - If the module does not exist, but the install commands are passing, then figure out where pip install is putting the module and make sure that path is also getting picked up

- If those don't work check [the official docs](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) for some more advice on installing the AWS CLI.

#### Install PIP

https://www.youtube.com/watch?v=c\_qNC1lL4qA

## What Causes The ModuleNotFoundError: No module named 'awscli' Error?

According to the [official Python docs in 5. The Import System](https://docs.python.org/3/reference/import.html#the-import-system) _"When a module is first imported, Python searches for the module and if found, it creates a module object [1](https://docs.python.org/3/reference/import.html#fnmo), initializing it. If the named module cannot be found, a [`ModuleNotFoundError`](https://docs.python.org/3/library/exceptions.html#ModuleNotFoundError) is raised."_

Therefor, when the ModuleNotFoundError is raised for awscli, we know the issue is that some python script has tried to import the awscli module but it is missing. We know python is working and the $PATH contains python, since python was able to execute, assuming you are running the \`aws\` command, so the issue must be that where ever python is looking for the module it does not exist.

## See My Other AWS Posts

[https://arcadian.cloud/tag/aws/](https://arcadian.cloud/tag/aws/)
