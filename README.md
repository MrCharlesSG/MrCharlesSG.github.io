<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->


<!-- TOC end -->

<!-- TOC --><a name="portfolio-customization-guide"></a>
# Portfolio Customization Guide

Welcome to the Portfolio Customization Guide! This step-by-step tutorial will help you personalize your portfolio website. Whether you want to change your content, images, colors, or fonts, this guide will walk you through everything you need to make the website uniquely yours.

<!-- TOC --><a name="table-of-contents"></a>
## Table of Contents

   * [1. Project Structure Overview](#1-project-structure-overview)
   * [2. Step-by-Step Implementation](#2-step-by-step-implementation)
   * [3. Customizing Page Information](#3-customizing-page-information)
      + [1. Change the Page Title and Navbar:](#1-change-the-page-title-and-navbar)
      + [2. Update Contact Links:](#2-update-contact-links)
   * [4. Customizing Content (Text)](#4-customizing-content-text)
      + [Home Section:](#home-section)
      + [About Section:](#about-section)
      + [Projects Section:](#projects-section)
   * [5. Changing Style and Colors](#5-changing-style-and-colors)
      + [1. Professional Palette:](#1-professional-palette)
      + [2. Futuristic Palette:](#2-futuristic-palette)
      + [3. Pastel Palette:](#3-pastel-palette)
      + [Fonts:](#fonts)
   * [6. Replacing Images](#6-replacing-images)
      + [Favicon:](#favicon)
   * [7. Modifying Scripts and Animations](#7-modifying-scripts-and-animations)
      + [Particle Animation:](#particle-animation)
      + [Adding New Functionality:](#adding-new-functionality)
   * [8. Removing Sections You Don’t Need](#8-removing-sections-you-dont-need)

---

<!-- TOC --><a name="1-project-structure-overview"></a>
## 1. Project Structure Overview

The portfolio website is organized into several files and folders. Each one serves a specific purpose:

<!-- TOC --><a name="key-files"></a>
### Key Files:

- **`index.html`**: The main structure of the website (think of it as the skeleton).
- **`styles.css`**: Controls how everything looks (colors, fonts, etc.).
- **`script.js`**: Adds interactive features (like animations and button clicks).
- **`assets/info.json`**: Contains the data displayed across your website (your name, projects, skills, etc.).

<!-- TOC --><a name="folder-breakdown"></a>
### Folder Breakdown:

```
portfolio/
│
├── index.html             (Main structure of the site)
├── styles.css             (Styling and design details)
├── script.js              (Interactive features)
│
└── assets/
    ├── info.json          (Data for website content)
    ├── favicon.ico        (Website icon)
    │
    ├── img/
    │   ├── home.jpg       (Background image for the homepage)
    │   ├── quote.jpg      (Background image for the quote section)
    │   └── personal-foto.jpeg  (Your profile photo)
    │
    ├── projects/
    │   └── (Your project images go here)
    │
    └── fonts/
        └── (Font files for customizing text)

```

---

<!-- TOC --><a name="2-step-by-step-implementation"></a>
## 2. Step-by-Step Implementation

Here’s how to get your portfolio up and running:

1. **Copy All Files** to your computer.
2. **Change the Page Title and Navbar Name**: Open `index.html` and make these updates.
3. **Update Your Info**: Open the `info.json` file and add your personal details like your name, projects, skills, etc.
4. **Replace the Images**: Swap out placeholder images with your own.
5. **Customize the Colors**: Open `styles.css` and adjust colors to match your style.
6. **Test It Locally**: Open `index.html` in a web browser to see how your changes look.
7. **Upload**: Once you're happy with your customizations, upload all the files to your website hosting.

---

<!-- TOC --><a name="3-customizing-page-information"></a>
## 3. Customizing Page Information

There are a few places where you need to edit the text that appears on your website.

<!-- TOC --><a name="1-change-the-page-title-and-navbar"></a>
### 1. Change the Page Title and Navbar:

To change the title shown in the browser tab and the name in the navbar:

- Open `index.html`.
- Find the `<title>` tag inside the `<head>` section. Change "Carlos Serrano Gutierrez" to your own name or website title.
    
    ```html
    <title>Your New Title</title>
    
    ```
    
- Find the navbar section in the `<nav>` tag. Update the name "CSG" to your brand or name:
    
    ```html
    <a class="navbar-brand" href="#home">Your Brand</a>
    
    ```
    

<!-- TOC --><a name="2-update-contact-links"></a>
### 2. Update Contact Links:

If you want to update your social media links (like GitHub or LinkedIn), find the contact section inside `index.html`. Replace the existing links with your own.

For example, to change the GitHub and LinkedIn links:

```html
<section id="contact">
  <div class="social-icons">
    <a href="https://github.com/YourNewGitHubProfile" target="_blank" class="social-icon">
      <i class="fab fa-github"></i>
    </a>
    <a href="https://linkedin.com/in/YourNewLinkedInProfile/" target="_blank" class="social-icon">
      <i class="fab fa-linkedin"></i>
    </a>
  </div>
</section>

```

If you want to add another social media link, place it in the spot labeled `new link position`.

---

<!-- TOC --><a name="4-customizing-content-text"></a>
## 4. Customizing Content (Text)

Most of the content you see on the website is stored in the **`info.json`** file. Open it to modify your name, bio, education, projects, etc.

<!-- TOC --><a name="home-section"></a>
### Home Section:

Change your name, subtitle, and resume link:

```json
"home": {
  "name": "Your Name<br>Surname",
  "subtitle": "A short description, highlighting key points about you",
  "resume": "/assets/YourCV.pdf"
}

```

<!-- TOC --><a name="about-section"></a>
### About Section:

Add your full name, professional title, description, and photo:

```json
"about": {
  "name": "Your Full Name",
  "title": "Your Professional Title",
  "description": "Tell people about yourself, your career, and interests...",
  "image": "assets/img/your-photo.jpg"
}

```

<!-- TOC --><a name="projects-section"></a>
### Projects Section:

For each project, include its title, description, tech stack, and image.

```json
"projects": [
  {
    "title": "Project Name",
    "stack": "Technologies Used",
    "description": "A brief overview of what this project does...",
    "image": "assets/projects/project-image.png",
    "url": "https://github.com/yourusername/yourproject"
  }
]

```

---

<!-- TOC --><a name="5-changing-style-and-colors"></a>
## 5. Changing Style and Colors

To change the look of your website, update the colors in **`styles.css`**. Look for the following section at the top of the file:

```css
:root {
    --dark-navy: rgb(36, 42, 53); /* Dark background color */
    --darker-navy: rgb(21, 23, 28); /* Darker background color */
    --bg-light: #f8f9fa;           /* Light background color */
    --primary: rgb(229, 56, 137);  /* Primary/accent color */
    --primary-dark: #AC1754;       /* Dark version of primary color */
    --dark-navy-trasparent: rgba(36, 42, 53, 0.7);
    --dark-navy-little-trasparent: rgba(36, 42, 53, 0.2);
    --primary-trasparent: rgba(229, 56, 137, 0.4);
}
```

You can change these values to customize the colors used on the site.

Here are some color palette suggestions:

<!-- TOC --><a name="1-professional-palette"></a>
### 1. Professional Palette:

```css
:root {
    --dark-navy: rgb(36, 42, 53); /* Dark background color */
    --darker-navy: rgb(21, 23, 28); /* Darker background color */
    --bg-light: #f8f9fa;           /* Light background color */
    --primary: rgb(255, 121, 51);  /* Orange accent color */
    --primary-dark: rgb(217, 94, 36); /* Darker version of orange */
    --dark-navy-trasparent: rgba(36, 42, 53, 0.7);
    --dark-navy-little-trasparent: rgba(36, 42, 53, 0.2);
    --primary-trasparent: rgba(255, 121, 51, 0.4);
}
```

<!-- TOC --><a name="2-futuristic-palette"></a>
### 2. Futuristic Palette:

```css
:root {
    --dark-navy: rgb(36, 42, 53); /* Dark background color */
    --darker-navy: rgb(21, 23, 28); /* Darker background color */
    --bg-light: #f8f9fa;           /* Light background color */
    --primary: rgb(0, 210, 242);   /* Bright blue accent color */
    --primary-dark: rgb(0, 162, 195); /* Darker blue accent */
    --dark-navy-trasparent: rgba(36, 42, 53, 0.7);
    --dark-navy-little-trasparent: rgba(36, 42, 53, 0.2);
    --primary-trasparent: rgba(0, 210, 242, 0.4);
}
```

<!-- TOC --><a name="3-pastel-palette"></a>
### 3. Pastel Palette:

```css
:root {
    --dark-navy: rgb(36, 42, 53); /* Dark background color */
    --darker-navy: rgb(21, 23, 28); /* Darker background color */
    --bg-light: #f8f9fa;           /* Light background color */
    --primary: rgb(255, 179, 186); /* Soft pink accent color */
    --primary-dark: rgb(228, 143, 151); /* Darker soft pink */
    --dark-navy-trasparent: rgba(36, 42, 53, 0.7);
    --dark-navy-little-trasparent: rgba(36, 42, 53, 0.2);
    --primary-trasparent: rgba(255, 179, 186, 0.4);
}
```

Be aware that dark-navy refers to navbar an filter for the images, primary is the accent color, and the bg-light is the contrary of dark-navy

</aside>

<!-- TOC --><a name="fonts"></a>
### Fonts:

To change the font:

1. Download your desired font from [Google Fonts](https://fonts.google.com/).
2. Save it in the `assets/fonts/` folder.
3. In **`styles.css`**, update the `font-family` and the `@font-face` to use your new font:

```css
@font-face {
    font-family: 'Your-font';
    src: url('assets/fonts/Your-font.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

body {
    font-family: "Your-font", sans-serif;
    ....
}

.....

```

---

<!-- TOC --><a name="6-replacing-images"></a>
## 6. Replacing Images

To update your images:

- **Profile photo**: Replace `assets/img/personal-foto.jpeg` with your own photo.
- **Home background image**: Replace `assets/img/home.jpg`.
- **Quote background image**: Replace `assets/img/quote.jpg`.
- **Project images**: Add your images to `assets/projects/` and update the paths in `info.json`.

<!-- TOC --><a name="favicon"></a>
### Favicon:

To change the small icon that appears in the browser tab:

1. Create a custom favicon (use online tools if needed).
2. Save it as `assets/favicon.ico`.

---

<!-- TOC --><a name="7-modifying-scripts-and-animations"></a>
## 7. Modifying Scripts and Animations

<!-- TOC --><a name="particle-animation"></a>
### Particle Animation:

If you want to adjust the particle animation on the homepage, open **`script.js`** and modify the values like so:

```jsx
particlesJS('particles-js', {
    particles: {
        number: { value: 100 }, // Number of particles
        color: { value: "#e53889" }, // Particle color
    },
});

```

<!-- TOC --><a name="adding-new-functionality"></a>
### Adding New Functionality:

To add interactive features, like new buttons or actions, add your JavaScript code at the bottom of **`script.js`**.

```jsx
document.addEventListener("DOMContentLoaded", function() {
    const myElement = document.querySelector('.my-selector');
    if (myElement) {
        myElement.addEventListener('click', function() {
            // Action on click
        });
    }
});

```

---

<!-- TOC --><a name="8-removing-sections-you-dont-need"></a>
## 8. Removing Sections You Don’t Need

If you want to remove a section (e.g., the "Certifications" section), follow these steps:

1. Open **`index.html`**.
2. Find the section you want to remove by looking for a comment like:

```html
<!--  CERTIFICATIONS-->

```

1. Delete the code inside the section.

```html
<section id="certifications">
  <div class="container">
    <h2>Certifications</h2>
    <!-- Remove the certifications list here -->
  </div>
</section>

```
