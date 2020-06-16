function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}




$(document).ready(function(){
    $("#pizzahut").click(function(){
        $("#res-name").text("Pizza Hut");
    });
    $("#kor").click(function(){
        $("#res-name").text("Korean BBQ");
    });
    $("#rl").click(function(){
        $("#res-name").text("Red Lobster");
    });
    $("#mox").click(function(){
        $("#res-name").text("Moxie's Grill");
    });
    $("#mac").click(function(){
        $("#res-name").text("McDonald");
    });
    $("#sushi").click(function(){
        $("#res-name").text("Bento Sushi");
    });
    $("#og").click(function(){
        $("#res-name").text("Olive Garden");
    });
    $("#af0").click(function(){
        $("#af0").addClass("imageAnchoract");
        $("#af1").removeClass("imageAnchoract");
        $("#af2").removeClass("imageAnchoract");
        $("#af3").removeClass("imageAnchoract");
    });
    $("#af1").click(function(){
        $("#af1").addClass("imageAnchoract");
        $("#af0").removeClass("imageAnchoract");
        $("#af2").removeClass("imageAnchoract");
        $("#af3").removeClass("imageAnchoract");
    });
    $("#af2").click(function(){
        $("#af2").addClass("imageAnchoract");
        $("#af1").removeClass("imageAnchoract");
        $("#af0").removeClass("imageAnchoract");
        $("#af3").removeClass("imageAnchoract");
    });
    $("#af3").click(function(){
        $("#af3").addClass("imageAnchoract");
        $("#af1").removeClass("imageAnchoract");
        $("#af2").removeClass("imageAnchoract");
        $("#af0").removeClass("imageAnchoract");
    });
    
    $(function () {
    $('input[type=radio]').change(function(){
        if ($("#paydel").is(':checked')) {
            $(".hidecard").hide(300);
        }
        else{
            $(".hidecard").show(300);
        }
      
      })
    });
});
