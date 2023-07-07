"use strict";
// EXERCISE 1
$(function (){
    // alert('The DOM is Loaded!')

    // EXERCISE 2 - ID Selectors
    //
    // let mainLi1 = $('#main-li-1').html();
    // let headerH1 = $('#header-page-title').html();
    // alert(mainLi1);
    // alert(`Here is a different ID: ${headerH1}`);

    // EXERCISE 2 - Class Selectors

    // $('.codeup').css('border', '1px solid red');

    // EXERCISES 2 - Element Selectors

    $('li').css('font-size', '20px');
    //Individual element highlight
    $("h1").css('background-color', 'red');
    $("li").css('background-color', 'blue');
    $("p").css('background-color', 'green');

    //Multi Element Highlight
    $("h1, li, p").css('background-color', 'orange');
    let h1 = $('h1').html();
    alert(h1);
});
