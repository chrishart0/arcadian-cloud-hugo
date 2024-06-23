---
title: "Amazon Connect \"Error while loading chat transcript amazon connect\" when initiating chat monitoring"
date: "2020-11-10"
categories: 
  - "aws"
tags: 
  - "amazon-connect"
  - "live-chat"
coverImage: "PreviewIssueWithViewingChat-1.png"
author: "chart"
url: "/aws/2020/11/10/amazon-connect-error-while-loading-chat-transcript-amazon-connect-when-initiating-chat-monitoring/"
---

I received the following error when trying to start monitoring a live chat in Amazon Connect.

```
Error while loading chat transcript amazon connect
Please try again. If the error persists contact your administrator.
```

![Error while loading chat transcript amazon connect](/images/IssueWithViewingChat-1024x283.png)

This seems to be a glitch in Amazon connect. The steps I found to replicate this issue are:

- Open the CCP

- Take a chat

- That chat is ended either by you or the customer

- Set my CCP to offline

- The disconnect flow is used to reconnect the customer to another agent

- I try to monitor that specific chat

It seems you are not able to monitor a chat which you disconnected from and which is then connected to another agent. I would imagine this same issue applies to transfers but I did not test this.

## How to use live chat monitoring in Amazon Connect

If you were not aware of live chat monitoring in Amazon Connect, it is a very useful feature which allows users with the correct permissions to monitor other agents on-going chats.

AWS Docs on the subject: [https://docs.aws.amazon.com/connect/latest/adminguide/monitor-conversations.html](https://docs.aws.amazon.com/connect/latest/adminguide/monitor-conversations.html)
