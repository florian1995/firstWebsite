$(document).ready(function() {
    
	$('#animation').dblclick(function() {
        $('#animation').fadeOut('fast'); 
    });
	
	$('#animation2').dblclick(function() {
        $('#animation').fadeIn('fast'); 
    });
	
	$('.pull-me').click(function() {
        $('.panel').slideToggle('slow');    
    });
	
	
});