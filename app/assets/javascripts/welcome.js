$(document).ready(function(){
  
  $( "#demo3b" ).click(function() {
    $('#demo3').animo({animation: ['wobble', 'fadeOutUp'] });
  });
  
  $( "#demo4b" ).click(function() {
    $('#demo4').animo({ animation: ['bounceInDown']}, function(){
      $('#demo5').animo({ animation: ['lightSpeedOut']} );
    });
  });
  
  $( "#demo5b" ).click(function() {
    $('#demo5').animo({animation: ['bounceOut'] });
  });
  
  $( "#demo6b" ).click(function() {
    $('#demo6').animo({animation: ['flipOutX'] });
  });
  
});
