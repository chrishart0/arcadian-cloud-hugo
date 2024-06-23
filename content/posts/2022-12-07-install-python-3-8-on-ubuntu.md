---
title: "Install python 3.8 on Ubuntu"
date: "2022-12-07"
categories: 
  - "linux"
tags: 
  - "linux"
  - "python"
author: "chart"
url: "/linux/2022/12/07/install-python-3-8-on-ubuntu/"
---

Sometimes you need a particular version of python, in this guide we will go over how to install python 3.8 on Ubuntu or any other specific version of Python on Ununtu.

First install the prerequisites

```
sudo apt update
sudo apt install software-properties-common
```

Add the official source for python to your sources list

```
sudo add-apt-repository ppa:deadsnakes/ppa
```

Run the python 3.8 install command

```
sudo apt install python3.8
```

Verify python 3.8 is installed

```
python3.8 --version
```

![Install python 3.8 on Ubuntu](/images/image.png)
