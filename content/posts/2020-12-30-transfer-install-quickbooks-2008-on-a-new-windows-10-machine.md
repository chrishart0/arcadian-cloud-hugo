---
title: "Transfer QuickBooks 2008 to a new Windows 10 Computer"
date: "2020-12-30"
categories: 
  - "support"
tags: 
  - "quickbooks"
  - "quickbooks-pro"
  - "quickbooks2008"
  - "windows-10"
coverImage: "OpenQuickbooks.png"
author: "chart"
url: "/support/2020/12/30/transfer-install-quickbooks-2008-on-a-new-windows-10-machine/"
---

My dad got a new Windows PC for Christmas and requested help with installing QuickBooks 2008 pro so he wouldn't have to pay to upgrade, here are the steps. Here I'll describe how to transfer a previously purchased QuickBooks 2008 to a new Windows computer.

This process is somewhat convoluted, if you aren't coming from and IT background please read each step carefully. I hope this guide helps save you some time and Merry Christmas!

##### First, download your version of QuickBooks from Intuit.

https://www.quickensupportline.com/download-the-old-quickbooks-pro-version/

##### Next, install 7zip

[https://www.7-zip.org/download.html](https://www.7-zip.org/download.html)

#####   
Unzip the Installer

- Navigate to your downloads folder
- Right click on the QuickBooksPro2008 installer
- Hover over _7-Zip_
- Click Extract to "Setup\_QuickBooksPro2008\\"
- If a popup comes up about replacing a file click "Yes All"

![](/images/ExpandArchive.png)

##### Start the Installation Process

- Open the _Setup\_QuickBooksPro2008_ folder
- Open the _InternetTarget_ link
    - It should say "An error occurred while processing your request."

![](/images/dlm3-1024x131.png)

- In the URL bar of your browser, change dlm2 to dlm3, the link should now be as so: [dlm3.download.intuit.com/SBD/QuickBooks/2008/R10/QuickBooksPro2008.exe](http://dlm3.download.intuit.com/SBD/QuickBooks/2008/R10/QuickBooksPro2008.exe)
- Hit enter and you should be prompted to download a file, place that into the newly made _Setup\_QuickBooksPro2008_ folder
- Double click on the newly downloaded file
    - Follow through the installer prompts as normal

![](/images/DownloadedFile.png)

Find your license to enter during the install process

- In your old install of QuickBooks go to help > Manage My License > Change My License Number
- Your License and Product Number will now be displayed on the screen

Once the install is complete you can open QuickBooks and start to import your data.

![](/images/OpenQuickbooks-1024x438.png)

##### Now you must transfer the data

- On the old PC in QuickBooks do File > Save Copy or Backup > Backup Copy
- Follow through the rest of the prompts and save it to a USB drive
- Transfer the USB to the new PC
- Open QuickBooks on the new PC
- File > Open or Restore Company > Restore a backup copy > next > Local backup > locate the backup on the USB > Click the rest of the way through and enter password

All Done! It's that simple to transfer a previously purchased QuickBooks 2008 to a new Windows computer.
