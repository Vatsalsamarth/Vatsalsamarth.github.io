/* =====================================================
                PORTFOLIO V2
                Samarth Vatsal
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ============================================
            MOBILE MENU
    ============================================ */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("mobile-active");

        });

    }

    /* ============================================
            SMOOTH SCROLL
    ============================================ */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

            if (navLinks) {

                navLinks.classList.remove("mobile-active");

            }

        });

    });

    /* ============================================
            ACTIVE NAVBAR LINK
    ============================================ */

    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ============================================
            REVEAL ANIMATION
    ============================================ */

    const reveals = document.querySelectorAll(

        ".section-header, .about-card, .skill-card, .project-card, .achievement-card, .featured-project"

    );

    const revealObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    reveals.forEach(item => {

        item.classList.add("reveal");

        revealObserver.observe(item);

    });

    /* ============================================
            NAVBAR SHADOW
    ============================================ */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            navbar.style.background = "rgba(2,6,23,.95)";
            navbar.style.boxShadow = "0 15px 40px rgba(0,0,0,.35)";

        } else {

            navbar.style.background = "rgba(3,7,18,.75)";
            navbar.style.boxShadow = "none";

        }

    });

    /* ============================================
            PARALLAX HERO IMAGE
    ============================================ */

    const heroImage = document.querySelector(".hero-image img");

    window.addEventListener("mousemove", (e) => {

        if (!heroImage) return;

        const x = (window.innerWidth / 2 - e.clientX) / 60;
        const y = (window.innerHeight / 2 - e.clientY) / 60;

        heroImage.style.transform =
            `translate(${x}px, ${y}px)`;

    });

    /* ============================================
            PROJECT CARD HOVER
    ============================================ */

    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-12px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0px)";

        });

    });

});
