
/* =================================
   1. TYPING ANIMATION
================================= */

document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.getElementById("typing-text");

    if (typingText) {
        const words = [
            "Graphic Designer",
            "Web Developer",
            "Computer Tutor",
            "Network Technician",
            "Creative Writer"
        ];

        let wordIndex = 0;
        let characterIndex = 0;
        let deleting = false;

        function typeWords() {
            const currentWord = words[wordIndex];

            if (deleting) {
                characterIndex--;
            } else {
                characterIndex++;
            }

            typingText.textContent = currentWord.substring(
                0,
                characterIndex
            );

            let delay = deleting ? 60 : 100;

            if (!deleting && characterIndex === currentWord.length) {
                deleting = true;
                delay = 1500;
            } else if (deleting && characterIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                delay = 400;
            }

            setTimeout(typeWords, delay);
        }

        typeWords();
    }


    /* =================================
       2. SCROLL REVEAL ANIMATION
    ================================= */

   /* const revealElements = document.querySelectorAll(
        "#about, #skills, #projects"
    );

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.05
            }
        );

        revealElements.forEach(function (element) {
            element.classList.add("reveal");
            revealObserver.observe(element);
        });
    } else {
        revealElements.forEach(function (element) {
            element.classList.add("active");
        });
    }
        
/* 2. SCROLL REVEAL ANIMATION */

const revealElements = document.querySelectorAll(
    "#about, #skills, #projects"
);

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0,
            rootMargin: "0px 0px -50px 0px"
        }
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach(function (element) {
        element.classList.add("active");
    });
}



    /* =================================
       3. PROJECT GALLERY FILTERING
    ================================= */

    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedFilter = button.dataset.filter;

            filterButtons.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            projectCards.forEach(function (card) {
                const category = card.dataset.category;

                if (
                    selectedFilter === "all" ||
                    selectedFilter === category
                ) {
                    card.classList.remove("filter-hidden");
                } else {
                    card.classList.add("filter-hidden");
                }
            });
        });
    });
});


/* HAMBURGER MENU FUNCTIONALITY */

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("header nav");
const navigationLinks = document.querySelectorAll(".nav-links a");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navigation.classList.toggle("menu-open");

        menuToggle.textContent = isOpen ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navigation.classList.remove("menu-open");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });
}

