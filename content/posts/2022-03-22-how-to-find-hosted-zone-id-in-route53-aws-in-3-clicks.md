---
title: "How to Find Hosted Zone ID in Route53 AWS in 3 Clicks"
date: "2022-03-22"
categories: 
  - "aws"
author: "chart"
url: "/aws/2022/03/22/how-to-find-hosted-zone-id-in-route53-aws-in-3-clicks/"
---

Here we will go over how to find hosted zone id route53.

## What is a Hosted Zone?

Route53 is AWS' service for managing DNS. Hosted Zones are the base layer of Route53. Typically, each hosted zone corresponds to a domain name, or possibly a sub domain.

The hosted zone is the container for DNS records, this is where you will configure how the world interacts with your domain, such as pointing it to an IP address with an A record.

Read more about Route53 hosted zones in the AWS docs [here](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-working-with.html).

## Steps to Find a Hosted Zone ID in Route53

### Navigate to Route53

Once signed into the AWS Console, use the search bar up to to search for `Route53` and select it.

![](/images/navigate-to-route-53-1024x445.png)

### Go to hosted zones

Click on the link to hosted zones

![](/images/click-hosted-zones-1024x512.png)

## Locate the hosted zone ID and name

The hosted zone name is the domain name and the **hosted zone ID** will be on the right.

![how to find hosted zone id route53](/images/locate-name-and-id-1-1024x173.png)
