// slider
jQuery(document).ready(function () {
    $("#mobile-menu-open-button").on("click", function () {
        // Toggle the mobile menu
        $("#mobile-menu").addClass("open"); // Remove 'hidden' from the button
        $("#mobile-menu-close-button").removeClass("hidden");
        $(this).addClass("hidden");
        // Add the 'hidden' class to the button when menu is opened and remove when closed
    });

    $("#mobile-menu-close-button").on("click", function () {
        $("#mobile-menu-close-button").addClass("hidden");
        $("#mobile-menu").removeClass("open"); // Remove 'hidden' from the button
        $("#mobile-menu-open-button").removeClass("hidden");
    });

    $(".slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        infinite: true,
        loop: true,
        prevArrow: '<button class="slick-arrow slick-prev"> <i class="fas fa-arrow-alt-circle-left"></i></button>',
        nextArrow: '<button class="slick-arrow slick-next"> <i class="fas fa-arrow-alt-circle-right"></i></button>',
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $(".site-header").addClass("sticky");
        } else {
            $(".site-header").removeClass("sticky");
        }
    });
    $(".multiple-items").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    /* counter js- number incresing */
    if ($(".icon-item__counter").length) {
        $(".icon-item__counter span").each(function () {
            $(this)
                .prop("Counter", 0)
                .animate(
                    {
                        Counter: $(this).text(),
                    },
                    {
                        duration: 4000,
                        easing: "swing",
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        },
                    }
                );
        });
    }
    $(".image-slider").slick({
        dots: true, // Show dots for navigation
        infinite: true, // Infinite loop mode
        speed: 500, // Transition speed
        slidesToShow: 4, // Show 4 images at a time
        slidesToScroll: 1, // Scroll 1 image at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Autoplay speed (in milliseconds)
        arrows: true, // Show arrows for navigation
        responsive: [
            {
                breakpoint: 1024, // For screen widths less than 1024px (tablet)
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // For screen widths less than 768px (mobile)
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // For screen widths less than 480px (small mobile)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});
