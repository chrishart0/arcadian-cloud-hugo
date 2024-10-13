---
title: "AWS WordPress Blog: Part 2 – Deploy the EC2 Instance"
date: "2020-05-14"
categories: 
  - "aws-wordpress"
tags: 
  - "aws"
  - "ec2"
  - "iam"
  - "linux"
  - "wordpress"
cover:
  Image: "/images/EC2InstanceType.png"
author: "chart"
url: "/aws/aws-wordpress/2020/05/13/aws-wordpress-blog-part-2-deploy-the-ec2-instance/"
---

#### Full AWS WordPress Blog series so far:

- [AWS WordPress Blog: Part 1 – Buy a domain](https://arcadian.cloud/aws-wordpress/2020/05/02/aws-wordpress-blog-part-1-buy-a-domain/)
- [AWS WordPress Blog: Part 2 – Deploy the EC2 Instance](https://arcadian.cloud/aws-wordpress/2020/05/13/aws-wordpress-blog-part-2-deploy-the-ec2-instance/)

* * *

This is the second article in a series which will detail how to deploy a WordPress server at AWS the cheapest way possible. This series will teach you about Route53, EC2, S3, CloudFront, IAM, and more! All while helping you setup your own blog which every good IT professional should have.

This article will detail how to deploy the EC2 server and it's IAM role.

## Deploy the IAM role

An IAM role is required to give the EC2 server the permissions it needs to interact with other AWS services. These steps are how to create the role by hand, later on a CloudFormation template will be linked which deploys the IAM role for you.

1. Navigate to IAM in the console
2. Click on Roles (it is in the left hand nav bar)
3. Click Create Role  
    ![](/images/IAMCreaterole.png)
    1. Common use cases: Select **EC2**
    2. Click **Next: Permissions**
    3. Search for and add the following
        1. CloudWatchAgentServerPolicy
        2. AmazonSSMManagedInstanceCore
    4. Click **Next: Tags**
    5. Click **Next: Review**
    6. Role name: Wordpress-Blog-MySiteName-Role
    7. Click **Create Role**
4. Navigate to your newly created role
    1. Click **Add inline polic**y
        1. Select the JSON tab
        2. Paste in the IAM policy below
        3. Click **Review policy**
        4. Name: _SMM-ParameterStore-Site.Name-ReadWrite_

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "BlogParameterStorePerms",
            "Effect": "Allow",
            "Action": [
                "ssm:PutParameter",
                "ssm:GetParameter",
                "ssm:AddTagsToResource"
            ],
            "Resource": [
                "arn:aws:ssm:::parameter/*"
            ]
        }
    ]
}
```

## Deploy the EC2 Server

For this Wordpress server we will use a t3a.

1. Navigate to EC2 and click **Launch instance**
2. Select the **Amazon Linux 2 AMI (HVM), SSD Volume Type**  
    ![](/images/EC2InstanceType.png)
3. For instance size:
    1. If this is a new account and you haven't used your 1 years of free tier yet pick t2.micro
    2. Otherwise pick **t3a.micro**, this will give you the most for your money.
    3. A t3a.nano will work for a small practice blog but in my experience it needs very frequent reboots
4. Click **Next: Configure Instance Details**
    1. Auto-assign Public IP: **Enable**
    2. IAM role: Choose the one you created earlier
    3. Enable termination protection: Check this  
        ![](/images/InstanceDetails.png)
5. Click **Next: Add Storage**
    1. 30 GB should be sufficient but set as you see fit
6. Click **Next: Add Tags**
    1. Always try to add tags to everything in AWS. These help immensly when looking around in the billing panel
7. Click **Next: Configure Security Group**
    1. Create a new security group
    2. Security group name: Wordpress-Server
    3. Port 22
        1. Source: **My IP**
        2. It is important to lock this port down just to your IP.
            1. Hackers will constantly attempt to access your server over port 22. This is a security risk to leave open and also puts unneeded load on your tiny server
    4. Port 80
        1. Source: **Anywhere**
    5. Port 443
        1. Source: **Anywhere**  
            ![](/images/MakeSG.png)
8. Click **Review and Launch**
9. Click **Launch**
10. Create a new key pair
    1. Make sure to store this securely and back it up.
    2. This is how you sign into your server, don't let it leak and don't lose it.
11. Launch the instance

## Connect up to the EC2 Instance

Once the EC2 instance is deployed you can connect up.

1. Select the instance
2. Click Connect
3. Follow the instructions give by AWS
    1. If you are on windows:
        1. Using Putty will be the quickest way to connect up
        2. A better option is to [install Ubuntu on Windows](https://ubuntu.com/tutorials/tutorial-ubuntu-on-windows) and use the terminal provided through that

Your EC2 instance server is now up and ready to have WordPress deployed onto it. The next article will container a script for easy WordPress installation.
