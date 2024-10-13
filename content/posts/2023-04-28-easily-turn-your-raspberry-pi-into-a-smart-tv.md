---
title: "Easily Turn Your Raspberry Pi into a Smart TV"
date: "2023-04-28"
categories: 
  - "pi"
cover:
  Image: "/images/kde-plasma-bigscreen.jpg"
author: "chart"
url: "/pi/2023/04/27/easily-turn-your-raspberry-pi-into-a-smart-tv/"
---

Have a Raspberry Pi lying around and want to turn an old monitor or dumb TV into a smart TV? Tired of slow and laggy smart TV dongles and want a better, more functional experience? This is exactly why I decided to turn my Raspberry Pi into a smart TV. In this article I'll go over the best Raspberry Pi Smart TV configurations and guide you through setup.

**Can you use a Raspberry Pi to make a smart TV?**

Certainly you can, there are several good options for converting your Raspberry PI into a smart TV and in this article I'll go over them.

Simple steps to converting your Raspberry Pi into a smart TV

1. **Pick the OS**
    
    Select the OS you'd like to use. In this article we will use KDE Big Screen
    
2. **Flash the OS, I use Lineage OS, to your MIcro SD Card**
    
    Use Raspberry Pi Imager to install the OS to your micro SD card. I pick lineage OS for several reasons, mostly ease of use and flexibility.
    
3. **Boot up the OS and go through initial configuration, Lineage OS or any of the other options will need to be configured to finished initial setup.**
    
    Each of the options for a Raspberry Pi smart TV will require some initial setup. Mostly these steps are about the same, setting up a name, configuring WIFI, setting up time, and maybe more.
    
4. **Install the apps you will need for your smart TV use case**
    
    You will need to pick and install the software you want. Do you want Amazon Prime Video and Netflix? Plex and Bandcamp? Find the apps you need and install them.
    

## Pick the Right OS

**What are the best software for making a Raspberry PI into a smart TV?**

There are 3 main options. Kodi, KDE Plasma Big Screen, and Linage OS. Each have their upsides and downsides. For myself, I've gone with Lineage OS, which is a de-googled version of Android. After having tested Kodi and Plasma T I decided those weren't what I was looking for.

### Lineage OS for a Raspberry Pi Smart TV

![Lineage OS on a Raspberry 4 for a smart TV](/images/lineageos-settings-1024x576.webp)

The konstakang build of LineageOS for Raspberry Pi smart TVs is a very popular option for Raspberry Pi smart TVs. It is highly recommended in several Reddit threads ([1](https://www.reddit.com/r/degoogle/comments/w5pa7d/android_tv_risks_and_alternatives_raspberry_pi/)) and other blog posts.

[https://konstakang.com/devices/rpi4/LineageOS20-ATV/](https://konstakang.com/devices/rpi4/LineageOS20-ATV/)

### KDE Plasma Big Screen

![](/images/kde-plasma-bigscreen-1024x576.jpg)

I failed at attempting to install and configure KDE Plasma Big Screen. This TV OS seems very promising, but it's new and might not be ready for prime time yet. If you can get it figured out please leave a review in the comments and I'll post it up here.

I love the idea of a full Linux distro running KDE with and easy to use TV interface, sadly, I ran out of time to continue working on getting this to work...

KDE Plasma Bigscreen is an official project put out by KDE, designed to be used on smart TVs.

[https://plasma-bigscreen.org/get/](https://plasma-bigscreen.org/get/)

### Kodi

[https://kodi.tv/](https://kodi.tv/)

![](/images/kodi-1024x576.png)

Kodi is a great option. Kodi is an open source media center software designed to be used with a remote. If you already have a huge library of movies, tv shows, music, etc, that you want to stream to your TV then Kodi is the right option for you. If you want to stream from YouTube or other streaming platforms, Kodi may not be the right choice, which is the case for me.

I tried out Kodi for a week. I found the interface to be a bit clunky and hard to use. My wife found it practically impossible. Things we actually wanted to do were not possible or hard to achieve and would break, like streaming YouTube or casting to the TV.

If you do want to install Kodi, I recommend using [https://osmc.tv/,](https://osmc.tv/) this isn't what I did, but it seems easiest. OSMC is a Linux distro built around Kodi.

## Installing LinageOS onto your Raspberry PI as a Smart TV

The KonstaKang build seems to have good reputation online as a LinageOS build designed for a Raspberry PI smart TV.

The official install instructions on Konsta kang's site can be a bit confusing, so here is a good step by step guide.

### Install Raspberry Pi Imager

First, go install the Raspberry Pi Imager, you will need this software for installing the OS onto your micro SD card your Pi uses.

[https://www.raspberrypi.com/software/](https://www.raspberrypi.com/software/)

### Download the image for your PI

Navigate to the Konsta Kang site ([https://konstakang.com/devices/rpi4/LineageOS20-ATV/](https://konstakang.com/devices/rpi4/LineageOS20-ATV/)) and download the latest **lineage-xx.x-xxxxxxxx-UNOFFICIAL-KonstaKANG-rpi4-atv.zip** available.

**NOTE: Make sure not to use the OTA version! If you read his install instructions, this may confuse you.**

### Put the LineageOS image onto your Pi's SD card with Raspberry Pi Imager

Connect your micro sd to your laptop and launch the PI Imager software. Select the rpi4-atv.zip file and point it at your micro sd card.

![](/images/android-tv-flash-1024x511.png)

### Boot up your Pi with LiniageOS

Slap your SD card back into your pi, connect it to your TV, and boot it up!

### Go through initial setup

Connect any Bluetooth devices then hit enter on your keyboard to continue.

Click through the settings and configure wifi.

### Useful tips for LineageOS

- F2 is the back button

### Now to install some apps

There are several ways to install apps on your new Android TV. The easiest is to install Google Apps, although you may not want to do this for privacy reasons. Your other optiona are to install apps directly or install the f-droid app store.

#### Install the Default Android TV Google Apps

Navigate to this page to find Mind The Gaps, make sure you download the one for Android TV for your right version.

[https://wiki.lineageos.org/gapps](https://wiki.lineageos.org/gapps)

![](/images/donwload-gapps-for-android-tv-1024x741.webp)

Put this file onto a flash drive and connect it to your pi. We must install the gapps via the TWRP (Recovery Mode) after a reboot.

- Enable advanced reboot: Settings -> Buttons -> Enable Advanced Reboot

- Boot to TWRP: Settings -> System -> Restart -> Recovery

- Click _Install_

- Click _Select Storage_

- Select your USB > click ok

- Click on Mind the gapps from the menu

- Swipe swipe to install

- Reboot and you will go back through the initial setup with Gapps this time

## Installing Plasma KDE onto your Raspberry PI

_**WARING:** I could not get KDE Plasma Bigscreen for Pi to work. I've documented the install steps as far as I could, but I when the Pi boots up I get stuck at the KDE login screen and cannot progress. It wasn't worth it to me to troubleshoot further and I decided to move on to Lineage OS._ _I tried several builds, which all had the same issue of getting stuck at the KDE login screen. If you find a work around please let me know._

### Install Raspberry Pi Imager

First, go install the Raspberry Pi Imager, you will need this software for installing the OS onto your micro SD card your Pi uses.

[https://www.raspberrypi.com/software/](https://www.raspberrypi.com/software/)

### Download the latest KDE Plasma Bigscreen for PI

Here is the KDE Plasma Bigscreen website: [https://plasma-bigscreen.org/](https://plasma-bigscreen.org/)

I will be using the Manjaro image with KDE Plasma. You can find it by going to their GitHub releases here [https://github.com/manjaro-arm/bigscreen/releases](https://github.com/manjaro-arm/bigscreen/releases), click into the latest build, and finding the img.xz file for the pi4 as shown in the screenshot below.

![](/images/image-1024x673.png)

### Use Raspberry Pi Imager to put KDE pigscreen onto your micro SD

Connect your micro sd to your laptop and launch the PI Imager software. Select the imag.xz file and point it at your micro sd card.

![](/images/image-1.png)

### Boot into KDE Plasma Bigscreen

Sadly, this is as far as I could get. The login screen would pull up, but I was unable to get any further and did not spend much time troubleshooting. Plasma Bigscreen seems to be in an early beta release, so I will try again in the future.

![KDE Plasma Bigscreen install](/images/kde-fail-1024x577.webp)
