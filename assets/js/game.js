$(document).ready(function() {
    //hide until game has begun
    $("#choose-text").html("");
    $("#challenger-text").html("");
    $("#wizard-text").html("");
    $("#expelliarmus").hide();

    // let initialMusic = new Audio("assets/sound/Prologue.mp3");
    // initialMusic.play();

    $("#begin-game").on("click", function() {
        $("#directions").html("");
        $(this).hide();
        $("#expelliarmus").show();

    });
});

function initialize () {
    
}
