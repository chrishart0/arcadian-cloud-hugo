---
title: "[✅Solved] release upgrade aborted: failed to downgrade packages"
date: "2022-08-16"
categories: 
  - "linux-desktop"
tags: 
  - "linux"
coverImage: "image-3.png"
author: "chart"
url: "/linux/linux-desktop/2022/08/16/%e2%9c%85solved-release-upgrade-aborted-failed-to-downgrade-packages/"
---

When trying to upgrade a Pop\_OS machine with _sudo pop-upgrade release upgrade_ I ran into the following error: _**Release upgrade status: release upgrade aborted: failed to downgrade packages**_

## Fix _release upgrade aborted: failed to downgrade packages_

In order to fix the failed to downgrade packages error you're going to have to upgrade manually by switching all the package sources to the newest version.

### Update apt sources

Update all the apt sources manually by editing `/etc/apt/sources.list.d/` and switching the versioned sources from `impish` to `jammy` (or whatever version you are upgrading to.)

```
sudo sed -i 's/impish/jammy/g' /etc/apt/sources.list.d/system.sources /etc/apt/sources.list.d/pop-os-release.sources /etc/apt/sources.list.d/pop-os-apps.sources
```

You may also need to run the below command to migrate from old-release if you see the error in the below

<figure>

![](/images/image-5-1024x59.png)

<figcaption>

Error you will see if your Pop\_OS / Ubuntu version is deprecated

</figcaption>

</figure>

```
sudo sed -i 's/old-releases/archive/g' /etc/apt/sources.list.d/system.sources /etc/apt/sources.list.d/pop-os-release.sources /etc/apt/sources.list.d/pop-os-apps.sources
```

Run the below commands to finish upgrading the OS.

```
sudo apt full-upgrade

pop-upgrade recovery upgrade from-release

pop-upgrade release upgrade


```

## Sources

[https://github.com/pop-os/pop/issues/2410#issuecomment-1128023435](https://github.com/pop-os/pop/issues/2410#issuecomment-1128023435)

[https://github.com/pop-os/pop/issues/2410#issuecomment-1137106843](https://github.com/pop-os/pop/issues/2410#issuecomment-1137106843)

[https://github.com/pop-os/pop/issues/2410#issuecomment-1193389700](https://github.com/pop-os/pop/issues/2410#issuecomment-1193389700)
