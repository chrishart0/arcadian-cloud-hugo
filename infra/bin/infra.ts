#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ArcadianCloudHugoSiteStack } from '../lib/static-site-stack';
import { DeploymentUserStack } from '../lib/deployment-user-stack';
import * as dotenv from 'dotenv';

const app = new cdk.App();

// Pull env vars from ../.env file
dotenv.config({ path: '../.env' });

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION
};

// SitSubDomain is undefined if empty
// This is needed to make sure subdomain is not created if not provided
if (process.env.SUBDOMAIN === '') {
  process.env.SUBDOMAIN = undefined;
}


const siteStack = new ArcadianCloudHugoSiteStack(app, 'ArcadianCloudHugoSiteStack', {
  domainName: process.env.DOMAIN_NAME!,
  siteSubDomain: process.env.SUBDOMAIN!,
  env
});

new DeploymentUserStack(app, 'DeploymentUserStack', {
  bucketArn: siteStack.bucket.bucketArn,
  distributionId: siteStack.distribution.distributionId,
});
