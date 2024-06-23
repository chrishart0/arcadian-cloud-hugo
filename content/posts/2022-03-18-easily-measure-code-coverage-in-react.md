---
title: "Easily Measure Code Coverage in React"
date: "2022-03-18"
categories: 
  - "devops"
tags: 
  - "ci"
  - "code-coverage"
  - "devops"
  - "github-actions"
  - "react"
  - "testing"
author: "chart"
url: "/devops/2022/03/18/easily-measure-code-coverage-in-react/"
---

This guide will teach you how to easily measure code coverage in React for a project generated with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html).

This article is going to use [https://github.com/chrishart0/gsd-aws-cdk-serverless-example](https://github.com/chrishart0/gsd-aws-cdk-serverless-example) as an example. Either follow along with your own code or fork that repo. The example repo is a mono repo with a Lambda function backend and a ReactJS front end, we are going to be focusing on the contents of the [frontend](https://github.com/chrishart0/gsd-aws-cdk-serverless-example/tree/master/frontend) directory.

## Write the Unit Tests

I'm assuming you already know how to write unit tests. Unit tests in for the example ReactJS app can be found here: [App.test.js](https://github.com/chr)

<figure>

![](/images/2022-03-18_15-50.png)

<figcaption>

Passing tests should look something like this

</figcaption>

</figure>

## Measure code coverage in React

Now that you've got some unit tests it's time to measure the code coverage.

It's important to note that measuring code coverage is a lot of extra processing. For large test sweets, you'll want to make sure you can easily test with and without coverage measurement.

To achieve this, open up the [package.json](https://github.com/chrishart0/gsd-aws-cdk-serverless-example/blob/master/frontend/package.json) and add a new script to measure coverage, as shown below:

```
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "coverage": "react-scripts test --coverage",
    "eject": "react-scripts eject"
  },
```

Now the following command should give you code coverage, without changing how `npm test` already worked:

```
# For iterative, aka run on each change, test covergae
npm run coverage

# To run tests once or use in a CI
CI=true npm run coverage
```

![](/images/test-with-coverage.png)

Now that I can see my coverage % I know I need to get that % up!

## Write Code Coverage Report to a File

It's very useful to write a code coverage report to a file. Later on, we will use this in our CI and for historical metrics.

There's actually no extra work to do here. By default, you'll see a report end up in `./coverage/`

![](/images/coverage-report.png)

## Fail your pipeline if code coverage is below a threshold

Simply add a `coverageThreshold` to the jest configuration in the [package.json](https://github.com/chrishart0/gsd-aws-cdk-serverless-example/blob/master/frontend/package.json) as shown below:

```
...
"scripts": {
    ...
  },
  "jest": {
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": 80
      }
    }
  },
...
```

<figure>

![](/images/coverage-threshold.png)

<figcaption>

Tests pass but test run fails due to coverage

</figcaption>

</figure>

## Next Steps?

Now you can integrate your code coverage monitoring with a tool like [codecov.io](https://app.codecov.io/gh/chrishart0/gsd-aws-cdk-serverless-example) to get monitoring over time and Status badges. Another blog post on this topic coming soon...

Use 3 Musketeers to make your project easier to manage and deploy to the Cloud. Here is a [basic example with AWS CDK](https://arcadian.cloud/aws/2022/02/22/make-your-life-easier-by-running-aws-cdk-in-a-docker-container/). This whole repo is a complex example of using 3 Musketeers to deploy 3 tier serverless apps to AWS with the CDK, see the [README](https://github.com/chrishart0/gsd-aws-cdk-serverless-example/blob/master/README.md) for more details.
