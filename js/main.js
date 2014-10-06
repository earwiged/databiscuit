$(function() {

	init(); 

	addEventListener("load", function() { 
			setTimeout(hideURLbar, 0); }, false); 
			function hideURLbar(){ 
				window.scrollTo(0,1);	
			}

    $(window).resize(function() {
    	onResize();
	}); 

    function onResize()
	{
		
		$(".section-0").height($(window).height()+5);

		$(".section-1").height($(".section-0").height());
		$(".section-1").css({top:$(".section-1").position().top+1});

		if($(window).height()<700){
			$(".section-1").height(700);	
		}

		if($(window).height()<700){
			$(".section-0").height(500);
		}
		$(".section-1").css({top:$(".section-0").height()});

		$(".section-2").css({top:$(".section-1").position().top+$(".section-1").height()});
	}


	function init(){
		onResize();
		//console.log()
		$(".nav").hide();
	}

	var goSection = 0;

	$(".start").click(function (e) {
		var _offset = $(".section-1").offset().top;
  		$('html, body').animate({scrollTop:_offset}, 700);
  		$(".nav").show();
		e.preventDefault();
    });

    $(window).scroll(function () {
	  var _value = $(window).scrollTop();
	  var _showScrollValue = $(document).height() / 4;
	  var _changeScrollValue = $(document).height() / 2;

	  	if(_value >= _showScrollValue){
	  		$(".nav").fadeIn();
	  		$(".nav").rotate(0);
	  		goSection = 1;
	  	}
	  	else
	  	{
	  		$(".nav").fadeOut();
	  	}

	  	if(_value >= (_changeScrollValue)){
	  		$(".nav").rotate(180);
	  		goSection = -1;
	  	}

	});

    $(".arrow").click(function (e) {
		goSection++
		var _offset = $(".section-"+parseInt(goSection)).offset().top;
  		$('html, body').animate({scrollTop:_offset}, 700);
		e.preventDefault();
		
    });

   
	function looksLikeMail(str) {
		var lastAtPos 	= str.lastIndexOf('@');
		var lastDotPos 	= str.lastIndexOf('.');
		var result 		= (lastAtPos < lastDotPos && lastAtPos > 0 && str.indexOf('@@') == -1 && lastDotPos > 2 && (str.length - lastDotPos) > 2)
		console.log("looksLikeMail: "+result)
		return result;
	}

    // NEWSLETTER SUBMIT

    $(".newsletter").submit(function (e) {
		
		e.preventDefault();
		
		var emailAddress 	= $('.e-mail').attr('value');
		//console.log(emailAddress);
		
		if(looksLikeMail(emailAddress)){
			$.ajax({
                type: "POST",
                url: "form.php",
                data: 'email=' + emailAddress,
                success: function(data) {
					//console.log(data);
					
					if(data == true){
					   $('.error').text('Your e-mail address has been sent!').effect("pulsate", { times:3 }, 1000);
					} else {
					   $('.error').text('Houston! we have a problem! please, try again!').effect("pulsate", { times:3 }, 700);
					}
				  
				}
            });
		}else{
			 $('.error').text('Please, enter a valid e-mail').effect("pulsate", { times:3 }, 700);
		}
		
		return false;
	});

    $('.error').hide();
});


