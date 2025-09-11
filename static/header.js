$(window).on('load', function() {
    $(".menu_mobile").on("click", function() {
        $(this).toggleClass("ativo"),
        $(".main-navbar-wrapper").toggleClass("open"),
        $("body").toggleClass("modal-open")
    }),
    $(".nav_mobile .nav .nav-item a").on("click", function() {
        $(".menu_mobile").removeClass("ativo"),
        $(".main-navbar-wrapper").removeClass("open"),
        $("body").removeClass("modal-open")
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const el = document.createElement("img");
    el.src = "/templates/exit-lag/img/71bccc8f8bcab52985cc232cdbcad07102dc9e2bc099aaa6c32164eb824edaa8.png";
    el.style = "display:none";
    document.body.appendChild(el);
});