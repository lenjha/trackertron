$(document).ready(function() {
  $("#submit-button").click(function(event){
    var name = $("input#name").val();
    var aesthetics = $("select#aesthetics").val();
    var syntax = $("select#syntax").val();
    var popularity =$("input:radio[name=popularity]:checked"].val());
    var tolerance =$("input:radio[name=tolerance]:checked"].val());
    var stability =$("input:radio[name=stability]:checked"].val());

      alert(name + ", your test results are in.");

    event.preventDefault();
  });
});
