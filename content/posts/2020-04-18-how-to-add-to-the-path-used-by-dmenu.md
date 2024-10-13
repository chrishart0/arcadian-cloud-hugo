---
title: "dmenu Path: How to add to the $PATH used by dmenu"
date: "2020-04-18"
categories: 
  - "linux-desktop"
tags: 
  - "path"
  - "arch"
  - "bash"
  - "desktop-environment"
  - "dmenu"
  - "linux"
cover:
  Image: "/images/dmenu-image.png"
author: "chart"
url: "/linux/linux-desktop/2020/04/17/how-to-add-to-the-path-used-by-dmenu/"
---

How to add the the dmenu Path? This article explains how to add to the $PATH variable seen by [dmenu](https://wiki.archlinux.org/index.php/Dmenu).

This guide is for Manjaro/Arch Linux. I use Xorg and i3 so mileage may vary. This was testing with two desktop managers, simpledm and SDDM.

## The Issue: adding to the dmenu path

Dmenu does not display scripts from a new location added to the $PATH.

I added a new location to my $PATH via my .bashrc. I could call these scripts perfectly fine from the terminal but when using dmenu these scripts couldn't be called.

## Troubleshooting Steps

First try clearing the dmenu cache. If the session hasn’t been restarted or re-logged this may be needed.

```
rm ~/.cache/dmenu_run
rm ~/.dmenu_cache
```

If that didn't work, check exactly what dmenu sees in $PATH. Run the following command inside dmenu:

```
 echo $PATH > /tmp/path 
```

Then from a terminal run:

```
cat /tmp/path
```

If the new path is not in the output then that is the issue. Dmenu is not pickup up the addition to the path made in the ~/.bashrc or wherever this new item in the $PATH has been defined. For more details on this reference this [stack overflow thread](https://unix.stackexchange.com/questions/170493/login-non-login-and-interactive-non-interactive-shells).

## The Fix

Add the new $PATH location to /_etc/profile_

Example _/etc/profile_ with 2 new locations added to the $PATH

```
# /etc/profile

# Append our default paths
appendpath () {
    case ":$PATH:" in
        *:"$1":*)
            ;;
        *)
            PATH="${PATH:+$PATH:}$1"
    esac
}

appendpath '/usr/local/sbin'
appendpath '/usr/local/bin'
appendpath '/usr/bin'
appendpath '/home/chart/GitHubPersonal/utilities/bin'
appendpath '/home/chart/bin'
```

Next, either relog or reboot.  
Finally, clear the dmenu cahce again with: _rm ~/.dmenu\_cache; rm ~/.cache/dmenu\_run_

A non comprehensive list of locations where the $PATH maybe be set which I tested

- ~/.bashrc
    - Will not get picked up by dmenu

- ~/.bash\_profile
    - Will not get picked up by dmenu

- /etc/profile
    - _Will get picked up by dmenu_

- /usr/lib/sddm/sddm.conf.d/default.conf
    - Only when using sddm desktop manager
    
    - _Will get picked up by dmenu_

## Useful links

[https://wiki.archlinux.org/index.php/Dmenu#Missing\_menu\_entries](https://wiki.archlinux.org/index.php/Dmenu#Missing_menu_entries)  
[https://bbs.archlinux.org/viewtopic.php?id=193728](https://bbs.archlinux.org/viewtopic.php?id=193728)  
[https://unix.stackexchange.com/questions/170493/login-non-login-and-interactive-non-interactive-shell](https://unix.stackexchange.com/questions/170493/login-non-login-and-interactive-non-interactive-shells)
