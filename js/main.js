'use strict'

$(document).ready(function () {

    // mask
    $('.input-phone').mask('+7 (999) 999-99-99');

    // modal
    $('.modal').css('display', 'flex').hide();

    // Q&A
    $('.qa__question').click(function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open')
                .parent().find('.qa__answer').slideUp();
        } else {
            $('.qa__question.open').removeClass('open')
                .parent().find('.qa__answer').slideUp();
            $(this).addClass('open')
                .parent().find('.qa__answer').slideDown();
        }
    });

    // Blog
    $('.blog__category-btn').click(function () {
        $('.blog__category-btn').removeClass('active');
        $(this).addClass('active');
    });

    // modal-contacts
    $('.modal-contacts__content').css('display', 'flex').hide();
    $('.contacts-btn').click(function () {
        $('body').width($(document).width()).addClass('lock');
        $('.modal-contacts').fadeIn();
        $('.modal-contacts__content.form').slideDown(300);
    });
    $('.modal-contacts .send').click(function () {
        $('.modal-contacts__content.form').hide();
        $('.modal-contacts__content.complete').show();
    });
    $('.modal-contacts .close').click(function () {
        $('body').width('').removeClass('lock');
        $('.modal-contacts').hide();
        $('.modal-contacts__content').hide();
    });

    // modal-indicators
    $('.indicators-btn').click(function () {
        $('body').width($(document).width()).addClass('lock');
        $('.modal-indicators').fadeIn();
        $('.modal-indicators__content').slideDown(300);
    });
    $('.modal-indicators .close').click(function () {
        $('body').width('').removeClass('lock');
        $('.modal-indicators').hide();
        $('.modal-indicators__content').hide();
    });

    // BurgerMenu
    const burgerButton = document.querySelector('.header__burger');
    const burgerMenu = document.querySelector('.header__mobile-menu')
    const body = document.querySelector('body')

    burgerButton.addEventListener('click', () => {
        burgerMenu.classList.toggle('--active');
        burgerButton.classList.toggle('--active')
        body.classList.toggle('lock')
    })
});