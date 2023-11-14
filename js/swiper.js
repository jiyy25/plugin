//외부연동 실행식 2종류
// window.onload = function () { }

// window.addEventListener('load', function () {
// })

$(document).ready(function () {
    const swiperMain = new Swiper('#mainbanner .swiper', {
        loop: true,
        effect: 'fade',

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

        pagination: {
            el: '#mainbanner .swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '#mainbanner .swiper-button-next',
            prevEl: '#mainbanner .swiper-button-prev',
        },

        on: {
            // init: function () {
            //     console.log('swiper initialized, 실행하자마자 1회')
            //실행하자마자 rel클래스를 넣어줘도 되지만, 더 실용적인것은 body자체에
            //클래스를 주는 것이 더 좋음
            //     document.body.classList = 'relIndex0'
            // },
            // slideChange: function () {
            //     // console.log(this.activeIndex)
            //     console.log(this.realIndex)
            //     //realIndex가 내가 찾던 변수임을 확인.
            // },
            // activeIndexChange: function () {
            //     console.log("active")
            // },
            realIndexChange: function () {
                console.log(this.realIndex)
                document.body.classList = 'relIndex' + this.realIndex
            }
        },

    });

    var toggle = true;
    $(".toggle").click(function () {
        $(this).toggleClass("bi-play-fill");


        if (toggle) {
            swiperMain.autoplay.stop();
            toggle = false;
        } else {
            swiperMain.autoplay.start();
            toggle = true;
        }
    })

    // var toggleBtn = true;
    // document.querySelector(".toggle").addEventListener("click", function () {
    //     this.classList.toggle("bi-play-fill")

    //     toggleBtn = this.classList.contains("bi-play-fill");
    //     if (toggleBtn) {
    //         swiperMain.autoplay.stop();
    //         console.log("HI")
    //     } else {
    //         swiperMain.autoplay.start();
    //         console.log("BYE")
    //     }
    // })
})