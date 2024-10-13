# Arcadian Cloud Blog

Static site repo for: <Arcadian.cloud>

[![Deploy Hugo Static Site](https://github.com/chrishart0/arcadian-cloud-hugo/actions/workflows/deploy.yml/badge.svg)](https://github.com/chrishart0/arcadian-cloud-hugo/actions/workflows/deploy.yml)

Build

```bash
hugo
```

Run Dev

```bash
hugo server -D
```

Deploy
```bash
hugo deploy
```


## Conversion from Wordpress

Command to fix image paths

```
find content/migrated -type f -name '*.md' -print0 | xargs -0 sed -i -E 's/!\[(.*)\]\((images\/[^\)]*)\)/!\[\1\](\/\2)/g'
```

## Deploy the infra

*Note: You will first need to setup CDK as you would on any other machine/AWS account*

First, configure your .env file with your AWS account and region, this is needed for the hosted zone lookup
```
cp .env.example .env
nano .env
```

cd into the infra dir, then deploy the site stack, then the github actions IAM user stack
```
cd infra

# install the needed deps
npm i

# deploy the site stack
cdk deploy ArcadianCloudHugoSiteStack --profile xyz

# deploy the github action user stack
cdk deploy DeploymentUserStack --profile xyz
```

## Run the e2e tests

**NOTE:** If this is your first time setting this repo up, you'll need to edit the homepage.test.js to adjust the site title so the test passes

First, install the deps
```
cd e2e-tests

npm i

sudo npx playwright install-deps  
```

```
# ensure you are in e2e-tests, if you aren't already
cd e2e-tests


npm test
```