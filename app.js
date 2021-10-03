// slider background-image
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var num = 0
const slider = $('.banner__slider')
const nextBtn = $('.banner__btn-right')
const prevBtn = $('.banner__btn-left')
const bannerText = $$('.banner-text')
const backgImage = ['https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/skiing-slider-img-1.jpg', 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/skiing-slider-img-2.jpg']


nextBtn.onclick = function() {
    num++
    if (num >= backgImage.length) {
        num = 0
    }
    $('.banner-text.bt-active').classList.remove('bt-active')
    bannerText[num].classList.add('bt-active')
    slider.style.backgroundImage = 'url("' + backgImage[num] + '")'
    slider.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.1)' }], { duration: 5000 })


}

// prevBtn.onclick = function() {
//     num--
//     if( num < 0) {
//         num = backgImage.length - 1
//     }
//     $('.banner-text.bt-active').classList.remove('bt-active')
//     bannerText[num].classList.add('bt-active')
//     slider.style.backgroundImage = 'url("'+ backgImage[num] +'")'
// }


// clearTime = setInterval(function() {
//     nextBtn.click()
// },5000)




// btn-active

// const btnSkiings = $$('.button__skiing')
// const leftBtn = $('.btn-left')
// const rightBtn = $('.btn-right')
// const contentSlider = $('.content__wrap')

// btnSkiings.forEach(btnSkiing => {
//     btnSkiing.onclick = function () {
//         $('.button__skiing.active-bg').classList.remove('active-bg')
//         btnSkiing.classList.add('active-bg')
//     }
// });

// leftBtn.onclick = function () {
//     contentSlider.style.transform = "translateX(50%) "
// }

// rightBtn.onclick = function () {
//     contentSlider.style.transform = "translateX(-50%) "
// }