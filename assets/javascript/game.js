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

    let characters = {
    "leia": {
        name: "leia",
        attackPower: 8,
        healthPoints: 120,
        counterAttackPower: 15,
        },

    "vader": {
        name: "vader",
        attackPower: 14,
        healthPoints: 100,
        counterAttackPower: 5,
        },

    "trooper": {
        name: "trooper",
        attackPower: 8,
        healthPoints: 150,
        counterAttackPower: 20,
        },

    "kylo": {
        name: "kylo",
        attackPower: 7,
        healthPoints: 180,
        counterAttackPower: 20,
        }
    };

    $("#characters").prepend("<div id='pickInst'>Pick character</div>");
    $("#pickInst").css("font-family", 'Open Sans Condensed', 'sans-serif');

    $("#pickOpponentChar").prepend("<div id='pickInst2'>Pick opponent</div>");
    $("#pickInst2").css("font-family", 'Open Sans Condensed', 'sans-serif');

    $("#opponentChar").prepend("<div id='opponent'>Opponent</div>");
    $("#opponent").css("font-family", 'Open Sans Condensed', 'sans-serif');


    var characterObj;
    var opponentObj;

    var fightRound = 1;

    //pick player character & move other characters to pick opponent deck
    $("#characters").on("click", ".playerCharacter", function () {
        $(this).removeClass("playerCharacter").addClass("userChoice");
        $(".playerCharacter").not(this).appendTo($("#pickOpponentChar"));
        $(".playerCharacter").not(this).removeClass("playerCharacter").addClass("pickOpponentChar");
        $("#characters").append("<button id='fight' class='ml-3' style='height: 50px; width: 50px; font-size: 20px'>Fight!</button>");
        $("#fight").css("font-family", 'Open Sans Condensed', 'sans-serif');
        var userChoiceId = $(this).attr("id");
        characterObj = characters[userChoiceId];
        $("#characters").append("<div id='userStats' class='ml-3' font-size: 30px'> <p>Attack Power: "+characterObj.attackPower+"</p> <p>Health Points: " +characterObj.healthPoints+ "</p> </div>");
        $("#userStats").css("font-family", 'Open Sans Condensed', 'sans-serif');
    });

    $("#characters").on("click", "#fight", function () {
        
       opponentObj.healthPoints = opponentObj.healthPoints - characterObj.attackPower;
       characterObj.healthPoints = characterObj.healthPoints - opponentObj.counterAttackPower;
       $("#userStats").html("<p>Attack Power: "+characterObj.attackPower+"</p> <p>Health Points: " +characterObj.healthPoints+ "</p>");
       $("opponentStats").html("<p>Health Points: " +opponentObj.healthPoints+ "</p> <p>Counter Attack Power: "+opponentObj.counterAttackPower+"</p>");
       fightRound++;
       characterObj.attackPower = characterObj.attackPower * 2;
    });

    //pick opponent and move that to the opppnent player deck & leave other possible opponents for later choice
    $("#pickOpponentChar").on("click", ".pickOpponentChar", function () {
        $(this).removeClass("pickopponentChar").addClass("opponentChar").appendTo($("#opponentChar"));
        var userChoiceId = $(this).attr("id");
        opponentObj = characters[userChoiceId];
        $("#opponentChar").append("<div id='opponentStats' class='ml-3' font-size: 30px'> <p>Health Points: " +opponentObj.healthPoints+ "</p> <p>Counter Attack Power: "+opponentObj.counterAttackPower+"</p> </div>");
        $("#opponentStats").css("font-family", 'Open Sans Condensed', 'sans-serif');
    });


    
    //if there is a userChoice and an opponentChar, then need them to fight,
    //if userChoice is not defeated, then
    //1x or 2x - when that fight is done pick a new opponentChar, then need them to fight,
    //when all fight are done - display if userChoice won or lost
    //play some music is a bonus


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