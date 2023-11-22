const carousel = document.querySelector('.carousel');
const firstSlide = carousel.querySelectorAll('.slide')[0];
const nextSlide = carousel.querySelectorAll('.slide')[1];
const arrows = document.querySelectorAll('.carousel-controls .arrow');
const dots = document.querySelectorAll('.carousel-dots .dot');

let currentIndex = 0;
carousel.scrollLeft = 0;
dots[0].classList.add("active");

carousel.addEventListener("scroll", showHiddenArrows);
document.addEventListener("scroll", showActiveDots);

let firstSlideWidth = firstSlide.clientWidth + 17;
let nextSlideWidth = nextSlide.clientWidth + 17;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

function showHiddenArrows() {
    arrows[0].style.display = carousel.scrollLeft === 0 ? "none" : "block";
    arrows[1].style.display = carousel.scrollLeft === scrollWidth ? "none" : "block";
}

function showActiveDots() {
    for (let i = 0; i < dots.length; i++) {
        if (i === currentIndex) {
            dots[i].classList.add("active");
        } else {
            dots[i].classList.remove("active");
        }
    }
}

arrows.forEach(arrow => {
    arrow.addEventListener("click", (e) => {
        if (!e.detail || e.detail === 1) {
            if (arrow.id === "next") {
                if (carousel.scrollLeft === 0) {
                    carousel.scrollLeft += firstSlideWidth;
                    currentIndex++;
                } else {
                    carousel.scrollLeft += nextSlideWidth;
                    currentIndex++;
                }
            } else {
                carousel.scrollLeft -= nextSlideWidth;
                currentIndex--;
            }
            setTimeout(() => showHiddenArrows(), 60);
            showActiveDots();
        } else {
            return;
        }
    })
})

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