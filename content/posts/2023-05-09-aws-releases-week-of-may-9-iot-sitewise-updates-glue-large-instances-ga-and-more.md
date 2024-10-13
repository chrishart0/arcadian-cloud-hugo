---
title: "AWS Releases Week of May 9: IoT SiteWise Updates, Glue Large Instances GA, and More!"
date: "2023-05-09"
categories: 
  - "aws"
tags: 
  - "aws"
cover:
  Image: "/images/May-9-Thumbnail.webp"
author: "chart"
url: "/aws/2023/05/09/aws-releases-week-of-may-9-iot-sitewise-updates-glue-large-instances-ga-and-more/"
---

As an agile developer and DevOps engineer, staying up to date with the latest news and updates from AWS is essential. This week, AWS has announced several updates to their services, including AWS IoT SiteWise, AWS Glue, Amazon QuickSight, and more. In this article, we will explore these updates and discuss potential use cases based on our own experiences.

_Disclaimer: this article is part of my project to develop an automated system for summarizing the weekly AWS updates, providing an easy to use framework for summarizing RSS feeds into automatic articles._ GitRepo: [https://github.com/chrishart0/aws-news-generator](https://github.com/chrishart0/aws-news-generator)

## AWS IoT SiteWise Enhancements

AWS IoT SiteWise is a managed service that makes it easy to collect, store, and monitor data from industrial equipment. This week, AWS has announced two enhancements to this service. First, it now supports 15-minute intervals for automatically computing aggregated asset property values. This feature allows users to monitor their equipment more frequently, enabling quicker responses to potential issues. Second, AWS IoT SiteWise enhances optimized storage in hot path data for higher throughput. With this enhancement, AWS IoT SiteWise can store more data in a hot path, allowing for faster access to frequently accessed data.

These updates are particularly useful for industries such as manufacturing, where equipment downtime can have a significant impact on productivity and profitability. By using AWS IoT SiteWise, companies can now monitor their equipment more frequently and efficiently, enabling faster responses to potential issues.

## AWS Glue Large Instance Types

AWS Glue is a fully managed extract, transform, and load (ETL) service that makes it easy to move data between data stores. This week, AWS has announced that AWS Glue large instance types are now generally available. These instances provide up to 8 vCPUs and 64 GiB of memory, enabling faster and more efficient data processing.

As a DevOps engineer, I have worked with AWS Glue extensively and have found it to be a powerful and easy-to-use ETL service. With the availability of AWS Glue large instance types, I expect to see significant improvements in data processing performance.

## Amazon QuickSight Updates

Amazon QuickSight is a business intelligence service that makes it easy to create interactive dashboards and reports. This week, AWS has announced two updates to this service. First, Amazon QuickSight adds new scatterplot options supporting additional use cases. With this update, users can now create more advanced visualizations, enabling better insights into their data. Second, Amazon QuickSight now supports State Persistence and Bookmarks for embedded dashboards. This update allows users to save their dashboard state and bookmarks, providing a more personalized and streamlined experience.

As a developer, I have used Amazon QuickSight to create custom dashboards and reports for various applications. With these updates, I expect to see more advanced and personalized visualizations, enabling better insights into our data.

## Other Notable Updates

AWS has also announced several other updates this week, including:

- Introducing Amazon EC2 I4g storage-optimized instances

- Amazon Managed Service for Prometheus now available in 4 additional AWS regions

- AWS CloudTrail Lake enhances query support for all Presto SQL SELECT functions

- Amazon Athena now supports Apache Hudi 0.12.2

- Amazon MemoryDB for Redis simplifies creating new clusters in the AWS Management Console

These updates provide additional functionality and improvements to various AWS services, making it easier for developers and DevOps engineers to build and manage their applications.

## Conclusion

Staying up to date with the latest AWS news and updates is critical for agile developers and DevOps engineers. This week, AWS has announced several updates to their services, including AWS IoT SiteWise, AWS Glue, Amazon QuickSight, and more. These updates provide additional functionality and improvements, enabling faster and more efficient development and management of applications. By leveraging these updates, developers and DevOps engineers can stay ahead of the

## All the Updates This Week

### [AWS IoT SiteWise now supports 15-minute intervals for automatically computing aggregated asset property values](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-iot-sitewise-15-minute-intervals/)

AWS IoT SiteWise now provides the ability for customers to automatically compute aggregated asset property values every 15 minutes. Customers can now get aggregated values for asset properties, metrics and transforms (mathematical expressions that map asset properties' data points from one form to another) for every minute, 15-minute, hour, and day. AWS IoT SiteWise computes commonly used statistical aggregates such as average, count, maximum, minimum, standard deviation, and sum over multiple time intervals. Customers can map data streams and define static or computed equipment and process properties across all facilities so they're readily available for analysis. For non-numeric properties, such as Strings and Booleans, AWS IoT SiteWise computes only the count aggregate.

### [AWS IoT SiteWise enhances optimized storage in hot path data for higher throughput](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-iot-sitewise-optimized-storage-hot-path-data/)

Today, AWS IoT SiteWise announced new performance enhancements that will significantly improve the retrieval of industrial data from its hot storage tier. We have improved the GetAssetPropertyValueHistory and BatchGetAssetPropertyValueHistory APIs by increasing the maximum number of results for each paginated response from 250 up to 20K. With these upgrades, developers can now retrieve asset property data, including measurements, attributes, metrics, and transforms, at high velocity to build industrial applications.

### [AWS Glue large instance types are now generally available](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-glue-large-instance-types-generally-available/)

Today, AWS announces the general availability of AWS Glue G.4X and G.8X, the next series of AWS Glue workers for your most demanding serverless data integration workloads. Glue G.4X and G.8X workers provide higher compute, memory, and storage resources than current Glue workers. These new types of workers help you scale and run your most demanding data integration workloads, such as memory-intensive data transforms, skewed aggregations, machine learning transforms, and entity detection checks with petabytes of data.

### [AWS Network Firewall ingress TLS inspection is now available in all regions](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-network-firewall-ingress-tls-inspection-all-regions/)

Ingress Transport Layer Security (TLS) inspection for AWS Network Firewall is now available in all AWS Regions where AWS Network Firewall is available today, including the AWS GovCloud (US) Regions. With this launch, you can use AWS Network Firewall to decrypt, inspect, and re-encrypt TLS traffic originating from the internet, another VPC, or another subnet.

### [Amazon QuickSight adds new scatterplot options supporting additional use cases](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-quicksight-scatterplot-options-additional-use-cases/)

Amazon QuickSight now supports advance use cases for scatterplots with new options like support for visualizing unaggregated data, new ‘label’ field well and performance improvements.

### [Introducing Amazon EC2 I4g storage-optimized instances](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-ec2-i4g-storage-optimized-instances/)

Amazon Elastic Compute Cloud (EC2) I4g storage-optimized instances powered by AWS Graviton2 processors are now generally available. I4g instances deliver the best compute price performance for a storage-optimized instance versus comparable x86-based storage optimized instances, and the best storage performance per TB for a Graviton-based storage instance. Based on AWS Nitro SSDs that are custom built by AWS and reduce both latency and latency variability, I4g instances are optimized for workloads that perform a high mix of random read/write and require very low I/O latency, such as transactional databases (Amazon DynamoDB, MySQL, and PostgreSQL) and real-time analytics such as Apache Spark.

### [Amazon Managed Service for Prometheus now available in 4 additional AWS regions](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-managed-services-prometheus-4-regions/)

Amazon Managed Service for Prometheus is now available in Asia Pacific (Mumbai), Asia Pacific (Seoul), South America (Sao Paulo) and Europe (Paris). Amazon Managed Service for Prometheus is a fully managed Prometheus-compatible monitoring service that makes it easy to monitor and alarm on operational metrics at scale. Prometheus is a popular Cloud Native Computing Foundation open-source project for monitoring and alerting that is optimized for container environments such as Amazon Elastic Kubernetes Service.

### [AWS CloudTrail Lake enhances query support for all Presto SQL SELECT functions](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-cloudtrail-lake-query-presto-sql-select-functions/)

AWS CloudTrail Lake, a managed data lake that lets organizations aggregate, immutably store, and query their audit and security logs for auditing, security investigations and operational troubleshooting, now supports all Presto SQL SELECT query functions for easy and flexible queryability of data . This new release includes support for popular query functions such as REGEXP\_EXTRACT for sophisticated pattern matching such as finding all S3 requests made on a specific S3 bucket prefix, and UNNEST an array such as resources to query over its objects like resourceType. With this release, you can also add comments within the query for better readability.

### [Amazon Athena now supports Apache Hudi 0.12.2](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-athena-apache-hudi/)

You can now use Amazon Athena to query tables created with Apache Hudi 0.12.2 which includes support for improved scalability of queries accessing data sets in Amazon S3 data lake. The updated integration enables you to use Athena to query Hudi 0.12.2 tables managed via Amazon EMR, Apache Spark, Apache Hive or other compatible services.

### [Amazon QuickSight now supports State Persistence and Bookmarks for embedded dashboards](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-quicksight-state-persistence-bookmarks-embedded-dashboards/)

Amazon QuickSight now supports State Persistence for embedded dashboards (and consoles) for registered users. Embedded QuickSight dashboards now remember filter selections between visits when accessed as a registered QuickSight user. Registered users can also Bookmark specific views of the embedded dashboard, making it simple to access your preferences from one convenient location. For example, you can create a Bookmark for an embedded dashboard with a specific filter setting that differs from the original dashboard. This allows you to quickly switch between relevant views without having to re-initializing the filters. You can enable Bookmarks and State Persistence using the GenerateEmbedUrlForRegisteredUser API. To learn more about, please visit our documentation.

### [Amazon MemoryDB for Redis simplifies creating new clusters in the AWS Management Console](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-memorydb-redis-creating-clusters-management-console/)

Amazon MemoryDB for Redis now makes it simpler and faster for you to get started with setting up a new MemoryDB cluster. The new console experience offers streamlined navigation and minimal settings required to configure a cluster, in just a few clicks.

### [Amazon Redshift Data Sharing now available in AWS China Regions](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-redshift-data-sharing-aws-china-regions/)

Amazon Redshift Data Sharing, a secure way to share live data across Amazon Redshift clusters, is now available in AWS China regions. Customers can now share data to provisioned clusters and serverless workgroups in the same account and different accounts, as long as they are within the same region. Redshift Data Sharing enables instant, granular, and high-performance data access across Redshift clusters without the need to copy or move data. Redshift Data Sharing provides live access to the data so that your users always see the most up-to-date and consistent information as it is updated in the data warehouse. Redshift Data Sharing can be used on your Amazon Redshift RA3 clusters at no additional cost.

### [Amazon QuickSight now supports VPC Connections via public APIs with Multi-AZ support](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-quicksight-vpc-public-apis-multi-az-support/)

Today, Amazon QuickSight announces the general availability of managing Virtual Private Cloud (VPC) connections via public APIs and an enhanced UX with Multi-AZ support. APIs enable you to create, update, delete, list and describe VPC connections. This launch enables you to create private VPC connections as part of your Infrastructure as Code (IaC) efforts with full support for AWS CloudFormation.

### [Amazon EC2 High Memory instances now available in Asia Pacific (Mumbai) Region](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-ec2-high-memory-instances-asia-pacific-mumbai-region/)

Starting today, Amazon EC2 High Memory instances with 12TiB of memory (u-12tb1.112xlarge) are now available in Asia Pacific (Mumbai) Region. Customers can start using these new High Memory instances with On Demand and Savings Plan purchase options.

### [Amazon CloudWatch Synthetics announces new Synthetics NodeJS runtime version 4.0](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-cloudwatch-synthetics-synthetics-nodejs-runtime-version-4-0/)

Today, we are announcing an update for Amazon CloudWatch Synthetics canaries to use the Synthetics NodeJS runtime version 4.0. With this update, runtime version of AWS Lambda, executing the canaries, is updated to NodeJS 16.x.

### [Amazon Aurora Serverless v2 is now available in 4 additional regions](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-aurora-serverless-v2-additional-regions/)

Amazon Aurora Serverless v2, the next version of Aurora Serverless, is now available in the Asia Pacific (Hyderabad), Europe (Spain), Europe (Zurich) and Middle East (UAE).

### [Amazon Rekognition launches face occlusion detection to improve identity verification accuracy](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-rekognition-face-occlusion-identity-verification-accuracy/)

Today, AWS announced the general availability of face occlusion detection to improve face verification accuracy. The new FaceOccluded attribute in Amazon Rekognition DetectFaces and IndexFaces APIs detects if the face in an image is partially captured or not fully visible due to overlapping objects, clothing, and body parts.

### [Amazon QuickSight launches dataset parameters to optimize slicing and dicing experiences](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-quicksight-dataset-parameters-slicing-dicing-experiences/)

We are introducing a new kind of parameter in Amazon QuickSight that will help users create interactive experiences in their dashboards. With Dataset Parameters, authors can optimize the experience and load time of dashboards that are connected-live to external SQL-based sources. When readers interact with their data, the selection and actions they make in controls, filters and visuals can be propagated to the data sources via live, custom, parameterized SQL queries. By mapping multiple Dataset Parameters to Analysis parameters, users can create a wide variety of experiences using controls, user actions, parameterized URLs, and calculated fields, as well as create dynamic visuals’ titles, descriptions, bookmarks, emails and PDF reports.

### [AWS Backup supports cross-Region backups in four new Regions](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-backup-cross-region-backups-four-regions/)

Today, we are announcing cross-Region backup support for Asia Pacific (Hyderabad), Asia Pacific (Melbourne), Europe (Spain), and Europe (Zurich) Regions. With cross-Region backups, you can store a copy of your backup data in AWS Regions other than where your primary backups are stored, helping you meet business continuity, disaster recovery, and compliance requirements. AWS Backup is a fully-managed, policy-driven service that allows you to centrally automate data protection across multiple AWS services spanning compute, storage, and databases. Using AWS Backup, you can centrally create and manage immutable backups of your application data, protect your data from inadvertent or malicious actions, and restore the with a few simple clicks.

### [Amazon CloudWatch Metric Streams adds support for filtering by metric name](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-cloudwatch-metric-streams-filtering-name/)

Amazon CloudWatch announces support for filtering by metric name on CloudWatch Metric Streams. With Metric Streams, you can create a continuous, near real-time stream of metrics to a destination of your choice. With this new capability you can now select the specific metrics you want to stream, providing additional filtering controls.

### [AWS Device Farm announces support for Rooted Android Private Devices](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-device-farm-rooted-android-private-devices/)

AWS Device Farm is an application testing service that provides web and mobile developers with desktop browsers and real mobile devices so that they can improve the quality of their apps. With today’s launch, we are adding support for Rooted Android devices in our private device fleets. With Rooted Android devices, customers will be able to perform advanced testing with expanded device access, including more metrics, battery benchmarking, and increased access to the device file system.

### [AWS Network Firewall now supports Reject action in stream exception policy](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-network-firewall-reject-action-stream-exception-policy/)

Today, AWS announces support for Reject action in stream exception policy of AWS Network Firewall to improve performance of latency-sensitive applications. AWS Network Firewall is a managed firewall service that makes it easy to deploy essential network protections for all your Amazon VPCs.

### [New in AWS Security Hub: detailed tracking of finding changes with finding history feature](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-security-hub-tracking-changes-finding-history-feature/)

AWS Security Hub, a cloud security posture management service that performs security best practice checks, aggregates alerts, and facilitates automated remediation, now features a detailed history of changes that have occurred for each finding in your environment. This view provides an immutable trail of changes, indicating what fields were changed, by whom, and when. You can now get more visibility into the changes made to your findings over time, making it easier to identify and investigate any suspicious or unauthorized changes.

### [SageMaker announces ml.inf2 and ml.trn1 instances for model deployment](https://aws.amazon.com/about-aws/whats-new/2023/05/sagemaker-ml-inf2-ml-trn1-instances-model-deployment/)

We are excited to announce the availability of ml.inf2 and ml.trn1 family of instances on Amazon SageMaker for deploying machine learning (ML) models for Real-time and Asynchronous inference. You can use these instances on SageMaker to achieve high performance at a low cost for generative artificial intelligence (AI) models, including large language models (LLMs) and vision transformers. In addition, you can use SageMaker Inference Recommender to help you run load tests and evaluate the price-performance benefits of deploying your model on these instances.

### [Amazon Kinesis Data Analytics is now available in the Asia Pacific (Melbourne) region](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-kinesis-data-analytics-melbourne-region/)

Amazon Kinesis Data Analytics makes it easier to transform and analyze streaming data in real time with Apache Flink. Apache Flink is an open source framework and engine for processing data streams. Amazon Kinesis Data Analytics reduces the complexity of building and managing Apache Flink applications. Amazon Kinesis Data Analytics for Apache Flink integrates with Amazon Managed Streaming for Apache Kafka (Amazon MSK), Amazon Kinesis Data Streams, Amazon OpenSearch Service, Amazon DynamoDB streams, Amazon Simple Storage Service (Amazon S3), custom integrations, and more using built-in connectors. You can learn more about Amazon Kinesis Data Analytics for Apache Flink here.

### [Amazon MSK adds support for Apache Kafka version 3.4.0](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-msk-apache-kafka-version-3-4-0/)

Amazon Managed Streaming for Apache Kafka (Amazon MSK) now supports Apache Kafka version 3.4.0 for new and existing clusters. Apache Kafka 3.4.0 includes several bug fixes and new features that improve performance. Key features include a fix to improve stability to fetch from the closest replica. Amazon MSK will continue to use and manage Zookeeper for quorum management in this release. For a complete list of improvements and bug fixes, see the Apache Kafka release notes for 3.4.0.

### [Amazon VPC IP Address Manager (IPAM) is now available in two additional AWS Regions](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-vpc-ipam-additional-aws-regions/)

Amazon VPC IP Address Manager (IPAM) makes it easier for you to plan, track, and monitor IP addresses for your AWS workloads. Amazon VPC IPAM is now available in two additional Regions: Asia Pacific (Hyderabad), and Asia Pacific (Jakarta).

### [Amazon EMR on EKS launches vertical autoscaling to auto-tune application resources](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-emr-eks-vertical-auto-scaling/)

We are excited to announce that Amazon EMR on EKS now supports vertical autoscaling, a feature to automatically tune the memory and CPU resources of EMR Spark Applications to adapt to the needs of the provided workload, offering a simplified mechanism for customers to tune resources, enhance reliability and optimize costs. Amazon EMR on EKS enables customers to run open-source big data frameworks such as Apache Spark on Amazon EKS without having to manage application provisioning themselves.

### [AWS Elemental MediaConvert now supports video passthrough](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-elemental-mediaconvert-video-pass-through/)

AWS Elemental MediaConvert now supports video passthrough for mezzanine video formats. You can now run MediaConvert jobs that preserve the original video essence without re-encoding for intra-frame-only video formats such as AVC Intra, Apple ProRes, VC3, and JPEG2000.

### [Amazon EMR on EKS now supports self-hosted notebooks for managed endpoints](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-emr-eks-self-hosted-notebooks-managed-endpoints/)

We are excited to announce the addition of self-hosted Jupyter notebooks as another mechanism to run interactive workloads via managed endpoints. Amazon EMR on EKS enables customers to run open-source big data frameworks such as Apache Spark on Amazon EKS. Amazon EMR on EKS customers setup and use a managed endpoint (available in preview) to run interactive workloads using an integrated development environments (IDEs) such as EMR Studio.

### [AWS Resilience Hub expands AWS Trusted Advisor and Amazon DynamoDB support](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-resilience-hub-trust-advisor-dynamodb-support/)

AWS Resilience Hub has expanded support for AWS Trusted Advisor and applications using Amazon DynamoDB. Resilience Hub provides a single place to define, validate, and track the resilience of your applications so that you can avoid unnecessary downtime caused by software, infrastructure, or operational disruptions.

### [AWS CodePipeline is now available in AWS GovCloud (US-East)](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-codepipeline-govcloud-us-east/)

Today, AWS announces the general availability of AWS CodePipeline in the AWS GovCloud (US-East) Region.

### [AWS Batch now includes dashboard customization on the console](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-batch-dashboard-customization-console/)

Today, we are excited to announce the launch of the customizable dashboard feature on the AWS Batch console, providing a single view that displays resource metrics based on your specific needs. This feature allows you to redesign and target different types of widgets in your preferred order, making it easier to troubleshoot issues using widgets such as job logs, job queue metrics, etc. You can also add a container insights widget to track your compute environment utilization.

### [AWS VSS application-consistent backups now supports PowerShell logging](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-vss-application-backups-powershell-logging/)

AWS VSS application-consistent backups now allows customers to take application-consistent backups while PowerShell Logging is enabled. AWS VSS application-consistent backups now incorporates a parallel processing ability that enables its EC2 Windows customers to achieve successful VSS backups in a broader range of environments. With this launch, customers will see improved compatibility between VSS and applications such as antivirus and application monitoring that require PowerShell logging to be enabled.

### [Zonal shift for Amazon Route 53 Application Recovery Controller now available in 18 additional Regions](https://aws.amazon.com/about-aws/whats-new/2023/05/zonal-shift-amazon-route-53-recovery-controller-18-regions/)

Zonal shift for Amazon Route 53 Application Recovery Controller is now available in all standard AWS Regions.

### [Amazon RDS for PostgreSQL now supports pgvector for simplified ML model integration](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-rds-postgresql-pgvector-ml-model-integration/)

Amazon Relational Database Service (RDS) for PostgreSQL now supports the pgvector extension to store embeddings from machine learning (ML) models in your database and to perform efficient similarity searches. Embeddings are numerical representations (vectors) created from generative AI that capture the semantic meaning of text input into a large language model (LLM). pgvector can store and search embeddings from Amazon Bedrock, Amazon SageMaker, and more.

### [Amazon WorkSpaces is now available in the AWS GovCloud (US-East) Region](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-workspace-aws-govcloud-us-east-region/)

Amazon WorkSpaces is now available in the AWS GovCloud (US-East) Region, an isolated AWS Region designed to host sensitive data and regulated workloads in the cloud for customers who have U.S. federal, state, or local government security and compliance requirements. For a list of regions where WorkSpaces is available, see the AWS Region Table. With this launch, you can now use Amazon WorkSpaces cloud desktops to help address data sovereignty requirements without the cost and complexity of building on-premises Virtual Desktop Infrastructure (VDI).

### [Amazon Kendra now supports content-based query suggestions](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-kendra-content-based-query-suggestions/)

Amazon Kendra is an intelligent search service powered by machine learning, enabling organizations to provide relevant information to customers and employees, when they need it.

### [Amazon Virtual Private Cloud now supports Bring Your Own IP in Asia Pacific (Hyderabad) Region](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-vpc-byoip-asia-pacific-hyderabad-region/)

Starting today, Bring Your Own IP (BYOIP) is available in Asia Pacific (Hyderabad) Region.

### [AWS announces Multi-AZ with Standby for Amazon OpenSearch Service](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-multi-az-standby-amazon-opensearch-service/)

Today, Amazon OpenSearch Service announces Multi-AZ with Standby, a new deployment option that enables 99.99% availability and consistent performance for business-critical workloads. With Multi-AZ with Standby, OpenSearch Service domains are resilient to potential infrastructure failures, such as a node or an Availability Zone (AZ) failure. Multi-AZ with Standby also ensures OpenSearch Service domains follow recommended best practices, simplifying configuration and management.

### [AWS Directory Service supports smart card authentication in AWS GovCloud (US-East) Region](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-directory-service-smart-card-authentication-govcloud-us-east-region/)

Starting today, you can use Common Access Card (CAC) and Personal Identity Verification (PIV) smart cards to authenticate users into Amazon WorkSpaces through your self-managed Active Directory (AD) and AWS Directory Service AD Connector in the AWS GovCloud (US-East) Region. Additionally, you can now use the AWS Management Console to configure smart card authentication with AWS Directory Service.

### [AWS CloudFormation Hooks is now available in 2 additional AWS Regions](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-cloudformation-hooks-additional-regions/)

Today, AWS CloudFormation has expanded the availability of AWS CloudFormation Hooks to the Middle East (Dubai) and Asia Pacific (Jakarta) Regions. With this launch, customers can deploy Hooks in these newly supported AWS Regions to help keep resources secure and compliant.

### [AWS announces new AWS Direct Connect location in Phoenix](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-direct-connect-location-phoenix/)

Today, AWS announced the opening of a new AWS Direct Connect location within the EdgeConnex PHX01 data center in Phoenix, Arizona. By connecting your network to AWS at the new location, you gain private, direct access to all public AWS Regions (except those in China), AWS GovCloud Regions, and AWS Local Zones.

### [AWS Network Firewall now supports Suricata HOME\_NET variable override](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-network-firewall-suricata-home-net-variable-override/)

AWS Network Firewall now allows you to override the Suricata HOME\_NET variable making it easy to use AWS managed rule groups in firewalls that are deployed in a centralized deployment model. Managed rule groups are collections of predefined, ready-to-use rules that AWS writes and maintains for you. The Suricata HOME\_NET variable of the managed rule group has the Classless Inter-Domain Routing (CIDR) range which is inspected by the AWS Network Firewall. Previously, you were unable to override HOME\_NET variable as it used the CIDR ranges of VPC where the firewall is deployed. If your firewall uses a central inspection VPC, AWS Network Firewall populates HOME\_NET with CIDR ranges of the inspection VPC, instead of the application (spoke) VPCs which you want to filter.

### [Announcing AWS User Notifications general availability](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-user-notifications-available/)

Amazon Web Services (AWS) is announcing the general availability of AWS User Notifications, a new service that enables you to centrally setup and view notifications from AWS services, such as AWS Health events, Amazon CloudWatch alarms, or Amazon EC2 instance state changes, in a consistent, human-readable format. You can view notifications across accounts, regions, and services in a Console Notifications Center, and configure delivery channels where you want to receive these notifications, like email, AWS Chatbot, and AWS Console Mobile App. Notifications include URLs to direct to resources on the AWS Console, where you can take take additional actions.

### [Amazon Rekognition improves accuracy of content moderation for images and videos](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-rekognition-content-moderation-images-videos/)

Amazon Rekognition content moderation is a deep learning-based feature that can detect inappropriate, unwanted, or offensive images and videos, making it easier to find and remove such content at scale. Starting today, Amazon Rekognition content moderation comes with an improved model for image and video moderation that significantly improves the detection of explicit, violence, and suggestive content. Customers can now detect explicit and violence content with higher accuracy to improve the end-user experience, protect their brand identity, and ensure that all content complies with their industry regulation and policies.

### [Aurora Serverless v2 is now available in AWS GovCloud (US) regions](https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-aurora-serverless-v2-govcloud-regions/)

Amazon Aurora Serverless v2, the next version of Aurora Serverless, is now available in 26 regions including AWS GovCloud (US-West) and AWS GovCloud (US-East) Regions.

### [Announcing Private API support for AWS AppSync GraphQL APIs](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-appsync-graphql-apis-private-api-support/)

AWS AppSync is a fully managed service that enables developers to build scalable, performant APIs that connect applications to data and events. Today, we announce the general availability of Private API support for AWS AppSync. With Private APIs, you can now create GraphQL APIs that can only be accessed from your Amazon Virtual Private Cloud (“VPC”).

### [AWS announces Amazon WorkSpaces Core in AWS GovCloud (US) Regions](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-amazon-workspaces-core-govcloud-regions/)

Amazon WorkSpaces Core is now available in the AWS GovCloud (US-East) Region and AWS GovCloud (US-West) Region. These are isolated AWS Regions designed to host sensitive data and regulated workloads in the cloud for customers who have U.S. federal, state, or local government security and compliance requirements. For a list of regions where WorkSpaces is available, see the AWS Region Table.

### [AWS Well-Architected Tool Deepens Integration with AWS Service Catalog AppRegistry](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-well-architected-tool-integration-service-catalog-appregistry/)

AWS is pleased to announce an enhancement to the AWS Well-Architected (WA) Tool integration with AWS Service Catalog AppRegistry (AR). This integration allows customers to now filter their AWS Trusted Advisor checks based on resources defined within application, helping surface the most relevant checks in the Well-Architected console.

### [AWS Console Mobile Application launches push notifications](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-console-mobile-application-launches-push-notifications/)

Amazon Web Services (AWS) is announcing the general availability of of Push Notifications for the AWS Console Mobile Application. You can now use AWS User Notifications to create actionable push notifications from AWS services, such as CloudWatch, to be delivered to your mobile device when a resource requires your attention. You can then receive push notifications, and learn more about events while on-the-go without needing to return to your computer. If you want to see more detail about a notification from your device’s lock screen, you can simply tap the notification, authenticate, and be directed to the relevant details screen inside the app.

### [AWS Health now publishes service health events to Amazon EventBridge in primary and backup Regions](https://aws.amazon.com/about-aws/whats-new/2023/05/aws-health-publishes-events-eventbridge-primary-backup-regions/)

AWS Health now publishes service health events to Amazon EventBridge. Previously, you could receive only account-specific events on this channel. Now, you can also receive events about the overall health of AWS services. This enables you to get a full picture of service issues that might affect the performance of your applications.
