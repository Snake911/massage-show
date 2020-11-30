$('.slider-girls').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    navText: [
        '<span class="arrow-owl arrow-left"></span>',
        '<span class="arrow-owl arrow-owl_black arrow-right"></span>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

$('.slider-programs').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    navText: [
        '<span class="arrow-owl arrow-owl_black arrow-left"></span>',
        '<span class="arrow-owl arrow-right"></span>'
    ],
    responsive: {
        0: {
            items: 1,
            center: true
        },
        1000: {
            items: 2
        }
    }
});

$('.slider-promotions').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navText: [
        '<span class="arrow-owl arrow-owl_black arrow-left"></span>',
        '<span class="arrow-owl arrow-right"></span>'
    ],
    responsive: {
        0: {
            items: 1
        }
    }
});

// Открытие меню в адаптиве
$('.burger-icon').click(() => {
    $('.burger-menu').addClass('opened');
    $('.overlay').addClass('active');
});

// Закрытие меню в адаптиве
$('.burger-close').click(() => {
    $('.burger-menu').removeClass('opened');
    $('.overlay').removeClass('active')
});

$('.overlay').click(() => {
    $('.burger-close').click();
});