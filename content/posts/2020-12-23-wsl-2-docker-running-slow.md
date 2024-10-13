---
title: "WSL 2 Docker running slow"
date: "2020-12-23"
categories: 
  - "docker-linux"
tags: 
  - "alpine"
  - "docker"
  - "wordpress"
  - "wsl"
  - "wsl2"
cover:
  Image: "/images/tuxWithWin.jpg"
author: "chart"
url: "/linux/docker-linux/2020/12/23/wsl-2-docker-running-slow/"
---

Yesterday I discovered my new Alpine Linux WordPress container had terrible latency when loading any pages.

Running `docker stats` I could see the issue was not related to resources.

A google search brought up [this issue on the WSL GitHub project](https://github.com/microsoft/WSL/issues/4387).

It turns out there are very low throughput speeds when accessing the Windows file system in a WSL container. This is exactly what I was doing, hosting my WordPress files on the Windows file system instead of in WSL's file system.

## The Resolution

There are two ways to resolve this:

1. User `COPY` in your docker file to copy your needed files into the container
2. Copy your files you are accessing into WSL's file system and point your container their instead
