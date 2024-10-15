---
title: "[2024] ✍️ Top 5 Best Headless CMS"
date: "2022-08-02"
lastmod: "2024-10-15"
categories: 
  - "cms"
tags: 
  - "headless-cms"
cover:
  Image: "/images/2022-08-02-top-5-best-headless-cms/best-headless-cms.webp"
author: "chart"
url: "/cms/2022/08/02/top-5-best-headless-cms/"
---

*Updated for 2024!*

I needed to select the best headless CMS for a small project I am working on and I found no other good articles on the best headless CMS. Read on for my comparison of all the top headless CMS offerings.

## What Is a Headless CMS?

A headless CMS is a tool for managing content for a static site with an easy to use GUI and text editor, typically a SaaS offering hosted by someone else for you. A headless CMS will offer you different sorts of users, just like you would have on WordPress or Medium. The Headless CMS has an API which returns your content and formatting details, you consume this on your static site to build out your pages.

### Why Would I Use a Headless CMS?

A headless CMS is an easy to use GUI for writing and managing content. They are particularly useful for small, static site projects. Instead of having to roll a write backend with auth, different sorts of users, and a text editing system which stores articles and formatting info in a DB, pictures in S3, ect, you simply use the GUI provided by the headless CMS to write and then build your pages with JSON you retrieve from an API.

### What To Look For In a Headless CMS

My criteria for headless CMS will be:

- Free tier: I want to get get by for as long as possible, or forever, with the free tier on my small projects. Ideally, the free tier should give 3-5 free users and plenty of free API calls
- Clean output: I want the JSON output to be easy to consume
- Broad adoption: I want the headless CMS to be widely used and profitable, If the CMS goes under in 3 years it's going to suck moving data out
- Pricing: If I do exceed the free tier, I want the pricing to be reasonable
    - For me, this isn't too big a deal, because once a project really starts growing it's time to consider moving off the headless CMS. Having a dependency like that for all a site's content seems very dangerous to me.

## Best Headless CMS

### [Sanity.io](http://sanity.io)

#### Reviews and Adoption

Sanity seems to have one of the best adoption rates. Their name pops up most in the forms questions about best Headless CMS and they have the most stars on GitHub for their open source components.

- Most up votes on Reddit, for whatever that is worth
- Check out the slack community for personal accounts: [https://slack.sanity.io/](https://slack.sanity.io/)

#### Features

- CDN with on demand image transformation(important for SEO)
- Multi-user real time text editor like Google docs with fine-grained and attributed document history (Awesome!)
- A focus on developer experience is a key marketing point

#### Pricing

See their pricing page: [https://www.sanity.io/pricing](https://www.sanity.io/pricing)

##### Free tier (pretty good! 🙂)
*Note: Sanities free tier has gotten a significant upgrade since the original 2022 post, more than double the free tier!*

- You get 20 users free!
- Unlimited Viewer tier users
- 250K API requests/Mo
- 1m API CDN Requests
- 100GB in assets
- 100GB Bandwidth (BOOO!)
- Only $.30 / extra 1 GB of bandwidth, a low cost if you can stay on the "free tier"
- Pay as you go for for more resources

<figure>

![sanity.io headless CMS is free forever](/images/2022-08-02-top-5-best-headless-cms/sanity-free-forever.webp)

<figcaption>

Free forever, according to their site.

</figcaption>

</figure>

##### Paid tiers (Not bad in comparison ¯\\\_(ツ)\_/¯ )

![basic sanity pricing](/images/2022-08-02-top-5-best-headless-cms/sanity-pricing-tiers.webp)

![full sanity pricing tiers](/images/2022-08-02-top-5-best-headless-cms/sanity-pricing-tiers-2.webp)

#### My Review

You start off with Sanity by installing the cli with npm. The CLI will walk you through authentication and setting up a demo project.

Once that demo project is ready, you'll run Sanity locally with `npm run start`

When pulling up the Sanity UI at http://localhost:3333/, first I authenticate. Clicking around, it seems like a pretty neat tool. Checking inspector, I see that to retrieve and write data I am hitting sanity APIs. Sanity calls the data store their "content lake," this is how the real-time Google docs like multi-user editor works. I wonder, what is the benefit of having me run the UI from my machine instead of hosting it for me if I am just pulling all the data from Sanity?

I decided to follow this getting started guide(https://www.sanity.io/docs/getting-started), it's very helpful. It walks you through all the basics of creating new data and accessing it from your site.

### [Prismic](https://prismic.io/)

A lackluster free tier but good functionality and the paid plans start out cheap and get more expensive incrementally. If you are working on a personal project where 1 admin user will be sufficient or the $7 or $15 per month for a few users is worth it, this may be the CMS for you.

#### Reviews and Adoption

- I read many reports of Prismic being enjoyed for small projects
- There is a large community online

#### Features

- Easy UI for content creators
- Preview and Content Scheduling
- Good API
- CDN is good
- A/B testing
- Image Optimization

#### Pricing

https://prismic.io/pricing

##### Free Tier (Good for 1 person, bad for a small team)

- 1 User (BOOOOO!)
- 4 million API calls per month
- Unlimited Documents
- Unlimited Types
- Unlimited Image Optimizations
- 100GB CDN

#### Paid Tier

- $10/mo for 3 users
- $25/mo for 7 users
- $150/mo for 25 users
- $675/mo for Unlimited users
    - 1TB CDN
    - Weekly Backups

### [Contentful](https://www.contentful.com/)

#### Reviews and Adoption

I've seen Contentful's name pop up a lot in the last year, a lot of the reviews online seem pretty popular. People seem to like it but they do complain about the price.

#### Features

- GraphQL
- Multiple user roles
- SDK for many languages (Nice!)

#### Pricing

See their pricing page: https://www.contentful.com/pricing/

##### Free tier (Meh 🤷, be careful of getting locked into that paid tier)

> Get your API keys and start hacking. Ideal for individual developers working on personal sites, hackathons, or philanthropic projects.

- 5 User free
    - Either admin or editor role, no custom roles
- 2 Locales
- Bandwidth: 100GB / month
- 1M API calls/month
- 50MB Assets 🤮
    - That's going to run out very very fast if you have a few photos per page

##### Paid pricing (🤮)

- Starts at $300/mo! Hope you don't need to move past free tier for your small personal project

### [Strapi](https://strapi.io/)

#### Reviews and Adoption

- Gets a lot of positive press in the forms from many users
- High quality docs and easy to follow deployment guides

> "Clients find it straight forward and easy to use for managing content."
> 
> [\- Background\_Fan\_9600 on Reddit  
> ](https://www.reddit.com/r/webdev/comments/res76s/which_headless_cms_would_work_best_for_this_small/)

#### Features

- GraphQL
- Open Source
- Strong community

### Roll Your Own Headless CMS with Wordpress

If you are already really into the WordPress ecosystem this is an option. Simply use a WordPress deployment and call it's API to build your articles from. This may be a good choice if you are trying to migrate off of WordPress.

Sources:

- [https://www.reddit.com/r/webdev/comments/res76s/which\_headless\_cms\_would\_work\_best\_for\_this\_small/](https://www.reddit.com/r/webdev/comments/res76s/which_headless_cms_would_work_best_for_this_small/)
- https://www.reddit.com/r/javascript/comments/955k3q/whats\_headless\_cms\_would\_you\_recommend\_and\_why/
