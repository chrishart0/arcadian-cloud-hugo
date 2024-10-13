---
title: "4 Reasons You Cannot Ping Your AWS EC2 Instance and How To Fix Them"
date: "2022-07-01"
categories: 
  - "aws"
tags: 
  - "aws"
  - "ec2"
  - "networking"
  - "ping"
  - "vpc"
cover:
  Image: "/images/Cannot-Ping-AWS-EC2-Instance.webp"
author: "chart"
url: "/aws/2022/07/01/4-reasons-you-cannot-ping-your-aws-ec2-instance-and-how-to-fix-them/"
---

**How to resolve ec2 public ip not working?**

This guide will explain how to use ping to diagnose an aws ec2 instance public IP not working. The overview is ensuring the public IP is allocated and the checking that your security group, NACL, and networking are configured corectly.

**How to ping ec2 instance when ping isn't working?**

In this guide we will be review how to get ping working for your EC2 instance. There are many reasons why, as listed above and below.

**Quick Fix:** The most common issue when you cannot ping your ec2 instance is you haven't opened ICMP inbound in your security group. Continue reading below for more reasons you can't ping your AWS EC2 instance and how to fix them.

Here are some of the most common reasons you cannot ping AWS EC2 instance and how to fix them.

1. **You wont be able to ping your EC2 instance is you haven't opened ICMP inbound in your security group**
    
    This is the most likely cause of not being able to ping your AWS EC2 instance. You can navigate to the security group in the EC2 console and make sure this is added, since it is disabled by default. Read on to see a detailed guide on how to do this with pictures.
    
2. **How to check if your AWS EC2 Instance has a public IP**
    
    Navigate to the EC2 console and verify your instance has a public IP
    
3. **How to validate VPC routing isn't messed up, preventing ICMP (ping) traffic**
    
    Read on for detailed steps on how to validate your routing setup
    
4. **How to validate the NACL isn't blocking ICMP**
    
    You must validate your NACL isn't blocking ICMP
    
5. **How to verify the OS firewall isn't blocking Ping**
    
    This step will be different for Windows and different flavors of Linux. You must go into the OS firewall and ensure ICMP traffic isn't being blocked or is enabled.
    

Before we get into the issue it's important to understand what ping is. Ping does not use any port, ping actually uses a separate layer 3 protocol called ICMP, layer 3 being the same layer used by UDP and TCP. The big things to look for when troubleshooting why you can't ping your EC2 instance are Security Groups, Firewalls, and NACLs not letting ICMP through.

![Fixing Cannot Ping AWS EC2 Instance Inforgraphic](/images/info-cant-ping-ec2-reasons.webp)

## 1: ICMP Isn't Open Inbound in the Security Group

This is the most likely issue. You must go to the AWS security group and open up ICMP inbound to the EC2 instance's security group.

### How to tell if you can't ping your AWS EC2 instance because of the security group

1. Go to the EC2 console and select the instance

3. Click on the security tab

5. Click on the security group or read the summary displayed on this tab

7. Check the inbound rules to see if ICMP is allowed

The Image below shows only 443 inbound allowed. In this case, I can't ping my EC2 instance.

![Cannot ping AWS EC2 instance because no ICMP](/images/no-icmp-in-aws-security-group-means-ping-wont-work.webp)

### How to fix not being able to ping your EC2 instance because of the security group

It's a very simple fix. You just need to allow ICMP inbound.

1. In the console, go to the security group

3. Click the _Edit inbound rules_ button

5. Click _Add rule_

7. Select the drop down which says _Custom TCP_ and change it to All ICMP - IPv4

9. Select the drop down for source, which says _Custom_, and change it to _Anywhere-IPv4_

11. Click _Save rules_

![Cannot ping AWS EC2 instance fix by adding ICMP to SG](/images/add-icmp-inbound-to-sg-1024x332.png)

## 2: The EC2 Instance Doesn't Have a Public IP

Another reason you are not able to ping ec2 instance could be the public IP, you may have created your EC2 instance with only a local IP. If this is the case, the IP you have found is probably a local IP, that won't work. Verify you are using the public IP of the instance with the steps and image below:

1. Select the instance you are trying to ping in the console

3. Check the Details tab and make sure there is a Public IPv4 address and that is the one you are using.
    1. You will not be able to ping the Private IPv4 address from your local machine

![](/images/ec2-find-public-ip-1024x220.webp)

### How to fix when you cannot ping ec2 instance due to no public IP

As long as the EC2 instance is in a public subnet this will be possible. You must create an elastic IP and assign it to the instance. If your instance is in a private subnet then you won't be able to strait away add an elastic IP, first you will need to attach an internet gateway to the subnet.

Follow this guide from AWS to add an elastic IP to your instance: [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#working-with-eips](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#working-with-eips)

## 3: VPC Routing is Messed Up

Routing can be difficult to troubleshoot if you aren't already experienced in networking. I recommend a two step approach for troubleshooting your route tables.

1. Deploy an EC2 instance within the same exact subnet. Attempt to ping one instance from the other using it's internal IP. If the instances can or cannot ping each other, this is an important data point.

### Troubleshooting VPC Routing Configuration for Public Subnets

1. Locate your Public Subnet:
    - In the ec2 instance details pane, click on the subnet the ec2 instance is placed in

3. Inspect the Route Table:
    - Click on the "Route Table" tab to view the associated route table for the selected public subnet

5. Verify Default Route:
    - Make sure that the route table has a default route for both IPv4 (0.0.0.0/0) and IPv6 (::/0) traffic pointing towards an Internet Gateway (IGW).
    
    - An internet gateway is required to allow traffic from a VPC to the internet.

7. Check Internet Gateway Attachment:
    - Navigate to "Internet Gateways" in the left-hand navigation pane of VPCs. Ensure that an Internet Gateway is attached to your VPC. If not, create a new Internet Gateway and attach it to your VPC.

If you have issues with your internet gateway, here is an AWS guide on configuring an internet gateway: [https://docs.aws.amazon.com/vpc/latest/userguide/VPC\_Internet\_Gateway.html](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html)

### Troubleshooting VPC Routing Configuration for Subnets Using NAT Instances or NAT Gateways

1. Open the Amazon EC2 console:
    - Access the Amazon EC2 console in your web browser.

3. Locate the affected EC2 instance:
    - Find the EC2 instance you're having trouble pinging and select it to view its details.

5. Identify the private subnet:
    - Under the "Description" tab, locate the "Subnet ID" and click on the ID to navigate to the private subnet associated with the instance.

7. Inspect the Route Table:
    - Click on the "Route Table" tab to view the associated route table for the selected private subnet.

9. Verify the default route:
    - Confirm that the route table has a default route pointing to a NAT instance or gateway.

11. Check the NAT device's location:
    - Ensure that the NAT device (either a NAT instance or NAT gateway) is deployed within a public subnet ([_What is a public subnet?_](https://serverfault.com/questions/556363/what-is-the-difference-between-a-public-and-private-subnet-in-a-amazon-vpc)). To do this, navigate to the NAT device's details and confirm that its associated subnet has a route pointing to an Internet Gateway (IGW).

13. Review public subnet checks:
    - Perform the checks required for public subnets as mentioned in the previous guide, such as verifying default routes, security group rules, and Network ACL rules.

15. Source destination check for NAT instances:
    - If you're using a NAT instance, make sure that the source destination check is disabled. To do this, navigate to the EC2 console, select the NAT instance, click on "Actions," and choose "Change Source/Dest. Check." Ensure that the "Source/Dest. Check" is set to "Disabled."

17. Configure an egress-only internet gateway for IPv6 (optional):
    - If you're using IPv6 in your VPC and want to prevent internet traffic from routing to instances in a private subnet, set up an egress-only internet gateway. For more information on configuring an egress-only internet gateway, refer to Turn on outbound IPv6 traffic using an egress-only internet gateway.

You can also checkout this [Troubleshoot NAT gateways](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-troubleshooting.html) article by AWS.

### Troubleshooting VPC Routing Configuration for Subnets Using VPC Peering Connections

1. Open the Amazon EC2 console:
    - Access the Amazon EC2 console in your web browser.

3. Locate the affected EC2 instance:
    - Find the EC2 instance you're having trouble pinging and select it to view its details.

5. Identify the subnet:
    - Under the "Description" tab, locate the "Subnet ID" and click on the ID to navigate to the subnet associated with the instance.

7. Access the Amazon VPC Console:
    - Open the Amazon VPC console in a new browser tab or window.

9. Locate the Peering Connection:
    - In the left-hand navigation pane, click on "Peering Connections." From the list, select the peering connection you want to troubleshoot.

11. Check Peering Connection Status:
    - Ensure that the selected peering connection has an "Active" status.

13. Identify the Relevant Subnets:
    - Return to the subnet details from Step 3. Choose the subnets of the Amazon VPC that you wish to connect using the peering connection.

15. Examine Route Tables: Click on the "Route Tables" tab to view the route tables associated with the selected subnets. Confirm that the route tables contain either:
    - Routes to CIDR with specific subnets.
    
    - Routes to the entire CIDR of the peered Amazon VPC, inclusive of the peering connection mentioned in Step 5.

17. Validate Route Table Entries:
    - Verify that the route tables include all subnets for the peered Amazon VPC.

19. Check for Invalid Peering Connection Configurations:
    - Ensure that there are no invalid VPC peering connection configurations in place.

## 4: The NACL (Network ACL) Doesn't Allow ICMP

By default, everything is allowed in and out through the ACL. This is likley not the problem but it is worth checking, since it will only take a second.

1. In the EC2 console click through to the subnet the EC2 instance is in

3. Select the Subnet and go to the _Network ACL_ tab

5. Verify that all traffic is allowed through as shown in the image below

7. If all traffic is not allowed through, you must add a rul explicitly allowing ICMP

![](/images/nacl-allows-all-traffic-wont-block-acl-1024x275.png)

## 5: The OS Firewall isn't allowing ICMP Through

### Windows

How to resolve this to fix being unable to ping aws ec2 instance will depend on your OS. Here is [an article I wrote](https://arcadian.cloud/uncategorized/2022/12/08/how-to-allow-icmp-ping-through-windows-firewall/) on how to allow ping through Windows firewall.

https://arcadian.cloud/uncategorized/2022/12/08/how-to-allow-icmp-ping-through-windows-firewall/

### Linux

There are a plethora of firewalls you may be using on Linux, if this is the issue it will take a bit of troubleshooting. UFW is going to be the most common firewall you may have enabled. Here is a YouTube video guide going over the details. You can use this to check if you have UFW configured and learn how to open up ICMP.

https://www.youtube.com/watch?v=-CzvPjZ9hp8

## Did this article help you? If so please leave a nice comment. :)

### Think of any other reasons why you might not be able to ping an EC2 instance?

If so, please leave a comment below.
