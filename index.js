$( function() {
  $('#datepicker').datepicker({ minDate: 0, maxDate: "+12M" });
} );

$( function() {
  $( "#number" )
    .selectmenu()
    .selectmenu( "menuWidget" )
      .addClass( "overflow" );
} );
