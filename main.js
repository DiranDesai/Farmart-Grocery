const productsContainer = document.querySelector(".products");
const increasingBtn = document.querySelector(".increase-btn");
const decreasingBtn = document.querySelector(".decrease-btn");

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