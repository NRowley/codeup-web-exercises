"use strict";
// EXERCISE 1
$(function () {
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
    //
    // $('li').css('font-size', '20px');
    // //Individual element highlight
    // $("h1").css('background-color', 'red');
    // $("li").css('background-color', 'blue');
    // $("p").css('background-color', 'green');

    //Multi Element Highlight
    // $("h1, li, p").css('background-color', 'orange');
    // let h1 = $('h1').html();
    // alert(h1);

    // Event Exercises-------------------
    // Add jQuery code that will change the background color of an h1 element when clicked.
    $('#header-page-title').click(function () {
        $('#header-page-title').css('background-color', 'grey');
    });

    // Make all paragraphs have a font size of 18px when they are double clicked.
    $('p').dblclick(function () {
        $(this).css('font-size', '18px');
    })

    // Set all li text color to red when the mouse is hovering; reset to black when it is not
    $('li').hover(function () {
        $(this).css('color', 'red');
    }, function () {
        $(this).css('color', 'black');
    })
})
;
