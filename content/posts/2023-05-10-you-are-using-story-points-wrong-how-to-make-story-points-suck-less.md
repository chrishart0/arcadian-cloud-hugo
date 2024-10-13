---
title: "You Are Using Story Points Wrong: How to Make Story Points Suck Less"
date: "2023-05-10"
categories: 
  - "agile"
tags: 
  - "thought-leadership"
author: "chart"
url: "/agile/2023/05/09/you-are-using-story-points-wrong-how-to-make-story-points-suck-less/"
cover:
  Image: "/images/1_Q8HekRFvdLAfvIeY2ZcsNw.jpg"
---

<figure>

![How it feels to use story points correctly](/images/1_K39HLairchX5nxaYMtZqag.jpg)

<figcaption>

Realistic representation of how you will actually look when you finish reading this article and show off your story pointing knowledge to your friends, family, and co-workers.

</figcaption>

</figure>

If you want to skim, just read _What are Story Points_, _Purposes of Story Points_ and _Example of a team using relative pointing._

### Preamble

Amongst people in the software industry there is a lot of confusion around story points. This blog is my summary of the opinions of great minds on the topic of story points with some of my own opinions thrown in as well.

Story points are part of scrum, right? No. Go read the scrum guide([link](https://scrumguides.org/scrum-guide.html)) yourself, there is no mention of story points or even user stories.

The goal of this article is not to give the reader a set of hard rules. Instead, the reader should work to understand this as a starting point and then evolve into what best suits the team.

### **What are Story Points?**

> Story points are an _arbitrary and imprecise, relative_ estimate of _effort_, _complexity_, and _uncertainty_.

#### Relative

Story points are relative to previously sized stories.

![Big brain story points](/images/1_Q8HekRFvdLAfvIeY2ZcsNw.jpg)

#### Arbitrary

A team invents their own pointing system. The first story sized is given an arbitrary point value as decided by the team, from then on stories are sized in relation to that story.

This means that the first sets of stories won’t be as useful as they have nothing to be relative to and many assumptions have to be made. The first stories are intended to be the first step in making future relative decisions, so this is okay.

#### Size Parameters

What goes into a size?  
– Complexity  
– Uncertainty  
– Effort

Learn from the past to improve future estimates!

#### What Story Points are Not

- An estimate of time  
    – It is very difficult to estimate time, it is hard to get it right  
    – Story points trade off precision to make estimating easier

- Exact end dates

- Measure of exact time spent

- Time tracking

- To be used for comparing team’s “output”  
    – Story points are, by definition, relative and unique to each team.   
    – Thus, comparing one team’s velocity to another team’s velocity is pointless(_pun intended_)  
    – Once points leave a team they are useless

### Why Story Points?

> Story points are an imprecise forecast of a team’s capacity/velocity, helping to develop shared understanding, and useful in negotiating task priority.

Before deciding to use story points it is crucial to have a good understanding of why you want to use them. What benefits will the team get from story points? What are the downsides?

Nowadays(2021), many experts recommend not using story points at all. Mostly, this sentiment comes from companies being tempted to weaponize story points against their developers. [Read more about the no story points debate here.](https://rigidity.medium.com/agile-waste-story-points-pt-1-a9df2572d0a3)

#### Why should we use story points? Why not just estimate time?

Cost of estimation is low.

- Their imprecision allows us to more quickly make estimations

High accuracy and low precision.

- Relative sizing requires less effort to be accurate than time based estimations. Asking how complex / effortful is this thing compared to that thing is much easier than estimating how long it will take

- Imprecision of story points allows for quick estimation

### Purposes of Story Points

_Please note that this is a contentious topic, there is debate on what all uses story points should be put._

#### Negotiating Priority

“If you want A by the end of the month then we are going to have to push B until next month.”

Stops the team from committing to doing too much in a period of time(iteration).

- A metric to be used to push back against excessive work and prevent burn-out

> Helps the team to say no.

- “Provides healthy boundaries for the team”

- Be careful not to show the numbers, they are for the product team’s use only. Don’t allow story points to be turned into a currency

Useful for using stories on a [prioritization matrix](https://www.atlassian.com/team-playbook/plays/prioritization-matrix).

![dilbert priority](/images/1_bh8xz1EWa8JTBoyRFXtMEw.png)

#### Develop Shared Understanding

If a story is sized, it shows the team has developed a shared understanding of what it will take to complete it.

Story points are a prompt for conversation to get the whole team to understand what will go into completing the task.

> “What are you thinking so I can think like that?”

- Get in the same head space about everything which will go into a story

**Example:**

- John: “This is about a 1, we just need to make a quick update to the Shaw-Fujikawa Translight function.”

- Jill: “You’re forgetting we have not implemented automated testing for rupture generation, this will be a 3.”

#### Slicing Signal

A signal that a task has not been broken down enough

- “That is a lot of points, has this been broken down enough?”

- “Can this fit into the iteration?”

### How to use Story Points

- Make sure to remember the first few iterations the estimates will be highly inaccurate, over time this will improve

- Map story points to approximate effort/complexity/uncertainty

#### Story Pointing Frameworks

There are a number of frameworks for story points.

**Here are a few, listed below:**

1) **T-shirt sizes:** _easy to start with, low complexity_

- (S, M, L, XL)

2) **Integers**: _tools like Jira can provide burndown charts, scope creep indicators and other metrics when using integers_

- Standard Integers: (1, 2, 3, 4, 5, ect)

- Fibonacci-style scale (1, 2, 3, 5, 8)

- Fibonacci-style scale without 2 (1, 3, 5, 8)  
    – Why use Fibonacci? “Less is more” [Here is a good article](https://www.mountaingoatsoftware.com/blog/why-the-fibonacci-sequence-works-well-for-estimating)

3) **Time based:** _antiquated, not recommended (_[_Read more here on why story points are better than time_](https://www.scruminc.com/story-points-why-are-they-better-than/)_)_

- Time

- [Ideal Time](http://www.extremeprogramming.org/rules/iterationplanning.html)

#### Tips for Choosing a Framework

Items to consider when the team is deciding on their story pointing framework

**Less is more**

You don’t want to allow for too many options, this will lead to analysis paralysis. Remember, story points are meant to be imprecise, we don’t want to spend too much time trying to pick the perfect number.

We are trading off precision for ease of use on purpose.

**Upper Limit**

Decide on an upper limit of effort/complexity (e.g. your team may decide that for them a 13 is “too large for one feature/story”)

If a story breaks the upper limit then it needs to be broken down into smaller pieces.

**Have it your way**

Teams should pick their own standard, it shouldn’t be imposed by anyone else. Remember, story points are to be used by the team for themselves.

### Planning for new teams

![dilbert planning](/images/1_Hd9Hb3z1gjvLvq8tiMdafQ.jpg)

When a new team comes together their estimates will be difficult to agree on and very uncertain, that’s okay, they don’t have a point of reference yet.

Find 1–2 well defined/known stories and understand “what a 1 vs 3 vs 5 looks like”. Once the team has these stories, they can start to use _relative estimation_.

#### Golden Story

Some teams use what is called a _golden story_. This is the first story estimated for a product. It is then used as a point of reference throughout the lifecycle of the product.

For another take on golden stories checkout [this article on the Blizzard Computing blog](https://blizzardcomputing.com/wp/blog/index.php/2016/06/27/why-estimating-stories-in-agile-is-painful-part-1/).

### Example of a team using relative pointing

The team decides on 1–8 of the Fibonacci sequence, so 3 is a medium 1 is extra small, and 8 is extra large.

**Login is a story of about medium size, the team guesses, so they decide to size it as a 3**

**Next sprint, the team sizes logout**

3 parameters  
– **Complexity:** Logout is a lot simpler than login  
– **Effort:** There will be a lot less work to do than with login  
– **Uncertainty:** Since the team just worked on login, the uncertainty is low, they are familiar with the code around this functionality and have a good idea of what needs to be done

Assessing logout in relation to Login, the complexity is lower, there is less effort needed, and the uncertainty is low

The team decides to size logout as a 1

**The following sprint, the team needs to estimate a story for allowing the user to update their email**

3 parameters  
– **Complexity:** Updating email touches a lot of pieces, the UI, the API, the DB, as well as having the user verify the new email. Certainly this is less complex than login but probably a bit more complex than logout  
– **Effort:** The complexity suggests the effort will be between logout and login  
– **Uncertainty:** There isn’t too much uncertainty here, the team has sent emails from the application before and nothing else is too experimental

The team decides this is larger than logout but smaller than login, so they estimate it at a 2.

**Next up, the business has asked us to port over 102 static pages from an old application**

3 parameters  
– **Complexity:** Complexity is very low, these are just simple html and css pages which need to be copied over, maybe a few small css changes here and there just make them fit in  
– **Effort:** Effort is high, there are 102 pages to port over, largely this is an effort in using copy and paste  
– **Uncertainty:** The uncertainty is low, just some basic pages added to the UI

While the complexity and uncertainty are low, the team decides, in relation to the other stories, this should be sized the same as login due to the large amount of effort it will take to move overall the pages over   
**_The story gets a 3._**

#### Example Takeaways

Notice how in the example we did not discuss time, but always talked about effort, complexity, and uncertainty. This is how story points should be thought of.

> _These sizes are not meant to be precise, they are meant to be quick and easy._

### What to watch out for

#### Talking about days

Remember to use relative effort/complexity/uncertainty, not time.

#### Spending too much time discussing process intricacies

Don’t get stuck in the weeds. If there are some “3s” and a “5” then don’t spend a lot of time discussing if you should introduce a “4”

#### Management manipulating with the team’s points

![dilbert estimation](/images/1_FWKUeksDQ7y3TMxRjJb8Kw.jpg)

### What happens when the team doesn’t agree?

The team discusses the story with the goal of achieving shared understanding.

#### Figure out why the team does not agree

Is there something part of the team isn’t thinking about? Refer back to the example in the _Develop Shared Understanding_ section.

Maybe less experienced devs are estimating higher due to more uncertainty on their part. In this case, pick a team norm for how to handle this and move on quickly. Some possible norms would be taking the average if there is a wide range or taking the larger size if the sizes are close.

The pattern to avoid is spending many minutes during a team-wide meeting debating back and forth. If the story needs more more work, drop it and save it for later, don’t waste the whole teams time.

### History

The term ‘Story points’ originated in the late 1990s from the XP concept of “ideal time”. Ron Jeffries may have been the originator of this term.

Read more about story point history here:

- [https://ronjeffries.com/articles/019-01ff/story-points/Index.html](https://ronjeffries.com/articles/019-01ff/story-points/Index.html)

- Origins section: [https://www.agilealliance.org/glossary/points-estimates-in/](https://www.agilealliance.org/glossary/points-estimates-in/)

### More Resources

#### Blogs

- [Story Points by Martin Fowler](https://martinfowler.com/bliki/StoryPoint.html)

- [Myth 14: Refinement is a required meeting for the entire Scrum Team](https://www.scrum.org/resources/blog/myth-14-refinement-required-meeting-entire-scrum-team)

- [Why Estimating Stories In Agile Is Painful, Part 1](https://blizzardcomputing.com/wp/blog/index.php/2016/06/27/why-estimating-stories-in-agile-is-painful-part-1/)

- [Allthethings Prioritization Matrix](https://www.atlassian.com/team-playbook/plays/prioritization-matrix)

- [Story Points Revisited](https://ronjeffries.com/articles/019-01ff/story-points/Index.html)

#### Videos

- [What are Story Points? by Mountain Goat Software(Mike Cohn)](https://www.youtube.com/watch?v=VsSaolMtkKU&vl=en)

#### Books

- [Clean Agile by Robert C. Martin](https://www.oreilly.com/library/view/clean-agile-back/9780135782002/) — p64-p81

_Don’t forget to leave a comment and share this article if you found it helpful._
