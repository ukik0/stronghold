/*
const reviews_slider = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
        0: {},
    },
    pagination: {
        el: '',
        type: '',
    },
    navigation: {
        nextEl: '',
        prevEl: '',
    },
    autoplay: {
    },
});
*/

// Пересчет rem в px для swiper
const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100/375) * (0.1 * $(window).width()) * rem;
    }
}

const modal_indicators_slider = new Swiper('.modal-indicators__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,

    navigation: {
        nextEl: '.modal-indicators .next',
        prevEl: '.modal-indicators .prev',
    },

    on: {
        resize: function () {
            $('.modal-indicators__name').text($('.swiper-slide-active .modal-indicators__slide-name').text());
        },

        slideChangeTransitionStart: function () {
            $('.modal-indicators__name').text($('.swiper-slide-active .modal-indicators__slide-name').text());
        },
    },
});