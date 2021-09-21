$(document).ready(function () {
    $.ajax({
        url: "https://openexchangerates.org/api/latest.json?app_id=fa03050e6438469cac69431c18b2af58",
        dataType: "json",
        type: "GET",
        success: function (api) {
            var $EUR = api.rates.EUR;
            var $USD = api.rates.USD;
            var $GBP = api.rates.GBP;
            var $SEK = api.rates.SEK;
            var $NGN = api.rates.NGN;

            $(".EUR-NGN").prepend(($NGN / $EUR).toFixed(2));
            $(".NGN-EUR").prepend(($EUR / $NGN).toFixed(6));

            $(".USD-NGN").prepend(($NGN / $USD).toFixed(2));
            $(".NGN-USD").prepend(($USD / $NGN).toFixed(6));

            $(".GBP-NGN").prepend(($NGN / $GBP).toFixed(2));
            $(".NGN-GBP").prepend(($GBP / $NGN).toFixed(6));

            $(".SEK-NGN").prepend(($NGN / $SEK).toFixed(2));
            $(".NGN-SEK").prepend(($SEK / $NGN).toFixed(6));
        },
    });
});

var slideIndex = [1, 1];
var slideId = ["widget-group"];
var slideId2 = ["widget-group2"];
showDivs(1, 0);

function plusDivs(n, no) {
    showDivs((slideIndex[no] += n), no);
}

function showDivs(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {
        slideIndex[no] = 1;
    }
    if (n < 1) {
        slideIndex[no] = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}

var slideId2 = ["widget-group2"];
showDivs2(1, 0);

function plusDivs2(n, no) {
    showDivs2((slideIndex[no] += n), no);
}

function showDivs2(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId2[no]);
    if (n > x.length) {
        slideIndex[no] = 1;
    }
    if (n < 1) {
        slideIndex[no] = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}

!(function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = "https://weatherwidget.io/js/widget.min.js";
        fjs.parentNode.insertBefore(js, fjs);
    }
})(document, "script", "weatherwidget-io-js");

$(document).ready(function () {
    $("#weather_toggle").click(function () {
        $(".widget-weather").toggle();
    }); 
    $("#currency_toggle").click(function () {
        $(".widget-currency").toggle();
    });
});