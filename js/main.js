  
$(document).ready(function() {
	
	$(".nav-hidden").hide();
				
	$( ".hamburger-box" ).click(function() {
	  	$(".hamburger").toggleClass("is-active");
		$(".nav-hidden").toggleClass("show");
	});
	
	$( "footer, .content" ).click(function() {
	  	$(".hamburger").removeClass("is-active");
		$(".nav-hidden").removeClass("show");
	});
	
});
