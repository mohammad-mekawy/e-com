$(document).ready(function() {
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none").fadeOut(1000);
        $(tab).fadeIn(3000);
    });

    /**Phone Numbers only validation***/
    $("#userphone").keypress(function(e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            //display error message
            $("#phone-error").html("Digits Only").show().fadeOut("slow");
            return false;
        }
    });
    $("#user_phone").keypress(function(e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            //display error message
            $("#callback-error").html("Digits Only").show().fadeOut("slow");
            return false;
        }
    });
    $("#calllater_tel").keypress(function(e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            //display error message
            $("#calllater-error").html("Digits Only").show().fadeOut("slow");
            return false;
        }
    });
    $("#quickNum").keypress(function(e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            //display error message
            $("#errordiv").html("Numbers Only").show().fadeOut(3000);
            return false;
        }
    });
    $("#leave_tel").keypress(function(e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            //display error message
            $("#leave-error2").html("Numbers Only").show().fadeOut(3000);
            return false;
        }
    });
    /***Form Validation****/
    $("#calllater_btn").click(function(e) {
        var phone = $("#calllater_tel").val();
        var dayval = $(".datepicker").val();
        //var daytxt = $( "#day :selected" ).text();
        // var timingval = $("#timing").val();
        /***Day***/
        if (dayval == '') { $("#calllater-day-error").html('Please Select Day'); } else { $("#calllater-day-error").html(''); }

        /***timing***/
        // if (timingval == '0') { $("#calllater-time-error").html('Please Select Timing'); } else { $("#calllater-time-error").html(''); }
        /**Phone***/
        if (phone === " ") {

            $("#calllater-error").html('Please Enter Phone Number');
            return false;
        } else if (phone.length < 9) {
            $("#calllater-error").html('Please Enter Proper Number');
            return false;
        } else {
            $("#calllater-error").html('');
            $.ajax({
                type: "POST",
                url: 'https://happenizedev.com/lp4/thankyou.php',
                data: 'cb=1&phone=' + phone + '&day=' + dayval + '&time=' + timingval,
                success: function(data) {
                    window.location.href = "https://happenizedev.com/lp4/thank-you.html";
                    console.log(data);
                    console.log(dayval);
                }
            });
        }
    });
    $("#call_me_btn").click(function(e) {
        var phone = $("#user_phone").val();
        /**Phone***/
        if (phone === " ") {

            $("#callback-error").html('Please Enter Phone Number');

        } else if (phone.length < 9) {
            $("#callback-error").html('Please Enter Proper Number');

        } else {
            $("#callback-error").html('');
            $('.callme-now_form').hide();
            $('.callback-sent').show();

            $.ajax({
                type: "POST",
                url: 'https://happenizedev.com/lp4/thankyou.php',
                data: 'callme=1&phone=' + phone,
                success: function(data) {
                    window.location.href = "https://happenizedev.com/lp4/thank-you.html";
                    console.log(data);

                }
            });
        }
    });
    $(".discount-sbmt-btn").click(function(e) {

        console.log('Form Validate discount-sbmt-btn');
        e.preventDefault();
        var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var name = $("#fullname").val();
        var emailaddress = $("#user_email").val();
        var phone = $("#userphone").val();

        if (name == "" || name.length < 3) {
            $("#name-error").html('Please Enter Name');

        } else {
            $("#name-error").html('');
        }
        //email
        if (emailaddress == "") {
            $("#email-error").html('Please Enter Email');

        } else if (!emailReg.test(emailaddress)) {
            $("#email-error").html('Please enter valid email ID');

        } else {
            $("#email-error").html('');
        }
        /**Phone***/
        if (phone === "") {

            $("#phone-error").html('Please Enter Phone Number');
            return false;
        } else if (phone.length < 9) {
            $("#phone-error").html('Please Enter Proper Number');
            return false;
        } else {
            $("#phone-error").html('');

            $('.discoutn-form').hide();
            $('.form-response').show();


            $.ajax({
                type: "POST",
                url: 'https://happenizedev.com/lp4/thankyou.php',
                data: 'qn=1&name=' + name + '&email=' + emailaddress + '&phone=' + phone,
                success: function(data) {
                    window.location.href = "https://happenizedev.com/lp4/thank-you.html";
                    console.log(data);

                }
            });

        }



    });
    /****Leave Message******/
    $("#call_bck_btn").click(function(e) {
        e.preventDefault();
        var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var msgarea = $("#msg_area").val();
        var emailaddress = $("#leave_email").val();
        var phone = $("#leave_tel").val();

        if (msgarea == "" || msgarea.length < 3) {
            $("#leave-error1").html('Please Enter Message');
        } else { $("#leave-error1").html(''); }
        //email

        if (emailaddress == "") {
            $("#leave-error3").html('Please Enter Message');
            console.log('Please Enter Email');


        } else if (!emailReg.test(emailaddress)) {
            $("#leave-error3").html('Please enter valid email ID');

        } else {
            $("#leave-error3").html('');
        }
        /**Phone***/
        if (phone === " ") {

            $("#leave-error2").html('Please Enter Phone Number');
            return false;
        } else if (phone.length < 9) {
            $("#leave-error2").html('Please Enter Proper Number');
            return false;

        } else {
            $("#leave-error2").html('');
            $('.leave_form').hide();
            $('.leavemsg-sent').show();

            $.ajax({
                type: "POST",
                url: 'https://happenizedev.com/lp4/thankyou.php',
                data: 'lv=1&msg=' + msgarea + '&email=' + emailaddress + '&phone=' + phone,
                success: function(data) {
                    window.location.href = "https://happenizedev.com/lp4/thank-you.html";
                    console.log(data);

                }
            });

        }
    });
    /****Call Us Now Slide Form******/
    $("#quick-call-btn").click(function(e) {
        e.preventDefault();
        var phone = $("#quickNum").val();
        /**Phone***/
        if (phone === " ") { $("#errordiv").html('Please Enter Phone Number'); } else if (phone.length < 9) {
            $("#errordiv").html('Enter Proper Phone Number');

        } else {
            $("#errordiv").html('');
            $('.form-input-div').hide();
            $('#alertMsg').show();
            $.ajax({
                type: "POST",
                url: 'https://happenizedev.com/lp4/thankyou.php',
                data: 'cu=1&phone=' + phone,
                success: function(data) {
                    window.location.href = "https://happenizedev.com/lp4/thank-you.html";
                    console.log(data);

                }
            });

        }



    });

    /****Subscribe Form******/
    $("#sub_btn").click(function(e) {
        e.preventDefault();
        var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $("#sub_email").val();

        if (email == "") {
            $("#sub-error").html('Please Enter Email');
            console.log('Please Enter Email');
            return false;

        } else if (!emailReg.test(email)) {
            $("#sub-error").html('Please enter valid email ID');
            return false;
        } else {
            $("#sub-error").html('');

            $('.form-input-div').hide();
            $('#alertMsg').show();
            $.ajax({
                type: "POST",
                url: 'https://happenizedev.com/lp4/thankyou.php',
                data: 'sb=1&email=' + email,
                success: function(data) {
                    window.location.href = "https://happenizedev.com/lp4/thank-you.html";
                    console.log(data);

                }
            });

        }



    });
});





/**Get Free Quotation Now! 1***/
$('#send_message').click(function(e) {
    e.preventDefault();
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var contact_email1 = $("#contact_email").val();
    var contact_name1 = $("#contact_name").val();
    var contact_phone1 = $("#contact_phone").val();

    if (contact_name1 == "" || contact_name1.length < 3) {
        $("#contactname-error").html('Please Enter Name');
    } else {
        $("#contactname-error").html('');
    }
    /**Email***/
    if (contact_email1 === "") {
        $("#contactemail-error").html('Please Enter Email');
        console.log('Please Enter Email');
    } else if (!emailReg.test(contact_email1)) {
        $("#contactemail-error").html('Please enter valid email ID');
    }

    /**Phone***/
    if (contact_phone1 === "") {
        $("#contactphone-error").html('Please Enter Phone Number');

    } else if (contact_phone1.length < 9) {
        $("#contactphone-error").html('Please Enter Proper Number');
        return false;
    }
    if (contact_name1 == "" || contact_email1 === "" || contact_phone1 === "") {
        return false;

    } else {

        $("#contactphone-error").html('');

        $.ajax({
            type: "POST",
            url: 'https://happenizedev.com/lp4/thankyou.php',
            data: 'gfqn=1&email=' + contact_email1 + '&name=' + contact_name1 + '&phone=' + contact_phone1,
            success: function(data) {
                window.location.href = "https://happenizedev.com/lp4/thank-you.html";
                console.log(data);

            }

        });
    }
});

/**Web Design***/
$('#send_messaged').click(function(e) {
    e.preventDefault();
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var contact_named = $("#contact_named").val();
    var contact_emaild = $("#contact_emaild").val();
    var contact_phoned = $("#contact_phoned").val();
    var webdesignserv = $('.web-design-serv input[type="checkbox"]').val();
    var serv = [];
    var subject = "Web Design";
    $.each($(".web-design-serv input[type='checkbox']:checked"), function() { serv.push($(this).val()); });
    var designserv = serv.join(", ");
    console.log("Services Require: " + serv.join(", "));


    /******Name****/
    if (contact_named == "" || contact_named.length < 3) {
        $("#contact_named-error").html('Please Enter Name');
    } else {
        $("#contact_named-error").html('');
    }
    /**Email***/
    if (contact_emaild === "") {
        $("#contact_emaild-error").html('Please Enter Email');
        console.log('Please Enter Email');
    } else if (!emailReg.test(contact_emaild)) {
        $("#contact_emaild-error").html('Please enter valid email ID');
        return false;
    }

    /**Phone***/
    if (contact_phoned === "") {
        $("#contact_phoned-error").html('Please Enter Phone Number');

    } else if (contact_phoned.length < 9) {
        $("#contact_phoned-error").html('Please Enter Proper Number');
        return false;
    }
    /**Servies**/
    if (serv.length === 0) {
        $("#services-error").html('Please Tick Atleast One Option');
        return false;
    }
    if (contact_named == "" || contact_emaild === "" || contact_phoned === "") {
        return false;

    } else {


        $.ajax({
            type: "POST",
            url: 'https://happenizedev.com/lp4/thankyou.php',
            data: 'gfqn=1&email=' + contact_emaild + '&name=' + contact_named + '&phone=' + contact_phoned + '&services=' + designserv + '&subject=' + subject,
            success: function(data) {
                window.location.href = "https://happenizedev.com/lp4/thank-you.html";
                console.log(data);

            }

        });
    }
});

/**Web Development***/
$('#web_dev').click(function(e) {
    e.preventDefault();
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var contact_named = $("#webdevelope_name").val();
    var contact_emaild = $("#webdevelope_email").val();
    var contact_phoned = $("#webdevelope_phone").val();
    var webserv = [];
    var subject = "Web Development";
    $.each($(".web-develop-serv input[type='checkbox']:checked"), function() { webserv.push($(this).val()); });
    var designserv = webserv.join(", ");

    /******Name****/
    if (contact_named == "" || contact_named.length < 3) {
        $("#webdevelope_name-error").html('Please Enter Name');
    } else {
        $("#webdevelope_name-error").html('');
    }
    /**Email***/
    if (contact_emaild === "") {
        $("#webdevelope_email-error").html('Please Enter Email');
        console.log('Please Enter Email');
    } else if (!emailReg.test(contact_emaild)) {
        $("#webdevelope_email-error").html('Please enter valid email ID');
        return false;
    }

    /**Phone***/
    if (contact_phoned === "") {
        $("#webdevelope_phone-error").html('Please Enter Phone Number');

    } else if (contact_phoned.length < 9) {
        $("#webdevelope_phone-error").html('Please Enter Proper Number');
        return false;
    }

    /**Servies**/
    if (webserv.length === 0) {
        $("#webdevelop-services-error").html('Please Tick Atleast One Option');
        return false;
    }
    if (contact_named == "" || contact_emaild === "" || contact_phoned === "") {
        return false;

    } else {


        $.ajax({
            type: "POST",
            url: 'https://happenizedev.com/lp4/thankyou.php',
            data: 'gfqn=1&email=' + contact_emaild + '&name=' + contact_named + '&phone=' + contact_phoned + '&services=' + designserv + '&subject=' + subject,
            success: function(data) {
                window.location.href = "https://happenizedev.com/lp4/thank-you.html";
                console.log(data);

            }

        });
    }
});


/**Mobile App Development***/
$('#mobile_app').click(function(e) {
    e.preventDefault();
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var contact_named = $("#mobileapp_name").val();
    var contact_emaild = $("#mobileapp_email").val();
    var contact_phoned = $("#mobileapp_phone").val();
    var mobleserv = [];
    var subject = "Mobile App Development";
    $.each($(".mobileapp-serv input[type='checkbox']:checked"), function() { mobleserv.push($(this).val()); });
    var designserv = mobleserv.join(", ");

    /******Name****/
    if (contact_named == "" || contact_named.length < 3) {
        $("#mobileapp_name-error").html('Please Enter Name');
    } else {
        $("#mobileapp_name-error").html('');
    }
    /**Email***/
    if (contact_emaild === "") {
        $("#mobileapp_email-error").html('Please Enter Email');
        console.log('Please Enter Email');
    } else if (!emailReg.test(contact_emaild)) {
        $("#mobileapp_email-error").html('Please enter valid email ID');
        return false;
    } else {
        $("#mobileapp_email-error").html('');
    }

    /**Phone***/
    if (contact_phoned === "") {
        $("#mobileapp_phone-error").html('Please Enter Phone Number');
    } else if (contact_phoned.length < 9) {
        $("#mobileapp_phone-error").html('Please Enter Proper Number');
        return false;
    }
    /**Servies**/
    if (mobleserv.length === 0) {
        $("#webdevelop-services-error").html('Please Tick Atleast One Option');
        return false;
    }
    if (contact_named == "" || contact_emaild === "" || contact_phoned === "") {
        return false;

    } else {
        $("#mobileapp_name-error").html('');
        $("#mobileapp_email-error").html('');
        $.ajax({
            type: "POST",
            url: 'https://happenizedev.com/lp4/thankyou.php',
            data: 'gfqn=1&email=' + contact_emaild + '&name=' + contact_named + '&phone=' + contact_phoned + '&services=' + designserv + '&subject=' + subject,
            success: function(data) {
                window.location.href = "https://happenizedev.com/lp4/thank-you.html";
                console.log(data);

            }

        });
    }
});


/****digital marketing***/
$('#digitalmarket').click(function(e) {
    e.preventDefault();
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var contact_named = $("#digitalmarket_name").val();
    var contact_emaild = $("#digitalmarket_email").val();
    var contact_phoned = $("#digitalmarket_phone").val();
    var mobleserv = [];
    var subject = "Digital Marketing";
    $.each($(".digitalmarket-serv input[type='checkbox']:checked"), function() { mobleserv.push($(this).val()); });
    var designserv = mobleserv.join(", ");

    /******Name****/
    if (contact_named == "" || contact_named.length < 3) {
        $("#digitalmarket_name-error").html('Please Enter Name');
    } else {
        $("#digitalmarket_name-error").html('');
    }
    /**Email***/
    if (contact_emaild === "") {
        $("#digitalmarket_email-error").html('Please Enter Email');
        console.log('Please Enter Email');
    } else if (!emailReg.test(contact_emaild)) {
        $("#digitalmarket_email-error").html('Please enter valid email ID');
        return false;
    } else {
        $("#digitalmarket_email-error").html('');
    }

    /**Phone***/
    if (contact_phoned === "") {
        $("#digitalmarket_phone-error").html('Please Enter Phone Number');

    } else if (contact_phoned.length < 9) {
        $("#digitalmarket_phone-error").html('Please Enter Proper Number');
        return false;
    }
    /**Servies**/
    if (mobleserv.length === 0) {
        $("#webdevelop-services-error").html('Please Tick Atleast One Option');
        return false;
    }
    if (contact_named == "" || contact_emaild === "" || contact_phoned === "") {
        return false;

    } else {
        $("#digitalmarket_name-error").html('');
        $("#digitalmarket_email-error").html('');
        $.ajax({
            type: "POST",
            url: 'https://happenizedev.com/lp4/thankyou.php',
            data: 'gfqn=1&email=' + contact_emaild + '&name=' + contact_named + '&phone=' + contact_phoned + '&services=' + designserv + '&subject=' + subject,
            success: function(data) {
                window.location.href = "https://happenizedev.com/lp4/thank-you.html";
                console.log(data);

            }

        });
    }
});


/****Discuss Form***/
$('#send_message-discuss').click(function(e) {
    e.preventDefault();
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var contact_named = $("#contact_name-discuss").val();
    var contact_emaild = $("#contact_email-discuss").val();
    var contact_phoned = $("#contact_phone-discuss").val();
    var mobleserv = [];
    var subject = "Discussion Form";
    $.each($(".discussform-serv input[type='checkbox']:checked"), function() { mobleserv.push($(this).val()); });
    var designserv = mobleserv.join(", ");

    /******Name****/
    if (contact_named == "" || contact_named.length < 3) {
        $("#contact_name-discuss-error").html('Please Enter Name');
    } else {
        $("#contact_name-discuss-error").html('');
    }
    /**Email***/
    if (contact_emaild === "") {
        $("#contact_email-discuss-error").html('Please Enter Email');
        console.log('Please Enter Email');
    } else if (!emailReg.test(contact_emaild)) {
        $("#contact_email-discuss-error").html('Please enter valid email ID');
        return false;
    } else {
        $("#contact_email-discuss-error").html('');
    }

    /**Phone***/
    if (contact_phoned === "") {
        $("#contact_phone-discuss-error").html('Please Enter Phone Number');

    } else if (contact_phoned.length < 9) {
        $("#contact_phone-discuss-error").html('Please Enter Proper Number');
        return false;
    }
    /**Servies**/
    if (mobleserv.length === 0) {
        $("#discussform-services-error").html('Please Tick Atleast One Option');
        return false;
    }
    if (contact_named == "" || contact_emaild === "" || contact_phoned === "") {
        return false;

    } else {
        $("#digitalmarket_name-error").html('');
        $("#digitalmarket_email-error").html('');
        $.ajax({
            type: "POST",
            url: 'https://happenizedev.com/lp4/thankyou.php',
            data: 'gfqn=1&email=' + contact_emaild + '&name=' + contact_named + '&phone=' + contact_phoned + '&services=' + designserv + '&subject=' + subject,
            success: function(data) {
                window.location.href = "https://happenizedev.com/lp4/thank-you.html";
                console.log(data);

            }

        });
    }
});



/**Get Free Quote 2***/
$('#send_message-get2').click(function(e) {
    e.preventDefault();

    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var contact_named = $("#contact_name-get2").val();
    var contact_emaild = $("#contact_email-get2").val();
    var contact_phoned = $("#contact_phone-get2").val();
    var mobleserv = [];
    $.each($(".letspartner-serv input[type='checkbox']:checked"), function() { mobleserv.push($(this).val()); });
    var designserv = mobleserv.join(", ");
    var subject = "Let's Partner";
    /******Name****/
    if (contact_named == "" || contact_named.length < 3) {
        $("#contact_name-error2").html('Please Enter Name');

    } else {
        $("#contact_name-error2").html('');

    }
    /**Email***/
    if (contact_emaild === "") {
        $("#contact_email-error2").html('Please Enter Email');
        console.log('Please Enter Email');

    } else if (!emailReg.test(contact_emaild)) {
        $("#contact_email-error2").html('Please enter valid email ID');
        return false;
    } else {
        $("#contact_email-error2").html('');
    }

    /**Phone***/
    if (contact_phoned === "") {
        $("#contact_phone-error2").html('Please Enter Phone Number');

    } else if (contact_phoned.length < 9) {
        $("#contact_phone-error2").html('Please Enter Proper Number');
        return false;
    }
    /**Servies**/
    if (mobleserv.length === 0) {
        $("#letspartner-services-error").html('Please Tick Atleast One Option');
        return false;
    } else if (mobleserv.length != 0) {
        $("#letspartner-services-error").html('');

    }
    if (contact_named == "" || contact_emaild === "" || contact_phoned === "") {
        return false;

    } else {
        console.log('No Error');
        $("#contact_email-error2").html('');
        $.ajax({
            type: "POST",
            url: 'https://happenizedev.com/lp4/thankyou.php',
            data: 'gfqn=1&email=' + contact_emaild + '&name=' + contact_named + '&phone=' + contact_phoned + '&services=' + designserv + '&subject=' + subject,
            success: function(data) {
                window.location.href = "https://happenizedev.com/lp4/thank-you.html";
                console.log(data);

            }

        });
    }
});

/**Get Free Quote***/
$('#send_message-get').click(function(e) {
    e.preventDefault();
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var contact_named = $("#contact_name-get").val();
    var contact_emaild = $("#contact_email-get").val();
    var contact_phoned = $("#contact_phone-get").val();
    var mobleserv = [];
    $.each($(".letspartner-serv input[type='checkbox']:checked"), function() { mobleserv.push($(this).val()); });
    var designserv = mobleserv.join(", ");

    /******Name****/
    if (contact_named == "" || contact_named.length < 3) {
        $("#contact_name-error").html('Please Enter Name');
    } else {
        $("#contact_name-error").html('');
    }
    /**Email***/
    if (contact_emaild === "") {
        $("#contact_email-error").html('Please Enter Email');

    } else if (!emailReg.test(contact_emaild)) {
        $("#contact_email-error").html('Please enter valid email ID');
        return false;
    } else {
        $("#contact_email-error").html('');
    }

    /**Phone***/
    if (contact_phoned === "") {
        $("#contact_phone-error").html('Please Enter Phone Number');

    } else if (contact_phoned.length < 9) {
        $("#contact_phone-error").html('Please Enter Proper Number');
        return false;
    } else {
        $("#contact_phone-error").html('');
    }

    /**Servies**/
    if (mobleserv.length === 0) {
        $("#getaquote-error").html('Please Tick Atleast One Option');
        return false;
    }
    if (contact_named === "" || contact_emaild === "" || contact_phoned === "") {
        return false;

    } else {
        $("#contact_email-error").html('');
        $.ajax({
            type: "POST",
            url: 'https://happenizedev.com/lp4/thankyou.php',
            data: 'gfqn=1&email=' + contact_emaild + '&name=' + contact_named + '&phone=' + contact_phoned + '&services=' + designserv,
            success: function(data) {
                window.location.href = "https://happenizedev.com/lp4/thank-you.html";
                console.log(data);

            }

        });
    }
});


/******Popup Widget******/
$(document).ready(function() {
    $(".call-back-popup").removeClass('aos-animate');
    $(".btn-call-bck").click(function(e) {
        e.preventDefault();
        //alert('check');

        $(".call-overlay").show();
        $(".call-back-popup").show();
        $(".call-back-popup").removeClass('aos-animate');
        setTimeout(function() {

            //$(".call-back-popup").show();
            $(".call-back-popup").addClass('aos-animate');
        }, 1000);
    });

    $(".call-overlay").click(function(e) {
        $(".call-overlay").hide(3000);
        $(".call-back-popup").hide(3000);
    });

    $(".cls_btn").click(function(e) {
        //	$(".call-back-popup").removeClass('aos-animate');
        //		}, 1000);
        //	});
        //	
        $(".call-overlay").hide(100);
        $(".call-back-popup").slideDown(2000).hide("slow");
    });

});