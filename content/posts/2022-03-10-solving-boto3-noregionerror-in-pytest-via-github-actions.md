---
title: "Quickly fix botocore.exceptions.noregionerror: you must specify a region."
date: "2022-03-10"
categories: 
  - "aws"
tags: 
  - "aws"
  - "pytest"
  - "testing"
cover:
  Image: "/images/botocore_exceptions.webp"
author: "chart"
url: "/aws/2022/03/09/solving-boto3-noregionerror-in-pytest-via-github-actions/"
---

Quickly diagnose and fix the _botocore.exceptions.noregionerror: you must specify a region_ error. **The fix is you must specify a region**.

The quickest fix is to open your `~/.aws/config` and add `region=us-east-1` to the `[default]` profile. There are more details and several other ways to specify a region at the bottom of this article in the _**How To Fix**_ section.

<figure>

![botocore.exceptions.noregionerror: you must specify a region.](/images/add-region-to-aws-config.webp)

<figcaption>

Here is how your config file should look. This will resolve _botocore.exceptions.noregionerror: you must specify a region_

</figcaption>

</figure>

## Diagnosing the `NoRegionError`

I received this error while running PyTest running in GitHub actions.

  
The full text of the error was:

```
self = <botocore.regions.EndpointResolver object at 0x7f727692bca0>
partition = OrderedDict([('defaults', OrderedDict([('hostname', '{service}.{region}.{dnsSuffix}'), ('protocols', ['https']), ('sig...1', OrderedDict()), ('us-east-2', OrderedDict()), ('us-west-1', OrderedDict()), ('us-west-2', OrderedDict())]))]))]))])
service_name = 'dynamodb', region_name = None, force_partition = False

    def _endpoint_for_partition(self, partition, service_name, region_name,
            force_partition=False):
        # Get the service from the partition, or an empty template.
        service_data = partition['services'].get(
            service_name, DEFAULT_SERVICE_DATA)
        # Use the partition endpoint if no region is supplied.
        if region_name is None:
            if 'partitionEndpoint' in service_data:
                region_name = service_data['partitionEndpoint']
            else:
>               raise NoRegionError()
E               botocore.exceptions.NoRegionError: You must specify a region.

/usr/local/lib/python3.8/dist-packages/botocore/regions.py:148: NoRegionError
```

The specific code causing the error was:

```
dynamodb = boto3.resource('dynamodb')
```

This issue did not occur on my local machine, where I have an AWS Config file specifying the region, or deployed in Lambda. Instead, the error only occurred in my GitHub action CI while running my pytest unit tests.

## My Resolution for _botocore.exceptions.noregionerror: you must specify a region_

The simplest fix is just to pass in a default region when running pytest as shown below:

```
AWS_DEFAULT_REGION=us-east-1 python -m pytest tests/unit -v
```

You could also set as an environment variable in GitHub actions but that may have unintended consequences.

Here is a [GitHub issue](https://github.com/wagoodman/bridgy/issues/23) addressing the issue.

## How To Fix _botocore.exceptions.noregionerror_

As shown above, the trick is to make sure you provide a region. There are a few ways to do it.

### Fix 1: Specify Region in AWS config file for Boto3

Just specify the region in your aws configs file, boto3 will pick the region up from your config file automatically.

On Mac/Linux this is located at `~/.aws/config`  
Simply edit this file and add `region=us-east-1`. See the example below with 2 profiles configured, both with us-east-1 specified as the region.

```
[default]
region=us-east-1

[personal]
region=us-east-1

```

![botocore.exceptions.noregionerror: you must specify a region.](/images/add-region-to-aws-config.webp)

### Fix 2: Specify Region in Environment Variable for Boto3

Put the region in an environment variable, as shown in the command running the python unit tests. There are 2 ways to do this.

- Set the systems environment variables with `AWS_DEFAULT_REGION=us-east-1`
- Pass an env var into the command when running python, as shown in the previous section

## Fix 3: Specify the Region in the Code

Hardcore a region in the code, this is not recommended but will fix the issue

```
import boto3
from botocore.config import Config

my_config = Config(
    region_name = 'us-west-2'
)

client = boto3.client('kinesis', config=my_config)
```

Here are [the boto3 AWS docs](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/configuration.html#using-the-config-object) for more details on hard-coding the region.

## Leave some feedback, please

_If this helped you please leave a comment on how you fixed this issue._ Still need help, leave a comment too.
