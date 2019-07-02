let expelliarmusSound = new Audio('assets/sound/expelliarmus.mp3');

let wizardChosen = false; 
let challengerChosen = false; 

let wizardOptions = [
    {name: "Harry Potter", health: 175, attackPower: 15, counterAttackPower: 25}, 
    {name: "Hermione Granger", health: 180, attackPower: 12, counterAttackPower: 22},
    {name: "Lord Voldemort", health: 120, attackPower: 10, counterAttackPower: 20},
    {name: "Severus Snape", health: 110, attackPower: 8, counterAttackPower: 18}
    ]; 

function initialize() {
    
    $("#chosen-wizard").empty();
    $("#chosen-challenger").empty(); 
    
    wizardChosen = false;
    challengerChosen = false; 

    wizardOptions = [
    {name: "Harry Potter", health: 175, attackPower: 15, counterAttackPower: 25}, 
    {name: "Hermione Granger", health: 180, attackPower: 12, counterAttackPower: 22},
    {name: "Lord Voldemort", health: 120, attackPower: 10, counterAttackPower: 20},
    {name: "Severus Snape", health: 110, attackPower: 8, counterAttackPower: 18}
    ]; 

    $("#harry-health").text(wizardOptions[0].health);
    $("#hermione-health").text(wizardOptions[1].health);
    $("#voldemort-health").text(wizardOptions[2].health);
    $("#snape-health").text(wizardOptions[3].health);
}
    
$(initialize());

function chooseWizardChallenger() {
    $(".wizard-selection").on("click", function() {
        if (wizardChosen === false) {
            $("#chosen-wizard").append($(this));
            wizardChosen = true; 
        } else if (wizardChosen === true) {
            $("#chosen-challenger").append($(this));
            challengerChosen = true; 
        }
    });
}

$(chooseWizardChallenger()); 

function handleExpelliarmus() {
    $("#expelliarmus").on("click", function(){
        if (wizardChosen === false) {
         $("#current-status").text("Select a wizard");
        } else if (challengerChosen === false) {
            $("#current-status").text("Select a challenger");
        } else {
            expelliarmusSound.play();
            $("#current-status").text("");
        }
    });
}

$(handleExpelliarmus());

function increaseAttackPower() {
    
}

function didYouWin() {

}

