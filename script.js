document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section-in");
    const navLinks = document.querySelectorAll("#nav-links .nav-link");
    const navbar = document.querySelector(".navbar");


    particlesJS('particles-js', {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#00d3f2" },
            shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5,  } },
            opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 7, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
            line_linked: { enable: true, distance: 150, color: "#00d3f2", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
        },
        retina_detect: true
    });

    particlesJS('particles-contact', {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#00d3f2" },
            shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5,  } },
            opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 7, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
            line_linked: { enable: true, distance: 150, color: "#00d3f2", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
        },
        retina_detect: true
    });

    window.addEventListener("scroll", () => {
        let current = "";
        
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
        sections.forEach(section => {
            console.log(section.getAttribute("id"))
            const sectionTop = section.offsetTop - 60;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });
        console.log(navLinks)
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    const aboutButtons = document.querySelectorAll('.about-btn');
    const detailContents = document.querySelectorAll('.detail-content');

    aboutButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');
            
            aboutButtons.forEach(btn => btn.classList.remove('active'));
            detailContents.forEach(content => content.classList.remove('active'));
            
            button.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    fetch('assets/info.json')
        .then(response => response.json())
        .then(data => {
            const projectsWrapper = document.querySelector('.projects-wrapper');
            data.projects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                projectCard.innerHTML = `
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                    <div class="project-info">
                        <div class="project-content">
                            <h3 class="project-title">${project.title}</h3>
                            <span class="project-category">${project.stack}</span>
                        </div>
                        <p class="project-description">${project.description}</p>
                        <a href="${project.url}" class="project-link" target="_blank" rel="noopener noreferrer">More Info</a>
                    </div>
                `;
                projectsWrapper.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Error loading projects:', error));

    // Projects carousel functionality
    const wrapper = document.querySelector('.projects-wrapper');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const scrollAmount = 300; // Should match the width of project-card

    prevButton.addEventListener('click', () => {
        wrapper.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', () => {
        wrapper.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    fetch('assets/info.json')
        .then(response => response.json())
        .then(data => {
            // Fill About Me section
            const aboutMe = document.getElementById('about-me');
            aboutMe.innerHTML = `
                <img src="${data.about.image}" alt="${data.about.name}" class="about-profile-pic">
                <h2 class="text-primary">${data.about.name}</h2>
                <h4 class="text-primary">${data.about.title}</h4>
                <p class="dark-text">${data.about.description}</p>
            `;

            // Fill Skills section
            const skillsContainer = document.querySelector('#skills .skills-container');
            const skillsColumn1 = document.createElement('div');
            const skillsColumn2 = document.createElement('div');
            skillsColumn1.className = 'skills-column';
            skillsColumn2.className = 'skills-column';

            data.skills.forEach((skill, index) => {
                const skillHtml = `
                    <div class="skill">
                        <span>${skill.name}</span>
                        <div class="progress">
                            <div class="progress-bar" style="width: ${skill.percentage}%">${skill.percentage}%</div>
                        </div>
                    </div>
                `;
                if (index % 2 === 0) {
                    skillsColumn1.innerHTML += skillHtml;
                } else {
                    skillsColumn2.innerHTML += skillHtml;
                }
            });

            skillsContainer.appendChild(skillsColumn1);
            skillsContainer.appendChild(skillsColumn2);

            // Fill Education section
            const educationTimeline = document.querySelector('#education .timeline');
            data.education.forEach(edu => {
                educationTimeline.innerHTML += `
                    <div class="timeline-item">
                        <h5 class="text-primary">${edu.period}</h5>
                        <h6 class="text-primary">${edu.title}</h6>
                        <p class="text-primary">${edu.institution}</p>
                    </div>
                `;
            });

            // Fill Experience section
            const experienceTimeline = document.querySelector('#experience .timeline');
            data.experience.forEach(exp => {
                experienceTimeline.innerHTML += `
                    <div class="timeline-item">
                        <h5 class="text-primary">${exp.period}</h5>
                        <h6 class="text-primary">${exp.title}</h6>
                        <p class="text-primary">${exp.company}</p>
                    </div>
                `;
            });

            // Fill Quote section
            const quoteSection = document.querySelector('.quote-section');
            quoteSection.innerHTML = `
                <blockquote>
                    "${data.quote.text}"
                    <footer>— ${data.quote.author}</footer>
                </blockquote>
            `;
        })
        .catch(error => console.error('Error loading info:', error));

        fetch('assets/info.json')
        .then(response => response.json())
        .then(data => {

            const certificationsList = document.querySelector('.certifications-list');
            data.certifications.forEach(cert => {
                certificationsList.innerHTML += `
                    <div class="certification-item">
                        <h3 class="certification-title">${cert.title}</h3>
                        <p class="certification-description">${cert.description}</p>
                    </div>
                `;
            });

        })
        .catch(error => console.error('Error loading info:', error));
});