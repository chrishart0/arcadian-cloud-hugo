---
title: "1 Step Fix: \"An Error Has Occurred Access Denied.\" in Brave Browser Chrome Extension Store"
date: "2022-05-12"
categories: 
  - "support"
tags: 
  - "brave"
coverImage: "access-denied.png"
author: "chart"
url: "/support/2022/05/12/an-error-has-occurred-access-denied-brave-browser-extension-store/"
---

## "An Error Has Occurred Access Denied." Appears in the Chrome Web Store

When trying to install an extension to Brave Browser from the Chrome Web Store recently I ran into the above error. First I click the button "Add to Brave" and then on the pop up "Add Extension." After this a .crx file fails to download with the error "Failed - Forbidden." I found several sites online talking about this but none of their proposed solutions worked.

![An Error Has Occurred Access Denied Brave Browser Extension - Failed Forbidden download](/images/access-denied-2.png)

## The Fix

My issue was an out of date browser. I have been using the brave-browser package available from apt on Ubuntu by default. This issue had been fixed a while back, simply getting the newest version of Brave Browser corrected it.

Follow the [install instructions on Brave's site](https://brave.com/download/) to install the most up to date version for your OS.

### Update on Ubuntu Instructions

Just add the official Brave repository to apt and run the update. I made one change from the official install instructions so only Brave gets updated.

```
sudo apt install apt-transport-https curl

sudo curl -fsSLo /usr/share/keyrings/brave-browser-archive-keyring.gpg https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main"|sudo tee /etc/apt/sources.list.d/brave-browser-release.list

sudo apt update

# Just upgrade brave, not anything else
sudo apt --only-upgrade install brave-browser
```

## It's That Simple!

After the update I could install extensions with no issue.

## Still Need help?

Leave a comment and I'll get back as quick as I can.
