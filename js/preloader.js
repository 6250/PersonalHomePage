function transparent_header() {
    if ($(window).scrollTop() < parseInt(window.innerHeight * 0.12)) {
        $(".kayden-header > .header-inside").addClass("transparent_header")
    } else {
        $(".kayden-header > .header-inside").removeClass("transparent_header")
    }
}

function loading() {
    var a = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = a + "px";
    window.scrollTo(0, 0)
}

function loaded(a) {
    $preloader = $("#preloader");
    var b = new CustomEvent("kaydenLoaded");
    $preloader.fadeOut(400, function () {
        $("body").removeAttr("style");
        a.dispatchEvent(b)
    })
}
transparent_header();
loading();
window.addEventListener("load", function (a) {
    loaded(document.body)
});