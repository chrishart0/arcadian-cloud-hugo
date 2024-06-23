---
title: "Connect to a Wireguard VPN on Ubuntu with a .conf file"
date: "2023-07-12"
author: "chart"
url: "/uncategorized/2023/07/11/connect-to-a-wireguard-vpn-on-ubuntu-with-a-conf-file/"
---

These steps are assuming you've already got wireguard setup and have a .conf file.

### Ensure Wireguard is installed

```
sudo apt install wireguard
```

### Move the .conf file to the Wireguard folder

Your wireguard conf file may be named something else, but mine is wg0.conf

```
sudo cp Downloads/wg0.conf /etc/wireguard/
```

### Start Wireguard

Use the correct name for your wireguard config file. Note that I use wg0 because my file was wg0.conf.

```
sudo wg-quick up wg0
```

## Fix `_wg-quick: line 32: resolvconf: command not found_` error

This step is optional, you only need to do this if you got the above error.

```
ln -s /usr/bin/resolvectl /usr/local/bin/resolvconf
```

### Disconnect from Wireguard

```
sudo wg-quick down wg0
```
