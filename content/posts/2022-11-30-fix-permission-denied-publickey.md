---
title: "Permission denied (publickey) aws SSH to EC2 instance ✔️ [Solved ]"
date: "2022-11-30"
categories: 
  - "aws"
author: "chart"
url: "/aws/2022/11/30/fix-permission-denied-publickey/"
---

**How to resolve Permission denied (publickey) for SSH into an AWS EC2 instance**

The solutions are detailed in this article, but in summary you must ensure you're using the right key, the right username, and the correct address.

**There are 3 main solutions for Permission denied (publickey) aws ec2 instance:**

1. **Check you are using the right key to resolve Permission denied (publickey)**
    
    Make sure you are using the right key. Check the Check you are using the right key via the EC2 console.
    
2. **Use the right username to resolve Permission denied (publickey)**
    
    Validate you are trying to connect with the right username. [This AWS article](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/managing-users.html) has a list of default usernames for AMIs.
    
3. **How to check you are using the correct IP**
    
    Make sure you are connecting to the right IP. Open the EC2 console and verify you are using the right IP address.
    

## Get the correct ssh command from the AWS console

<figure>

![Permission denied (publickey) select connect](/images/clickConnectInAWS-1024x430.webp)

<figcaption>

Open up the connect page

</figcaption>

</figure>

<figure>

![](/images/image.png)

<figcaption>

Copy the ssh command out of the console

</figcaption>

</figure>

This command from AWS should be exactly what you need. You'll see _Permission denied (publickey)_ if any of the details in this command are wrong, so make sure your path to your key file is correct.

```
ssh -i <key> ec2-user@<ec2 ip>
```

## The simple fixes to Permission denied (publickey)

### Check you are using the right key in AWS

Verify that you are using the correct key by checking the name of the key in the AWS console.

![](/images/checkKeyNameInAWS-1024x512.webp)

### Verify you are using the right username when connecting

You'll get the Permission denied (publickey) error when connecting to an AWS EC2 instance if you're using the wrong username. Check in the console what the username should be.

<figure>

![Permission denied (publickey) select connect](/images/clickConnectInAWS-1024x430.webp)

<figcaption>

Open up the connect page

</figcaption>

</figure>

<figure>

![Permission denied (publickey)  get the username from aws console](/images/getTheUsername.webp)

<figcaption>

See what the username should be

</figcaption>

</figure>

### Verify that you are connecting to the right host

Validate that you are connecting to the right instance. Maybe you've got a typo in the IP?

![](/images/correctHost.webp)

## Advanced Troubleshooting

### More tips:

Add the `-v` flag to your SSH command to get more detailed troubleshooting information

More AWS docs on how to connect to your EC2 insance: [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html)

### Other potential issues that cause Permission denied (publickey)

- If the user you are trying to SSH in's home directory is writable to the group then SSH login will not be possible.

- `/home/<user>/.ssh/authorized_keys` file is messed up on the instance

### AWS Guide

If none of this has helped then it is possible something has gone wrong on the EC2 instance itself. Check out this AWS guide for more advanced troubleshooting instructions.

[https://aws.amazon.com/premiumsupport/knowledge-center/ec2-linux-fix-permission-denied-errors/](https://aws.amazon.com/premiumsupport/knowledge-center/ec2-linux-fix-permission-denied-errors/)
