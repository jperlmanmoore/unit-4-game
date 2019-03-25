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


    var characterObj;
    var opponentObj;
    var fightRound = 1;
    var gameMode = "not-started";

    initGameMode();

    $("#restart").click(function () {
        initGameMode();
    });

    $("#characters").on("click", ".playerCharacter", function () {
        $(this).removeClass("playerCharacter").addClass("userChoice");
        console.log(this);
        $(".playerCharacter").not(this).appendTo($("#pickOpponentChar"));
        $(".playerCharacter").not(this).removeClass("playerCharacter").addClass("pickOpponentChar");

        var userChoiceId = $(this).attr("id");
        characterObj = characters[userChoiceId];
        $("#characters").append("<div id='userStats' class='pl-5 ml-5 font-size: 30px'> <p>Attack Power: " + characterObj.attackPower + "</p> <p>Health Points: " + characterObj.healthPoints + "</p> </div>");
        $("#userStats").css("font-family", 'Open Sans Condensed', 'sans-serif');
    });


    $("#pickOpponentChar").on("click", ".pickOpponentChar", function () {
        if (gameMode === "not-started") {
            gameMode = "started";
            $(this).removeClass("pickopponentChar").addClass("opponentChar").appendTo($("#opponentChar"));
            var userChoiceId = $(this).attr("id");
            opponentObj = characters[userChoiceId];
            $("#opponentChar").append("<div id='opponentStats' class='ml-3' font-size: 30px'> <p>Health Points: " + opponentObj.healthPoints + "</p> <p>Counter Attack Power: " + opponentObj.counterAttackPower + "</p> </div>");
            $("#opponentStats").css("font-family", 'Open Sans Condensed', 'sans-serif');
            //if an opponentChar is picked, then don't allow a new one to be picked until opponentChar is defeated
        }
    });


    $("#fight").click(function () {
        if (gameMode === "started") {
            if (fightRound === 1) {
                characterObj.baseAttackPower = characterObj.attackPower;
            }
            opponentObj.healthPoints = opponentObj.healthPoints - characterObj.attackPower;
            characterObj.healthPoints = characterObj.healthPoints - opponentObj.counterAttackPower;
            characterObj.attackPower = characterObj.attackPower + characterObj.baseAttackPower;
            $("#userStats").html("<p>Attack Power: " + characterObj.attackPower + "</p> <p>Health Points: " + characterObj.healthPoints + "</p>");
            $("#opponentStats").html("<p>Health Points: " + opponentObj.healthPoints + "</p> <p>Counter Attack Power: " + opponentObj.counterAttackPower + "</p>");
            fightRound++;
            if (characterObj.healthPoints <= 0) {
                $("#characters").append("<div id='winorlose' class='ml-3' style='height: 50px; width: 50px; font-size: 20px'> 'You Lose!' </div>");
                $("#restart").show();

                gameMode = "not-started";
            } else if (opponentObj.healthPoints <= 0) {
                $("#characters").append("<div id='winorlose' class='ml-3' style='height: 50px; width: 50px; font-size: 20px'> 'You Win! Choose another opponent to fight!' </div>");
                $("#opponentChar").html("");
                gameMode = "not-started";
            }
        }
    });
    //need to fix the winlose message to only show once

    function initGameMode() {
        characters = {
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
        fightRound = 1;
        var $container = $("#characters");
        $container.html("");
        $("#pickOpponentChar").html("").prepend("<div class='pick'>Pick opponent</div>");
        $("#opponentChar").html("").prepend("<div class='pick'>Opponent</div>");

        var c = characters["leia"];
        addCharacter($container, c.name, c.attackPower, c.healthPoints, c.counterAttackPower, "leia2.jpg");
        c = characters["vader"];
        addCharacter($container, c.name, c.attackPower, c.healthPoints, c.counterAttackPower, "vader2.jpg");
        c = characters["trooper"];
        addCharacter($container, c.name, c.attackPower, c.healthPoints, c.counterAttackPower, "trooper.jpg");
        c = characters["kylo"];
        addCharacter($container, c.name, c.attackPower, c.healthPoints, c.counterAttackPower, "kylo.jpg");
        $("#restart").hide();
        gameMode = "not-started";
        $("#characters").prepend("<div class='pick'>Pick character</div>");
        $(".pick").css("font-family", 'Open Sans Condensed', 'sans-serif');
        //needs to disappear after user player is picked & change to say player

        $(".pick").css("font-family", 'Open Sans Condensed', 'sans-serif');
        //needs to disappear when opponent is picked, but reappear when a second opponent needs to be picked

        $(".pick").css("font-family", 'Open Sans Condensed', 'sans-serif');
    }

    function addCharacter($container, name, attackPower, healthPoints, counterAttackPower, imgurl) {
        $container.append("<div class='card-deck' id='characters'>" +
            "<div class='card charactercard playerCharacter' id='" + name + "' style='max-width: 250px; max-height: 400px'>" +
            "<img class='card-img-top' src='assets/images/" + imgurl + "' alt='" + name + "'>" +
            "<div class='card-body'>" +
            "<p class='card-text text-center' style='font-family: 'Open Sans Condensed', sans-serif;>" + name + "</p>" +
            "<p class='card-text text-center' style='font-family: 'Open Sans Condensed', sans-serif;'>HP: " + healthPoints + " AP: " + attackPower + " CAP: " + counterAttackPower + "</p>" +
            "</div>" +
            "</div>"
        );
    }





});