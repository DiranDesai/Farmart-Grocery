const productsContainer = document.querySelector(".products");
const increasingBtn = document.querySelector(".increase-btn");
const decreasingBtn = document.querySelector(".decrease-btn");

const headerBottomMenu = document.querySelector(".header-bottom");

const menuNavigationMobile = document.querySelector(".menu-navigation-mobile");
const humbgerMenuButton = document.querySelector(".humbger-menu");
const closeHumbgerMenuButton = document.querySelector(".menu-navigation-mobile .close");


const searchMobileContainer = document.querySelector(".search-mobile-container");
const searchMobileContainerOpenButton = document.querySelector(".header-middle .icon-wrapper");
const searchMobileContainerCloseButton = document.querySelector(".search-mobile-container .close");


let productsPos = 0;

function handleProducts(e, status) {
    if (status && productsPos < 520) {
        productsPos += 260;
    } 

    if (!status && productsPos > 0) {
        productsPos -= 260;
    }

    productsContainer.style.transform = `translateX(-${productsPos}px)`;
}


increasingBtn.addEventListener("click", (e) => handleProducts(e, true));
decreasingBtn.addEventListener("click", (e) => handleProducts(e, false));

humbgerMenuButton.addEventListener("click", handleHumbger);
closeHumbgerMenuButton.addEventListener("click", handleHumbger);

searchMobileContainerOpenButton.addEventListener("click", handleSearchContainerMobile);
searchMobileContainerCloseButton.addEventListener("click", handleSearchContainerMobile);




function handleHumbger() {
    if (menuNavigationMobile.classList.contains("active")) {
        menuNavigationMobile.classList.remove("active");
    } else {
        menuNavigationMobile.classList.add("active");
    }
}

function handleSearchContainerMobile() {
    if (searchMobileContainer.classList.contains("active")) {
        searchMobileContainer.classList.remove("active");
    } else {
        searchMobileContainer.classList.add("active");
    }
}

document.addEventListener("scroll", (e) => {
    const scrollTop = window.scrollY;

    if (scrollTop >= 200) {
        headerBottomMenu.classList.add("header-bottom-sticky");
    } else {
        headerBottomMenu.classList.remove("header-bottom-sticky");
    }
});

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".loader-page").style.display = "none";
    }, 1000);
});