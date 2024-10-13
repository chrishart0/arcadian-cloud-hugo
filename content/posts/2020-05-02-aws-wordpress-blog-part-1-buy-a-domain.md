---
title: "AWS WordPress Blog: Part 1 - Buy a domain"
date: "2020-05-02"
categories: 
  - "aws-wordpress"
tags: 
  - "aws"
  - "dns"
  - "domains"
  - "route53"
  - "wordpress"
cover:
  Image: "/images/Route53Thumb.png"
author: "chart"
url: "/aws/aws-wordpress/2020/05/02/aws-wordpress-blog-part-1-buy-a-domain/"
---

#### Full AWS WordPress Blog series so far:

- [AWS WordPress Blog: Part 1 – Buy a domain](https://arcadian.cloud/aws-wordpress/2020/05/02/aws-wordpress-blog-part-1-buy-a-domain/)

- [AWS WordPress Blog: Part 2 – Deploy the EC2 Instance](https://arcadian.cloud/aws-wordpress/2020/05/13/aws-wordpress-blog-part-2-deploy-the-ec2-instance/)

* * *

This is the first article in a series which will detail how to deploy a WordPress server at AWS the cheapest way possible. This series will teach you about Route53, EC2, S3, CloudFront, IAM, and more! All while helping you setup your own blog which every good IT professional should have.

You have two options when purchasing your domain.

- Option 1: Purchase a domain through AWS
    - Will be a little easier, should take no more that 5 minutes
    
    - $10-$12 a year or more depending on the domain

- Option 2: Purchase a domain via some other registrar and point it's name servers to a Route53 hosted zone
    - Can be as low as $2 a year depending on the [top level domain](https://www.techopedia.com/definition/1348/top-level-domain-tld)
    
    - Will take 15 minutes or more

## (Option 1) Purchase a domain in Route53

Navigate to Route53:

![](/images/OpenRoute53-1024x303.png)

Select and purchase a domain of your choice. The cheapest domains you can currently get through AWS are $9.00.

<figure>

![](/images/PurchaseDomain-1024x400.png)

<figcaption>

  


</figcaption>

</figure>

Go through the prompts until you have the domain purchased. You will likely have to confirm your info through an email.

Once your domain has finished registering you can move on to the next article which will detail how to create your WordPress server on EC2.

## (Option 2) Purchase a domain elsewhere at point it to Route53

First, purchase the domain from the registrar of your choice.

Navigate to Route53:

![](/images/OpenRoute53-1-1024x303.png)

Create a hosted zone for the domain you just purchased:

- Click on _Hosted Zones_ in the left hand navigation bar

- Click _Create Hosted Zone_

- On the right side, enter the exact text of your new Domain name

- Ensure type is _Public Hosted Zone_

- Click _Create_

![](/images/CreateHostedZone-1024x473.png)

Finally, you must point your domain your new Route53 name servers. This will allow you to configure DNS through AWS instead of needing to do it via your registrar, allowing you to get the cheap prices provided elsewhere with the excellent automation tools provided by AWS.

Every registrar is going to be different. If it is not immediately obvious how to point your name servers to the ones provided by AWS do a google search. Please post the steps you find for your provider in the comments for other users.  
Below are some guides for a few larger providers.  
  
\- [https://www.godaddy.com/help/change-nameservers-for-my-domains-664](https://www.godaddy.com/help/change-nameservers-for-my-domains-664)  
\- [https://www.namecheap.com/support/knowledgebase/article.aspx/767/10/how-to-change-dns-for-a-domain](https://www.namecheap.com/support/knowledgebase/article.aspx/767/10/how-to-change-dns-for-a-domain)

Now that your domain is using Route53 for DNS you can move on to the next article which will detail how to setup WordPress server on EC2.
