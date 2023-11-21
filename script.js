// let isDragging = false;
// let startPos = 0;
// let currentTranslate = 0;
// let prevTranslate = 0;

// const carouselContent = document.getElementById('carouselContent');

// carouselContent.addEventListener('mousedown', (event) => {
//   isDragging = true;
//   startPos = event.clientX;
//   const slides = document.querySelectorAll('.slide');
//   slides.forEach((slide) => {
//     slide.style.transition = 'none';
//   });
// });

// carouselContent.addEventListener('mousemove', (event) => {
//   if (!isDragging) return;
//   const currentPosition = event.clientX;
//   const diff = currentPosition - startPos;
//   carouselContent.style.transform = `translateX(${prevTranslate + diff}px)`;
// });

// carouselContent.addEventListener('mouseup', () => {
//   isDragging = false;
//   const slides = document.querySelectorAll('.slide');
//   slides.forEach((slide) => {
//     slide.style.transition = '';
//   });
//   const currentPosition = event.clientX;
//   const diff = currentPosition - startPos;
//   prevTranslate += diff;
// });

// carouselContent.addEventListener('mouseleave', () => {
//   isDragging = false;
//   const slides = document.querySelectorAll('.slide');
//   slides.forEach((slide) => {
//     slide.style.transition = '';
//   });
// });

// let isDragging = false;
// let startPos = 0;
// let currentTranslate = 0;
// let prevTranslate = 0;
// let animationID;

// const carouselContent = document.getElementById('carouselContent');

// carouselContent.addEventListener('mousedown', (event) => {
//   isDragging = true;
//   startPos = event.clientX;
//   const slides = document.querySelectorAll('.slide');
//   slides.forEach((slide) => {
//     slide.style.transition = 'none';
//   });
//   cancelAnimationFrame(animationID);
// });

// carouselContent.addEventListener('mousemove', (event) => {
//   if (!isDragging) return;
//   const currentPosition = event.clientX;
//   const diff = currentPosition - startPos;
//   carouselContent.style.transform = `translateX(${prevTranslate + diff}px)`;
// });

// carouselContent.addEventListener('mouseup', () => {
//   isDragging = false;
//   const slides = document.querySelectorAll('.slide');
//   slides.forEach((slide) => {
//     slide.style.transition = '';
//   });
//   const currentPosition = event.clientX;
//   const diff = currentPosition - startPos;
//   prevTranslate += diff;
//   checkBoundary();
// });

// carouselContent.addEventListener('mouseleave', () => {
//   isDragging = false;
//   const slides = document.querySelectorAll('.slide');
//   slides.forEach((slide) => {
//     slide.style.transition = '';
//   });
//   checkBoundary();
// });

// function checkBoundary() {
//   const slides = document.querySelectorAll('.slide');
//   const lastSlide = slides[slides.length - 1];
//   const rect = lastSlide.getBoundingClientRect();
//   const carouselRect = carouselContent.getBoundingClientRect();
  
//   if (rect.right < carouselRect.right) {
//     prevTranslate -= carouselRect.right - rect.right;
//   } else if (rect.left > carouselRect.left) {
//     prevTranslate += rect.left - carouselRect.left;
//   }
  
//   carouselContent.style.transform = `translateX(${prevTranslate}px)`;
// }

// let isDragging = false;
// let startPos = 0;
// let startTranslate = 0;
// let currentTranslate = 0;
// let minTranslate = 0;
// let maxTranslate = 0;

// const carouselContent = document.getElementById('carouselContent');

// carouselContent.addEventListener('mousedown', (event) => {
//   isDragging = true;
//   startPos = event.clientX;
//   startTranslate = currentTranslate;
//   const { width: carouselWidth } = carouselContent.getBoundingClientRect();
//   const { width: contentWidth } = carouselContent.scrollWidth;
//   minTranslate = - (contentWidth - carouselWidth);
//   maxTranslate = 0;
// });

// carouselContent.addEventListener('mousemove', (event) => {
//   if (!isDragging) return;
//   const currentPosition = event.clientX;
//   const diff = currentPosition - startPos;
//   currentTranslate = startTranslate + diff;
  
//   if (currentTranslate < minTranslate) {
//     currentTranslate = minTranslate;
//   }
//   if (currentTranslate > maxTranslate) {
//     currentTranslate = maxTranslate;
//   }
  
//   carouselContent.style.transform = `translateX(${currentTranslate}px)`;
// });

// carouselContent.addEventListener('mouseup', () => {
//   isDragging = false;
// });

// carouselContent.addEventListener('mouseleave', () => {
//   isDragging = false;
// });

// let isDragging = false;
// let startPos = 0;
// let startTranslate = 0;
// let currentTranslate = 0;
// let minTranslate = 0;
// let maxTranslate = 0;
// let draggingElement;

// const carouselContent = document.getElementById('carouselContent');

// carouselContent.addEventListener('mousedown', (event) => {
//   isDragging = true;
//   startPos = event.clientX;
//   startTranslate = currentTranslate;
//   draggingElement = event.target.closest('.slide');
//   const { width: carouselWidth } = carouselContent.getBoundingClientRect();
//   const { width: contentWidth } = carouselContent.scrollWidth;
//   minTranslate = carouselWidth - contentWidth;
//   maxTranslate = 0;
// });

// carouselContent.addEventListener('mousemove', (event) => {
//   if (!isDragging) return;
//   const currentPosition = event.clientX;
//   const diff = currentPosition - startPos;
//   currentTranslate = startTranslate + diff;
  
//   if (currentTranslate < minTranslate) {
//     currentTranslate = minTranslate;
//   }
//   if (currentTranslate > maxTranslate) {
//     currentTranslate = maxTranslate;
//   }
  
//   draggingElement.style.transform = `translateX(${currentTranslate}px)`;
// });

// carouselContent.addEventListener('mouseup', () => {
//   isDragging = false;
// });

// carouselContent.addEventListener('mouseleave', () => {
//   isDragging = false;
// });

let isDragging = false;
let startPos = 0;
let startTranslate = 0;
let currentTranslate = 0;
let draggingElement;
let dragStartPos = 0;

const carouselContent = document.getElementById('carouselContent');

carouselContent.addEventListener('mousedown', (event) => {
  isDragging = true;
  startPos = event.clientX;
  startTranslate = currentTranslate;
  draggingElement = carouselContent;
  dragStartPos = event.clientX;
});

carouselContent.addEventListener('mousemove', (event) => {
  if (!isDragging) return;
  
  const dragDistance = event.clientX - dragStartPos;
  currentTranslate = startTranslate + dragDistance;

  const minTranslate = Math.min(0, carouselContent.clientWidth - carouselContent.scrollWidth);
  const maxTranslate = 0;

  if (currentTranslate < minTranslate) {
    currentTranslate = minTranslate;
  }
  if (currentTranslate > maxTranslate) {
    currentTranslate = maxTranslate;
  }

  carouselContent.style.transform = `translateX(${currentTranslate}px)`;
});

carouselContent.addEventListener('mouseup', () => {
  isDragging = false;
});

carouselContent.addEventListener('mouseleave', () => {
  isDragging = false;
});