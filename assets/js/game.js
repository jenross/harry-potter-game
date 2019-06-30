$(document).ready(function() {

    //hide until game has begun
    $("#choose-text").html("");
    $("#challenger-text").html("");
    $("#wizard-text").html("");
    $("#expelliarmus").hide();

    let initialMusic = new Audio('assets/sound/prologue.mp3');
    initialMusic.play(); 

    $("#begin-game").on("click", function() {
        $("#directions").html("");
        $(this).hide();
        $("#expelliarmus").show();
        $("#choose-text").html("Choose a wizard");
        $("#wizard-text").html("Wizard");
        $("#challenger-text").html("Challenger");
    });
});

function initialize() {
    
    let wizardOptions = [
    {name: "Harry Potter", health: 175, attackPower: 15, counterAttackPower: 25, img: "assets/images/harry.png"}, 
    {name: "Hermione Granger", health: 180, attackPower: 12, counterAttackPower: 22, img: "assets/images/hermione.png"},
    {name: "Lord Voldemort", health: 120, attackPower: 10, counterAttackPower: 20, img: "assets/images/voldemort.png"},
    {name: "Severus Snape", health: 110, attackPower: 8, counterAttackPower: 18, img: "assets/images/snape.png"}]; 

}
