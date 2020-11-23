$('.slider-girls').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: false,
    navText: [
        '<span class="arrow-owl arrow-left"></span>',
        '<span class="arrow-owl arrow-right"></span>'
      ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

$('.slider-programs').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: false,
    navText: [
        '<span class="arrow-owl arrow-left"></span>',
        '<span class="arrow-owl arrow-right"></span>'
      ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});