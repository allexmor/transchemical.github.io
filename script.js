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


    var res = $("[data-fancybox]");
    console.log(res.length);
    if (res.length > 0) {
        Fancybox.bind("[data-fancybox]", {
            // Your custom options
        });
    }

    if (document.querySelector('.owl-carousel')) {



        $(".clients__slider .owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            dots: false,
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 3,
                    nav: false
                },
                480: {
                    nav: true
                },
                600: {
                    items: 5,

                },
                1000: {
                    items: 7,
                    nav: true,
                }
            }
        });

        $(".main-slider.owl-carousel").owlCarousel({
            loop: true,
            // margin: 10,
            dots: false,
            responsiveClass: true,
            nav: false,
            items: 1,
        });
    }

});


ymaps.ready(init);

function init() {
    if (document.querySelector('#contacts__map')) {

        // var myMap = new ymaps.Map('contacts__map', {
        //     // При инициализации карты обязательно нужно указать
        //     // её центр и коэффициент масштабирования.
        //     center: [55.288901, 38.686993], // Москва
        //     zoom: 14,
        //     controls: []
        // });

        // myPlacemark = new ymaps.Placemark(
        //     [55.288901, 38.686993], {
        //     hintContent: 'Транскемикал эксперсс',
        //     balloonContent: false,
        // }, {
        //     iconLayout: 'default#image',
        //     // iconImageHref: '/bitrix/templates/domsobytie/images/mark.svg',
        //     iconImageSize: [160, 60],
        //     iconImageOffset: [-80, -30],
        // });

        // myMap.geoObjects.add(myPlacemark);

        var myMap = new ymaps.Map('contacts__map', {
            center: [55.751574, 37.573856],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'images/myIcon.gif',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            }),

            myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
                hintContent: 'Собственный значок метки с контентом',
                balloonContent: 'А эта — новогодняя',
                iconContent: '12'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: 'images/ball.png',
                // Размеры метки.
                iconImageSize: [48, 48],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });

        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);


    }

    if (document.querySelector('#delivery-map')) {

        var deliveryMap = new ymaps.Map('delivery-map', {
            // При инициализации карты обязательно нужно указать
            // её центр и коэффициент масштабирования.
            center: [55.288901, 38.686993], // Москва
            zoom: 14,
            controls: []
        });

        myPlacemark = new ymaps.Placemark(
            [55.288901, 38.686993], {
            hintContent: 'Транскемикал эксперсс',
            balloonContent: false,
        }, {
            // iconLayout: 'default#image',
            iconColor: '#0066CC'
            // iconImageHref: '/bitrix/templates/domsobytie/images/mark.svg',
            // iconImageSize: [160, 60],
            // iconImageOffset: [-80, -30],
        });

        deliveryMap.geoObjects.add(myPlacemark);


    }


    if (document.querySelector('#delivery')) {

        var deliveryMap = new ymaps.Map('delivery', {
            // При инициализации карты обязательно нужно указать
            // её центр и коэффициент масштабирования.
            center: [55.288901, 38.686993], // Москва
            zoom: 14,
            controls: []
        });

        myPlacemark = new ymaps.Placemark(
            [55.288901, 38.686993], {
            hintContent: 'Транскемикал эксперсс',
            balloonContent: false,
        }, {
            // iconLayout: 'default#image',
            iconColor: '#0066CC'
            // iconImageHref: '/bitrix/templates/domsobytie/images/mark.svg',
            // iconImageSize: [160, 60],
            // iconImageOffset: [-80, -30],
        });

        deliveryMap.geoObjects.add(myPlacemark);
    }





}