---
title: "Mac Tricks and Tips"
date: "2021-03-05"
categories: 
  - "mac"
coverImage: "apple-logo.png"
author: "chart"
url: "/mac/2021/03/05/mac-tricks-and-tips/"
---

I recently got a MacBook and am going to log all the tips and ticks I learn here while getting it just how I want it. This is essential a setup guide for myself if I need to setup another mac from scratch.

Note: The mod key is what Mac calls 'command'

## Remap keys on specific external keyboard (fix Command/Mod and Ctrl/Option order)

- System Preferences > Keyboard > Modifier Keys...

- Select Keyboard: Choose your external keyboard

I remapped:  
\- Command -> Option  
\- Option -> Command  
This makes the mac shortcuts a bit more fluid, although it would really be nice if they just used regular shortcuts you find on any Linux distro.

## Map copy, past, cut to CTRL instead of Mod key

System Preferences > Keyboard > Shortcuts > App Shortcuts

![](/images/shortcuts-mapped.png)

Word of warning, I found some apps that didn't like this. I still found myself having to use Mod+C and Mod+D

## Shortcuts for positioning windows

It blows my mind that there are not good shortcuts for positioning windows around your screens. I am used to the level on control you get with GNOME or I3, but even just copying Windows would be sufficient.

This solution has 9k+ stars on GitHub at the time of writing and looks pretty good: [https://github.com/rxhanson/Rectangle](https://github.com/rxhanson/Rectangle)

## Shortcut to open the terminal

Not sure why this isn't provided by default but thankfully there was a stack overflow post for this.

First, I installed iTerm2, then follow the post below.

[https://stackoverflow.com/questions/35954184/is-there-a-keyboard-shortcut-hotkey-to-open-terminal-in-macos](https://apple.stackexchange.com/questions/120298/can-terminal-be-launched-via-keyboard-shortcut-ctrlaltt)  
  
I used [](https://stackoverflow.com/users/77567/rob-mayoff)[UltraMaster](https://apple.stackexchange.com/users/329018/ultramaster)s answer.

In summary:

- Open Automator > new quick action > launch application > other... > iTerm > save as

- Open System Preferences > Keyboard > Shortcuts > Services > General (Scroll to bottom) > Map a shortcut

## Using a WB19 Thunderbolt dock

> _Apple doesn't take to kindly to you trying to use non-apple proprietary hardware partner..._
> 
> Me

### Using dual external monitors

At first, I couldn't get my dock to support 2 screens, then I found these docs from Dell: [https://www.dell.com/support/kbdoc/en-us/000124312/dell-thunderbolt-dock-wd19tb-and-apple-usb-c-hosts](https://www.dell.com/support/kbdoc/en-us/000124312/dell-thunderbolt-dock-wd19tb-and-apple-usb-c-hosts)

In order to get 2 screens working through your dock you must run 1 though the regular video port and another must get converted to USB-C. I bought an HDMI to USB-C cable off Amazon.

<figure>

![](/images/ka02R000000hzwSQAQ_en_US_1.jpeg)

<figcaption>

Image courtesy of Dell

</figcaption>

</figure>

Thank you Dell for the nice docs explaining the limitations of the mac and why you can't get 2 monitors to work without buying something extra.

### Randomly losing all my USB peripherals from the dock

Not sure what is up with this. I just unplug the dock and plug it back in. Happens twice to no times a day.
