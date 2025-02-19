$(document).ready(function () {
    // Smooth Scroll for internal links
    $("a[href^='#']").on("click", function (event) {
        event.preventDefault();
        $("html, body").animate(
            {
                scrollTop: $($.attr(this, "href")).offset().top,
            },
            800
        );
    });

    // Parallax Effect for Download App Section Image
    $(window).on("scroll", function () {
        let scrollPos = $(window).scrollTop();
        $(".image-wrapper img").css("transform", "translateY(" + scrollPos / 6 + "px)");
    });

    // Fade-in effect on scroll
    function fadeInOnScroll() {
        $(".fade-in").each(function () {
            let elementTop = $(this).offset().top;
            let windowBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < windowBottom - 100) {
                $(this).addClass("visible");
            }
        });
    }

    // Trigger fade-in effect
    $(window).on("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Run once on page load

    // Button hover animation
    $(".btn").hover(
        function () {
            $(this).css({ transform: "scale(1.05)", transition: "0.3s" });
        },
        function () {
            $(this).css({ transform: "scale(1)", transition: "0.3s" });
        }
    );

    // Scroll-up effect for elements
    $(window).on("scroll", function () {
        $(".step-item").each(function () {
            let stepTop = $(this).offset().top;
            let windowBottom = $(window).scrollTop() + $(window).height();

            if (stepTop < windowBottom - 50) {
                $(this).addClass("fade-in-up");
            }
        });
    });
});
