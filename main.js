const productsContainer = document.querySelector(".products");
const increasingBtn = document.querySelector(".increase-btn");
const decreasingBtn = document.querySelector(".decrease-btn");

const headerBottomMenu = document.querySelector(".header-bottom");

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
    }, 60 / 100);
});