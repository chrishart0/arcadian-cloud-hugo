---
title: "Optimizing Ubuntu Battery Life for 50%+ battery life gains🔋"
date: "2022-10-06"
categories: 
  - "linux"
tags: 
  - "battery-life"
  - "linux"
  - "ubuntu"
cover:
  Image: "/images/cover.webp"
author: "chart"
url: "/linux/2022/10/06/optimizing-ubuntu-battery-life/"
---

Linux battery life on laptops is known not to be great. Due to the need to test on so many types of hardware, it isn't feasible for distros to be optimized for it out of the box. Here are my notes on what I've done to optimize Ubuntu battery life on my laptop, while some of the install commands will be specific to Ubuntu / Debian derived distros, the tips will work on any distro.

How to get better battery life on Ubuntu and Other Linux distros overview. Read the full article for details.

1. **Install Powertop to get a baseline**
    
    Powertop is a useful command line tool that will give you a baseline to measure improvements
    
2. **On Ubuntu, switch from Max Performance to Power Saving**
    
    This is pretty obvious, just flip the switch and let Ubuntu do it's magic. Mostly this just caps your CPU, which will save a lot of battery life but will cause a noticeable slowdown
    
3. **Install and enable PowerTOP**
    
    PowerTOP is a very powerful and effective program to extend your battery life. PowerTop will make some common tweaks to reduce your wattage utilization.
    
4. **Install and configure TLP**
    
    Another great application for configuring common power saving configurations.
    
5. **Install and enable Slimbook Battery**
    
    Slimbook battery is a useful GUI program which I've had luck with greatly reducing my power utilization.
    
6. **Turn your screen brightness down**
    
    Another obvious tip, but it really does make a big difference.
    
7. **Ultimate way to get more battery life... buy an external battery**
    
    Okay okay, maybe this isn't what you were looking for, but when I'm traveling I throw a good quality external battery. I get two full charges, which is certainly the best way to improve your battery life other than plugging into a wall outlet.
    

## Getting a baseline for Ubuntu battery life

First thing to do is get a baseline measurement before doing any configuring. I've got a Thinkpad t480s with an intel core i7 8th gen.

To get a baseline measurement I've installed PowerTop

```
sudo apt install powertop
```

Run Powertop to start measuring your performance

```
sudo powertop
```

![Measure Ubuntu battery life with PowerTOP](/images/power-top-to-show-wattage.webp)

After a restart, with only my web browser and a terminal for `powertop` open to take notes, here are my measurements for each power setting:

- **Performance:** 23.0 W - 5.43 W

- **Balanced:** 18.1 W - 4.23 W

- **Power Saver:** 9.65 W - 4.39 W

After each setting change I let my laptop sit idle for a few minutes until the wattage evened out to get a low end reading. For the high end reading I opened VS Code, ran some containers, opened and closed multiple tabs in chrome, and opened GIMP. Something I would be doing in my typical usage.

### Notes:

The Ubuntu power settings use power-profiles-daemon, while doing many things the most effective control is capping CPU frequency. This will significantly reduce wattage usage but there are many more power savings which can be had.

I can notice significant performance degradation in Power Saver mode. The VS Code terminal actually has a noticeable delay in my typing.

Switching to balanced offered a very snappy and performant working environment. No complaints about this level of performance.

## External Battery

Okay, this is kind of cheating but the easiest thing you can do is order an external battery. I keep this one in my backpack and it gives me nearly 2 full charges.

[![](/images/511cW991gaL._AC_SX679_.jpg)](https://www.amazon.com/dp/B07SR337PP?psc=1&linkCode=ll1&tag=arcadiancloud-20&linkId=e95a7faf7192090af35bc849d4b24a80&language=en_US&ref_=as_li_ss_tl)

[Click here to see the Omni Mobile on Amazon.](https://www.amazon.com/dp/B07SR337PP?psc=1&linkCode=ll1&tag=arcadiancloud-20&linkId=e95a7faf7192090af35bc849d4b24a80&language=en_US&ref_=as_li_ss_tl) I get a commission if you purchase this. I really do recommend it.

<script type="text/javascript">amzn_assoc_tracking_id = "arcadiancloud-20"; amzn_assoc_ad_mode = "manual"; amzn_assoc_ad_type = "smart"; amzn_assoc_marketplace = "amazon"; amzn_assoc_region = "US"; amzn_assoc_design = "enhanced_links"; amzn_assoc_asins = "B07SR337PP"; amzn_assoc_placement = "adunit"; amzn_assoc_linkid = "9281bec6d399830cc18057df85cfb9de";</script>

<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>

### Click below to checkout my article discussing portable laptop power banks for more info.

https://arcadian.cloud/hardware/2022/12/19/never-get-caught-without-power-again-the-ultimate-guide-to-portable-laptop-chargers/

## Optimize Ubuntu battery life with PowerTOP

Tune power settings once with PowerTOP.

```
sudo systemctl start powertop.service
```

In the PowerTop console tab to the _Tunables_ tab and you should now see all options set to _good_.

![Increase Ubuntu battery life with PowerTOP](/images/powertop-tunables.webp)

Enable the PowerTOP service to startup on boot via SystemCTL and keep the power settings tuned.

```
systemctl enable powertop
```

More notes on PowerTOP from Red Hat: [https://access.redhat.com/documentation/en-us/red\_hat\_enterprise\_linux/8/html/monitoring\_and\_managing\_system\_status\_and\_performance/managing-power-consumption-with-powertop\_monitoring-and-managing-system-status-and-performance](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/monitoring_and_managing_system_status_and_performance/managing-power-consumption-with-powertop_monitoring-and-managing-system-status-and-performance)

## Optimize Ubuntu battery life with TLP

TLP is one of the most well known and best Linux tools for reducing energy consumption and increasing laptop battery life. TLP RDW (Radio Device Wizard) is especially critical for laptops. Once installed, TLP will mostly do the right thing out of the box without config needed, although we will go over configurations.

### Install TLP and TLP RDW

```
sudo apt install tlp tlp-rdw
```

### Configure TLP to save battery life

Configure TLP to start on boot and startup TLP

```
sudo systemctl enable tlp.service
sudo tlp start
```

Cofirm TLP is installed and running

```
sudo tlp-stat -s 
```

![Increase Ubuntu battery life with PowerTOP](/images/tlp-configuration.webp)

See the current TLP configuration

```
sudo tlp-stat -c
```

![Check LTP is configured so you can start optimizing linux battery life](/images/tlp-stats.webp)

Display battery information with TLP

```
sudo tlp-stat -b
```

![See ubuntu battery information with tlp-stat -b](/images/tlp-stats-b.png)

### Configuring TLP

TLP configs are probably good for you out of the box, but we can get a lot better with a few tweaks. Without any more tweaks I saw a minor difference in idle wattage. The extra configs below made a big difference.

#### Via CLI

Checkout this link for more info on configuring TLP from the CLI

[https://linrunner.de/tlp/settings/introduction.html](https://linrunner.de/tlp/settings/introduction.html)

Edit the TLP config which is at `/etc/tlp.conf`. Consider adding the following configurations

```
ENERGY_PERF_POLICY_ON_BAT=power
CPU_HWP_ON_BAT=power
PCIE_ASPM_ON_BAT=powersupersave
```

Idling with only a terminal open running powertop, with Slimbook battery and the Gnome power settings all set to their power saving modes, I hit 3.15 W with these configs.

![Battery life on ubuntu significant improvement after changes shown by TLP](/images/powertop-optimized.webp)

#### Configure TLP via GUI

In the next section we will use Slimbook Battery, this is another GUI tool which will configure TLP for you

Slimbook Battery is a good GUI tool that can be used to configure TLP as well as other power setting.

### Continue making tweaks to TLP

Make sure to tab through all the tabs in PowerTOP. The Overview tab and Device Stats will give you the crucial information to keep optimizing. Notice my screenshot below. Notice some devices have a lower % of power usage while many have 100%. Figuring out how to cut down that device % is how you are going to cut down your power consumption even further.

![Check device status to optimize Linux battery life](/images/powertop-device-stats.webp)

## Optimize Ubuntu battery life with Slimbook Battery

Read about Slimbook Battery on their GitHub: [https://github.com/Slimbook-Team/slimbookbattery](https://github.com/Slimbook-Team/slimbookbattery)

Slimbook Power integrates with applications, services, and drivers like TLP, intel\_pstate, AMD and NVIDIA. Giving you some easy to pick configuration options just like the Ubuntu power saving settings which you can select from the gui.

### Install Slimbook Battery

```
  sudo add-apt-repository ppa:slimbook/slimbook
  sudo apt update
  sudo apt install slimbookbattery
```

### Launch and configure Slimbook Battery

With Slimbook battery installed you can open it as you would any other app via the GUI

![Save Ubuntu Battery life with Slimbook Battery](/images/slimbook-battery.webp)

Set Slimbook battery to autostart and flip through the tabs to change configurations as you would like, it's all pretty strait forward.

Slimbook is going to run in the background auto-tuning your power settings. This may be annoying for a while as it throws a pop up each time it changes a setting.

## Post Optimization Measurements

### Idle test

With Slimbook Power and the Gnome power settings set to their minimum configurations, I was able to get down to 3.14 W. That's **about a 25% improvement.**

**Min: 3.14 W**

### **Mid Settings:** Typical development session power test

On Battery, as I did at the beginning, I tested my power consumption with a fairly typical set of tooling open. Several gnome-terminals, many Brave browser tabs open, VS Code open, several docker containers spinning up, and opening and closing GIMP to really hit the CPU.

**Max: 9.48** **W**

This is a 52.3% reduction in power consumption!

### **Max Settings:** Typical development session power test

On battery, with all performance settings tuned to high. I ran the same tests as above.

**Max: 12.9 W**

This is a 56% reduction in power consumption!

### Conclusion

I'm very happy with these power reductions, that should lead to a doubling on the battery life for realistic usage.

## More Information

- [https://www.reddit.com/r/framework/comments/tx684j/what\_have\_you\_done\_to\_extend\_battery\_life\_on\_linux/](https://www.reddit.com/r/framework/comments/tx684j/what_have_you_done_to_extend_battery_life_on_linux/)

- [https://wiki.archlinux.org/title/TLP](https://wiki.archlinux.org/title/TLP)

- [https://community.frame.work/t/linux-battery-life-tuning/6665](https://community.frame.work/t/linux-battery-life-tuning/6665)

- [https://www.reddit.com/r/archlinux/comments/7gdtur/aggressive\_power\_saving/](https://www.reddit.com/r/archlinux/comments/7gdtur/aggressive_power_saving/)

## Do You Have More Ideas?

If you've got more ideas for tuning battery life or want to comment something, please leave it in the comments. I'll add good tips into the article and credit you.
