//1. start with all chars in first array & generate/show stats at bottom of card
//2. pick the character and keep that one in the pickUserCharArray & move others to the pickOpponentCharArry
//3. from the pick OpponentArray, choose the frist opponent & move the first opponent to currentOpponentArray
//4. do battle between userChar and opponentChar
//5. pick second opponentChar & move to currentOppoentArray
//6. pick thirs opponentChar & move to currentOpponentArray
//7. action between user and opponents
//8. show win or lose
//9. restart game

$(document).ready(function () {

    var leia = {
        name: "#leia",
        attackPower: 5,
        healthPoints: 200,
        counterAttackPower: 30,
    }

    var vader = {
        name: "#vader",
        attackPower: 10,
        healthPoints: 200,
        counterAttackPower: 10,
    }

    var trooper = {
        name: "#trooper",
        attackPower: 10,
        healthPoints: 200,
        counterAttackPower: 30,
    }

    var kylo = {
        name: "#kylo",
        attackPower: 5,
        healthPoints: 200,
        counterAttackPower: 20,
    };

    var charArray = [leia, vader, trooper, kylo];

    // $("#characters").prepend("<div id='pickInst'>Pick character</div>");
    // $("#pickInst").css("font-family", 'Open Sans Condensed', 'sans-serif');

    // $("#pickOpponentChar").prepend("<div id='pickInst2'>Pick opponent</div>");
    // $("#pickInst2").css("font-family", 'Open Sans Condensed', 'sans-serif');

    // $("#opponentChar").prepend("<div id='opponent'>Opponent</div>");
    // $("#opponent").css("font-family", 'Open Sans Condensed', 'sans-serif');


    $("#characters .playerCharacter").click(function () {
       $("#characters .playerCharacter").not(this).appendTo($("#pickOpponentChar"));
       $("#characters .playerCharacter").not(this).removeClass("playerCharacter");
       console.log( $("#characters .playerCharacter").not(this))
    }); 

    $("#pickOpponentCard .charactercard").click(function () {
        $(this).appendTo($("#opponentChar"));
    }); 

     

    // $("#leia").on("click", function () {
    //     console.log("Leia was clicked!");
    // });

    // $("#vader").on("click", function () {
    //     console.log("Maul was clicked!");
    // });

    // $("#trooper").on("click", function () {
    //     console.log("trooper was clicked!");
    // });

    // $("#kylo").on("click", function () {
    //     console.log("kylo was clicked!");
    // });

    

});





// var myDiv2Para = $('#myDiv2>p').detach();
// myDiv2Para.appendTo('#myDiv2');





// $(".charactercard").click(function() {
//     $(".charactercard").not(this).detatch;
//     $(this).append(pickOpponentCharArray);
//     })

// var attackPower = 0;
// var healthPoints = 0;
// var counterAttackPower = 0;
// var userChar = []; //put the user choice in this array










// var selectedElements = [1,2,3,4,5].splice(0,2);  in javascript
// var targetArray = ['a', 'b', 'c'].concat(selectedElements);





// $("pickUserChar").click(function() {
//         $( this ).toggleClass( "off" );
//       });
//       var p;
//       $( "button" ).click(function() {
//         if ( p ) {
//           p.appendTo( "body" );
//           p = null;
//         } else {
//           p = $( "p" ).detach();
//         }
//       });

//var new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])  








//$().appendTo( document.body ); //move the three to choose Opponent row

// $('.searchbox-input').change( function () { //change to fire on click instead
//     $('.card').show();
//     var filter = $(this).val(); // get the value of the input, which we filter on
//     $('.container').find(".card-title:not(:contains(" + filter + "))").parent().css('display','none');
// });

// Show all hidden divs using a slide down animation over 0.6 seconds
//$( "div.hidden" ).slideDown( 600 );

// Hide all paragraphs using a slide up animation over 0.8 seconds
//$( "p" ).slideUp( 800 );



//function userChooseOpponent() {}  //on click move the choice to the opponent array



//function attackPower() {} //each character increases by its base on each attack

//function counterAttack Power() {} //assign to enemy only & doesn't change

//function healthPoints() {} //starts at amount and decreases




//$(document).ready(function) {
//gameOver = false;
// .on("click", function()) {
//if (!gameover) {
//
//}
//}
//}

// to change the entire page
//$("body".addClass("whatever class"); {
//});

//to toggle class
// $( "span" ).click(function() {
//     $( "li" ).each(function() {
//       $( this ).toggleClass( "example" );
//     });
//   });


//.keyup & .off("keyup")

//position absolute - characters
//position relative -- board