
$(document).ready(function () {
    Start();

    $('.js-commits__box').owlCarousel({
        loop: true,
        autoHeight: true,
        margin: 40,
        // stagePadding: 50,
        responsive : {
            320 : {
                items: 1
            },

            768 : {
                items: 2
            },

            1280 : {
                items: 3
            }
        }
    });

    function Start() {
        var m = 12,
            s = 0;

        if (m <= 9) {
            m = "0" + m;
        };

        var timerId = setTimeout(function tick() {
            if (s != 0) {
                s = s - 1;

                if (s <= 9) {
                    s = "0" + s;
                }
            } else {
                if (m != 0) {
                    m = m - 1;
                    s = 59;

                    if (m <= 9) {
                        m = "0" + m;
                    }
                } else {
                    return
                }
            }

            $('.form__time-item:nth-of-type(2) span:first-child').text(m);
            $('.form__time-item:last-child span:first-child').text(s);
            timerId = setTimeout(tick, 1000);
        }, 1000);
    };

    AOS.init({
        offset: 200
    });

    $('.screen5__ingredients').click(function() {
        $('.screen5__info').not($(this).next('.screen5__info').fadeIn()).fadeOut();
    })

    $('.screen5__close').click(function() {
        $(this).parents('.screen5__info').fadeOut()
    })

});