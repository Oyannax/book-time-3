const toRead = document.querySelector('.to-read-content');

let isDragStart = false;

let prevPageX;
let prevScrollLeft;

function dragStart(e) {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = toRead.scrollLeft;
    toRead.style.cursor = "grabbing";
}
function dragStop() {
    isDragStart = false;
    toRead.style.cursor = "grab";
}
function dragging(e) {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    toRead.scrollLeft = prevScrollLeft - positionDiff;
}

toRead.addEventListener("mousedown", dragStart);
toRead.addEventListener("mouseup", dragStop);
toRead.addEventListener("mousemove", dragging);


// const carousel = document.getElementById('carousel');
// const slides = document.getElementById('carouselContent');

// let isPressed = false;

// let cursorX;

// carousel.addEventListener("mousedown", (event) => {
//     isPressed = true;
//     cursorX = event.offsetX - slides.offsetLeft;
//     carousel.style.cursor = "grabbing";
// })

// carousel.addEventListener("mouseup", () => {
//     carousel.style.cursor = "grab";
// })

// carousel.addEventListener("mousemove", (event) => {
//     if (!isPressed) return;
//     event.preventDefault();
//     slides.style.left = `${event.offsetX - cursorX}px`;
//     boundSlides();
// })

// window.addEventListener("mouseup", () => {
//     isPressed = false;
// })

// function boundSlides() {
//     const carouselRect = carousel.getBoundingClientRect();
//     const slidesRect = slides.getBoundingClientRect();
//     console.log(carouselRect, slidesRect);

//     if (parseInt(slides.style.left) > 0) {
//         slides.style.left = 0;
//     } else if (slidesRect.right < carouselRect.right) {
//         slides.style.left = `-${slidesRect.width - carouselRect.width}px`;
//     }
// }