$(document).ready(function() {
  $("#submit-button").click(function(event){
    var name = $("input#name").val();
    var aesthetics = $("select#aesthetics").val();
    var syntax = $("select#syntax").val();
    var popularity =$("input:radio[name=popularity]:checked").val();
    var tolerance =$("input:radio[name=tolerance]:checked").val();
    var stability =$("input:radio[name=stability]:checked").val();

    $(".name").text(name);

    if (name === "" || aesthetics === "" || syntax === "" || stability === "") {
      alert("PLEASE ANSWER ALL QUESTIONS BEFORE SUBMITTING")
      $(".results").hide();
    }
    if (tolerance === "high" || stability === "mid" && popularity === "high") {
      $("#java").show();
      $("#c-sharp").hide();
      $("#css").hide();
      $("#php").hide();
      $("#ruby").hide();
    }
    if (tolerance === "mid" || popularity === "high" && important === "high") {
      $("#c-sharp").show();
      $("#java").hide();
      $("#css").hide();
      $("#php").hide();
      $("#ruby").hide();
    }
    if (stability === "high" || popularity === "mid") {
      $("#php").show();
      $("#c-sharp").hide();
      $("#java").hide();
      $("#css").hide();
      $("#ruby").hide();
    }
    if (popularity === "low" || tolerance === "low" || syntax === "yes" || stability === "low") {
      $("#ruby").show();
      $("#c-sharp").hide();
      $("#java").hide();
      $("#css").hide();
      $("#php").hide();
    }
    else {
      $("#css").show();
      $("#c-sharp").hide();
      $("#java").hide();
      $("#php").hide();
      $("#ruby").hide();
    }
    
    event.preventDefault();
  });
});
