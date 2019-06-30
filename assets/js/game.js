$(document).ready(function() {

    //hide until game has begun
    $("#choose-text").html("");
    $("#challenger-text").html("");
    $("#wizard-text").html("");
    $("#expelliarmus").hide();

   let accioWand = new Audio('assets/sound/accio-wand.wav');
    let expelliarmusSound = new Audio('assets/sound/expelliarmus.mp3');

    $("#begin-game").on("click", function() {
        accioWand.play();
        $("#directions").html("");
        $(this).hide();
        $("#expelliarmus").show();
        $("#choose-text").html("Choose a wizard");
        $("#wizard-text").html("Wizard");
        $("#challenger-text").html("Challenger");
        initialize();
    });
});

function initialize() {
    
    let wizardOptions = [
    {name: "Harry Potter", health: 175, attackPower: 15, counterAttackPower: 25, img: "assets/images/harry.png"}, 
    {name: "Hermione Granger", health: 180, attackPower: 12, counterAttackPower: 22, img: "assets/images/hermione.png"},
    {name: "Lord Voldemort", health: 120, attackPower: 10, counterAttackPower: 20, img: "assets/images/voldemort.png"},
    {name: "Severus Snape", health: 110, attackPower: 8, counterAttackPower: 18, img: "assets/images/snape.png"}]; 

    for (let i = 0; i <wizardOptions.length; i++){
        let wizardDisplays = $("<img>");
        wizardDisplays.addClass("each-wizard-image");
        wizardDisplays.attr("name", wizardOptions[i].name);
        wizardDisplays.attr("health-value", wizardOptions[i].health);
        wizardDisplays.attr("attack-power", wizardOptions[i].attackPower);
        wizardDisplays.attr("counter-attack-power", wizardOptions[i].counterAttackPower);
        wizardDisplays.attr("src", wizardOptions[i].img);
        $("#wizards").append(wizardDisplays);
    }
}
