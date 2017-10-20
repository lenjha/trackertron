$(document).ready(function() {
  $("#submit-button").click(function(event){
    var name = $("input#name").val();
    // var exp = parseInt($("input#exp").val());

      alert(name + ", your test results are in.");

    event.preventDefault();
  });
});
