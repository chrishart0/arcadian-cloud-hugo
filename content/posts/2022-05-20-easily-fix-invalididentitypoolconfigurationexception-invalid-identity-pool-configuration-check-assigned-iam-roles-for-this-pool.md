---
title: "Easily Fix: InvalidIdentityPoolConfigurationException, Invalid identity pool configuration. Check assigned IAM roles for this pool."
date: "2022-05-20"
categories: 
  - "aws"
cover:
  Image: "/images/Cognito-fix-invalid-idnetiy-pool-config.webp"
author: "chart"
url: "/aws/2022/05/20/easily-fix-invalididentitypoolconfigurationexception-invalid-identity-pool-configuration-check-assigned-iam-roles-for-this-pool/"
---

Easily fix the AWS Cognito error message: `Invalid identity pool configuration. Check assigned IAM roles for this pool.`

## The Error

```
{"__type":"InvalidIdentityPoolConfigurationException","message":"Invalid identity pool configuration. Check assigned IAM roles for this pool."}
```

## Fixes for Invalid identity pool configuration. Check assigned IAM roles for this pool.

This error is caused by IAM not being setup to trust the Cognito Identity pool.

### First Fix: Add the Identity Pool to IAM Trust Relationships

Your IAM Role's trust relationship should look something like the example one below, provided by AWS. It **must** have the principle specified as `"Federated": "cognito-identity.amazonaws.com"`. This is the proper fix.

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "",
      "Effect": "Allow",
      "Principal": {
        "Federated": "cognito-identity.amazonaws.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "cognito-identity.amazonaws.com:aud": "us-east-1:12345678-corner-cafe-123456790ab"
        },
        "ForAnyValue:StringLike": {
          "cognito-identity.amazonaws.com:amr": "unauthenticated"
        }
      }
    }
  ]
}
```

### Seconds Fix - Temporary Workaround: Specify RoleARN and AccountID

This is not the recommended fix, but as a temporary work around you can specify the RoleARN and AccountID in the config

```
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:xxxxx-xxxx-xxxx-xxxx-xxxxx',
    RoleArn: 'arn:aws:iam::xxxxx:role/Cognito_xxxxUsersUnauth_Role',
    AccountId: 'xxxxxxxxx', // your AWS account ID
});
```

## Continued Reading

- [Cognito Role Trust and Permissions](https://docs.aws.amazon.com/cognito/latest/developerguide/role-trust-and-permissions.html)
- [Stack Overflow](https://stackoverflow.com/questions/30425942/aws-cognito-invalid-identity-pool-configuration)
