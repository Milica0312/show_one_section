$(document).ready(function () {
    /* Partners slider */
    var swiper = new Swiper('.partnersholder', {
        slidesPerView: 4,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        }
    });


    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 0,
        autoHeight: true
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        slideToClickedSlide: true,
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;


    $('.teamone').on('click', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            return;
        }
        $(this).addClass('open');
    });

//    table fixed config
    var gamificationRows = $('#gamificationtable').find('table tr');
    var goalBonnzaRows = $('#goalbonanzaplatform').find('table tr');

    function configureTableRows(numberOfRows) {
        var n = numberOfRows.length / 2;
        for (var i in  numberOfRows) {
            var firstRowHeight = $(numberOfRows[i]).height();
            var secondRowHeight = $(numberOfRows[Number(i) + n]).height();
            if (!secondRowHeight) {
                break;
            }
            if (!firstRowHeight) {
                break;
            }
            if (firstRowHeight > secondRowHeight) {
                $(numberOfRows[Number(i) + n]).find('td').css({'height': firstRowHeight + 'px'});
                $(numberOfRows[i]).find('td').css({'height': firstRowHeight + 'px'});
            }
            else {
                $(numberOfRows[i]).find('td').css({'height': secondRowHeight + 'px'});
                $(numberOfRows[Number(i) + n]).find('td').css({'height': secondRowHeight + 'px'});
            }
        }
    }

//    addopt height of table cells
    setTimeout(function () {
        configureTableRows(gamificationRows);
        configureTableRows(goalBonnzaRows);
    }, 500);


    var resizeTimer;

    $(window).on('resize', function (e) {

        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            configureTableRows(gamificationRows);
            configureTableRows(goalBonnzaRows);
        }, 250);

    });


    var indicatior = 1;
    var prevScrollLeft = 0;
    $('.table-column-fixed .table-scroll').on('scroll', function (event) {
        var part = ($(this)[0].scrollWidth - $(this)[0].offsetWidth) / 5;
        if (prevScrollLeft < $(this)[0].scrollLeft && $(this)[0].scrollLeft > part * indicatior) {
            switch (indicatior)
            {
                case 1:
                    indicatior = 2;
                    break;
                case 2:
                    indicatior = 3;
                    break;
                case 3:
                    indicatior = 4;
                    break;
                case 4:
                    indicatior = 5;
                    break;
                default:
                    indicatior = 1;
            }

            prevScrollLeft = $(this)[0].scrollLeft;
            $('#table-indicators').attr('class', 'active' + indicatior);
            return;
        }

        if (prevScrollLeft > $(this)[0].scrollLeft && $(this)[0].scrollLeft < part * indicatior) {
            switch (indicatior)
            {
                case 2:
                    indicatior = 1;
                    break;
                case 3:
                    indicatior = 2;
                    break;
                case 4:
                    indicatior = 3;
                    break;
                case 5:
                    indicatior = 4;
                    break;
                default:
                    indicatior = 1;
            }
            prevScrollLeft = $(this)[0].scrollLeft;
            $('#table-indicators').attr('class', 'active' + indicatior);
        }
    });
});


/*counter hero plus navigacija*/
// Set the date we're counting down to
//var countDownDate = new Date("Wed, 15 Nov 2017 15:59:00 GMT").getTime();
//console.log('date: ', countDownDate);

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + ":" + hours + ":"
            + minutes + ":" + seconds;


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;


    document.getElementById("days1").innerHTML = days;
    document.getElementById("hours1").innerHTML = hours;
    document.getElementById("minutes1").innerHTML = minutes;
    document.getElementById("seconds1").innerHTML = seconds;
    // If the count down is over, write some text 



    // If the count down is over, write some text

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
        document.getElementById("demo1").innerHTML = "EXPIRED";
    }
}, 1000);


/*show only one funkcija za sekciju sa pet krugova*/
function showonlyone(thechosenone) {
    $('.box').each(function (index) {
        if ($(this).attr("id") == thechosenone) {
            $(this).show(200);
            if ($(this).attr("id") == "box1") {

                $('.logostrelicaimg').addClass('circle1');
                $('.logostrelicaimg').removeClass('circle2');
                $('.logostrelicaimg').removeClass('circle3');
                $('.logostrelicaimg').removeClass('circle4');
                $('.logostrelicaimg').removeClass('circle5');


            }
            if ($(this).attr("id") == "box2") {

                $('.logostrelicaimg').addClass('circle2');
                $('.logostrelicaimg').removeClass('circle3');
                $('.logostrelicaimg').removeClass('circle4');
                $('.logostrelicaimg').removeClass('circle5');
                $('.logostrelicaimg').removeClass('circle1');

            }
            if ($(this).attr("id") == "box3") {

                $('.logostrelicaimg').addClass('circle3');
                $('.logostrelicaimg').removeClass('circle2');
                $('.logostrelicaimg').removeClass('circle4');
                $('.logostrelicaimg').removeClass('circle1');
                $('.logostrelicaimg').removeClass('circle5');

            }
            if ($(this).attr("id") == "box4") {

                $('.logostrelicaimg').addClass('circle4');
                $('.logostrelicaimg').removeClass('circle3');
                $('.logostrelicaimg').removeClass('circle2');
                $('.logostrelicaimg').removeClass('circle1');
                $('.logostrelicaimg').removeClass('circle5');

            }
            if ($(this).attr("id") == "box5") {

                $('.logostrelicaimg').addClass('circle5');
                $('.logostrelicaimg').removeClass('circle3');
                $('.logostrelicaimg').removeClass('circle2');
                $('.logostrelicaimg').removeClass('circle1');
                $('.logostrelicaimg').removeClass('circle4');

            }

        }
        else {
            $(this).hide(200);

        }
    });

}
;
/*show only one funkcija za sekciju hero logos*/
function showonlyone1(thechosenone) {
    $('.boxlogo').each(function (index) {
        if ($(this).attr("id") == thechosenone) {
            $(this).show(200);
            //console.log(thechosenone);
            if ($(this).attr("id") == "boxlogo1") {

                $('.logostrelicaimg').addClass('pomeranjestrelice1');
                $('.logostrelicaimg').removeClass('pomeranjestrelice2');
                $('.logostrelicaimg').removeClass('pomeranjestrelice3');
                $('.logostrelicaimg').removeClass('pomeranjestrelice4');


            }
            if ($(this).attr("id") == "boxlogo2") {

                $('.logostrelicaimg').addClass('pomeranjestrelice2');
                $('.logostrelicaimg').removeClass('pomeranjestrelice3');
                $('.logostrelicaimg').removeClass('pomeranjestrelice4');
                $('.logostrelicaimg').removeClass('pomeranjestrelice1');

            }
            if ($(this).attr("id") == "boxlogo3") {

                $('.logostrelicaimg').addClass('pomeranjestrelice3');
                $('.logostrelicaimg').removeClass('pomeranjestrelice2');
                $('.logostrelicaimg').removeClass('pomeranjestrelice4');
                $('.logostrelicaimg').removeClass('pomeranjestrelice1');

            }
            if ($(this).attr("id") == "boxlogo4") {

                $('.logostrelicaimg').addClass('pomeranjestrelice4');
                $('.logostrelicaimg').removeClass('pomeranjestrelice3');
                $('.logostrelicaimg').removeClass('pomeranjestrelice2');
                $('.logostrelicaimg').removeClass('pomeranjestrelice1');


            }

        }

        else {
            $(this).hide(200);

        }
    });

}
;
/*dodavanje i oduzimanje klase za zuta slova*/
$(document).ready(function () {
    $('.holderfivecircles .circle').on('click', function () {
        if ($(this).hasClass('actcircle')) {
            $('.holderfivecircles .circle').removeClass('actcircle');
            $(this).removeClass('actcircle');
            return;
        }

        $('.holderfivecircles .circle').removeClass('actcircle');
        $(this).addClass('actcircle');
    });
    /*zoom efekat na krugovima*/
    $('#circle1').click(
            function () {
                $("#circle1 img").animate({'zoom': 1.2}, 400);
                $("#circle2 img").animate({'zoom': 1}, 400);
                $("#circle3 img").animate({'zoom': 1}, 400);
                $("#circle4 img").animate({'zoom': 1}, 400);
                $("#circle5 img").animate({'zoom': 1}, 400);
            });
    $('#circle2').click(
            function () {
                $("#circle2 img").animate({'zoom': 1.2}, 400);
                $("#circle3 img").animate({'zoom': 1}, 400);
                $("#circle4 img").animate({'zoom': 1}, 400);
                $("#circle5 img").animate({'zoom': 1}, 400);
                $("#circle1 img").animate({'zoom': 1}, 400);
            });
    $('#circle3').click(
            function () {
                $("#circle3 img").animate({'zoom': 1.2}, 400);
                $("#circle4 img").animate({'zoom': 1}, 400);
                $("#circle5 img").animate({'zoom': 1}, 400);
                $("#circle1 img").animate({'zoom': 1}, 400);
                $("#circle2 img").animate({'zoom': 1}, 400);
            });
    $('#circle4').click(
            function () {
                $("#circle4 img").animate({'zoom': 1.2}, 400);
                $("#circle1 img").animate({'zoom': 1}, 400);
                $("#circle2 img").animate({'zoom': 1}, 400);
                $("#circle3 img").animate({'zoom': 1}, 400);
                $("#circle5 img").animate({'zoom': 1}, 400);
            });
    $('#circle5').click(
            function () {
                $("#circle5 img").animate({'zoom': 1.2}, 400);
                $("#circle1 img").animate({'zoom': 1}, 400);
                $("#circle2 img").animate({'zoom': 1}, 400);
                $("#circle3 img").animate({'zoom': 1}, 400);
                $("#circle4 img").animate({'zoom': 1}, 400);
            });
    /*skripte za navigacije*/
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.sidenav').addClass('sidenav_show');

        }
        else {
            $('.sidenav').removeClass('sidenav_show');

        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.navtwo').addClass('fixed-header1');
        }
        else {
            $('.navtwo').removeClass('fixed-header1');
            $('.holderjezici').removeClass('prikazjezika');
        }
    });
    /*sekcija za tabove grafikona*/
    $(document).ready(function () {
        $(".token").on("click", function () {
            $(".text-allocation").toggleClass("sakriveno", 5000); // 1sec
            $(".text-token").toggleClass("sakriveno", 5000); // 1sec
            $(".token").toggleClass("akttoken", 5000); // 1sec
            $(".allocation").toggleClass("aktallocation", 5000); // 1sec
            $(".chart1_legenda").toggleClass("sakriveno", 5000); // 1sec
            $(".chart2_legenda").toggleClass("sakriveno", 5000); // 1sec
        });


        $(".allocation").on("click", function () {
            $(".text-token").toggleClass("sakriveno", 5000); // 1sec
            $(".text-allocation").toggleClass("sakriveno", 5000); // 1sec
            $(".allocation").toggleClass("aktallocation", 5000); // 1sec
            $(".token").toggleClass("akttoken", 5000); // 1sec
            $(".chart1_legenda").toggleClass("sakriveno", 5000); // 1sec
            $(".chart2_legenda").toggleClass("sakriveno", 5000); // 1sec
        });
    });



    $('#prikaz_tabele12').click(function () {
        $('.pet_tabela').animate({
            'marginLeft': "0" //moves left
        });
    });
    $('#prikaz_tabele23').click(function () {
        $('.pet_tabela').animate({
            'marginLeft': "-231px" //moves left
        });
    });
    $('#prikaz_tabele34').click(function () {
        $('.pet_tabela').animate({
            'marginLeft': "-462px" //moves left
        });
    });
    $('#prikaz_tabele45').click(function () {
        $('.pet_tabela').animate({
            'marginLeft': "-693px" //moves left
        });
    });

    $(function () {
        $(".pomeranje_tabele").on("click", function (e) {  // See here, i have our selector set to "li", so this jQuery object will grab all li tags on the page
            $(this).addClass("pomeranje_tabele_aktivno").siblings().removeClass("pomeranje_tabele_aktivno");
        });
    })



});
