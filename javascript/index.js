



$("#mute").click(function() {
  $("#backgroundMusic").pause("YogaMusic.mp3");
});

$(function() {
  $("#datepicker").datepicker({ minDate: 0, maxDate: "+12M" });
});

$(document).ready(function(e) {
    $('#submit').click(function(){
		$(this).val("Namaste!");
	});
});
