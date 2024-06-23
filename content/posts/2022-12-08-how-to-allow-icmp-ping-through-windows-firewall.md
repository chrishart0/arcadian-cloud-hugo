---
title: "How to Allow ICMP (ping) Through Windows Firewall"
date: "2022-12-08"
categories: 
  - "windows"
author: "chart"
url: "/windows/2022/12/08/how-to-allow-icmp-ping-through-windows-firewall/"
---

If you're trying to ping your windows instance and you cannot, one of the likely reasons is that ICMP is blocked by the firewall. Here is how you can enable ICMP in your Windows Firewall.

## To allow ICMP (ping) through the Windows Firewall, follow these steps:

### Open the Windows Firewall GUI

- Open the Windows Start menu and type "Windows Firewall" into the search box.

- Click on "Windows Firewall with Advanced Security" in the search results.

### Add a new inbound rule to allow Allow ICMP (ping) Through Windows Firewall

- In the Windows Firewall with Advanced Security window, click on the "Inbound Rules" section in the left-hand panel.

- In the right-hand panel, click on the "New Rule" button.![add a new rule to Windows firewall to allow ICMP ping](/images/openAddNewRule.webp)

- In the "New Inbound Rule Wizard" window, select the "Custom" option and click "Next".

- In the "Protocol and Ports" section, select the "ICMPv4" protocol and select the "Customize" option.

- In the "Customize ICMP Settings" window, check the box next to "Echo Request" and click "OK".

- In the "Protocol and Ports" section, click "Next".

- In the "Action" section, select the "Allow the connection" option and click "Next".

- In the "Profile" section, select the network profile that applies to your situation (for example, if you want to allow ICMP on a public network, select the "Public" profile).

- In the "Name" section, give the rule a name (for example, "Allow ICMP") and click "Finish"

### Test the rule

- Ping your machine and see if you can get through

## Conclusion

After you have completed these steps, ping should be allowed through the Windows Firewall. Note that this process may vary depending on the version of Windows that you are using.
