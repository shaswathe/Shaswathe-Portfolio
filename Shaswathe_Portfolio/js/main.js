
/* =========================================
   MAIN.JS
   Portfolio content, navigation and
   hero rotating text animation
========================================= */

function initializePortfolio() {

    /* =====================================
       1. HERO ROTATING TEXT
    ===================================== */

    const typedText = document.getElementById("typedText");

    if (typedText) {

        const words = [
            "insights",
            "dashboards",
            "solutions",
            "better decisions",
            "data stories"
        ];

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (!reducedMotion) {

            let wordIndex = 0;
            let charIndex = words[0].length;
            let isDeleting = true;

            function typeEffect() {

                const currentWord = words[wordIndex];

                if (isDeleting) {

                    charIndex--;

                    typedText.textContent =
                        currentWord.substring(0, charIndex);

                    if (charIndex <= 0) {

                        isDeleting = false;

                        wordIndex = (wordIndex + 1) % words.length;

                        setTimeout(typeEffect, 350);
                        return;
                    }

                    setTimeout(typeEffect, 55);

                } else {

                    charIndex++;

                    typedText.textContent =
                        currentWord.substring(0, charIndex);

                    if (charIndex >= currentWord.length) {

                        isDeleting = true;

                        setTimeout(typeEffect, 1600);
                        return;
                    }

                    setTimeout(typeEffect, 100);
                }
            }

            // Display the first word before starting
            typedText.textContent = words[0];

            // Start animation
            setTimeout(typeEffect, 1600);
        }
    }


    /* =====================================
       2. LOAD SKILLS
    ===================================== */

    const skillsGrid = document.getElementById("skillsGrid");

    if (skillsGrid && Array.isArray(window.skills)) {

        skillsGrid.innerHTML = "";

        window.skills.forEach(skill => {

            const element = document.createElement("span");

            element.className = "tag";
            element.textContent = skill;

            skillsGrid.appendChild(element);

        });
    }


    /* =====================================
       3. LOAD PROJECTS
    ===================================== */

    const projectsGrid = document.getElementById("projectsGrid");

    if (projectsGrid && Array.isArray(window.projects)) {

        projectsGrid.innerHTML = "";

        window.projects.forEach(project => {

            const card = document.createElement("article");

            card.className = "project";

            const heading = document.createElement("h3");

            heading.textContent = project.title || "Untitled Project";

            const description = document.createElement("p");

            description.textContent = project.description || "";

            const tags = document.createElement("small");

            tags.textContent = project.tags || "";

            card.appendChild(heading);
            card.appendChild(description);
            card.appendChild(tags);

            if (project.link) {

                const link = document.createElement("a");

                link.href = project.link;
                link.target = "_blank";
                link.rel = "noreferrer";

                link.textContent = "View on GitHub ↗";

                link.style.display = "block";
                link.style.marginTop = "12px";
                link.style.color = "#e6a0ed";

                card.appendChild(link);
            }

            projectsGrid.appendChild(card);

        });
    }


    /* =====================================
       4. LOAD CERTIFICATIONS
    ===================================== */

    const certGrid = document.getElementById("certificatesGrid");

    if (certGrid && Array.isArray(window.certifications)) {

        certGrid.innerHTML = "";

        window.certifications.forEach(certificate => {

            const card = document.createElement("article");

            card.className = "project";

            const heading = document.createElement("h3");

            heading.textContent = certificate;

            card.appendChild(heading);

            certGrid.appendChild(card);

        });
    }


    /* =====================================
       5. AUTOMATIC FOOTER YEAR
    ===================================== */

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }


    /* =====================================
       6. MOBILE NAVIGATION
    ===================================== */

    const toggle = document.getElementById("menuToggle");

    const nav = document.getElementById("nav");

    if (toggle && nav) {

        toggle.addEventListener("click", () => {

            const isOpen = nav.classList.toggle("open");

            toggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });


        nav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("open");

                toggle.setAttribute("aria-expanded", "false");

            });

        });

    }

}


/* =========================================
   INITIALIZE PORTFOLIO
========================================= */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initializePortfolio
    );

} else {

    initializePortfolio();

}
