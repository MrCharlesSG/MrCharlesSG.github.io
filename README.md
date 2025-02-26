# Portfolio Customization Guide

This documentation will guide you through adapting this portfolio website to your personal situation, allowing you to change content, images, and colors to make it appear as your own.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Content Customization](#content-customization)
3. [Style Customization](#style-customization)
4. [Image Customization](#image-customization)
5. [Script Customization](#script-customization)
6. [Implementation Steps](#implementation-steps)

## Project Structure

The portfolio is organized into these main files:

- \`index.html\`: Main HTML structure of the site
- \`styles.css\`: Styles and visual design
- \`script.js\`: Interactive functionalities
- \`assets/info.json\`: Dynamic data for the portfolio

Folder structure:

\`\`\`
portfolio/
│
├── index.html
├── styles.css
├── script.js
│
└── assets/
    ├── info.json
    ├── favicon.ico
    │
    ├── img/
    │   ├── home.jpg
    │   ├── quote.jpg
    │   └── personal-foto.jpeg
    │
    ├── projects/
    │   └── (project images)
    │
    └── Audiowide/
        └── (font files)
\`\`\`

## Content Customization

The \`assets/info.json\` file is the heart of customization. It contains all the information displayed on the site, organized into sections:

### Home Section

\`\`\`json
"home": {
  "name": "Your Name<br>Surname",
  "subtitle": "Brief description with <em class='text-primary-light'>highlighted</em> words",
  "resume": "/assets/YourCV.pdf"
}
\`\`\`

### About Section

\`\`\`json
"about": {
  "name": "Your Full Name",
  "title": "Your Professional Title",
  "description": "A detailed description about you, your professional interests...",
  "image": "assets/img/your-photo.jpg"
}
\`\`\`

### Skills Section

\`\`\`json
"skills": [
  {
    "name": "Web Development",
    "percentage": 85
  },
  {
    "name": "UX/UI Design",
    "percentage": 75
  }
]
\`\`\`

### Education Section

\`\`\`json
"education": [
  {
    "period": "2020 - 2024",
    "title": "Bachelor's Degree in Computer Science",
    "institution": "Your University"
  }
]
\`\`\`

### Experience Section

\`\`\`json
"experience": [
  {
    "period": "2023 - Present",
    "title": "Full Stack Developer",
    "company": "Tech Company Ltd."
  }
]
\`\`\`

### Projects Section

\`\`\`json
"projects": [
  {
    "title": "Project Name",
    "stack": "Technologies Used",
    "description": "Detailed project description...",
    "image": "assets/projects/project-image.png",
    "url": "https://github.com/yourusername/yourproject"
  }
]
\`\`\`

### Quote Section

\`\`\`json
"quote": {
  "text": "Your inspirational quote",
  "author": "Quote Author",
  "image": "assets/img/quote.jpg"
}
\`\`\`

### Certifications Section

\`\`\`json
"certifications": [
  {
    "title": "Certification Name",
    "description": "Detailed description of the certification..."
  }
]
\`\`\`

## Style Customization

To change the site's colors, modify the CSS variables at the beginning of the \`styles.css\` file:

\`\`\`css
:root {
    --dark-navy: rgb(36, 42, 53);  /* Dark background color */
    --darker-navy: rgb(21, 23, 28); /* Darker background color */
    --bg-light: #f8f9fa;           /* Light background color */
    --primary: rgb(229, 56, 137);   /* Primary/accent color */
    --primary-dark: #AC1754;        /* Dark version of primary color */
    --dark-navy-trasparent: rgba(36, 42, 53, 0.7);
    --dark-navy-little-trasparent: rgba(36, 42, 53, 0.2);
    --primary-trasparent: rgba(229, 56, 137, 0.4);
}
\`\`\`

Changing these values will automatically update all elements of the site.

### Alternative Color Palettes

Here are some examples of alternative color palettes you can use:

1. Professional Blue
\`\`\`css
:root {
  --dark-navy: #2c3e50;
  --darker-navy: #1a252f;
  --bg-light: #ecf0f1;
  --primary: #3498db;
  --primary-dark: #2980b9;
}
\`\`\`

2. Elegant Burgundy
\`\`\`css
:root {
  --dark-navy: #2E1114;
  --darker-navy: #1A0A0B;
  --bg-light: #F5F5F5;
  --primary: #501B1D;
  --primary-dark: #64485C;
}
\`\`\`

3. Modern Green
\`\`\`css
:root {
  --dark-navy: #1A535C;
  --darker-navy: #0B2C31;
  --bg-light: #F7FFF7;
  --primary: #4ECDC4;
  --primary-dark: #1A535C;
}
\`\`\`

### Typography

To change the main font:

1. Add your custom font to the \`assets/\` folder
2. Modify the @font-face rule in the CSS:

\`\`\`css
@font-face {
    font-family: 'YourFont';
    src: url('assets/YourFont/YourFont-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
\`\`\`

Then update the body rule:

\`\`\`css
body {
    font-family: "YourFont", serif;
    /* other properties */
}
\`\`\`

## Image Customization

The main images you should replace are:

- **Profile photo**: Replace \`assets/img/personal-foto.jpeg\` with your photo
- **Home background image**: Replace \`assets/img/home.jpg\`
- **Quote background image**: Replace \`assets/img/quote.jpg\`
- **Project images**: Add your images in \`assets/projects/\` and update the paths in info.json

### Favicon

To change the favicon (the icon in the browser tab):

1. Create a custom favicon (you can use online tools)
2. Save it as \`assets/favicon.ico\`

## Script Customization

### Particle Animation

If you want to modify the particle animation, you can adjust the parameters in \`script.js\`:

\`\`\`javascript
particlesJS('particles-js', {
    particles: {
        number: { value: 100 }, // Number of particles
        color: { value: "#e53889" }, // Color of particles
        // Other parameters...
    },
    // Rest of the configuration...
});
\`\`\`

### Adding New Functionalities

If you want to add new functionalities, you can do so at the end of the \`script.js\` file:

\`\`\`javascript
// Your new functionality
document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    const myElement = document.querySelector('.my-selector');
    if (myElement) {
        myElement.addEventListener('click', function() {
            // Action on click
        });
    }
});
\`\`\`

## Implementation Steps

1. **Copy all files** to your local environment
2. **Customize the info.json file** with your information
3. **Replace images** with your own photos and graphics
4. **Customize colors** in the styles.css file
5. **Test locally** by opening index.html in your browser
6. **Upload to your hosting** all files

By following this guide, you'll be able to fully adapt the portfolio to your personal situation, making it look like it was designed specifically for you.

\`\`\`

