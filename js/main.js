$(document).ready(function() {
    setTimeout(function() {
        document.getElementById('k-quote').click();
    }, 10000);


    $(".vertical-accordion__item").click(function() {
        $(this).addClass('vertical-accordion__item_active').siblings().removeClass('vertical-accordion__item_active');
        $(this).find('.vertical-accordion__header').slideUp();
        $(this).siblings().find('.vertical-accordion__header').slideDown();


        $(this).find('.vertical-accordion__content').delay(500).slideDown();
        $(this).siblings().find('.vertical-accordion__content').slideUp();
    })
});
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 90,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
});

/***Trigger Popup On Page Load*
$("document").ready(function() {
    setTimeout(function() {
        $("#get-quote-btn").trigger('click');
    },200);
});*/