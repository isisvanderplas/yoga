$( function() {
  $("#datepicker")
    .datepicker({ minDate: 0, maxDate: "+12M" });
} );

$(document).ready(function(e) {
    $('#submit').click(function(){
		$(this).val("Namaste!");
	});
});
