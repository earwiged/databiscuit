$(".newsletter a").click(function (e) {
	console.log("SEND")
	$(".form").submit(function() { 
		function validateEmail(email) { 
			    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\
		".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA
		-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		    return re.test(email);
		} 

		if (validateEmail($('.e-mail').attr('value')))
		{
			
		
		}

		else
		{
			$('.error').text('Please enter a valid e-mail').effect("pulsate", { times:3 }, 1000);
			return false;
		}
		
	});

});
