jQuery(document).ready(function() {

    //   Courese section

    function setDots() {
        $(".owl-dots").removeClass('disabled');
    }
    // RECENT ACTIVITY
    $('.recent-activity').owlCarousel({
            loop: true,
            margin: 40,
            responsiveClass: true,
            dots: false,
            nav: false,
            autoplay: false,
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
        // autoplay: true,
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
    $('.marketplace-item-wrap').owlCarousel({
        loop: true,
        margin: 20,
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
    $('.slider__image').owlCarousel({
        loop: true,
        spaceBetween: 10,
        responsiveClass: true,
        dots: false,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>', ],
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                center: true
            },
            500: {
                items: 2,
                nav: false
            },
            768: {
                items: 3,
                nav: false
            },
            992: {
                items: 4,
                nav: false
            },
            1024: {
                items: 5,
                loop: true
            }
        },
    })

    // Testimonial
    $('.testimonial-mobile').owlCarousel({
        loop: true,
        spaceBetween: 10,
        responsiveClass: true,
        dots: true,
        autoplay: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
                center: true
            },
            500: {
                items: 1,
                nav: false
            },
            768: {
                items: 3,
                nav: false
            },
            992: {
                items: 4,
                nav: false
            },
            1024: {
                items: 5,
                loop: true
            }
        },
    })


    // scroll up start here
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $('.scrollTop').css({ 'bottom': '2%', 'opacity': '1', 'transition': 'all .9s ease' });
            } else {
                $('.scrollTop').css({ 'bottom': '-30%', 'opacity': '0', 'transition': 'all .9s ease' })
            }
        });
        //Click event to scroll to top
        $('.scrollTop').on('click', function() {
            $('html, body').animate({ scrollTop: 0 }, 300);
            return false;
        });
    });



    /*=============== CHANGE BACKGROUND HEADER ===============*/
    function scrollHeader() {
        const header = document.getElementById('header')
            // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
        if (this.scrollY >= 80) header.classList.add('scroll-header');

        else header.classList.remove('scroll-header');


        if (this.scrollY >= 80) {
            header.classList.add('header-top-0')
        } else {
            header.classList.remove('header-top-0')
        };
        if (window.matchMedia("(min-width: 768px)").matches) {
            if (this.scrollY >= 220) header.classList.add('scroll-header');
            else header.classList.remove('scroll-header')
            if (this.scrollY >= 220) header.classList.add('header-show');
            else header.classList.remove('header-show')
        }
    }
    window.addEventListener('scroll', scrollHeader)



    // MAGNIFIC POPUP
    $('#a-youtube').magnificPopup({
        type: 'iframe'
    });
    $('.y-frame-market').magnificPopup({
        type: 'iframe'
    });

    // popup





    // $('#subject').niceSelect();

    var swiper = new Swiper(".studentSay", {
        slidesPerView: 3,
        slidesPerGroup: 1,
        centeredSlides: true,
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
                centeredSlides: false,
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
                centeredSlides: false,
            },
            // when window width is >= 640px
            992: {
                slidesPerView: 3,
                spaceBetween: 10,

            }
        }
    });



    $('.nav__name').on('click', function(e) {
        let link = $('.nav__name');
        link.removeClass('active');
        $(this).addClass('active')
    })


    //PARTNERS
    $('.partners__logo').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        autoplay: true,
        dots: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                    dots: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    dots: false
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                }
            }
        ]
    });



    $(".player").on('hidden.bs.modal', function(e) {
        $(".player iframe").attr("src", $(".player iframe").attr("src"));
    });

    $(".player1").on('hidden.bs.modal', function(e) {
        $(".player iframe").attr("src", $(".player1 iframe").attr("src"));
    });

    $(".player2").on('hidden.bs.modal', function(e) {
        $(".player iframe").attr("src", $(".player2 iframe").attr("src"));
    });

})