---
title: "Amazon Macie: A Comprehensive Data Security and Privacy Solution"
date: "2023-04-01"
categories: 
  - "aws"
cover:
  Image: "/images/Screenshot-from-2023-04-01-00-28-29.png"
author: "ghope"
url: "/aws/2023/03/31/amazon-macie-a-comprehensive-data-security-and-privacy-solution/"
---

![Amazon Macie](/images/Screenshot-from-2023-03-31-22-46-57.png)

In today's world of data-driven business, protecting sensitive data is of utmost importance for businesses and end users alike. Amazon Macie seeks to address this concern by providing a fully managed data security and data privacy service that uses advanced machine learning and pattern matching algorithms to discover and protect your sensitive data inside Amazon S3.

Amazon Macie simplifies data security by providing comprehensive data discovery, monitoring, and protection features for data stored in S3 buckets. Macie has a multi-account architecture that can be implemented via AWS Organizations or by explicitly inviting accounts. The architecture starts with one or more S3 buckets and then the Macie service itself. Once enabled within the account(s), Macie begins the discovery of data that can be classified as personally identifiable information (PII), personal health information (PHI), or financial information, such as AWS access keys, SSH keys, bank account numbers, credit card numbers, health insurance numbers, drivers license numbers, personal addresses, and much more.

## Data Identifers

Amazon Macie’s overarching focus is to identify and inventory sensitive data using data identifiers. There are two types of data identifiers - managed and custom. Managed identifiers are built into the product and use a combination of techniques and criteria, including machine learning and pattern matching, to analyze the data that you specify. They are designed to detect sensitive data types for many countries and regions, including multiple types of personally identifiable information, personal health information, and financial data.

Custom identifiers, on the other hand, are proprietary and can be used to look for specific data that your business needs to identify and control. For instance, you might use a regular expression, known as a ‘Regex’, to search for certain patterns of specific text within your business, such as employee IDs or performance reports.

## Finding Events

Using Amazon Macie, you can create ‘discovery jobs’ that use these identifiers to analyze your S3 buckets that you specify. When Macie finds sensitive data, these jobs generate ‘finding events’, which can be viewed interactively or integrated with other AWS services, such as Security Hub or EventBridge. Finding events are categorized into two types - Policy Findings and Sensitive Data Findings. Policy Findings are generated when the policies or settings for an S3 bucket are changed in a way that reduces the security of the bucket or its objects after Macie is enabled. Sensitive Data Findings are generated when Macie discovers sensitive data in S3 objects that you configure it to analyze.

![Amazon Macie, AWS, Machine Learning](/images/Screenshot-from-2023-03-31-22-44-09-1024x494.png)

## Pricing

You are able to get started with Amazon Macie by taking advantage of its 30-day free trial which is featured automatically when you enable Macie on your account for the first time. After the 30 days, charges are pro-rated per day based on the total number of buckets in the your account being evaluated for bucket-level security and access controls and as well as the amount of data being process for sensitive data discovery. Additionally, Macie charges only for the bytes processed in the supported object types that it inspects during sensitive data discovery jobs. As part of discovery jobs, you will also incur charges based on the standard S3 GET and LIST requests. See Amazon S3 pricing: [https://aws.amazon.com/s3/pricing/](https://aws.amazon.com/s3/pricing/)

## Conclusion

In conclusion, Amazon Macie is a comprehensive data security and privacy solution that leverages machine learning and pattern matching to discover and protect sensitive data stored in AWS S3 buckets. With its data discovery, monitoring, and protection features, Macie can help businesses of all sizes protect their valuable data.

Image credits belong to [https://learn.cantrill.io/](https://learn.cantrill.io/)
