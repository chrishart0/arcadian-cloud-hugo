---
title: "Ubuntu 20.04: Clementine error - \"Your gstreamer installation is missing a plugin\""
date: "2021-02-23"
categories: 
  - "linux-desktop"
coverImage: "linux-clementine-logo-300x216-1.png"
author: "chart"
url: "/linux/linux-desktop/2021/02/23/ubuntu-20-04-clementine-error-your-gstreamer-installation-is-missing-a-plugin/"
---

```
Your gstreamer installation is missing a plugin
Your gstreamer installation is missing a plugin
Your gstreamer installation is missing a plugin
```

I ran into the above error upon first installing Clementine. The fix was strait forward, just install with the below command.

```
$ sudo apt-get install gstreamer1.0-libav
```

Source - [xezpeleta's comment](https://askubuntu.com/questions/456072/clementine-wont-play-wma-with-your-gstreamer-installation-is-missing-a-plugi)
