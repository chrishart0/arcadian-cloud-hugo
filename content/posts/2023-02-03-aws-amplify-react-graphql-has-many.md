---
title: "Example: Using an @hasmany in AWS Amplify with React NextJS"
date: "2023-02-03"
categories: 
  - "aws"
tags: 
  - "amplify"
  - "aws"
  - "graphql"
author: "chart"
url: "/aws/2023/02/03/aws-amplify-react-graphql-has-many/"
---

Here is an example of how to use an @hasmany relationship in AWS Amplify with React. I am attempting to create a user and then associate many ToDo items to this user. I have created a model for the user and a model for the ToDo item with a graphql schema. I associate the ToDo Item to the User with an @hasMany. All of this is done while using authentication.

## The Code for an @hasmany relationship in AWS Amplify with React NextJS

### Graphql schema

Notice that I am assigning authentication to the owner.

- I have each Cognito user create and manager their own user model

- A cognito user can manage their own friends, which get read access to their User info

- Auth is passed through the @hasmany to the ToDoItem

```
# https://docs.amplify.aws/cli-legacy/graphql-transformer/auth/#multiple-authorization-rules

type User @model
  @auth(rules: [
    { allow: owner },
    { allow: owner, ownerField: "friends", operations: [read] }
  ]) {
    owner: String! @primaryKey
    friends: [String]
    ToDoItems: [ToDoItem] @hasMany
  }


# https://docs.amplify.aws/cli/graphql/data-modeling/#configure-a-secondary-index
type ToDoItem @model 
@auth(rules: [
    { allow: owner },
  ]) {
  id: ID!
  title: String!
  description: String!
}
```

## React Code

Here are the functions I am using in react to fetch the user, create the user, and create the ToDo items.

```
// Fetch the user, if there is no user for signed in user then create a new one
  async function fetchUser() {
    console.log("Fetching user")
    const apiData = await API.graphql({ query: getUser, variables: { owner: user.username } });
    if (apiData.data.getUser !== undefined ) {
      const userFromAPI = apiData.data.getUser;
      console.log("Found user: ", userFromAPI)
      setUserModel(userFromAPI);
    } else {
      console.log("Creating user")
      createUser();
    }
  }

  // Create new user with hardcoded friend for testing purposes
  async function createUser() {
    const data = {
      owner: user.username,
      friends: ['test2'],

    };
    await API.graphql({
      query: createUserMutation,
      variables: { input: data },
    });
    fetchUser(); //ToDo: Move to then
  }

// Create a new ToDo item assigned to the signed in user
  async function createToDo(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
      description: form.get("description"),
      userToDoItemsOwner: user.username
    };
    await API.graphql(graphqlOperation(createToDoMutation, { input: dataToDo }))

    fetchUser();
    event.target.reset();
  }
```

## Sources:

- [https://docs.amplify.aws/cli-legacy/graphql-transformer/auth/#multiple-authorization-rules](https://docs.amplify.aws/cli-legacy/graphql-transformer/auth/#multiple-authorization-rules)

- [https://docs.amplify.aws/cli/graphql/data-modeling/#configure-a-secondary-index](https://docs.amplify.aws/cli/graphql/data-modeling/#configure-a-secondary-index)
