---
title: "Run Postman's Newman in an AWS Lambda function: specify JSON export location"
date: "2020-07-10"
categories: 
  - "devops"
tags: 
  - "api-testing"
  - "automated-testing"
  - "aws"
  - "lambda"
  - "newman"
  - "postman"
cover:
  Image: "/images/postman.png"
author: "chart"
url: "/devops/2020/07/10/run-postmans-newman-in-an-aws-lambda-function-specify-json-export-location/"
---

## The Problem

After getting my NodeJS application using Newman with the JSON reporter to work locally I started testing it in Lambda locally with SAM CLI. I encountered the following error:

```
Unhandled Promise Rejection     {"errorType":"Runtime.UnhandledPromiseRejection","errorMessage":"Error: EROFS: read-only file system, mkdir '/var/task/newman'","reason":{"errorType":"Error","errorMessage":"EROFS: read-only file system, mkdir '/var/task/newman'","code":"EROFS","errno":-30,"syscall":"mkdir","path":"/var/task/newman","help":"error creating path for file \"newman/newman-run-report-2020-07-09-15-46-40-040-0.json\" for json-reporter","stack":["Error: EROFS: read-only file system, mkdir '/var/task/newman'"]},"promise":{},"stack":["Runtime.UnhandledPromiseRejection: Error: EROFS: read-only file system, mkdir '/var/task/newman'","    at process.<anonymous> (/var/runtime/index.js:35:15)","    at process.emit (events.js:310:20)","    at process.EventEmitter.emit (domain.js:482:12)","    at processPromiseRejections (internal/process/promises.js:209:33)","    at processTicksAndRejections (internal/process/task_queues.js:98:32)"]}
```

The meat of this error is _`EROFS: read-only file system, mkdir '/var/task/newman'"`_  
Newman is attempting to write to _`/var/task/newman`_  
This is fine locally but Lambda only allows writing to /tmp/ (max 500mb)

> **Q: What if I need scratch space on disk for my AWS Lambda function?**  
> Each Lambda function receives 500MB of non-persistent disk space in its own /tmp directory.
> 
> [https://aws.amazon.com/lambda/faqs/](https://aws.amazon.com/lambda/faqs/)

## The Fix

To start with the Newman call looked like this:

```
newman.run(
                {
                    collection: require(collectionFilePath),
                    reporters: 'json'
                }, 
                .....
```

To change the export directory I added: `reporter: { json : { export : '/tmp/' } }`  
  
The working Newman call looks like this:

```
newmanData = newman.run(
                {
                    collection: require(collectionFilePath),
                    reporters: 'json',
                    reporter: { json : { export : '/tmp/' } }
                }, 
                .....
```

## Thanks goes to  

[Michael - sqlbot](https://stackoverflow.com/users/1695906/michael-sqlbot) for his comment on [Stack Overflow](https://stackoverflow.com/questions/53810516/getting-error-aws-lambda-erofs-read-only-file-system-open-var-task-assets) pointing out the Lambda tmp directory.
