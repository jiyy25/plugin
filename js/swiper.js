//외부연동 실행식 2종류
// window.onload = function () { }

window.addEventListener('load', function () {

    const swiperMain = new Swiper('#mainbanner .swiper', {
        loop: true,
        effect: 'fade',

        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

        pagination: {
            el: '#mainbanner .swiper-pagination',
            type: "progressbar",
        },

        navigation: {
            nextEl: '#mainbanner .swiper-button-next',
            prevEl: '#mainbanner .swiper-button-prev',
        },

    });

})