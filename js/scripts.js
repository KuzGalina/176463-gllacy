		  var link = document.querySelector(".contacts-btn");
		  var popup = document.querySelector(".modal-content");
		  var close = popup.querySelector(".modal-content-close");
		  var overlay = document.querySelector(".modal-overlay");
		  var input = popup.querySelectorAll("input");
		 /* var email = popup.querySelector("[name=email]");
		  var comment = popup.querySelector("[name=comment]");
		  var form = popup.querySelector("form");  */
		  var label = popup.querySelector("label");
	
			
		link.addEventListener("click", function(evt) {
			evt.preventDefault();
			popup.classList.add("modal-content-show");
			overlay.classList.add("modal-content-show");
			login.focus();
		
			
		 });
	
	  	close.addEventListener("click", function(evt) {		  
			evt.preventDefault();
			popup.classList.remove("modal-content-show");
			overlay.classList.remove("modal-content-show");
		  });
		  
		input.addEventListener("click", function() {
			label.classList.add("label-show");	
		});
		

