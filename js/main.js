"use strict";

// test de modal et hover sur la notation avec etoile

function onClickBuy(e) {
    e.preventDefault();

    $(".background-modal").show("fast");
    $(".modal").show("fast");
}


function onClickEscape() {
    $(".modal").hide("fast");
    $(".background-modal").hide("fast");
}

$(function () {
    $("#buy").on("click", onClickBuy);
    $("#escape").on("click", onClickEscape);
    $("#fa-times-circle").on("click", onClickEscape);

    $(".grey").hover(function () {
        $(this).prevAll(".grey").addBack().toggleClass("gold");
        $(this).prevAll(".grey").addBack().toggleClass("grey");
    });


});