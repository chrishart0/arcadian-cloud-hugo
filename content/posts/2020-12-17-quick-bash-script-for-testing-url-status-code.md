---
title: "Quick bash script for testing URL status code"
date: "2020-12-17"
categories: 
  - "devops"
  - "linux"
tags: 
  - "bash"
  - "curl"
  - "linux"
cover:
  Image: "/images/Tux_Mono.svg_.png"
author: "chart"
url: "/linux/2020/12/17/quick-bash-script-for-testing-url-status-code/"
---

Here is a quick script I have written in Bash to get URL status codes.

An application in a container I have been working was failing to retrieve a file from somewhere on the internet. I needed to determine if the issue was with the container(possibly networking related) or the application. I threw together this little reusable script utilizing curl.

<script src="https://gist.github.com/chrishart0/42db7314356bfb7e2ae2dbc8d11f44e9.js"></script>
