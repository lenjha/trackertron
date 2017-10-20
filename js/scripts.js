$(document).ready(function() {
  $("#submit-button").click(function(event){
    var name = $("input#name").val();
    var aesthetics = $("select#aesthetics").val();
    var syntax = $("select#syntax").val();
    var stability = $("select#stability").val();
    var popularity =$("input:radio[name=popularity]:checked").val();
    var tolerance =$("input:radio[name=tolerance]:checked").val();
    var importance =$("input:radio[name=importance]:checked").val();

    $(".name").text(name);

    if (tolerance === "high" || stability === "mid" && importance === "high" || syntax === "no") {
      $("#java").fadeIn();
      $("#c-sharp").hide();
      $("#css").hide();
      $("#php").hide();
      $("#ruby").hide();
    }
    if (tolerance === "mid" || popularity === "high" && importance === "high") {
      $("#c-sharp").fadeIn();
      $("#java").hide();
      $("#css").hide();
      $("#php").hide();
      $("#ruby").hide();
    }
    if (stability === "high" || popularity === "mid") {
      $("#php").fadeIn();
      $("#c-sharp").hide();
      $("#java").hide();
      $("#css").hide();
      $("#ruby").hide();
    }
    if (popularity === "low" || tolerance === "low" || syntax === "yes" || stability === "low") {
      $("#ruby").fadeIn();
      $("#c-sharp").hide();
      $("#java").hide();
      $("#css").hide();
      $("#php").hide();
    }
    if (aesthetics === "yes") {
      $("#css").fadeIn();
      $("#c-sharp").hide();
      $("#java").hide();
      $("#php").hide();
      $("#ruby").hide();
    }
    if (name === "" || aesthetics === "" || syntax === "" || popularity === "" || tolerance === "" || importance === "" || stability === "") {
      $("#c-sharp").hide();
      $("#css").hide();
      $("#php").hide();
      $("#ruby").hide();
      $("#java").hide();
      alert("HELP ME TO HELP YOU, MEAT - ANSWER ALL THE QUESTIONS PROPERLY")
    }

    event.preventDefault();
  });
});
