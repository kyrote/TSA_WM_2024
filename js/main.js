let plx_active = true;

/*window.addEventListener("resize", (event) => {
    if ($(window).width() / $(window).height() < 1.2) {
        $("#rotate").show();
    } else {
        $("#rotate").hide();
    }
});

$(function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    if ($(window).width() / $(window).height() < 1.2) {
        $("#rotate").show();
    } else {
        $("#rotate").hide();
    }
});*/

setTimeout(() => {
    $("html, body").css({
        "overflow-y": "auto",
    });
}, 0);/*6400*/

$("a").click(function () {
    blur();
});

function blur() {
    $("#blur").addClass("active");
    setTimeout(function () {
        $("#blur").removeClass("active");
    }, 500);
}

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

function plx(top, factor) {
    return (
        top +
        ((factor * $(window).scrollTop()) / $(window).height()) *
            ($(window).height() / $(window).width() / 0.5625) +
        "vw"
    );
}

function plx_el() {
    if (isScrolledIntoView($("#A-quote-ctn"))) {
        $("#A-quote-ctn div div").addClass("A-quote-final");
    }

    // SECTION A (ABOUT)

    $("#A-texts").css("top", plx(0, 10));
    $("#A-quote-ctn").css("top", plx(65, 5));
    $("#A-video-ctn").css("top", plx(37, 0));

    // SECTION B (SOLUTIONS)

    $("#B-solar-panel").css("top", plx(90, 10));
    $("#B-solar-panel-info").css("top", plx(120, 0));

    $("#B-wind").css("top", plx(110, 10));
    $("#B-wind-info").css("top", plx(145, 0));

    $("#B-geothermal").css("top", plx(142, 10));
    $("#B-geothermal-info").css("top", plx(176, 0));

    // SECTION C (FAQs)

    $("#C-title").css("top", plx(202, 0));
    $("#C-questions").css("top", plx(216, 0));

    // SECTION D (Sources)

    $("#D-pexels").css("top", plx(-40, 10));
    $("#D-pexels-info").css("top", plx(6, 0));

    $("#D-bankrate").css("top", plx(-45, 10));
    $("#D-bankrate-info").css("top", plx(6, 0));

    $("#D-understandsolar").css("top", plx(-50, 10));
    $("#D-understandsolar-info").css("top", plx(6, 0));
}

$(window).on("scroll", function (e) {
    plx_active ? plx_el() : plx_el_two();
});

$(".question").on("click", function () {
    $(this).children("div").toggleClass("revealed");
    $(this).children("i").toggleClass("flip");
});

b_solar_panel_seen = false;
b_wind_seen = false;
b_geothermal_seen = false;

function plx_el_two() {
    if (
        isScrolledIntoView($("#B-solar-panel-price div")) &&
        !b_solar_panel_seen
    ) {
        b_solar_panel_seen = true;

        $("#B-solar-panel-price div").html(spanned("4.99%"));

        carousel(
            "4.99%".length,
            "4.99%".length + 1,
            "#B-solar-panel-price div div"
        );
    }

    if (isScrolledIntoView($("#B-wind-price div")) && !b_wind_seen) {
        b_wind_seen = true;

        $("#B-wind-price div").html(spanned("1.50B"));

        carousel(
            "1.50B".length,
            "1.50B".length + 1,
            "#B-wind-price div div"
        );
    }

    if (
        isScrolledIntoView($("#B-geothermal-price div")) &&
        !b_geothermal_seen
    ) {
        b_geothermal_seen = true;

        $("#B-geothermal-price div").html(spanned("15.00%"));

        carousel(
            "15.00%".length,
            "15.00%".length + 1,
            "#B-geothermal-price div div"
        );
    }

    $(".B-big-name > #scroll").css("top", plx(-3.5, -10));
    $("#B-solar-panel").css("top", plx(40, -10));
    $("#B-wind").css("top", plx(40, -10));
    $("#B-geothermal").css("top", plx(40, -10));
}

function back() {
    plx_active = true;

    document.body.scrollTop = document.documentElement.scrollTop = 0;

    plx_el();

    $("#blur").addClass("active");
    $(
        ".B-basic-info, .B-price, .B-big-name, .B-big-name > #scroll, #back-ctn"
    ).animate({ opacity: 0 }, 500);
    setTimeout(function () {
        $(
            "#A, #B-solar-panel-info, #B-wind-info, #B-geothermal-info, #B-i, #B-ii, #B-iii, #C, #D"
        ).removeClass("hide");
        $(
            "#A, #B-solar-panel-info, #B-wind-info, #B-geothermal-info, #B-i, #B-ii, #B-iii, #C, #D"
        ).removeClass("hide2");

        $("#B-solar-panel").css({
            top: "90vw",
            left: "14vw",
            width: "16.5vw",
            height: "21vw",
            transition: "0.25s opacity",
        });

        $("#B-wind").css({
            top: "110vw",
            left: "70vw",
            width: "16.5vw",
            height: "21vw",
            transition: "0.25s opacity",
        });

        $("#B-geothermal").css({
            top: "142vw",
            left: "38vw",
            width: "16.5vw",
            height: "21vw",
            transition: "0.25s opacity",
        });
    }, 250);
    setTimeout(function () {
        $("#blur").removeClass("active");
    }, 500);
}

function i() {
    blur();

    plx_active = false;
    plx_el_two();

    document.body.scrollTop = document.documentElement.scrollTop = 0;

    $(
        ".B-basic-info, .B-price, .B-big-name, .B-big-name > #scroll, #back-ctn"
    ).animate({ opacity: 1 }, 500);

    $("#A, #B-solar-panel-info, #B-ii, #B-iii, #C, #D").addClass("hide");
    setTimeout(function () {
        $("#A, #B-solar-panel-info, #B-ii, #B-iii, #C, #D").addClass("hide2");
    }, 500);

    $("#B-solar-panel").css({
        top: "11vw",
        left: "5vw",
        width: "90vw",
        height: "30vw",
        transition:
            "0.25s opacity, 0.75s top, 0.75s left, 0.75s width, 0.75s height cubic-bezier(0.86, 0, 0.07, 1)",
    });

    setTimeout(function () {
        $("#B-solar-panel").css({
            top: "40vw",
            transition: "0.25s opacity, 1s top cubic-bezier(0.86, 0, 0.07, 1)",
        });
    }, 900);

    setTimeout(function () {
        $("#B-solar-panel").css("transition", "0.25s opacity");
    }, 1900);

    $("#B-solar-panel-big").html(spanned("FARM-TO-TABLE"));

    carousel(
        "FARM-TO-TABLE".length,
        "FARM-TO-TABLE".length + 1,
        "#B-solar-panel-big div"
    );

    setTimeout(function () {
        $(".B-big-name > #sub").css("opacity", 1);
    }, 1300);
}

function ii() {
    blur();

    plx_active = false;
    plx_el_two();

    document.body.scrollTop = document.documentElement.scrollTop = 0;

    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

    $(
        ".B-basic-info, .B-price, .B-big-name, .B-big-name > #scroll, #back-ctn"
    ).animate({ opacity: 1 }, 500);

    $("#A, #B-wind-info, #B-i, #B-iii, #C, #D").addClass("hide");
    setTimeout(function () {
        $("#A, #B-wind-info, #B-i, #B-iii, #C, #D").addClass("hide2");
    }, 500);

    $("#B-wind").css({
        top: "11vw",
        left: "5vw",
        width: "90vw",
        height: "30vw",
        transition:
            "0.25s opacity, 0.75s top, 0.75s left, 0.75s width, 0.75s height cubic-bezier(0.86, 0, 0.07, 1)",
    });

    setTimeout(function () {
        $("#B-wind").css({
            top: "40vw",
            transition: "0.25s opacity, 1s top cubic-bezier(0.86, 0, 0.07, 1)",
        });
    }, 900);

    setTimeout(function () {
        $("#B-wind").css("transition", "0.25s opacity");
    }, 1900);

    $("#B-wind-big").html(spanned("PREPARATION PROCESSES"));

    carousel("PREPARATION PROCESSES".length, "PREPARATION PROCESSES".length + 1, "#B-wind-big div");

    setTimeout(function () {
        $(".B-big-name > #sub").css("opacity", 1);
    }, 1300);
}

function iii() {
    blur();

    plx_active = false;
    plx_el_two();

    document.body.scrollTop = document.documentElement.scrollTop = 0;

    $(
        ".B-basic-info, .B-price, .B-big-name, .B-big-name > #scroll, #back-ctn"
    ).animate({ opacity: 1 }, 500);

    $("#A, #B-geothermal-info, #B-i, #B-ii, #C, #D").addClass("hide");
    setTimeout(function () {
        $("#A, #B-geothermal-info, #B-i, #B-ii, #C, #D").addClass("hide2");
    }, 500);

    $("#B-geothermal").css({
        top: "11vw",
        left: "5vw",
        width: "90vw",
        height: "30vw",
        transition:
            "0.25s opacity, 0.75s top, 0.75s left, 0.75s width, 0.75s height cubic-bezier(0.86, 0, 0.07, 1)",
    });

    setTimeout(function () {
        $("#B-geothermal").css({
            top: "40vw",
            transition: "0.25s opacity, 1s top cubic-bezier(0.86, 0, 0.07, 1)",
        });
    }, 900);

    setTimeout(function () {
        $("#B-geothermal").css("transition", "0.25s opacity");
    }, 1900);

    $("#B-geothermal-big").html(spanned("SUSTAINABILITY"));

    carousel(
        "SUSTAINABILITY".length,
        "SUSTAINABILITY".length + 1,
        "#B-geothermal-big div"
    );

    setTimeout(function () {
        $(".B-big-name > #sub").css("opacity", 1);
    }, 1300);
}

function spanned(str) {
    str_s = str.split("");
    res = "";

    str_s.forEach(function (c) {
        res += `<div>${c}</div>`;
    });

    return res;
}

function carousel(len, lenp, id) {
    setTimeout(function () {
        $(`${id}:nth-child(${lenp - len})`).addClass("revealed");
        if (--len) carousel(len, lenp, id);
    }, 100);
}

$(document).on("mousemove", function (evt) {
    var x = evt.pageX;
    var y = evt.pageY;

    $("#cursor").css("display", "block");

    $("#cursor").css({
        left: x,
        top: y,
        opacity: 1,
    });
});

$(document).on("scroll", function() {
    $("#cursor").css("display", "none");
});

$(".nav").on('click', function(e) {
    e.preventDefault();
    const self = this;
    setTimeout(function() {
        window.location.href = self.href;
    }, 200)
});
