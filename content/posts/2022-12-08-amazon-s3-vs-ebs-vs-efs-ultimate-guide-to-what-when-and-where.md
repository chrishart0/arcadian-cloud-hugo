---
title: "Amazon S3 vs EBS vs EFS - Ultimate guide to what, when, and where"
date: "2022-12-08"
categories: 
  - "aws"
cover:
  Image: "/images/coverImage.webp"
author: "chart"
url: "/aws/2022/12/08/amazon-s3-vs-ebs-vs-efs-ultimate-guide-to-what-when-and-where/"
---

## Amazon S3

![Amazon s3 Logo. S3 vs EBS vs EFS](/images/s3Logo-1-1024x344.webp)

### What is Amazon S3

**What is Amazon S3 put simply?**

Amazon Simple Storage Service (S3) is a scalable, high-performance object storage service that is designed for storing large amounts of unstructured data, such as videos, images, audio files, and backups. It offers high durability and availability, as well as the ability to access data from anywhere on the internet. S3 even offers the capability to host static sites with a simple web server, prefect for Angular or React.

### Use cases

You've certainly downloaded an image or PDF from Amazon S3 when accessing a website. In fact, many of the images stored on this blog come from Amazon S3.

Amazon S3 is commonly used for storing and managing large amounts of unstructured data, such as images and videos, backups, and other types of data that can be accessed via the internet. For example, a media company may use S3 to store and manage its video content, or a cloud-based backup service may use S3 to store its customers' data.

- Website content such as html, css, javascript, and image / media content

- User uploaded content

- Storing and managing data for analytics and machine learning applications

- Serving as a data lake for storing and managing large amounts of data for use in big data analytics

- Storing and managing data for cloud-based backup and disaster recovery services

- Storing and managing data for cloud-based file sharing and collaboration services.

## Amazon EBS

![EBS logo: S3 vs EBS vs EFS](/images/ebsLogo.webp)

### What is Amazon EBS

**What is Amazon EBS put simply?**

Amazon Elastic Block Store (EBS) is a block-level storage service that is designed for use with Amazon Elastic Compute Cloud (EC2) instances. It provides the ability to create and attach virtual disks, called EBS volumes, to EC2 instances for use as additional storage. EBS volumes can be easily scaled up or down to meet changing storage needs.

### Use cases

Amazon EBS is used in conjunction with EC2 instances for storage, your EBS volume is your hard drive. For example, an e-commerce company may use EBS volumes to store its product catalog and customer data, while an online gaming platform may use EBS to store game levels and player data.

- Providing storage for EC2 instances

- The bootable drive for an EC2 instance

- Extra storage for an EC2 instance

- Storing and managing data for databases, such as MySQL or PostgreSQL running locally on an EC2 instance

## Amazon EFS

![](/images/efslogo-256x300.webp)

### What is Amazon EFS

**What is Amazon EFS put simply?**

Amazon Elastic File System (EFS) is a fully-managed networked file storage service that is designed for use with EC2 instances and AWS container services such as ECS and EKS, recently AWS has also allowed Lambda functions to connect to EFS drives. It provides a shared, distributed file system that can be accessed from multiple EC2 instances simultaneously, allowing for seamless file sharing and collaboration. EFS is highly scalable and can support thousands of concurrent connections.

### Use Cases

Amazon EFS is commonly used for file storage and sharing among multiple EC2 instances, or with the AWS container services EKS and ECS. For example, a web development team may use EFS to store and share project files and site files for Wordpress, or a cloud-based application may use EFS for storing and managing user data.

- Providing shared, distributed file storage for multiple EC2 instances

- Storing and sharing project files for web development teams

- Storing and managing user data for cloud-based applications

- Providing storage for big data analytics and machine learning applications

- Providing storage for cloud-based backup and disaster recovery services

- Providing storage for cloud-based file sharing and collaboration services

Unless you have a special use case, we at arcadian.cloud do not recommend using EFS with lambda. This is really only useful if your lambda function mus access directly the files system of your EC2 instances or containers.

## Comparisons

### EFS vs S3: When to use Amazon S3 and when to use Amazon EFS

**EFS vs S3**

The core difference in the EFS vs S3 use case is EFS is designed to be attached to the file as a networked drive where as S3 is designed to be accessed via an API. If you need one networked drive attached to the file system of several EC2 instance / containers simultaneously then go with EFS. If you need highly redundant storage which your application can access via an API then go with S3. 
  
Amazon EFS is particularly suited for providing shared, distributed file storage for multiple EC2 instances and containers. When systems need to share a networked file system EFS is the right choice. In all other cases of needing to retrieve data, S3 is the way to go.

### EBS vs S3: Using Amazon EBS and using Amazon S3

**EBS vs S3**

The core difference in the EBS vs S3 use case is EBS is designed to be attached to the file system as a drive where as S3 is designed to be accessed via an API. If you need another drive for your EC2 instance then use EBS, if you need to program redundant, high availability storage for you application, be it running on EC2, a container, or a lambda, then S3 is what you need to use.

There are a few key reasons why someone might choose to use Amazon S3 instead of Amazon EBS:

- AWS S3 is designed for storing and managing large amounts of unstructured data, while EBS is designed for providing storage for EC2 instances.

- S3 offers high durability and availability, with data stored across multiple availability zones for added redundancy. EBS offers high availability, but is only available within a single availability zone.

- S3 can be easily accessed from anywhere on the internet, while EBS can only be accessed from within the same availability zone.

- S3 is highly scalable, with the ability to store virtually unlimited amounts of data. EBS is also scalable, but is limited by the size of the EC2 instance to which it is attached.

- S3 is a cost-effective solution for storing large amounts of data, with pricing based on the amount of data stored and the number of requests made. EBS pricing is based on the size of the EBS volume and the amount of data transferred.

Overall, S3 and EBS are both useful storage services, but S3 is typically the better choice for storing and managing large amounts of unstructured data.

## Video comparing EBS vs S3 vs EFS

https://www.youtube.com/watch?v=6vNC\_BCqFmI

## Conclusion

Overall, S3 is best suited for storing large amounts of unstructured data, EBS is best for use with EC2 instances as storage, and EFS is best for file storage and sharing among multiple EC2 instances or ECS containers.
