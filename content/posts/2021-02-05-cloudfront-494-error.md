---
title: "CloudFront 494 Error - Quick Fix"
date: "2021-02-05"
categories: 
  - "aws"
tags: 
  - "494"
  - "cloudfront"
cover:
  Image: "/images/494Error.png"
author: "chart"
url: "/aws/2021/02/05/cloudfront-494-error/"
---

My team ran into a 494 error earlier this week coming out of CloudFront. The first few files requested from CloudFront would be successful, then we would hit the 494 error and most requests after that, but not all, would fail.

The first place we looked was CloudFront logs, but these 494 requests weren't getting logged at all.

After some troubleshooting we narrowed the issue down to header size.

## Solution for CloudFront 494 Error

Some functionality was added which increased the size of one of the headers. Reducing the size of this header again fixed the issue.

[AWS Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) tells us that for CloudFront the max length of an individual header is 1,783 characters.

## More Info

AWS doesn't have any good docs on this error for some reason. In fact, the first official AWS docs that show up on Google when you search for this issue don't even address it at all, that makes it hard to troubleshoot.

_Please_ leave a comments here if this helped you and let others know what you did to cause this and then what you did to fix it.

## Leave some Feedback

Did this post help? If so please leave a comment.
