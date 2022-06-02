jQuery(document).ready(function() {

    //   Courese section
    function setDots() {
        $(".owl-dots").removeClass('disabled');
    }
    $('.activiteis-wrap').owlCarousel({
            loop: true,
            margin: 40,
            responsiveClass: true,
            dots: false,
            nav: true,
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>', ],
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                768: {
                    items: 2,
                    nav: false
                },
                1024: {
                    items: 3,
                    loop: true
                }
            },
            onInitialized: setDots,
            onChanged: setDots
        })
        // RECENT ACTIVITY
    $('.recent-activity').owlCarousel({
            loop: true,
            margin: 40,
            responsiveClass: true,
            dots: false,
            nav: false,
            autoplay: true,
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>', ],
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                768: {
                    items: 2,
                    nav: false
                },
                1024: {
                    items: 3,
                    loop: true
                }
            },
            onInitialized: setDots,
            onChanged: setDots
        })
        // RECENT ACTIVITY
    $('.upcomming-activity').owlCarousel({
        loop: true,
        margin: 40,
        responsiveClass: true,
        dots: false,
        nav: true,
        autoplay: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>', ],
        lazyLoad: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: true
            },
            1024: {
                items: 3,
                loop: true
            }
        },
        onInitialized: setDots,
        onChanged: setDots
    })


    //   MARKETPLACE section
    // function setDots() {
    //     $(".owl-dots").removeClass('disabled');
    // }
    $('.marketplace-item-wrap').owlCarousel({
        loop: true,
        margin: 60,
        responsiveClass: true,
        dots: false,
        nav: true,
        center: true,
        autoplay: true,
        slideBy: 1,
        autoplayHoverPause: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>', ],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            },
            1024: {
                items: 3,
                loop: true
            }
        },
        onInitialized: setDots,
        onChanged: setDots
    })

    // Studen project
    $('.project-items-wrap').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        dots: false,
        nav: true,
        // center: true,
        autoplayHoverPause: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>', ],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            },
            1024: {
                items: 3,
                loop: true
            },
            1440: {
                items: 4,
                loop: true
            }
        },
        onInitialized: setDots,
        onChanged: setDots
    })

    $('.teacher-sec-wrap ').owlCarousel({
        loop: true,
        margin: 40,
        responsiveClass: true,
        dots: false,
        nav: false,
        center: true,
        slideBy: 1,
        autoplay: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>', ],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            },
            1024: {
                items: 3,
                loop: true
            }
        },
        onInitialized: setDots,
        onChanged: setDots
    })

    // Clients
    // $('.client-wrapper').owlCarousel({
    //   loop:true,
    //   margin:10,
    //   responsiveClass:true,
    //   dots:true,
    //   nav:false,
    //   responsive:{
    //       0:{
    //           items:3,
    //           nav:false
    //       },
    //       576:{
    //           items:4,
    //           nav:false
    //       },
    //       992:{
    //           items:5,
    //           loop:true
    //       }
    //   },
    // })
    // new WOW().init();




    // smooth scrool
    // var html_body = $('html, body');
    // $('a.nav-link.contact').on('click', function () {
    //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //         if (target.length) {
    //             html_body.animate({
    //                 scrollTop: target.offset().top - 0
    //             }, 100);
    //             return false;
    //         }
    //     }
    // });	








    // Header
    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
    const sections = document.querySelectorAll('section[id]')

    function scrollActive() {
        const scrollY = window.pageYOffset

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 50,
                sectionId = current.getAttribute('id')

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            } else {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        })
    }
    window.addEventListener('scroll', scrollActive)


    /*=============== CHANGE BACKGROUND HEADER ===============*/
    function scrollHeader() {
        const header = document.getElementById('header')
            // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
        if (this.scrollY >= 80) header.classList.add('scroll-header');
        else header.classList.remove('scroll-header')

        if (window.matchMedia("(min-width: 768px)").matches) {
            if (this.scrollY >= 220) header.classList.add('scroll-header');
            else header.classList.remove('scroll-header')
            if (this.scrollY >= 220) header.classList.add('header-show');
            else header.classList.remove('header-show')
        }
    }
    window.addEventListener('scroll', scrollHeader)


    // Circle Animation
    // $('.test-img-item').on('click', function(e) {
    //     console.log(document.getElementById('test-main').src)
    //     document.getElementById('test-main').src = e.target.src
    //     document.getElementById('test-img').src = e.target.src
    // })



    gsap.to(".c-1", {
        motionPath: {
            path: "#crcl-1",
            align: "#crcl-1",
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
            start: -.15
        },
        duration: 100,
        repeat: -1
    })
    gsap.to(".c-2", {
        motionPath: {
            path: "#crcl-1",
            align: "#crcl-1",
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
            start: 0.25,
            end: 1.25
        },
        duration: 100,
        repeat: -1
    })

    gsap.to(".c-3", {
        motionPath: {
            path: "#crcl-2",
            align: "#crcl-2",
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
            start: 0.50,
            end: 1.50
        },
        duration: 100,

        repeat: -1
    })
    gsap.to(".C-4", {
            motionPath: {
                path: "#crcl-3",
                align: "#crcl-3",
                autoRotate: true,
                alignOrigin: [0.5, 0.5],
                start: 0.75,
                end: 1.75
            },
            duration: 100,
            repeat: -1
        })
        // Circle Animation

    // MAGNIFIC POPUP
    $('#a-youtube').magnificPopup({
        type: 'iframe'
    });
    $('.y-frame-market').magnificPopup({
        type: 'iframe'
    });


    // $('#subject').niceSelect();

    var swiper = new Swiper(".studentSay", {
        slidesPerView: 3,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    });


});