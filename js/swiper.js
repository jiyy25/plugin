//외부연동 실행식 2종류
// window.onload = function () { }

window.addEventListener('load', function () {

    const swiperMain = new Swiper('#mainbanner .swiper', {
        loop: true,
        effect: 'fade',

        // autoplay: {
        //     delay: 1500,
        //     disableOnInteraction: false,
        //     pauseOnMouseEnter: true,
        // },

        pagination: {
            el: '#mainbanner .swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '#mainbanner .swiper-button-next',
            prevEl: '#mainbanner .swiper-button-prev',
        },

    });

    var toggleBtn = true;
    document.querySelector(".toggle").addEventListener("click", function () {
        this.classList.toggle("bi-play-fill")

        toggleBtn = this.classList.contains("bi-play-fill");
        if (toggleBtn) {
            swiperMain.autoplay.stop();
            console.log("HI")
        } else {
            swiperMain.autoplay.start();
            console.log("BYE")
        }
    })
})