function getQueryVariable(variable) {
		
			var query = window.location.search.substring(1);
			var vars = query.split("&");
			for (var i=0; i < vars.length; i++) {
			
					var pair = vars[i].split("=");
					if(pair[0] == variable){
					
						return pair[1];
					}
			}
			return(false);
		}
		
function loadSiteFromURL() {
			
	var current = getQueryVariable("site");
			
	if(current == false) {
			
		current = "home";
	}
    $(".content").load(current + ".html");
    
 
    document.getElementById(current).setAttribute("class", "active " + document.getElementById(current).getAttribute("class"));
			
	return current;
}
		
function changeSite(current, site) {
                	
	document.getElementById(current).setAttribute("class", document.getElementById(current).getAttribute("class").substring(7));
	document.getElementById(site).setAttribute("class", "active " + document.getElementById(site).getAttribute("class"));
	                
	current = site;
	document.title = "Nature One - " + site.substring(0, 1).toUpperCase() + site.substring(1);
	site = site + '.html';
	$(".content").load(site);
	
					
	window.history.pushState(current, "Nature One - " + site.substring(0, 1).toUpperCase() + site.substring(1), "?site=" + current);
		
	return current;
}

$(document).ready(function(){ 
		
	var current = "home";
		
	window.onpopstate = function(e){
			
		if(e.state){

			document.getElementById(current).setAttribute("class", document.getElementById(current).getAttribute("class").substring(7));
			current = loadSiteFromURL();
		}
	};
		
	current = loadSiteFromURL();			
			
    $('.nav-pills a').click(function(e){
 
    	e.preventDefault();
 
		var site = $(this).data('site'); 

		
		current = changeSite(current, site);
	});
    
    $('.bxslider').bxSlider({
    	nextSelector: '#slider-next',
    	prevSelector: '#slider-prev',
    	auto: true,
    	autoHover: true,
    	pause: 8000,
    	autoControls: true,
    });
});
