---
title: "Convert ACSM Files on Linux to ePub"
date: "2022-04-01"
categories: 
  - "ereader"
tags: 
  - "drm"
  - "ereader"
  - "kobo"
cover:
  Image: "/images/Screenshot_20220401-123212_Gallery.jpg"
author: "chart"
url: "/ereader/2022/03/31/convert-acsm-files-on-linux-to-epub-from-the-kobo-store/"
---

When using Linux and buying ebooks, you will have to convert ACSM files on Linux to ePub. The Kobo store and other popular ebook stores don't just give you a usable ePub, they often come in ACSM format. To actually read the book you've purchased you need to open that ACSM file up in Adobe Digital Editions and download an ePub. Then if you want to do anything with your book, like put it onto your own [e-reader](https://arcadian.cloud/uncategorized/2022/03/13/fix-cant-connect-to-kobo-e-reader-on-linux/), you're going to need to remove the DRM. The process is absurd but it's the way things are right now.

## What is an ACSM File?

First let's answer, what is an ACSM file? ACSM stands for Adobe Content Server Message. This is a proprietary file format which acts as a "key" to the actual eBook hosted on Adobe Content Server. That's right, the ACSM file you got from Kobo, Google Books, or somewhere else isn't actually an eBook locked behind DRM, but essentially just a link to the book which you now need to download from Adobe.

## How to Convert ACSM Files on Linux to EPUB

For this guide I am using PopOS, these commands should work on any other Ubuntu-based distro as well.

### Install the Tooling

To do this, we are going to use WINE.

First, enable running 32-bit architectures if you have not already.

```
sudo dpkg --add-architecture i386
```

Install WINE from [WineHQ](https://www.winehq.org/). (If you hit any snags check the [official install guide](https://wiki.winehq.org/Ubuntu))

```
# Add the WineHQ repo and needed tooling
wget -qO- https://dl.winehq.org/wine-builds/winehq.key | sudo apt-key add -

sudo apt install software-properties-common

sudo apt-add-repository "deb https://dl.winehq.org/wine-builds/ubuntu/ $(lsb_release -cs) main"
```

Update your package list and install WineHQ

```
sudo apt update

sudo apt install --install-recommends winehq-stable winetricks winbind
```

Verify WINE is setup properly

```
wine --version
```

![Wine Version](/images/wine-version.png)

### Convert ASCM to EPUB Using Adobe Digital Editions

Install dotnet40 as we need to for ADE, make sure to click through all the options

```
winetricks corefonts dotnet40
```

<figure>

![Convert ASCM to EPUB Using Adobe Digital Editions - install dotnet 40](/images/installing-dotnet.png)

<figcaption>

Installing dotnet40 may take a moment

</figcaption>

</figure>

Download the [Adobe Digital Editions](https://www.adobe.com/solutions/ebook/digital-editions/download.html) installer for Windows

![](/images/Download-ade.png)

Next, use WINE to install ADE

```
wget https://adedownload.adobe.com/pub/adobe/digitaleditions/ADE_4.5_Installer.exe -P ~/Downloads

wine ~/Downloads/ADE_4.5_Installer.exe 
```

Again, click through all the options but avoid installing Norton, lol. Once the install is complete ADE should automatically open up.

![Convert ASCM to EPUB - Adobe Digital Editions running on Linux](/images/ADE-pop-up.png)

Now go to `help` > `authorize compute`r and sign in to Adobe, you will need to create an Adobe account if you don't have one already.

<figure>

![sign in to ade on linux](/images/ade-auth.png)

<figcaption>

If Adobe Digital Editions crashes on you then use this command to open it back up.

</figcaption>

</figure>

```
wine ~/.wine/drive_c/Program\ Files\ \(x86\)/Adobe/Adobe\ Digital\ Editions\ 4.5/DigitalEditions.exe
```

## Convert ACSM Files on Linux to EPUB

Inside Adobe Digital Editions, open the ACSM file. You can find your Linux file system inside the Z:/ drive.

The book you imported will now be available inside the wine file system in `Documents/My Digital Editions/`

```
ls ~/.wine/drive_c/users/$USER/Documents/My\ Digital\ Editions/
```

![epub made from ADE in wine on linux](/images/first-epub-in-wine.png)

Install python + deps which will be needed to DeDRM the epub

```
winetricks python27 # this should also install pip
wine pip install pycryptodome
```

[Download a 6.x.x release (https://github.com/apprenticeharper/DeDRM\_tools/releases)](https://github.com/apprenticeharper/DeDRM_tools/releases) of the DeDRM tool and extract `DeDRM_Plugin/adobekey.py` and `DeDRM_Plugin/ineptepub.py`.

_Please note that 7.x.x versions will not work_.

![find the right .py](/images/find-the-right.py_-1.png)

Now run adobekey.py in wine with Python

```
 wine ~/.wine/drive_c/Python27/python.exe adobekey.py 
```

<figure>

![](/images/run-adobekey.png)

<figcaption>

You should see a message about adobekey\_1.der

</figcaption>

</figure>

Now use your locally installed python to deDRM the epub. Don't forget to update those file paths.

```
python3 ineptepub.py adobekey_1.der ~/.wine/drive_c/users/chris/Documents/My\ Digital\ Editions/The\ Unicorn\ Project.epub ~/Downloads/test.epub
```

<figure>

![Convert ACSM Files on Linux to EPUB](/images/converted-epub.png)

<figcaption>

I can see the converted .epub!

</figcaption>

</figure>

### HUZZAH! It worked!

![Open the converted ACSM File to EPUB on Linux](/images/converted-epub-opens-275x300.png)

Now I can actually use the book that I paid for. You would be forgiven for thinking it would have been easier to just pirate the book since it likely would have been.

To convert more books just import them into ADE and then run the conversion command again

```
python3 ineptepub.py adobekey_1.der ~/.wine/drive_c/users/chris/Documents/My\ Digital\ Editions/another.epub ~/Downloads/another.epub
```

<figure>

[![DRM Free on my e-reader](/images/Screenshot_20220401-123212_Gallery-1024x793.jpg)](https://www.amazon.com/Kobo-Touchscreen-Waterproof-Adjustable-Temperature/dp/B09HSRGZRL?crid=11MY6UC4HOI27&keywords=kobo&qid=1665086485&qu=eyJxc2MiOiIzLjYxIiwicXNhIjoiMy4xNSIsInFzcCI6IjMuMDIifQ%3D%3D&sprefix=kobo%2Caps%2C122&sr=8-4&ufe=app_do%3Aamzn1.fos.18ed3cb5-28d5-4975-8bc7-93deae8f9840&linkCode=ll1&tag=arcadiancloud-20&linkId=3408b549ad967ca9110e6c352f3b5efb&language=en_US&ref_=as_li_ss_tl)

<figcaption>

Here it is, ready to be read on my Kobo Libra 2 e-reader. I really love my Kobo e-reader and I heartily recommend it. Click on the link below to take a look at it on Amazon. This is an affiliate link so I'll get a commission if you make a purchase.

</figcaption>

</figure>

### [I love my Kobo e-reader. See it here on Amazon!](https://amzn.to/3Fqo36f)

## Sources

[https://wiki.winehq.org/Ubuntu](https://wiki.winehq.org/Ubuntu)

[https://github.com/BentonEdmondson/knock](https://github.com/BentonEdmondson/knock)

[https://superuser.com/questions/1027608/how-to-read-an-acsm-file-on-linux](https://superuser.com/questions/1027608/how-to-read-an-acsm-file-on-linux)

[https://askubuntu.com/questions/1301283/adobe-digital-edition-not-opening-in-wine](https://askubuntu.com/questions/1301283/adobe-digital-edition-not-opening-in-wine)
