---
title: "How to Use Tesseract OCR to Convert PDFs to Text"
date: "2022-02-20"
categories: 
  - "linux"
tags: 
  - "ocr"
  - "tesseract"
cover:
  Image: "/images/tesseract-ocr1-1.png"
author: "chart"
url: "/linux/2022/02/20/how-to-use-tesseract-ocr-to-convert-pdfs/"
---

I have some PDFs which I need to get typed up into text to edit. I decided to go with Tesseract OCR as it seems to be the best tool for the job. Here are the steps for how to use Tesseract OCR to convert PDFs to text.

## Installation

First things first, get Tesseract CLI installed. Follow the instructions [here](https://launchpad.net/~alex-p/+archive/ubuntu/tesseract-ocr-devel), these are linked to from the official Tesseract docs.

```
sudo add-apt-repository ppa:alex-p/tesseract-ocr-devel
sudo apt-get update
sudo apt install tesseract-ocr tesseract-ocr-eng
```

_Note: the package didn't properly place the eng.traineddata file for me. If you get an error about this refer to the troubleshooting steps at the bottom of this article._

## Usage

In the CLI, cd into the directory with the images or PDFs you want to convert.

Remember, Tesseract cannot convert PDFs, so first we must convert the PDF to a .tiff file, then we can convert the .tiff to text.

```
#Convert the PDF to a .tiff file, change out the file names at the end of this command to your own
#Note: If you get an error about security policy check the troubleshooting section below
convert -fill white -draw 'rectangle 10,10 20,20' -background white +matte -density 300 Loring-Lombard-Autobiogrphy-Pages1-10.pdf Loring-Lombard-Autobiogrphy-Pages1-10.tiff

#Tesseract will add .txt to the end of the new file name
tesseract Loring-Lombard-Autobiogrphy-Pages1-10.tiff Loring-Lombard-Autobiogrphy-Pages1-10
```

<figure>

![](/images/convert-command-1024x148.png)

<figcaption>

I was able to safely ignore these errors. Once the PDF to .tiff conversion finished I ran the tesseract command to created the text file.

</figcaption>

</figure>

![](/images/tesseract-convert.gif)

You should now have a text file created. It really is as easy as that to Use Tesseract OCR to Convert PDFs to text files.

## Troubleshooting

### Missing Language Training Data

If you see something like the bellow error message it means you missed installing the English training data.

```
Error opening data file /usr/share/tesseract-ocr/5/tessdata/eng.traineddata
Please make sure the TESSDATA_PREFIX environment variable is set to your "tessdata" directory.
Failed loading language 'eng'
Tesseract couldn't load any languages!
Could not initialize tesseract.
```

Simply install the _tesseract-ocr-eng_ package with the below command:

```
sudo apt install tesseract-ocr-eng
```

If this doesn't fix it then check out [this GitHub issue](https://github.com/tesseract-ocr/tesseract/issues/221) for more troubleshooting steps.

### Convert Tool Security Policy Error

```
convert-im6.q16: attempt to perform an operation not allowed by the security policy `PDF' @ error/constitute.c/IsCoderAuthorized/421.
convert-im6.q16: no images defined `converted-pdf.tiff' @ error/convert.c/ConvertImageCommand/3229.
```

To fix the above error you need to edit or get rid of the imagemagic security policy. The simplest solution is to temporarily rename the security policy but this may be dangerous if you forget to put it back. Instead, I recommend just edit the policy and remove the offending policy.

```
sudo sed -i 's/^.*policy.*coder.*none.*PDF.*//' /etc/ImageMagick-6/policy.xml
```

Checkout [this StackOverflow post](https://stackoverflow.com/questions/52861946/imagemagick-not-authorized-to-convert-pdf-to-an-image) for more details on working around this error.
