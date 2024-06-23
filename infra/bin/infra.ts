#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ArcadianCloudHugoSiteStack } from '../lib/static-site-stack';
import { DeploymentUserStack } from '../lib/deployment-user-stack';

const app = new cdk.App();

// Pull env vars from .env file
require('dotenv').config();
const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION
};

const domainName = app.node.tryGetContext('domainName') || 'arcadian.cloud'; 
const siteSubDomain = app.node.tryGetContext('siteSubDomain') || undefined;  


const siteStack = new ArcadianCloudHugoSiteStack(app, 'ArcadianCloudHugoSiteStack', {
  domainName: domainName,
  siteSubDomain: siteSubDomain,
  env: env
});

new DeploymentUserStack(app, 'DeploymentUserStack', {
  bucketArn: siteStack.bucket.bucketArn,
  distributionId: siteStack.distribution.distributionId,
});
