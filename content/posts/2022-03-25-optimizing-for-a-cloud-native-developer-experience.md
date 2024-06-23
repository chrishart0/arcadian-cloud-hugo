---
title: "Optimizing for a Cloud-Native Developer Experience"
date: "2022-03-25"
categories: 
  - "devex"
tags: 
  - "aws"
  - "devex"
  - "devops"
  - "iac"
  - "lambda"
  - "sam"
  - "thought-leadership"
coverImage: "micro-feedback-loops-image-only.png"
author: "chart"
url: "/devex/2022/03/25/optimizing-for-a-cloud-native-developer-experience/"
---

Learn why and how focusing on developer experience and mirco feedback loops will speed up your development process and help you to create a better product.

**Cross Post from: [www.drewkhoury.com](https://www.drewkhoury.com/post/2022-03-23_optimizing-for-cloud-native-developer-experience/)**

## Optimizing for a Cloud-Native Developer Experience - Presentation

Chris and Drew share their combined knowledge around developer experience, why (micro) feedback loops matter a whole lot, and present a live demo of a Cloud Native application working locally - complete with unit tests, end-to-end tests and smoke tests.

- Originally presented by Chris and Drew [Optimizing for Developer Experience in a Cloud Native World](https://www.meetup.com/AWSMeetupGroup/events/284359969/) - AWS Meetup Group

- Concepts based on the work from Tim Cochran via Martin Fowler [Maximizing Developer Effectiveness](https://martinfowler.com/articles/developer-effectiveness.html)

- [Cloud Native DX](https://miro.com/app/board/uXjVOR9lSQM=/) miro board for presentation content

- Following the [3 Musketeers](https://www.drewkhoury.com/post/gsd/3-musketeers-for-an-epic-developer-experience-8676ddaf33b2/) pattern

This talk is packed with real patterns used by Chris and Drew working with teams to help them increase their effectiveness. The demo was designed so you can follow along on your own workstation - and be up and running within minutes without the need to install and configure the underlying tech (Node, AWS SAM, Python, Playwright, etc).

https://www.youtube.com/watch?v=6MP1u7O\_3bY&feature=emb\_logo

## Micro feedback loops

> "From what I have observed, you have to nail the basics, the things that developers do 10, 100 or 200 times a day. I call them micro-feedback loops. This could be running a unit test while fixing a bug. It could be seeing a code change reflected in your local environment or development environments."
> 
> Tim Cochran

<figure>

![](/images/drew-and-chris-white.png)

<figcaption>

Chris and Drew

</figcaption>

</figure>

## Demo

This template project demonstrates optimizing for a Cloud-Native developer experience with a 3 tier AWS serverless application. _Your challenge is to see how many feedback loops you can count in this project and leave a comment describing them._

Demo Repo: [GSD-AWS-CDK-Serverless-Example](https://github.com/chrishart0/gsd-aws-cdk-serverless-example)

If you have `make`, `docker-compose` and `docker` installed you should be able to have a local env running in a few minutes.

```
git clone git@github.com:chrishart0/gsd-aws-cdk-serverless-example.git && cd gsd-aws-cdk-serverless-example

make install && make run
```

Hint: If you run `make` after cloning the repo, it will show you the help menu and let you know what commands to run to build, test and deploy the application.

Micro feedback loops demostrated in this repo:

- Unit tests (front-end, back-end, infra)

- Local environment - available in the browser

- End-to-end tests

- Direct deployment to AWS from your workstation

- CI/CD runs the same as local, with additional security checks

<figure>

![Optimizing for a Cloud-Native Developer Experience with a 3 tier serverless app](/images/Infra-Diagram.drawio.png)

<figcaption>

Template Infrastructure Diagram

</figcaption>

</figure>

## Giving us your feedback (loop)

We'd love to hear what you think about these patterns, and get some feedback on your own developer experience using the demo repo.

- Contact [Chris](https://arcadian.cloud/contact-me)

- Contact [Drew](https://www.drewkhoury.com/drew/)

- [Raise an issue](https://github.com/chrishart0/gsd-aws-cdk-serverless-example/issues) in the repo
