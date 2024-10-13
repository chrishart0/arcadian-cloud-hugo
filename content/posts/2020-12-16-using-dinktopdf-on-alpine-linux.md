---
title: "Using DinkToPDF on Alpine Linux"
date: "2020-12-16"
categories: 
  - "devops"
  - "linux"
tags: 
  - "alpine"
  - "dinktopdf"
  - "libwkhtmltox"
  - "linux"
cover:
  Image: "/images/DinkWork.png"
author: "chart"
url: "/linux/2020/12/15/using-dinktopdf-on-alpine-linux/"
---

One of my recent projects has been containerizing a .NET Core 2.1 application which uses DinkToPDF for producing PDFs. I always default to Alpine for my containers. Here I'll describe using DinkToPDF on Alpine Linux.

At the time of writing, the current version of Alpine in 3.12, that is what I started with.

## My Alpine Linux Environment

I am doing my testing in a container built from `mcr.microsoft.com/dotnet/core/aspnet:2.1-alpine3.12`

## The Issue with DinkToPDF

This error was getting throw each time I tried to use Dink.

```
System.AggregateException: One or more errors occurred. (Unable to load shared library 'libwkhtmltox' or one of its dependencies. In order to help diagnose loading problems, consider setting the LD_DEBUG environment variable: Error loading shared library liblibwkhtmltox: No such file or directory) ---> System.DllNotFoundException: Unable to load shared library 'libwkhtmltox' or one of its dependencies. In order to help diagnose loading problems, consider setting the LD_DEBUG environment variable: Error loading shared library liblibwkhtmltox: No such file or directory
   at DinkToPdf.WkHtmlToXBindings.wkhtmltopdf_init(Int32 useGraphics)
   at DinkToPdf.PdfTools.Load()
   at DinkToPdf.BasicConverter.Convert(IDocument document)
   at DinkToPdf.SynchronizedConverter.<>n__0(IDocument document)
   at DinkToPdf.SynchronizedConverter.<>c__DisplayClass5_0.<Convert>b__0()
   at System.Threading.Tasks.Task`1.InnerInvoke()
   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
--- End of stack trace from previous location where exception was thrown ---
```

I did a lot of research and tried utilizing the LD\_DEBUG environment variable but to no avail. Dink is a wrapper for libwkhtmltox to be used in C# and it looks like one of libwkhtmltox's dependencies is broken.

Finally, in a StackOverflow post a co-worker and I had already been through several times I noticed someone's provided Dockerfile was using Alpine 3.7. I had tried installing all of the libs from this exact Dockerfile but never the Alpine version...

## Solution - Use Alpine 3.7

You must use Alpine 3.7 or older in order to use DinkToPDF, at least, I was not able to get it to work on any newer versions.

Possibly my issue was tied specifically to the aspnet or 2.1 dotnet containers, but I did not test anything other than changing the Alpine version.

Here is all I needed to get Dink working:

```
ARG REPO=mcr.microsoft.com/dotnet/core/aspnet
#FROM $REPO:2.1-alpine3.12
FROM $REPO:2.1-alpine3.7

.....

#####################
## DinkToPDF Setup ##
#####################

#Install/Download required libs for Dink 
RUN curl -o /usr/share/MemberWorkflow/libwkhtmltox.so --location https://github.com/rdvojmoc/DinkToPdf/raw/master/v0.12.4/64%20bit/libwkhtmltox.so \
  && apk --no-cache add libxext libxrender libc6-compat \
  #Install fonts
  font-noto \
  # Install cultures (same approach as Alpine SDK image)
  icu-libs

# Disable the invariant mode (set in base image)
ENV DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=false

#####################

.....
```

I started down the path of trying to build libwkhtmltox from source. Before I got too far into that I was able to get this easier and quicker fix figured out.

There was also an issue with getting certain specific symbols such as currency signs to display properly due to lack of configuration of cultures. For more info about the cultures fix check [this GitHub comment](https://github.com/rdvojmoc/DinkToPdf/issues/53#issuecomment-748191456) by parasmm or follow this link to [andrewlock.net](http://andrewlock.net/).

## Follow up

DinkToPDF hasn't been updated in almost 4 years. I assume some library was updated and is not backward compatible. If you figure out how to use DinkToPDF on a newer version of Alpine Linux or have any more ideas please leave a comment.
