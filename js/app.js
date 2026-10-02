/* =========================================================
   FIELD SHIFT
   JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileNav =
    document.getElementById("mobileNav");


mobileMenuButton.addEventListener("click", () => {

    mobileNav.classList.toggle("open");

});


/* Close mobile menu after clicking */

const mobileLinks =
    mobileNav.querySelectorAll("a");


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileNav.classList.remove("open");

    });

});


/* =========================================================
   THEME BUTTON
========================================================= */

const themeButton =
    document.getElementById("themeButton");


themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");


    if (
        document.body.classList.contains("light-mode")
    ) {

        themeButton.textContent = "☀";

    } else {

        themeButton.textContent = "☾";

    }

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("main section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "home";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 100;

        if (
            window.scrollY >= sectionTop
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   FEATURE CARD HOVER EFFECT
========================================================= */

const featureCards =
    document.querySelectorAll(".feature-card");


featureCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.zIndex = "5";

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.zIndex = "";

        }
    );

});


/* =========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", event => {

    const clickedInsideMenu =
        mobileNav.contains(event.target);

    const clickedButton =
        mobileMenuButton.contains(event.target);


    if (
        !clickedInsideMenu &&
        !clickedButton
    ) {

        mobileNav.classList.remove("open");

    }

});