function showIconLight() {
    const iconLight = document.querySelector(".theme__icon--light");
    iconLight.classList.remove("hidden");
}

function hideIconLight() {
    const iconLight = document.querySelector(".theme__icon--light");
    iconLight.classList.add("hidden");
}

function showIconDark() {
    const iconDark = document.querySelector(".theme__icon--dark");
    iconDark.classList.remove("hidden");
}

function hideIconDark() {
    const iconDark = document.querySelector(".theme__icon--dark");
    iconDark.classList.add("hidden");
}

function addActiveTheme() {
    const button = document.querySelector(".theme__button");
    button.classList.add("active");
}

function removeActiveTheme() {
    const button = document.querySelector(".theme__button");
    button.classList.remove("active");
}

function addDarkTheme() {
    const html = document.querySelector("html");
    html.classList.add("dark");
}

function removeDarkTheme() {
    const html = document.querySelector("html");
    html.classList.remove("dark");
}

function toggleDarkTheme() {
    const html = document.querySelector("html");
    html.classList.toggle("dark");
}

function savedTheme() {
    return localStorage.getItem("theme");
}

function prefersDark() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function changeSourceBackgroundToDark() {
    const bgDesktopTop = document.querySelector(".social__background-desktop-top");
    const bgTop = document.querySelector(".social__background-top");
    const bgDesktopBottom = document.querySelector(".social__background-desktop-bottom");
    const bgBottom = document.querySelector(".social__background-bottom");

    bgDesktopTop.setAttribute("srcset", "./assets/img/bg-pattern-top-desktop-dark_584x362.svg");

    bgTop.setAttribute("src", "./assets/img/bg-pattern-top-mobile-dark_374x232.svg");

    bgDesktopBottom.setAttribute("srcset", "./assets/img/bg-pattern-bottom-desktop-dark_1085x673.svg");

    bgBottom.setAttribute("src", "./assets/img/bg-pattern-bottom-mobile-dark_375x503.svg");
}

function changeSourceBackgroundToLight() {
    const bgDesktopTop = document.querySelector(".social__background-desktop-top");
    const bgTop = document.querySelector(".social__background-top");
    const bgDesktopBottom = document.querySelector(".social__background-desktop-bottom");
    const bgBottom = document.querySelector(".social__background-bottom");

    bgDesktopTop.setAttribute("srcset", "./assets/img/bg-pattern-top-desktop_584x362.svg");

    bgTop.setAttribute("src", "./assets/img/bg-pattern-top-mobile_374x232.svg");

    bgDesktopBottom.setAttribute("srcset", "./assets/img/bg-pattern-bottom-desktop_1085x673.svg");
    
    bgBottom.setAttribute("src", "./assets/img/bg-pattern-bottom-mobile_375x503.svg");
}

preLoadDarkTheme();
function preLoadDarkTheme() {
    if (savedTheme() === "dark" || (savedTheme() === null && prefersDark() ) ) {
        addDarkTheme();
        addActiveTheme();
        hideIconLight();
        showIconDark();
        changeSourceBackgroundToDark();
    }
}

function isDarkTheme() {
    const html = document.querySelector("html");
    return html.classList.contains("dark");
}

function savePreferredTheme() {
    localStorage.setItem("theme", isDarkTheme() ? "dark" : "light");
}

toggleTheme();
function toggleTheme() {
    const button = document.querySelector(".theme__button");

    button.addEventListener("click", () =>  {
        toggleDarkTheme();

        if ( isDarkTheme() ) {
            addActiveTheme();
            hideIconLight();
            showIconDark();
            changeSourceBackgroundToDark();
        } else {
            removeActiveTheme();
            showIconLight();
            hideIconDark();
            changeSourceBackgroundToLight();
        }

        savePreferredTheme();
    });
}
