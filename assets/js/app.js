
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

/*--- form login register mobile and tablet ---*/
const loginLinks = $$('.login--link')
const accountForms = $$('.account-form')

loginLinks.forEach((loginLink, index) => {
    const accountForm = accountForms[index]

    loginLink.onclick = function () {
        $('.login--link.account-active').classList.remove('account-active')
        $('.account-form.form-active').classList.remove('form-active')

        this.classList.add('account-active')
        accountForm.classList.add('form-active')
    }
})

/*--------- slider background-image ------------*/ 
const sliderList = $('.banner__wrapper')
const nextBtn = $('.banner__btn-right')
const prevBtn = $('.banner__btn-left')
const bannerSlider = $$(".banner__slider")
const numberOfSlides = bannerSlider.length
var slideNumber = 0

nextBtn.addEventListener('click', () => {
    slideNumber++;

    $('.banner__slider.slactive').classList.remove('slactive')
    if (slideNumber >= numberOfSlides) {
        slideNumber = 0
    }
    bannerSlider[slideNumber].classList.add("slactive")
})

prevBtn.addEventListener('click', () => {
    slideNumber--;

    $('.banner__slider.slactive').classList.remove('slactive')
    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1
    }
    bannerSlider[slideNumber].classList.add("slactive")
})

//auto play slider
var playSlider 
var repeater = () => {
    playSlider = setInterval(() => {
        slideNumber++;

    $('.banner__slider.slactive').classList.remove('slactive')
    if (slideNumber >= numberOfSlides) {
        slideNumber = 0
    }
    bannerSlider[slideNumber].classList.add("slactive")
    }, 10000)
}
repeater()

//stop auto play slider
sliderList.addEventListener('mouseover', () => {
    clearInterval(playSlider)
})

//start auto play slider
sliderList.addEventListener('mouseout', () => {
    repeater()
})

/**------------begin slider skiing------------- */
const btnLeft = $('.btn-left')
const btnRight = $('.btn-right')
const contentWrap = $('.content__wrap')
const contentWrapper = $('.content__wrapper')
const contentItem = $$('.content__item')

let direction
let widthItem = contentItem[0].clientWidth
let contentWidth = contentWrap.clientWidth

btnRight.addEventListener('click', function() {
    direction = -1;
    btnLeft.classList.remove('bt__active')
    btnRight.classList.add('bt__active')
    contentWrapper.style.justifyContent = 'flex-start';
    contentWrap.style.transform = 'translateX(0)';  
});

btnLeft.addEventListener('click', function() {
    if (direction === -1) {
      direction = 1
      contentWrap.appendChild(contentWrap.firstElementChild)
    }
    btnRight.classList.remove('bt__active')
    btnLeft.classList.add('bt__active')
    contentWrapper.style.justifyContent = 'flex-end' 

    if (contentWidth > 1023) {
        contentWrap.style.transform = `translateX(${-contentWidth/2}px)`
    } else {
        contentWrap.style.transform = `translateX(${-contentWidth}px)`
    }  
    
});

//auto play slider
contentWrap.addEventListener('transitionend', function() {
    // get the last element and append it to the front

    if (direction === 1) {
        contentWrap.prepend(contentWrap.lastElementChild)
    } else {
        contentWrap.appendChild(contentWrap.firstElementChild)
    }

    contentWrap.style.transition = 'none'
    contentWrap.style.transform = 'translate(0)'
    setTimeout(() => {
        contentWrap.style.transition = 'all 0.8s'
    })

}, false);

var sliderAutoplay
var contentRepeat = () => {
    sliderAutoplay = setInterval(() => {       
        
        contentWrapper.style.justifyContent = 'flex-start'
        contentWrap.style.transform = `translateX(${-widthItem}px)`

    }, 4000)
}
contentRepeat()


//stop auto play slider
contentWrap.addEventListener('mouseover', () => {
    clearInterval(sliderAutoplay)
})

//start auto play slider
contentWrap.addEventListener('mouseout', () => {
    contentRepeat()
})

/**-----------Slider review---------- */
const reviewWrap = $('.review__wrap')
const reviewWrapper = $('.review__wrapper')
const reviewBtns = $$('.review__btn')

let widthWrap = reviewWrap.clientWidth
let widthReview = $('.review__wrap-item').offsetWidth



reviewBtns.forEach((reviewBtn, index) => {
    reviewBtn.onclick = function() {
        $('.review__btn.bt__active').classList.remove('bt__active')

        this.classList.add('bt__active')
        
        reviewWrap.style.transform = `translatex(${- (widthWrap + 2 * widthWrap/100) * index}px)`
        // reviewWrap.style.transform = `translatex(${- (offsetWidth)}px)`
        reviewWrap.style.transition = 'all 2s'
        clearInterval(reviewAutoPlay)
    }
})

//auto play review
reviewWrap.addEventListener('transitionend', function(){
    if (direction === 1) {
        reviewWrap.prepend(reviewWrap.lastElementChild)
    } else {
        reviewWrap.appendChild(reviewWrap.firstElementChild)
    }

    reviewWrap.style.transition = 'none'
    reviewWrap.style.transform = 'translate(0)' 
    setTimeout(function(){
        reviewWrap.style.transition = 'all 1s'
    })
},false)

var reviewAutoPlay
var repeatReview = () => {
    reviewAutoPlay = setInterval(() => {

        reviewWrapper.style.justifyContent = 'flex-start'
        reviewWrap.style.transform = `translateX(${-(widthReview + widthWrap/50)}px)`

    }, 4000)
}
repeatReview()

//stop review auto play slider
reviewWrap.addEventListener('onmousemove', () => {
    clearInterval(reviewAutoPlay)
})

//start auto play review
reviewWrap.addEventListener('mouseout', () => {
    repeatReview()
})

/**------------update number cuonter------------ */
const numberCounters = $$('.info__number-counter')

numberCounters.forEach(numberCounter => {
    numberCounter.innerText = '0'

    const updateCounter = () => {
        const target = +numberCounter.getAttribute('data-target')
        const c = +numberCounter.innerText

        const increment = target / 50

        if ( c < target ) {
            numberCounter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 20)
        } else {
            numberCounter.innerText = target
        }
    }
    updateCounter()
})

/**---------display top------------*/

const footerBtn = document.querySelector('.footer__btn')

window.addEventListener('scroll', () => {
    window.scrollY >= 400 ? footerBtn.style.display = 'block' : 'none'
})


console.log(window.scrollY)

//auto play info
// const infoItem = $('.info__wrap-img')
// const infoWrap = $('.info__wrap')
// const infoWrapper = $('.info__wrapper')
// const infoWrapOuter = $('.info__wrap-outer')

// let widthInfo = infoItem.offsetWidth

// infoWrap.addEventListener('transitionend', function(){
//     if (direction === 1) {
//         infoWrap.prepend(infoWrap.lastElementChild)
//     } else {
//         infoWrap.appendChild(infoWrap.firstElementChild)
//     }

//     infoWrap.style.transition = 'none'
//     infoWrap.style.transform = 'translate(0)' 
//     setTimeout(function(){
//         infoWrap.style.transition = 'all 1s'
//     })
// },false)

// var infoAutoPlay
// var repeatInfo = () => {
//     infoAutoPlay = setInterval(() => {

//         infoWrapper.style.justifyContent = 'flex-start'
//         infoWrap.style.transform = `translateX(${-widthInfo}px)`

//     }, 2000)
// }
// repeatInfo()




