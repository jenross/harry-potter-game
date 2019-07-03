let expelliarmusSound = new Audio('assets/sound/expelliarmus.mp3');

let wizardChosen = false; 
let challengerChosen = false; 
let currentWizard = false;
let currentChallenger = false; 

let attackValue = "";
let counterAttackValue = "";
// let wizardOptions = [
//     {name: "Harry Potter", health: 175, attackPower: 15, counterAttackPower: 25}, 
//     {name: "Hermione Granger", health: 180, attackPower: 12, counterAttackPower: 22},
//     {name: "Lord Voldemort", health: 120, attackPower: 10, counterAttackPower: 20},
//     {name: "Severus Snape", health: 110, attackPower: 8, counterAttackPower: 18}
//     ]; 

let harry = {
    name: "Harry Potter",
    health: 175, 
    attackPower: 15, 
    counterAttackPower: 25
};

let hermione = {
    name: "Hermione Granger",
    health: 180, 
    attackPower: 12, 
    counterAttackPower: 22
};

let voldemort = {
    name: "Lord Voldemort",
    health: 120, 
    attackPower: 10, 
    counterAttackPower: 20
};

let snape = {
    name: "Severus Snape",
    health: 110, 
    attackPower: 8, 
    counterAttackPower: 18
};

function initialize() {

    $("#play-again").hide();
    $("expelliarmus").show();
    
    $("#chosen-wizard").empty();
    $("#chosen-challenger").empty(); 
    $(".duel-image").empty(); 

    wizardChosen = false;
    challengerChosen = false; 
    currentWizard = false;
    currentChallenger = false; 

    attackValue = "";
    counterAttackValue = "";
    
    harry = {
        name: "Harry Potter",
        health: 175, 
        attackPower: 15, 
        counterAttackPower: 25
    };
    
    hermione = {
        name: "Hermione Granger",
        health: 180, 
        attackPower: 12, 
        counterAttackPower: 22
    };
    
    voldemort = {
        name: "Lord Voldemort",
        health: 120, 
        attackPower: 10, 
        counterAttackPower: 20
    };
    
    snape = {
        name: "Severus Snape",
        health: 110, 
        attackPower: 8, 
        counterAttackPower: 18
    };

    $("#harry-health").text(harry.health);
    $("#hermione-health").text(hermione.health);
    $("#voldemort-health").text(voldemort.health);
    $("#snape-health").text(snape.health);
}
    
$(initialize());

// function chooseWizardChallenger() {
//     $(".wizard-selection").on("click", function() {
//         if (wizardChosen === false) {
//             $("#chosen-wizard").append($(this));
//             wizardChosen = true; 
//         } else if (wizardChosen === true) {
//             $("#chosen-challenger").append($(this));
//             challengerChosen = true; 
//         }
//     });
// }

// $(chooseWizardChallenger()); 

$("#js-harry").on("click", function() {
    if(wizardChosen === false && challengerChosen === false) {
        wizardChosen = true;
        currentWizard = true;  
        $("#chosen-wizard").append($(this));
        $(this).attr("w-ap", harry.attackPower);
        $(".w-attack-power").text(harry.attackPower);
        attackValue = ($(this).attr("w-ap"));
        attackValue = parseInt(attackValue);
        $(this).attr("w-cap", harry.counterAttackPower);
        $(".w-counter-attack-power").text(harry.counterAttackPower);
        counterAttackValue = ($(this).attr("w-cap"));
        counterAttackValue = parseInt(counterAttackValue);
    } else if (wizardChosen === true && challengerChosen === false) {
        challengerChosen = true; 
        currentChallenger = true;
        $("#chosen-challenger").append($(this));
        $(this).attr("c-ap", harry.attackPower);
        $(".c-attack-power").text(harry.attackPower);
        attackValue = ($(this).attr("c-ap"));
        attackValue = parseInt(attackValue);
        $(this).attr("c-cap", harry.counterAttackPower);
        $(".c-counter-attack-power").text(harry.counterAttackPower);
        counterAttackValue = ($(this).attr("c-cap"));
        counterAttackValue = parseInt(counterAttackValue);
    }
});

$("#js-hermione").on("click", function() {
    if(wizardChosen === false && challengerChosen === false) {
        wizardChosen = true; 
        currentWizard = true;
        $("#chosen-wizard").append($(this));
        $(this).attr("w-ap", hermione.attackPower);
        $(".w-attack-power").text(hermione.attackPower);
        attackValue = ($(this).attr("w-ap"));
        attackValue = parseInt(attackValue);
        $(this).attr("w-cap", hermione.counterAttackPower);
        $(".w-counter-attack-power").text(hermione.counterAttackPower);
        counterAttackValue = ($(this).attr("w-cap"));
        counterAttackValue = parseInt(counterAttackValue);
    } else if (wizardChosen === true && challengerChosen === false) {
        challengerChosen = true;
        currentChallenger = true; 
        $("#chosen-challenger").append($(this));
        $(this).attr("c-ap", hermione.attackPower);
        $(".c-attack-power").text(hermione.attackPower);
        attackValue = ($(this).attr("c-ap"));
        attackValue = parseInt(attackValue);
        $(this).attr("c-cap", hermione.counterAttackPower);
        $(".c-counter-attack-power").text(hermione.counterAttackPower);
        counterAttackValue = ($(this).attr("c-cap"));
        counterAttackValue = parseInt(counterAttackValue);
    }
});

$("#js-voldemort").on("click", function() {
    if(wizardChosen === false && challengerChosen === false) {
        wizardChosen = true; 
        currentWizard = true;
        $("#chosen-wizard").append($(this));
        $(this).attr("w-ap", voldemort.attackPower);
        $(".w-attack-power").text(voldemort.attackPower);
        attackValue = ($(this).attr("w-ap"));
        attackValue = parseInt(attackValue);
        $(this).attr("w-cap", voldemort.counterAttackPower);
        $(".w-counter-attack-power").text(voldemort.counterAttackPower);
        counterAttackValue = ($(this).attr("w-cap"));
        counterAttackValue = parseInt(counterAttackValue);
    } else if (wizardChosen === true && challengerChosen === false) {
        challengerChosen = true; 
        currentChallenger = true;
        $("#chosen-challenger").append($(this));
        $(this).attr("c-ap", voldemort.attackPower);
        $(".c-attack-power").text(voldemort.attackPower);
        attackValue = ($(this).attr("c-ap"));
        attackValue = parseInt(attackValue);
        $(this).attr("c-cap", voldemort.counterAttackPower);
        $(".c-counter-attack-power").text(voldemort.counterAttackPower);
        counterAttackValue = ($(this).attr("c-cap"));
        counterAttackValue = parseInt(counterAttackValue);
    }
});

$("#js-snape").on("click", function() {
    if(wizardChosen === false && challengerChosen === false) {
        wizardChosen = true; 
        currentWizard = true;
        $("#chosen-wizard").append($(this));
        $(this).attr("w-ap", snape.attackPower);
        $(".w-attack-power").text(snape.attackPower);
        attackValue = ($(this).attr("w-ap"));
        attackValue = parseInt(attackValue);
        $(this).attr("w-cap", snape.counterAttackPower);
        $(".w-counter-attack-power").text(snape.counterAttackPower);
        counterAttackValue = ($(this).attr("w-cap"));
        counterAttackValue = parseInt(counterAttackValue);
    } else if (wizardChosen === true && challengerChosen === false) {
        challengerChosen = true; 
        currentChallenger = true; 
        $("#chosen-challenger").append($(this));
        $(this).attr("c-ap", snape.attackPower);
        $(".c-attack-power").text(snape.attackPower);
        attackValue = ($(this).attr("c-ap"));
        attackValue = parseInt(attackValue);
        $(this).attr("c-cap", snape.counterAttackPower);
        $(".c-counter-attack-power").text(snape.counterAttackPower);
        counterAttackValue = ($(this).attr("c-cap"));
        counterAttackValue = parseInt(counterAttackValue);
    }
});

// function handleExpelliarmus() {
//     $("#expelliarmus").on("click", function(){
//         if (wizardChosen === false) {
//          $("#current-status").text("Select a wizard");
//         } else if (challengerChosen === false) {
//             $("#current-status").text("Select a challenger");
//         // } else {
//         //     $("#current-status").text("");
//             // $(".duel-image").prepend($("<img>", {id: "duel-wand-image", src: "assets/images/duel-wand-image.png"}));
//         }
        
//     });
// }

// $(handleExpelliarmus());

//maybe need to merge all of handleExpellarimus into duel 

function duel() {
    if (wizardChosen === true && challengerChosen === true && currentWizard === true) {
        $("#expelliarmus").on("click", function(){
            $("#current-status").text("");
            expelliarmusSound.play();
            $("#chosen-wizard").find(".w-attack-power");
            attackValue += attackValue;
            $(".w-attack-power").text(attackValue);
        });
    } else if (wizardChosen === true && challengerChosen === true && currentChallenger === true) {
        $("#expelliarmus").on("click", function(){
            $("#current-status").text("");
            expelliarmusSound.play();
            counterAttackValue += counterAttackValue;
            $(".c-counter-attack-power").text(counterAttackValue);
        });
    }
}

$(duel());

function didYouWin() {

}

