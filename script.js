document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section-in");
    const navLinks = document.querySelectorAll("#nav-links .nav-link");
    const navbar = document.querySelector(".navbar");
    const navbarCollapse = document.querySelector('.navbar-collapse');

    function initializeParticles(containerId) {
        particlesJS(containerId, {
            particles: {
                number: { value: 100, density: { enable: true, value_area: 800 } },
                color: { value: "#e53889" },
                shape: { type: "circle" },
                opacity: { value: 0.5 },
                size: { value: 7, random: true },
                line_linked: { enable: true, distance: 150, color: "#e53889", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6 }
            },
            interactivity: {
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } }
            },
            retina_detect: true
        });
    }

    initializeParticles('particles-js');
    initializeParticles('particles-contact');

    window.addEventListener("scroll", () => {
        let current = "";
        navbar.classList.toggle("scrolled", window.scrollY > 100);
        
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 60) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href").includes(current));
        });
    });

    navbarCollapse.addEventListener('show.bs.collapse', () => navbar.classList.add('show'));
    navbarCollapse.addEventListener('hide.bs.collapse', () => navbar.classList.remove('show'));

    fetch("assets/info.json")
    .then(response => response.json())
    .then(data => {
        // Home Content
        document.getElementById('home-content').innerHTML = `
            <h1 class="mb-4 title text-center w-100">${data.home.name}</h1>
            
            <div class="container col-lg-8 col-10">
            <h4 class="mb-4">${data.home.subtitle}</h4>
            <a href="${data.home.resume}" download class="btn btn-primary btn-lg">Download Resume</a>
            </div>
        `;
        
        // About Me Section
        document.getElementById('about-me').innerHTML = `
            <img src="${data.about.image}" alt="${data.about.name}" class="about-profile-pic">
            <h2 class="text-primary">${data.about.name}</h2>
            <h4 class="text-secondary">${data.about.title}</h4>
            <p class="dark-text">${data.about.description}</p>
        `;
        let educationHTML = '';
    data.education.forEach(item => {
      educationHTML += `
        <li class="timeline-item list-unstyled">

          <div class="timeline-content">
            <h5 class="dark-text">${item.period}</h5>
                        <h6 class="text-secondary">${item.title}</h6>
                        <p class="text-primary">${item.institution}</p>
          </div>
        </li>
      `;
    });
    document.getElementById('education-timeline').innerHTML = educationHTML;

    // Experience Timeline
    let experienceHTML = '';
    data.experience.forEach(item => {
      experienceHTML += `
        <li class="timeline-item list-unstyled">

          <div class="timeline-content">
                        <h5 class="dark-text">${item.period}</h5>
                        <h6 class="text-secondary">${item.title}</h6>
                        <p class="text-primary">${item.company}</p>
          </div>
        </li>
      `;
    });
    document.getElementById('experience-timeline').innerHTML = experienceHTML;


        
        // Projects Section
        const projectsWrapper = document.querySelector(".projects-wrapper");
        const loadMoreButton = document.getElementById("load-more");

        // Función para renderizar todos los proyectos
        function renderProjects() {
            projectsWrapper.innerHTML = data.projects.map(project => `
                <div class="project-card project-hidden">
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                    <div class="project-info">
                        <h3 class="project-title">${project.title}</h3>
                        <div class="project-tags flex justify-content-center">${project.stack.map(tag => `<span class="project-category">${tag}</span>`).join(" ")}</div>
                        <p class="project-description">${project.description}</p>
                        <a href="${project.url}" class="project-link" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>
            `).join('');
        }

        renderProjects();

        // Función para mostrar los proyectos ocultos
        let visibleProjects = 4; // Proyectos iniciales visibles

        function showMoreProjects() {
            const hiddenProjects = document.querySelectorAll('.project-hidden');
            for (let i = 0; i < visibleProjects; i++) {
                if (hiddenProjects[i]) {
                    hiddenProjects[i].classList.remove('project-hidden');
                }
            }

            if (visibleProjects >= data.projects.length) {
                loadMoreButton.style.display = "none";
            } else {
                visibleProjects = Math.min(visibleProjects + 4, data.projects.length);
            }
        }

        // Mostrar los primeros proyectos al cargar
        showMoreProjects();

        // Evento del botón "See More"
        loadMoreButton.addEventListener("click", () => {
            showMoreProjects();
        });
    

        // Quote Section
        const quoteSection = document.querySelector('.quote-section');
        quoteSection.innerHTML = `
            <blockquote class="quote-container">
                <h1 class="">${data.quote.text}</h1>
                <h3 class="">— ${data.quote.author}</h3>
            </blockquote>
        `;

        // Certifications Section
        document.querySelector('.certifications-list').innerHTML = data.certifications.map(cert => `
            <div class="certification-item">
                <h3 class="certification-title">${cert.title}</h3>
                <p class="certification-description">${cert.description}</p>
            </div>
        `).join('');
    })
    .catch(error => console.error("Error loading data:", error));
});
