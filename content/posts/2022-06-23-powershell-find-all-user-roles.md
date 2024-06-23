---
title: "PowerShell Find All User Roles"
date: "2022-06-23"
categories: 
  - "windows"
coverImage: "PowerShellFindAUsersRole.png"
author: "chart"
url: "/windows/2022/06/23/powershell-find-all-user-roles/"
---

What is the PowerShell command to find all roles for your user?

## PowerShell Find All User Roles Command

### Find all roles for your own user with PowerShell

```
$userRoles = ([adsisearcher]"samaccountname=$env:UserName").FindAll()|select - ExpandProperty properties

$userRoles.memberof | sort
```

Find all roles for another user with PowerShell

```
$user = "userNameHere"

$userRoles = ([adsisearcher]"samaccountname=$user").FindAll()|select - ExpandProperty properties

$userRoles.memberof | sort
```
