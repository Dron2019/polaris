// let sliderContainer = document.querySelector('.slider-test'),
//     sliderNormImg = sliderContainer.querySelectorAll('.normal1 img'),
//     sliderBgImg = sliderContainer.querySelectorAll('.lighten1 img');
// sliderNormImg[0].style.zIndex = 10;


// console.clear();
// console.log(sliderContainer, sliderNormImg, sliderBgImg);
// let slideCounter = 0;
// let indexCounter = (index) => {

//     if (index >= sliderBgImg.length) {
//         return index = 0;
//     } else {
//         return index;
//     }

// }
// let addClass = () => {

//     sliderBgImg[slideCounter].classList.add('translateLeft');
//     // sliderBgImg[slideCounter].addEventListener('animationend', function() {
//     // sliderBgImg[slideCounter].classList.remove('translateLeft');
//     sliderBgImg[slideCounter].getElementsByClassName.transform = 'translateX(-100%)';
//     sliderBgImg[slideCounter].onanimationend = () => {
//         sliderBgImg[slideCounter].classList.remove('translateLeft');
//         console.log(counter);
//         return addClass();
//     };

//     // slideCounter = indexCounter(slideCounter);

//     // });
//     //sliderBgImg[slideCounter].removeEventListener('animationend', true);
//     sliderBgImg[slideCounter].style.zIndex = 9;
// };

// setInterval(() => {
//     addClass
// }, 1500);