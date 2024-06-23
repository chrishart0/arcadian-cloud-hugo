---
title: "List all AWS Secrets Manager Secrets and Get 1 Secret code: NodeJS + AWS SDK Example"
date: "2023-06-18"
categories: 
  - "aws"
author: "chart"
url: "/aws/2023/06/18/list-all-aws-secrets-manager-secerts-and-get-1-secret-example-code-nodejs-aws-sdk/"
---

![List all AWS Secrets Manager Secerts and Get 1 Secret example code: NodeJS + AWS SDK](/images/aws-secret-1024x683.webp)

Example code from my project [MyChefAI.com](https://MyChefAI.com) I am working on right now. Hopefully if you are crawling google for a good example of listing secrets or pulling a given secret from AWS Secrets manager with NodeJS this helps you.

```

async function listAllSecrets(nextToken) {
    const params = {
        MaxResults: 50
    };

    if (nextToken) {
        params.NextToken = nextToken;
    }

    try {
        const data = await secretsManager.listSecrets(params).promise();

        for (const secret of data.SecretList) {
            console.log('Name: ' + secret.Name);
            console.log('ARN: ' + secret.ARN);
            console.log('Description: ' + secret.Description);

            // Describe each secret to get its version stages
            const description = await secretsManager.describeSecret({ SecretId: secret.ARN }).promise();
            console.log('Version Stages: ' + JSON.stringify(description.VersionIdsToStages));

            console.log('--------------');
        }

        if (data.NextToken) {
            await listAllSecrets(data.NextToken); // recursively call the function if there are more secrets
        }
    } catch (err) {
        console.log(err, err.stack);
    }
}


// Get a secret value
async function getSecretValue(SecretId) {
    let params = {
        SecretId
    };

    try {
        const data = await secretsManager.getSecretValue(params).promise();

        if ('SecretString' in data) {
            return data.SecretString;
        } else {
            let buff = Buffer.from(data.SecretBinary, 'base64');
            return buff.toString('ascii');
        }
    } catch (err) {
        console.log(err, err.stack);
    }
}



// ----------- List all secrets and lookup a secret  -----------
console.log("Getting needed secrets");
await listAllSecrets();

console.log("Getting secret:");
const examplekSecret = await getSecretValue("/example/secret");
console.log("examplekSecret:", examplekSecret);
```
