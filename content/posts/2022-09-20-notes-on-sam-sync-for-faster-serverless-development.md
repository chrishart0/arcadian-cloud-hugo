---
title: "Notes on SAM Sync for Faster Serverless Development"
date: "2022-09-20"
categories: 
  - "sam"
tags: 
  - "aws"
  - "cli"
  - "sam"
coverImage: "aws-logo.png"
author: "chart"
url: "/aws/sam/2022/09/20/notes-on-sam-sync-for-faster-serverless-development/"
---

## Why is my development process slow?

When developing the developer must have fast feedback loops. The fast feedback loop is absolutely critical to getting work done in a productive manner. If you've ever said to yourself that Lambda development feels slow to you then you've experienced the effect of slow feedback loops. In this guide I will go over how to speed up your development by increasing the cycle time of your feedback loops.

### What is a feedback loop?

What exactly do I mean by feedback loop? Imagine a painter making a large mountain landscape. The painter develops his painting by making one stroke at a time. With each new stroke of paint he observes his painting, seeing how this has effected the general aspect of the thing, this is his first feedback loop, making and then observing his change. The painting is not designed to be viewed from arms length, after some time the painter must step back and view his painting in a realistic environment, from some distance away, this is his next feedback loop. The painter may change positions, testing the appearance of his painting has the effect he intended from all realistic viewing angles. This cycle continues on, with many short feedback loops, brush strokes, followed by longer feedback loops, stepping back and holistically observing.

Could our painter have painted effectively without being able to see each brush stroke? What if he turned the lights off, made some number of changes, stepped over to the light switch to flip the lights, observed his work, turned the lights back off, continued painting, and so on? Many mistakes would be made. Our painter would have to accept that a large number of mistakes are inherent in the process or slow down to the point of making one stroke at a time, stepping away for the lights, and so on, greatly slowing down the process. So how can you develop without immediately seeing the effect of your changes?

The developer cannot move fast and safely without rapid feedback loops, just like our painter. This is why you are developing slowly. Fast and useful feedback loops must be the objective of any individual or team who wants to make reasonable progress. Think about it, what is the purpose of DevOps, what does it aim to achieve? Fast feedback loops. What is the aim of agile over waterfall? Agile aims to speedup a feedback loop. What is the aim of automated tests such as unit tests or integration tests? To speed up the feedback loop of code changes. Implementing fast feedback loops must always be front of mind.

### Thinking about feedback loops

As shown in the image below, feedback loops may be thought of as a series of concentric circles. A developer will run many fast feedback loops, these short feedback loops don't provide a complete picture, but they are fast. After some number of changes a larger feedback loop will be run, which may be slower but which gives a higher level of confidence in the changes. These feedback loops aim to trade speed for confidence. This is the aim of tactics such as automating integration tests. While their may be a higher initial cost to automating the integration tests, the automated tests can run much faster, which will allow the developer to move that much faster with that much more confidence.

![feedback loops image](/images/feedback_loops.png)

For more reading on feedback loops see here: [https://martinfowler.com/articles/developer-effectiveness.html](https://martinfowler.com/articles/developer-effectiveness.html)

### Feedback loops goals

What should our goal be for feedback loops? Here are some examples. You don't need to aim for these specific feedback loops but you do need to aim for loops of these times. Keep in mind the much talked about principal of `shift-left`, move a check (a feedback loops), as close to the beginning of a process as you reasonably can without slowing the process down.

- **~1 second:**

- Syntax checker in IDE validates validity of code

- **Seconds:**

- On save, unit tests related to changed code are run automaticlly with something like `npm watch`

- **Dozens of seconds - a few minutes:**

- Full unit test suit runs

- Code scans for security issues

- Code scans run for policy violations

- **Minutes:**

- Full build is run

- Acceptance tests run with mocked dependencies

- Realistic integration tests run with real dependencies and mocked data

- **10s of minutes:**

- Realistic end-to-end tests run against deployment as production like as possible, emulating real actions a user would take in the same manner a user would take them, such as testing changes to an API by using Selenium or Playwright to test those calls via clicking on / loading the GUI elements that trigger them.

## Developing good and fast feedback loops with SAM

In this guide we will be using SAM without using SAM local. SAM has the ability to make deployments to lambda in seconds. We can utilize this to develop an excellent feedback loop for testing a realistically deployed lambda in seconds. This will make a great second feedback loop to run after, in conjunction with, or possibly even instead of local unit tests

Give the actual SAM sync docs a read and see what each of the flags do. This is really helpful.

[https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-sync.html](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-sync.html)

## SAM Sync Command

### \--code flag

`sam sync --code ....`

This flag tells SAM to use the AWS APIs to sync your code instead of CloudFormation. This code sync runs once and then exits. To run a sync on every save use --watch

> To sync code resources, AWS SAM uses AWS service APIs directly, instead of deploying through AWS CloudFormation. Run `sam sync --watch` or `sam deploy` to update your AWS CloudFormation stack.

`Sam sync --code` will only for with these services

- `AWS::Serverless::Function`

- `AWS::Lambda::Function`

- `AWS::Serverless::LayerVersion`

- `AWS::Lambda::LayerVersion`

- `AWS::Serverless::Api`

- `AWS::ApiGateway::RestApi`

- `AWS::Serverless::HttpApi`

- `AWS::ApiGatewayV2::Api`

- `AWS::Serverless::StateMachine`

- `AWS::StepFunctions::StateMachine`

### \--watch flag

`sam sync --watch ...`

The --watch flag combines the functionality of a sam deploy and --code. There are 2 parts to this process

- When you first run sam sync --watch sam is going to use CloudFormation to deploy your changes

- On save SAM will use the AWS APIs to deploy changes to the services listed until --code, the same way --code does

This is **critical** to AWS serverless development. When developing lambda functions you can use `sam sync --watch` to get a fast feedback loop.

## Examples

Remember that for `sam sync` to work you must have already deployed the stack. You've got to pass in a stack name which was deployed using the template which is present in the directory you are in.

This will command will sync local changes to your function code as well as any changes to the CloudFormation template, on save, strait to the specified CloudFormation stack using CloudFormation itself to do the syncing.

```
sam sync --stack-name sam-app --watch
```

This command will sync only changes to the two specified resources, in this case presumably a lambda function and lambda layer. Not that there is no --watch, so the sync will run once and the command will exit. After a save you must run the command again. Simply add --watch if you want this to run on every save

```
sam sync --stack-name sam-app --code --resource-id HelloWorldFunction --resource-id HelloWorldLayer
```

This command, like the first, will deploy all changes to the lambda code and CloudFormation template, the difference is it won't watch for changes, this command will run the update once with CloudFormation, and then exit.

```
sam sync --stack-name sam-app
```

## Speeding up SAM sync

When you've got a lot of lambda functions in one CloudFormation template you may notice sam sync starts to run slow. Here are some tips for speeding it up.

All these times are recorded with the following conditions:

- 5 lambda functions

- NodeJS 16

- Windows 10

- 5 Lambda Functions

I tired to run each scenario 2-3 times to get a range

| Command | Time |
| --- | --- |
| (Initial startup time for first sync) sam sync --stack-name xyz --resource AWS::Lambda::Function --watch | 1m9s |
| (Save code change) sam sync --stack-name xyz --resource AWS::Lambda::Function --watch | 1m40s-1m42s |
| (Initial startup time for first sync) sam sync --stack-name xyz --resource AWS::Lambda::Function --watch | 1m13s - 1m24s |
| (Save code change)sam sync --stack-name xyz --resource AWS::Lambda::Function --watch | 1m31s - 1m40s |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |

#### Now with PowerShell instead of GitBash

Using PowerShell or GitBash doesn't seem to have made much of a difference. This makes sense, both are just calling the same sam executable which runs the same processes. After seeing the data is about the same after 1 run with sam sync and 1 save I didn't bother to run any more.

| Command | Time |
| --- | --- |
| (Initial startup time for first sync) sam sync --stack-name xyz --resource AWS::Lambda::Function --watch | 1m6s |
| (Save code change) sam sync --stack-name xyz --resource AWS::Lambda::Function --watch | 1m 43s |

After setting priority to high in task manager for VSCode, NodeJS, and Python

| Command | Time |
| --- | --- |
| (Initial startup time for first sync) sam sync --stack-name xyz --resource AWS::Lambda::Function --watch | 1m26s |
| (Save code change) sam sync --stack-name xyz --resource AWS::Lambda::Function --watch | 1m32s - 1m34s |
| sam sync --stack-name xyz --resource AWS::Lambda::Function --code | 1m10s |

#### What I noticed running these tests

- The `NodejsNpmBuilder` process runs rather slow and looks to only do one function at a time. This seems to by why watch runs so slow for multiple functions

- Most of the work is being done by Python and NodeJS Runtime

<figure>

![](/images/image.png)

<figcaption>

The CPU % fluctuated up to about 30% for both of these processes at different times on my machine

</figcaption>

</figure>

- Sam build offers flags --parallel and --cached, neither of these are available for sam sync

#### Errors from SAM Sync

##### OSError: \[WinError 145\] The directory is not empty: 'C:\\\\my\\\\file\\\\path\\\\.aws-sam\\\\auto-dependency-layer\\\\UpdateLmabdaFunction'

```
OSError: [WinError 145] The directory is not empty: 'C:\\my\\file\\path\\.aws-sam\\auto-dependency-layer\\UpdateLmabdaFunction'
```

Really not sure what's up with this. It happens intermittently running any sam sync command. Simply running the command again will succeed.
