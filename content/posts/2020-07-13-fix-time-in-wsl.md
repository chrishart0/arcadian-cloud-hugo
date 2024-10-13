---
title: "WSL Wrong Time: How to Fix incorrect Time in WSL"
date: "2020-07-13"
categories: 
  - "linux"
tags: 
  - "bug"
  - "time"
  - "windows-standard-linux"
  - "wsl"
cover:
  Image: "/images/tuxWithWin.jpg"
author: "chart"
url: "/linux/2020/07/13/fix-time-in-wsl/"
---

While working with AWS SAM I ran into an error caused by the local system time of WSL being wrong.

![wsl wrong time](/images/timeIssues.png)

In the above image notice that the date command outputs the hour being 4. 
  
A call to worldtimeapi.org for my timezone shows the time being 12. Something is wrong.  
World time API call formatted with JQ: `curl -s "http://worldtimeapi.org/api/ip" | jq '.["datetime"]'`

I attempted to re-configure WSL Ubuntu's time with `sudo dpkg-reconfigure tzdata`  
  
That didn't do the trick, it responded with below when the hour should be 12 PM:

```
Current default time zone: 'America/New_York'
Local time is now:      Mon Jul 13 16:21:15 EDT 2020.
Universal Time is now:  Mon Jul 13 20:21:15 UTC 2020.
```

## The fix  

It looks like there is [a bug with WSL time handling](https://github.com/microsoft/WSL/issues/4149).  
  
To work around this I installed [ntpdate](https://linux.die.net/man/8/ntpdate) and configured it then added the call to ntpdate to my .bashrc so it runs each time I login to WSL.

```
#Copy and paste this script into your terminal to permanently fix the date bring incorrect
sudo apt install ntpdate

#Only 
ntpdate -sb time.nist.gov

printf "\n#Run ntpdate to fix time bug in WSL \nntpdate -sb time.nist.gov\n" >> ~/.bashrc

#Verify the date is now correct
date
```

### Update: Nov 3rd, 2020

This fix stopped working for after having working for several months. Here is my new fix curtsy of [this Ask Ubuntu post](https://askubuntu.com/questions/81293/what-is-the-command-to-update-time-and-date-from-internet).

```
#Update your time by hand
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"

#Date to check the time is as expected
date

#Add time fix command to .bashrc so it runs every time you login
printf '\nsudo date -s \"$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d" " -f5-8)Z\"
\n' >> ~/.bashrc
```
