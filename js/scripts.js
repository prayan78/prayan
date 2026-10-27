document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-toggle");
    const siteNav = document.querySelector("#site-nav");
    const year = document.querySelector("#year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    if (!menuButton || !siteNav) {
        return;
    }

    const closeMenu = () => {
        menuButton.setAttribute("aria-expanded", "false");
        siteNav.classList.remove("is-open");
    };

    menuButton.addEventListener("click", () => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isOpen));
        siteNav.classList.toggle("is-open", !isOpen);
    });

    siteNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
});
