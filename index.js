$(document).ready(function () {

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

};
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
 




});
