$(document).ready(function() {
    $(".tech-slideshow").liMarquee({ direction: "left", loop: -1, scrolldelay: 0, scrollamount: 180, circular: true });
    $(".center-slider").slick({
        centerMode: true,
        slidesToShow: 3,
        centerPadding: "0",
        autoplaySpeed: 1500,
        autoplay: true,
        swipe: true,
        pauseOnHover: false,
        speed: 1500,
        autoplay: true,
        responsive: [
            { breakpoint: 1081, settings: { arrows: false, centerMode: true, centerPadding: "0px", slidesToShow: 3 } },
            { breakpoint: 1025, settings: { arrows: false, centerMode: true, centerPadding: "0px", slidesToShow: 3 } },
            { breakpoint: 1008, settings: { arrows: false, centerMode: true, centerPadding: "0px", slidesToShow: 3 } },
            { breakpoint: 1441, settings: { centerMode: true, slidesToShow: 1, centerPadding: "430px", autoplay: true, swipe: true, pauseOnHover: false, speed: 1500, autoplay: true } },
            { breakpoint: 769, settings: { arrows: false, centerMode: true, centerPadding: "0px", slidesToShow: 1 } },
            { breakpoint: 480, settings: { arrows: false, centerMode: true, centerPadding: "0px", slidesToShow: 1 } },
        ],
    });

    $(".brand-logo").slick({
        infinite: true,
        dots: true,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        swipe: true,
        speed: 1000,
        responsive: [{
                breakpoint: 1399,
                settings: {
                    slidesToShow: 5,
                    autoplay: true,
                    pauseOnHover: false,
                    speed: 1500,
                },
            },
            {
                breakpoint: 769,
                settings: { arrows: false, swipe: true, slidesToShow: 4 },
            },
            { breakpoint: 480, settings: { arrows: false, autoplay: true, swipe: true, slidesToShow: 2 } },
        ],
    });

    $(".fancybox").fancybox();
    /**Brand Slider***/

    $(".brand-slider").slick({
        dots: false,
        arrow: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{ breakpoint: 900, settings: "unslick" }],
    });



    $(".how-we-do-slider").slick({ dots: true, infinite: true, arrow: true, speed: 300, slidesToShow: 1, adaptiveHeight: true, responsive: [{ breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, arrow: false } }] });

    AOS.init({
        easing: "ease",
        duration: 800,
        offset: 60,
    });

    /*$(".sliderxs").slick({arrows:false,
    dots:true,
    autoplay:false,
    adaptiveHeight:true,
    responsive:[{
        breakpoint:10000,
        settings:"unslick"
    },
    {breakpoint:768,settings:{unslick:false}
}]
});*/
    /*
        jQuery(document).ready(function ($) {
            $("#send_message").click(function (e) {
                e.preventDefault();
                var error = false;
                var name = $(".name").val();
                var email = $(".email").val();
                var number = $(".phone").val();
                var message = $(".message").val();
                if (name.length == 0) {
                    var error = true;
                    $("#contact_name")
                        .queue(function () {
                            $(this).addClass("error").dequeue();
                        })
                        .queue(function () {
                            $(this).attr("placeholder", "Please type your name").dequeue();
                        })
                        .delay(5000)
                        .queue(function () {
                            $(this).removeClass("error").dequeue();
                        });
                } else {
                    $("#contact_name").removeClass("error");
                }
                if (email.length == 0 || email.indexOf("@") == "-1") {
                    var error = true;
                    $("#contact_email")
                        .queue(function () {
                            $(this).addClass("error").dequeue();
                        })
                        .queue(function () {
                            $(this).attr("placeholder", "Please enter your email").dequeue();
                        })
                        .delay(5000)
                        .queue(function () {
                            $(this).removeClass("error").dequeue();
                        });
                } else {
                    $("#contact_email").removeClass("error");
                }
                if (number.length == 0) {
                    var error = true;
                    $("#contact_phone")
                        .queue(function () {
                            $(this).addClass("error").dequeue();
                        })
                        .queue(function () {
                            $(this).attr("placeholder", "Please write Phone Number").dequeue();
                        })
                        .delay(5000)
                        .queue(function () {
                            $(this).removeClass("error").dequeue();
                        });
                } else {
                    $("#contact_subject").removeClass("error");
                }

                
    if(message.length==0){
    	var error=true;$('#contact_message').queue(function(){$(this).addClass('error').dequeue();}).queue(function(){$(this).attr('placeholder','Please type your message').dequeue();}).delay(5000).queue(function(){$(this).removeClass('error').dequeue();});}else{$('#contact_message').removeClass('error');
    	
    	}
                if (error == true) {
                    $("#send_message")
                        .queue(function (next) {
                            $(this).html('<object data="error.svg" type="image/svg+xml"></object> Please correct the errors');
                            next();
                            $(this).dequeue();
                        })
                        .delay(5000)
                        .queue(function (next) {
                            $(this).html("Send Message");
                            next();
                            $(this).dequeue();
                        });
                } else if (error == false) {
                    $("#send_message")
                        .html('<object data="http://eliwedel.com/ewpd/demos/jquery-contact-form-v2/send.svg" type="image/svg+xml" height="32" style="margin:-10px -5px!important;"></object> Sending')
                        .delay(2000)
                        .queue(function (next) {
                            $.post("send_email.php", $("#contact_form").serialize(), function (result) {
                                var r = result;
                                if (r == 1) {
                                    $("#contact_form")[0].reset();
                                    $("#send_message")
                                        .html('<object data="http://eliwedel.com/ewpd/demos/jquery-contact-form-v2/success.svg" type="image/svg+xml"></object> Message Sent')
                                        .delay(5000)
                                        .queue(function (next) {
                                            $(this).html("Send Message");
                                            next();
                                        });
                                } else {
                                    $("#send_message")
                                        .html('<object data="http://eliwedel.com/ewpd/demos/jquery-contact-form-v2/error.svg" type="image/svg+xml"></object> Something went wrong. Please try again later.')
                                        .delay(5000)
                                        .queue(function (next) {
                                            $(this).html("Send Message");
                                            next();
                                        });
                                }
                            });
                            next();
                        });
                }
            });
        });
        jQuery(document).ready(function ($) {
            $("#send_messaged").click(function (e) {
                e.preventDefault();
                var error = false;
                var name = $(".dname").val();
                var email = $(".demail").val();
                var number = $(".dphone").val();
                var message = $(".dmessage").val();
                if (name.length == 0) {
                    var error = true;
                    $("#contact_named")
                        .queue(function () {
                            $(this).addClass("error").dequeue();
                        })
                        .queue(function () {
                            $(this).attr("placeholder", "Please type your name").dequeue();
                        })
                        .delay(5000)
                        .queue(function () {
                            $(this).removeClass("error").dequeue();
                        });
                } else {
                    $("#contact_named").removeClass("error");
                }
                if (email.length == 0 || email.indexOf("@") == "-1") {
                    var error = true;
                    $("#contact_emaild")
                        .queue(function () {
                            $(this).addClass("error").dequeue();
                        })
                        .queue(function () {
                            $(this).attr("placeholder", "Please enter your email").dequeue();
                        })
                        .delay(5000)
                        .queue(function () {
                            $(this).removeClass("error").dequeue();
                        });
                } else {
                    $("#contact_emaild").removeClass("error");
                }
                if (number.length == 0) {
                    var error = true;
                    $("#contact_phoned")
                        .queue(function () {
                            $(this).addClass("error").dequeue();
                        })
                        .queue(function () {
                            $(this).attr("placeholder", "Please write Phone Number").dequeue();
                        })
                        .delay(5000)
                        .queue(function () {
                            $(this).removeClass("error").dequeue();
                        });
                } else {
                    $("#contact_subjectd").removeClass("error");
                }
                if (message.length == 0) {
                    var error = true;
                    $("#contact_messaged")
                        .queue(function () {
                            $(this).addClass("error").dequeue();
                        })
                        .queue(function () {
                            $(this).attr("placeholder", "Please type your message").dequeue();
                        })
                        .delay(5000)
                        .queue(function () {
                            $(this).removeClass("error").dequeue();
                        });
                } else {
                    $("#contact_messaged").removeClass("error");
                }
                if (error == true) {
                    $("#send_messaged")
                        .queue(function (next) {
                            $(this).html('<object data="error.svg" type="image/svg+xml"></object> Please correct the errors');
                            next();
                            $(this).dequeue();
                        })
                        .delay(5000)
                        .queue(function (next) {
                            $(this).html("Send Message");
                            next();
                            $(this).dequeue();
                        });
                } else if (error == false) {
                    $("#send_messaged")
                        .html('<object data="http://eliwedel.com/ewpd/demos/jquery-contact-form-v2/send.svg" type="image/svg+xml" height="32" style="margin:-10px -5px!important;"></object> Sending')
                        .delay(2000)
                        .queue(function (next) {
                            $.post("send_email.php", $("#contact_formd").serialize(), function (result) {
                                var r = result;
                                if (r == 1) {
                                    $("#contact_formd")[0].reset();
                                    $("#send_messaged")
                                        .html('<object data="http://eliwedel.com/ewpd/demos/jquery-contact-form-v2/success.svg" type="image/svg+xml"></object> Message Sent')
                                        .delay(5000)
                                        .queue(function (next) {
                                            $(this).html("Send Message");
                                            next();
                                        });
                                } else {
                                    $("#send_messaged")
                                        .html('<object data="http://eliwedel.com/ewpd/demos/jquery-contact-form-v2/error.svg" type="image/svg+xml"></object> Something went wrong. Please try again later.')
                                        .delay(5000)
                                        .queue(function (next) {
                                            $(this).html("Send Message");
                                            next();
                                        });
                                }
                            });
                            next();
                        });
                }
            });
        });
        jQuery(document).ready(function ($) {
            $("#send_messagedev").click(function (e) {
                e.preventDefault();
                var error = false;
                var name = $(".devname").val();
                var email = $(".devemail").val();
                var number = $(".devphone").val();
                var message = $(".devmessage").val();
                if (name.length == 0) {
                    var error = true;
                    $("#contact_namedev")
                        .queue(function () {
                            $(this).addClass("error").dequeue();
                        })
                        .queue(function () {
                            $(this).attr("placeholder", "Please type your name").dequeue();
                        })
                        .delay(5000)
                        .queue(function () {
                            $(this).removeClass("error").dequeue();
                        });
                } else {
                    $("#contact_namedev").removeClass("error");
                }
                if (email.length == 0 || email.indexOf("@") == "-1") {
                    var error = true;
                    $("#contact_emaildev")
                        .queue(function () {
                            $(this).addClass("error").dequeue();
                        })
                        .queue(function () {
                            $(this).attr("placeholder", "Please enter your email").dequeue();
                        })
                        .delay(5000)
                        .queue(function () {
                            $(this).removeClass("error").dequeue();
                        });
                } else {
                    $("#contact_emaildev").removeClass("error");
                }
                if (number.length == 0) {
                    var error = true;
                    $("#contact_phonedev")
                        .queue(function () {
                            $(this).addClass("error").dequeue();
                        })
                        .queue(function () {
                            $(this).attr("placeholder", "Please write Phone Number").dequeue();
                        })
                        .delay(5000)
                        .queue(function () {
                            $(this).removeClass("error").dequeue();
                        });
                } else {
                    $("#contact_subjectdev").removeClass("error");
                }
                if (message.length == 0) {
                    var error = true;
                    $("#contact_messagedev")
                        .queue(function () {
                            $(this).addClass("error").dequeue();
                        })
                        .queue(function () {
                            $(this).attr("placeholder", "Please type your message").dequeue();
                        })
                        .delay(5000)
                        .queue(function () {
                            $(this).removeClass("error").dequeue();
                        });
                } else {
                    $("#contact_messagedev").removeClass("error");
                }
                if (error == true) {
                    $("#send_messagedev")
                        .queue(function (next) {
                            $(this).html('<object data="error.svg" type="image/svg+xml"></object> Please correct the errors');
                            next();
                            $(this).dequeue();
                        })
                        .delay(5000)
                        .queue(function (next) {
                            $(this).html("Send Message");
                            next();
                            $(this).dequeue();
                        });
                } else if (error == false) {
                    $("#send_messagedev")
                        .html('<object data="http://eliwedel.com/ewpd/demos/jquery-contact-form-v2/send.svg" type="image/svg+xml" height="32" style="margin:-10px -5px!important;"></object> Sending')
                        .delay(2000)
                        .queue(function (next) {
                            $.post("send_email.php", $("#contact_formdev").serialize(), function (result) {
                                var r = result;
                                if (r == 1) {
                                    $("#contact_formdev")[0].reset();
                                    $("#send_messagedev")
                                        .html('<object data="http://eliwedel.com/ewpd/demos/jquery-contact-form-v2/success.svg" type="image/svg+xml"></object> Message Sent')
                                        .delay(5000)
                                        .queue(function (next) {
                                            $(this).html("Send Message");
                                            next();
                                        });
                                } else {
                                    $("#send_messagedev")
                                        .html('<object data="http://eliwedel.com/ewpd/demos/jquery-contact-form-v2/error.svg" type="image/svg+xml"></object> Something went wrong. Please try again later.')
                                        .delay(5000)
                                        .queue(function (next) {
                                            $(this).html("Send Message");
                                            next();
                                        });
                                }
                            });
                            next();
                        });
                }
            });
        });
        jQuery(document).ready(function ($) {
            $("#send_message-discuss").click(function (e) {
                e.preventDefault();
                var error = false;
                var name = $(".discussname").val();
                var email = $(".discussemail").val();
                var number = $(".discussphone").val();
                var message = $(".discussmessage").val();
                if (name.length == 0) {
                    var error = true;
                    $("#contact_name-discuss")
                        .queue(function () {
                            $(this).addClass("error").dequeue();
                        })
                        .queue(function () {
                            $(this).attr("placeholder", "Please type your name").dequeue();
                        })
                        .delay(5000)
                        .queue(function () {
                            $(this).removeClass("error").dequeue();
                        });
                } else {
                    $("#contact_name-discuss").removeClass("error");
                }
                if (email.length == 0 || email.indexOf("@") == "-1") {
                    var error = true;
                    $("#contact_email-discuss")
                        .queue(function () {
                            $(this).addClass("error").dequeue();
                        })
                        .queue(function () {
                            $(this).attr("placeholder", "Please enter your email").dequeue();
                        })
                        .delay(5000)
                        .queue(function () {
                            $(this).removeClass("error").dequeue();
                        });
                } else {
                    $("#contact_email-discuss").removeClass("error");
                }
                if (number.length == 0) {
                    var error = true;
                    $("#contact_phone-discuss")
                        .queue(function () {
                            $(this).addClass("error").dequeue();
                        })
                        .queue(function () {
                            $(this).attr("placeholder", "Please write Phone Number").dequeue();
                        })
                        .delay(5000)
                        .queue(function () {
                            $(this).removeClass("error").dequeue();
                        });
                } else {
                    $("#contact_subject-discuss").removeClass("error");
                }
                if (message.length == 0) {
                    var error = true;
                    $("#contact_message-discuss")
                        .queue(function () {
                            $(this).addClass("error").dequeue();
                        })
                        .queue(function () {
                            $(this).attr("placeholder", "Please type your message").dequeue();
                        })
                        .delay(5000)
                        .queue(function () {
                            $(this).removeClass("error").dequeue();
                        });
                } else {
                    $("#contact_message-discuss").removeClass("error");
                }
                if (error == true) {
                    $("#send_message-discuss")
                        .queue(function (next) {
                            $(this).html('<object data="error.svg" type="image/svg+xml"></object> Please correct the errors');
                            next();
                            $(this).dequeue();
                        })
                        .delay(5000)
                        .queue(function (next) {
                            $(this).html("Send Message");
                            next();
                            $(this).dequeue();
                        });
                } else if (error == false) {
                    $("#send_message-discuss")
                        .html('<object data="http://eliwedel.com/ewpd/demos/jquery-contact-form-v2/send.svg" type="image/svg+xml" height="32" style="margin:-10px -5px!important;"></object> Sending')
                        .delay(2000)
                        .queue(function (next) {
                            $.post("send_email.php", $("#contact_form-discuss").serialize(), function (result) {
                                var r = result;
                                if (r == 1) {
                                    $("#contact_form-discuss")[0].reset();
                                    $("#send_message-discuss")
                                        .html('<object data="http://eliwedel.com/ewpd/demos/jquery-contact-form-v2/success.svg" type="image/svg+xml"></object> Message Sent')
                                        .delay(5000)
                                        .queue(function (next) {
                                            $(this).html("Send Message");
                                            next();
                                        });
                                } else {
                                    $("#send_message-discuss")
                                        .html('<object data="http://eliwedel.com/ewpd/demos/jquery-contact-form-v2/error.svg" type="image/svg+xml"></object> Something went wrong. Please try again later.')
                                        .delay(5000)
                                        .queue(function (next) {
                                            $(this).html("Send Message");
                                            next();
                                        });
                                }
                            });
                            next();
                        });
                }
            });
        });
      
      
      */
    /*  jQuery(document).ready(function ($) {
          $("#send_message-get").click(function (e) {
              e.preventDefault();
              var error = false;
              var name = $(".get-name").val();
              var email = $(".get-email").val();
              var number = $(".get-phone").val();
              var message = $(".get-message").val();
              if (name.length == 0) {
                  var error = true;
                  $("#contact_name-get")
                      .queue(function () {
                          $(this).addClass("error").dequeue();
                      })
                      .queue(function () {
                          $(this).attr("placeholder", "Please type your name").dequeue();
                      })
                      .delay(5000)
                      .queue(function () {
                          $(this).removeClass("error").dequeue();
                      });
              } else {
                  $("#contact_name-get").removeClass("error");
              }
              if (email.length == 0 || email.indexOf("@") == "-1") {
                  var error = true;
                  $("#contact_email-get")
                      .queue(function () {
                          $(this).addClass("error").dequeue();
                      })
                      .queue(function () {
                          $(this).attr("placeholder", "Please enter your email").dequeue();
                      })
                      .delay(5000)
                      .queue(function () {
                          $(this).removeClass("error").dequeue();
                      });
              } else {
                  $("#contact_email-get").removeClass("error");
              }
              if (number.length == 0) {
                  var error = true;
                  $("#contact_phone-get")
                      .queue(function () {
                          $(this).addClass("error").dequeue();
                      })f
                      .queue(function () {
                          $(this).attr("placeholder", "Please write Phone Number").dequeue();
                      })
                      .delay(5000)
                      .queue(function () {
                          $(this).removeClass("error").dequeue();
                      });
              } else {
                  $("#contact_subject-get").removeClass("error");
              }
              if (message.length == 0) {
                  var error = true;
                  $("#contact_message-get")
                      .queue(function () {
                          $(this).addClass("error").dequeue();
                      })
                      .queue(function () {
                          $(this).attr("placeholder", "Please type your message").dequeue();
                      })
                      .delay(5000)
                      .queue(function () {
                          $(this).removeClass("error").dequeue();
                      });
              } else {
                  $("#contact_message-get").removeClass("error");
              }
              if (error == true) {
                  $("#send_message-get")
                      .queue(function (next) {
                          $(this).html('<object data="error.svg" type="image/svg+xml"></object> Please correct the errors');
                          next();
                          $(this).dequeue();
                      })
                      .delay(5000)
                      .queue(function (next) {
                          $(this).html("Send Message");
                          next();
                          $(this).dequeue();
                      });
              } else if (error == false) {
                  $("#send_message-get")
                      .html('<object data="http://eliwedel.com/ewpd/demos/jquery-contact-form-v2/send.svg" type="image/svg+xml" height="32" style="margin:-10px -5px!important;"></object> Sending')
                      .delay(2000)
                      .queue(function (next) {
                          $.post("send_email.php", $("#contact_form-get").serialize(), function (result) {
                              var r = result;
                              if (r == 1) {
                                  $("#contact_form-get")[0].reset();
                                  $("#send_message-get")
                                      .html('<object data="http://eliwedel.com/ewpd/demos/jquery-contact-form-v2/success.svg" type="image/svg+xml"></object> Message Sent')
                                      .delay(5000)
                                      .queue(function (next) {
                                          $(this).html("Send Message");
                                          next();
                                      });
                              } else {
                                  $("#send_message-get")
                                      .html('<object data="http://eliwedel.com/ewpd/demos/jquery-contact-form-v2/error.svg" type="image/svg+xml"></object> Something went wrong. Please try again later.')
                                      .delay(5000)
                                      .queue(function (next) {
                                          $(this).html("Send Message");
                                          next();
                                      });
                              }
                          });
                          next();
                      });
              }
          });
      });*/
    var descriptionArray = ["Leads", "Sales", "Conversions", "Traffic"];
    var descriptionLength = descriptionArray.length;
    var description = $("#description-rotate");

    function loop(i) {
        description.text(descriptionArray[i % descriptionLength]);
        setTimeout(function() {
            loop(i + 1);
        }, 3050);
    }
    loop(0);
    $(".img-parallax").each(function() {
        var img = $(this);
        var imgParent = $(this).parent();

        function parallaxImg() {
            var speed = img.data("speed");
            var imgY = imgParent.offset().top;
            var winY = $(this).scrollTop();
            var winH = $(this).height();
            var parentH = imgParent.innerHeight();
            var winBottom = winY + winH;
            if (winBottom > imgY && winY < imgY + parentH) {
                var imgBottom = (winBottom - imgY) * speed;
                var imgTop = winH + parentH;
                var imgPercent = (imgBottom / imgTop) * 150 + (50 - speed * 50);
            }
            img.css({ top: imgPercent + "%", transform: "translate(-50%, -" + imgPercent + "%)" });
        }
        $(document).on({
            scroll: function() {
                parallaxImg();
            },
            ready: function() {
                parallaxImg();
            },
        });
    });
    /*
$(window).scroll(function(){var scrollDistance=$(window).scrollTop();
	var pageTopData=[];$('.section').each(function(){var activePage=$(this).attr('id');var topScroll=$(this).offset().top;var pgHeight=$(this).height();pageTopData.push([activePage,topScroll,pgHeight]);});
	
	console.log(pageTopData);$('.section').each(function(i){if(scrollDistance>=pageTopData[1][1]&&scrollDistance<=pageTopData[1][1]+pageTopData[1][2]){$('#navbar2').find("a.active").removeClass('active');
		$(".whyChooseUs-nav").addClass("active");}
else if(scrollDistance>=pageTopData[3][1]-150&&scrollDistance<=pageTopData[3][1]+pageTopData[3][2]-150){$('#navbar2').find("a.active").removeClass('active');$(".services-nav").addClass("active");}else if(scrollDistance>=pageTopData[4][1]-100&&scrollDistance<=pageTopData[4][1]+pageTopData[4][2]-100){$('#navbar2').find("a.active").removeClass('active');$(".howDoWeWork-nav").addClass("active");}
else if(scrollDistance>=pageTopData[5][1]-150&&scrollDistance<=pageTopData[5][1]+pageTopData[5][2]-150){$('#navbar2').find("a.active").removeClass('active');$(".caseStudy-nav").addClass("active");}
else if(scrollDistance>=pageTopData[6][1]-150&&scrollDistance<=pageTopData[6][1]+pageTopData[6][2]-150){$('#navbar2').find("a.active").removeClass('active');$(".client-nav").addClass("active");}
else if(scrollDistance>=pageTopData[7][1]-150&&scrollDistance<=pageTopData[7][1]+pageTopData[7][2]-150){$('#navbar2').find("a.active").removeClass('active');$(".contactUs-nav").addClass("active");}});

});
*/
});