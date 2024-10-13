---
title: "Copy Firefox Logins and Bookmarks to a new computer or login on Linux"
date: "2020-05-04"
categories: 
  - "linux-desktop"
tags: 
  - "backup-and-restore"
  - "firefox"
  - "help"
  - "linux"
cover:
  Image: "/images/2020-05-04_08-56.png"
author: "chart"
url: "/linux/linux-desktop/2020/05/04/copy-firefox-logins-and-bookmarks-to-a-new-computer-or-login-on-linux/"
---

How to copy Firefox saved logins and password, autofill data, and bookmarks over to a new computer, a new profile or a new user. While its best to use a more secure password manager such as keeper or Lastpass, if you do have some of your passwords stored in the built-in Firefox password manager this will show you step by step how to copy them over.

## PreReq: Figure out which profile is default

Open your preferred terminal.  
With the following commands, list the Firefox profiles and match up the default profile with it's folder in ~/.mozilla/firefox/

```
firefox -p
ls ~/.mozilla/firefox/
```

![](/images/2020-05-04_08-56-1024x374.png)

The profile which is highlighted by default is your default firefox profile. Match that up to a profile folder. In my case my default profile is _Default User_ and it's folder is '_uviebd1h.Default User_'.

Ensure Firefox is killed then move on to the next section to start copying over the data.

```
#Grabs process IDs for any process with firefox in the name and kills it 
#If awk is grabbing the wrong data change $2 to $1
ps aux | grep firefox | awk '{print $2}' | xargs kill -9 $2

#Check to ensure nothing made it out alive
ps aux | grep firefox
```

## How to copy Firefox saved password, auto fill data, and bookmarks

- Saved passwords need these files
    - key4.db
    
    - logins.json

- Autofill needs: autofill-profiles.json

- Bookmarks are imported through the gui from an auto bookmark backup in the bookmarkbackups/ dir

**Make sure to change out the backup location and new profile from the below script with your own values.**  
\- Ensure you escape any spaces with \\

```
#FILL THIS IN WITH YOUR LOCATIONS
newProfileLocation=~/.mozilla/firefox/4bnsokg4.Test\ Profile
backupProfileLocation=~/Documents/Backups/02dt3k8a.Default\ Profile

###############################
#Move passwords and login data#
###############################

#Key4.db is needed for decrypting the saved passwords
#Logins.json Containers the login information
sudo cp "$backupProfileLocation"/key4.db "$newProfileLocation" 
sudo cp "$backupProfileLocation"/logins.json "$newProfileLocation" 

#autofill-profiles.json describes itself
sudo cp "$backupProfileLocation"/autofill-profiles.json "$newProfileLocation"

#latest bookmark backup from your old profile
cp -p "$backupProfileLocation/bookmarkbackups/$(ls  "$backupProfileLocation/bookmarkbackups/" | tail -1)" "$newProfileLocation/bookmarkbackups/"

#Set yourself as owner for the moved files
sudo chown -R $USER:$(id -g -n) "$newProfileLocation" 
```

Alternatively you may copy these files files over by hand. If something goes wrong make sure to double check the file permissions or try running just that part of the script.

Launch firefox, Logins and Passwords will now be populated.

![](/images/2020-05-04_17-36.png)

## How to import the copied Firefox bookmarks

Copying the latest bookmark into the new profiles bookmarks directory is a prerequisite to this. If you did not run the script above follow these steps:

- Go to the backed up profile

- Grab the latest file from the directory _bookmarkbackups_

- Paste it into the directory of the new profile

In Firefox, click on the bookmark icon then click on _bookmarks_:

![](/images/2020-05-04_17-37-1024x246.png)

Click on _Show All Bookmarks:_

![](/images/2020-05-04_17-40.png)

Click on Import and Backup > Restore > Latest date > ok

![](/images/2020-05-04_17-41.png)

Your bookmarks should now all be populated.
