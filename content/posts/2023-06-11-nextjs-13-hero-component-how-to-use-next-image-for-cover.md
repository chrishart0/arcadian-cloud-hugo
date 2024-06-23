---
title: "NextJS 13 Hero Component - How to Use Next/Image for Cover"
date: "2023-06-11"
categories: 
  - "frontend"
tags: 
  - "javascript"
  - "nextjs"
author: "chart"
url: "/frontend/2023/06/11/nextjs-13-hero-component-how-to-use-next-image-for-cover/"
---

![NextJS 13 next/image used for cover and hero](/images/image.jpg)

See in the above example how my cover image looks. At the time of writing this, this page is MyChefAI.com/diabetes.

Here is my full hero image component

```
import { styled } from "@mui/system";
import Link from "next/link";
import Image from 'next/image';

//MUI Components
import { Box, Button, Typography } from "@mui/material";

function DiabetesLandingHero({handleScroll}) {
  const HeroImage = styled("div")(({ theme }) => ({
    position: "relative",
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    color: "white",
    textAlign: "center",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.4)",
  }));

  const ImageOverlay = styled("div")(({ theme }) => ({
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent black overlay
  }));

  const TextContent = styled("div")(({ theme }) => ({
    position: "relative",
    paddingTop: theme.breakpoints.up("md") ? "10vh" : "5vh",
    color: theme.palette.common.white,
    position:"relative",
    margin: theme.spacing(1),
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // text shadow
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
    zIndex: 1, // Added a z-index so that this div stays above the Image component
  }));

  return (
    <HeroImage>
      <Image
        src="/hero-image.webp"
        alt="Hero Image"
        priority={true}	
        loading='eager'
        fill
        style={{objectFit:"cover"}}
        quality={100}
      />
      <ImageOverlay />
      <TextContent>
        <Typography variant="h2" component="h1" sx={{ paddingBottom: "2vh", fontSize: (theme) => theme.breakpoints.down('md') ? '2.5rem' : '3rem' }}>
          My Chef AI for Diabetes
        </Typography>
        <Typography variant="h4" gutterBottom sx={{ fontSize: (theme) => theme.breakpoints.down('md') ? '1.5rem' : '2rem' }}>
          Recipes crafted to your unique needs.
        </Typography>
        <Typography variant="h6" sx={{ fontSize: (theme) => theme.breakpoints.down('md') ? '1.2rem' : '1.5rem' }}>
          Managing Type 1 or 2 diabetes? Turn your dietary needs into tasty, tailored meals. Make your food work for you.
        </Typography>
        <Link href="/chat" passHref>
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 4, color: "primary.contrastText", fontSize: (theme) => theme.breakpoints.down('md') ? '0.9rem' : '1.5rem' }}
          >
            Join & Start Cooking!
          </Button>
        </Link>
      </TextContent>
      <Box
        sx={{
          position: "absolute",
          bottom: 8,
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
        }}
        onClick={handleScroll}
      >
      </Box>
    </HeroImage>
  );
}

export default DiabetesLandingHero;
```

## How to use next/image for cover image

As show in the codeblock above, how you can specifically use Next/Image as a cover is this:

```
<div style={{position:"relative"}}>
  <Image
      src='/cover.webp'
      fill
      style={{objectFit:"cover"}}
    />
</div>
```
