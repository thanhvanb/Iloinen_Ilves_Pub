//language
let lang = document.querySelector('.lang');
let langCurrent = document.querySelector('.lang .lang__current span');
let langOpt = document.querySelector('.lang .lang__option');
let langItems = document.querySelectorAll('.lang .lang__option a');
lang.addEventListener('click', function (e) {
    e.stopPropagation();
    lang.classList.toggle('active');
})

langItems.forEach(function (item) {
    console.log(item);
    item.addEventListener('click', function () {
        console.log(this.textContent);
        let langText = this.textContent;
        let langCurrentSpan = langCurrent.textContent;
        langCurrent.innerHTML = langText;
        this.innerHTML = langCurrentSpan;
    })
})

document.addEventListener('click', function () {
    lang.classList.remove('active');
})

let header = document.querySelector('header');
let slider = document.querySelector('.slider');
let heightSlider = slider.clientHeight;
let heightHeader = header.clientHeight;

function changeBgHeader() {
    let scrollY = window.pageYOffset;
    if (scrollY > heightSlider - heightHeader) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

let backtotop = document.querySelector('.backtotop');
backtotop.addEventListener('click', function () {
    window.scrollTo({
        top: 0
    })
})

document.addEventListener('scroll', function () {
    changeBgHeader();
    //showBackToTop();
});

let btnMenu = document.querySelector('.btnmenu');
let nav = document.querySelector('.nav');
btnMenu.addEventListener('click', function () {
    console.log('show menu');
    this.classList.toggle('active');
    nav.classList.toggle('active');
})


if (nav.classList.contains('active')) {
    console.log('yes');
} else {
    console.log('no');
}

// /*Sliders
let listItemSlider = document.querySelectorAll('.slider__item-wrap .slider__item');
let number = document.querySelector('.paging .paging__number');
let dots = document.querySelectorAll('.paging .paging__dotted li');
let currentSlider = 0;
listItemSlider.forEach(function (itemSlider, index) {
    if (itemSlider.classList.contains('active'))
        currentSlider = index;
});
function showNumber(index) {
    number.innerHTML = (index).toString().padStart(2, '0');
}
showNumber(currentSlider + 1);
dots[currentSlider].classList.add('is-selected');

let btnnext = document.querySelector('.--next');
let btnprev = document.querySelector('.--prev');


btnnext.addEventListener('click', function () {
    if (currentSlider < listItemSlider.length - 1) { // 
        goTo(currentSlider + 1);
    } else {
        goTo(0);
    }
});
btnprev.addEventListener('click', function () {
    if (currentSlider > 0) { 
        goTo(currentSlider - 1);
    } else {
        goTo(listItemSlider.length - 1);
    }
});

function goTo(index) {
    listItemSlider[currentSlider].classList.remove('active');
    listItemSlider[index].classList.add('active');
    dots[currentSlider].classList.remove('is-selected');
    dots[index].classList.add('is-selected');
    currentSlider = index;
    showNumber(currentSlider + 1);
}

dots.forEach(function (li, index) {
    li.addEventListener('click', function () {
        if (index !== currentSlider) {
            goTo(index);
        }
    })
})


// MENU scroll to content
let menus = document.querySelectorAll('header .menu a')
let heightOfHeader = document.querySelector('header').offsetHeight;
let sections = [];
function removeAtiveMenu() {
    menus.forEach(function (menu_element, menu_index) {
        menu_element.classList.remove('active');
    });
}
menus.forEach(function (element, index) {
    let className = element.getAttribute('href').replace('#', '');
    let section = document.querySelector('.' + className);
    sections.push(section);
    element.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(section.offsetTop);
        window.scrollTo({
            top: section.offsetTop - heightOfHeader,
            behavior: 'smooth'
        })
        removeAtiveMenu();
        element.classList.add('active');
    });
});
window.addEventListener('scroll', function () {
    let positionScroll = window.pageYOffset;
    sections.forEach(function (section, index) {
        if (positionScroll > section.offsetTop - heightOfHeader && positionScroll < section.offsetTop + section.offsetHeight) {
            removeAtiveMenu();
            menus[index].classList.add('active');
        } else {
            menus[index].classList.remove('active');
        }
    });
});

