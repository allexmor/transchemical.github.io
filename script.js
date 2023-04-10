$(document).ready(function () {
    console.log('@@@');
    $('.examples__title').on('click', function () {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
            $(this).next().slideUp();
        } else {
            $('.examples__title').parent().removeClass('active')
            $('.examples__body').slideUp(0);
            $(this).parent().addClass('active');
            $(this).next().slideDown();
        }
        // $('.examples__title').removeClass('active');

    });

    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        breakpoints: {

            320: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            640: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            },
            1199: {
                slidesPerView: 7,
            },


        }

    });


});