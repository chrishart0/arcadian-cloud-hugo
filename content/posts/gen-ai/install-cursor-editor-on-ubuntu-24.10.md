---
title: "How to Install Cursor on Ubuntu 24.04 or Ubuntu 24.10"
date: "2024-10-13"
categories: 
  - "Gen AI"
tags: 
  - "Cursor"
  - "Ubuntu"
  - "AppImage"
  - "Linux"
  - "Code Editor"
  - "AI"
  - "Gen AI"
cover:
  Image: "/images/gen-ai/cover-images/how-to-install-cursor-ubuntu-24-10.webp"
author: "chart"
url: "how-to-install-cursor-ubuntu-24-10"
---

## How to Install Cursor on Ubuntu 24.04 or Ubuntu 24.10

I've got machine running both these versions of Ubuntu and ran into slightly different issues on both installs. 

**Quick Answer**: Head to the [Cursor homepage](https://www.cursor.com), download the AppImage, make it executable, and run it. If you want it to show up in your app menu, then use App Image Launcher.

Cursor is an AI-powered code editor, and getting it up and running on Ubuntu 24.10 is pretty straightforward. Here's how to do it:

### Step 1: Download the AppImage
Go to the [Cursor homepage](https://www.cursor.com) and grab the Cursor `.AppImage` file for Linux. This AppImage is a self-contained package that makes installation hassle-free.

![how to install cursor on Ubuntu 24.10](/images/gen-ai/how-to-install-cursor/cursor-homepage.webp)

### Step 2: Make the AppImage Executable
After downloading, open your terminal, navigate to the directory where the `.AppImage` is, and run:

```bash
chmod +x cursor-0.42.2x86_64.AppImage
```

*Note: Replace `cursor-0.42.2x86_64.AppImage` with the actual filename, likely there will be a different version number by the time you read this.*

### Step 3: Run the AppImage
Launch Cursor by running:

```bash
./cursor-0.42.2x86_64.AppImage  --no-sandbox
```

If you run into a security warning related to AppArmor, you might need to create an AppArmor profile to get it running.

### Step 4: Optional - App Picker Integration

![Cursor from Ubuntu App Launcher menu](/images/gen-ai/how-to-install-cursor/cursor-in-app-launcher.webp)

Right now, you'll have to launch cursor by calling the executable each time. If you make cursor available from the Ubuntu launcher as show in my screenshot, here are the steps.

#### Option 1: App Image Launcher
*This is the option I used for Ubuntu 24.10*

Install App Image Launcher: 
* <https://github.com/TheAssassin/AppImageLauncher>
* <https://github.com/TheAssassin/AppImageLauncher/wiki/Install-on-Ubuntu-or-Debian>

*NOTE: App Image Launcher PPA is not available for Ubuntu 24.10, you will have to install the .deb*

* Download the latest .deb from: <https://github.com/TheAssassin/AppImageLauncher/releases>
* Install it with the following command, but make sure to change it to the file path you downloaded`sudo apt install  ./appimagelauncher_2.2.0-travis995.0f91801.bionic_amd64.deb`

I put in a feature request with App Image Launcher to support Ubuntu 24.10: <https://github.com/TheAssassin/AppImageLauncher/issues/669>

#### Option 2: Gear Lever
*This is the option I used to Ubuntu 24.04*

![Install gear level app image launcher on Ubuntu 24.04](images/gen-ai/how-to-install-cursor/gear-level-review.webp)

GitHub: <https://github.com/mijorus/gearlever>
FlatHub: <https://flathub.org/apps/it.mijorus.gearlever>

## What Makes Cursor Cool?

Cursor is built to be an AI-first code editor, similar to GitHub Copilot but fully integrated. It helps with auto-completion, code generation, and debugging—basically, it aims to make coding faster and less of a slog. If you hit any bumps during installation, especially with AppArmor, the [Cursor Community Forum](https://forum.cursor.com) is a great place to find solutions other users have shared.

## Troubleshooting Tips
- **AppArmor Issues**: If Cursor doesn't launch, you might need to create an AppArmor profile. Check out the detailed guides on the [Cursor Community Forum](https://forum.cursor.com).
- Another GitHub thread of Troubleshooting the install: <https://askubuntu.com/questions/1516057/secure-install-cursor-sh-in-ubuntu-24-04>

## Conclusion
With these steps, Cursor should be good to go on Ubuntu 24.10. If you run into trouble, the [Cursor Community Forum](https://forum.cursor.com/t/cursor-install-ubuntu-24-04/4838/2) is your best bet for support and troubleshooting tips.

Happy coding with Cursor, and enjoy the productivity boost from having an AI-powered coding buddy right in your editor!