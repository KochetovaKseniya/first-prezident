
$(window).ready(() => {
    setTimeout(() => {
        let overlayEvent = new CustomEvent("overlayLoaded");
        $(".overlay").fadeOut(500, function () {
            document.dispatchEvent(overlayEvent);
        });
    }, 200);

    // header menu
    if (window.innerWidth < 1100) {
        const menu = $('.menu'),
        burger = $('.burger');
        burger.on('click', function (e) {
            e.preventDefault();
            if ( $(this).hasClass('active') ) {
                menu.removeClass('active')
                $(this).removeClass('active');
                $('.menu__title').fadeOut();
                $('body').removeClass('no-scroll');
                $('html').removeClass('no-scroll');
                setTimeout(() => {
                    $('.header__mob').removeClass('active');
                }, 400);
            }  else {
                menu.addClass('active')
                $(this).addClass('active');
                $('.header__mob').addClass('active');
                $('.menu__title').fadeIn();
                $('body').addClass('no-scroll');
                $('html').addClass('no-scroll');
            }
        });
    }

    if (window.innerWidth > 1250) {
        const menu = $('.desktop-menu'),
        burger = $('.burger');
        burger.on('click', function (e) {
            e.preventDefault();
            if ( $(this).hasClass('active') ) {
                menu.removeClass('active')
                $(this).removeClass('active');
                $('.menu__title').fadeOut();
                $('body').removeClass('no-scroll');
                $('html').removeClass('no-scroll');
                setTimeout(() => {
                    $('.header__nav ul').removeClass('active');
                }, 400);
            }  else {
                menu.addClass('active')
                $(this).addClass('active');
                $('.header__nav ul').addClass('active');
                $('.menu__title').fadeIn();
                $('body').addClass('no-scroll');
                $('html').addClass('no-scroll');
            }
        });
    }


    const intrw = new Swiper('.interview__slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1000,
        breakpoints: {
            768: {
                slidesPerView: 1,
            }
        },
        navigation: {
            nextEl: '.next',
        }
    });
    const first = new Swiper('.first__slider', {
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            768: {
                slidesPerView: 2
            }
        }
    });

});