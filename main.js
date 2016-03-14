	
	var sliding = false;

	function ScrollSlide(x){

				var oldSlide = $('#BGSlide'+$('.SlideActive').attr('tag'))
				var activeSlide = parseInt($('.SlideActive').attr('tag'));


			if(sliding == false){
			    if(x == 'UP') {
			        //scroll up


			        if(activeSlide == 1){
			        	//do nothing 

			        } else {
			        	//go up one
			        	activeSlide--;

						$('#BGSlide'+activeSlide).addClass('SlideActive');

						$('.SlideTabActive').removeClass('SlideTabActive')


						$('#SlideTab'+activeSlide).addClass('SlideTabActive');
						sliding = true;

						if(activeSlide == 1){

							$('html, body').scrollTop(oldSlide.height());
							$('html, body').animate({
					            scrollTop: 0
					        }, 500 , (function(){
						        		oldSlide.removeClass('SlideActive');
						        		StartFirstPage();
						 

						        		sliding = false;
						        	})
					            );	



						} else {
							$('html, body').scrollTop(oldSlide.height());
							$('html, body').animate({
					            scrollTop: 0
					        }, 500 , (function(){
					            	oldSlide.removeClass('SlideActive');
					            	sliding = false;


					            })
					        );							
						}
			        }



			    } else {
			        //scroll down
					var oldSlide = $('#BGSlide'+$('.SlideActive').attr('tag'))

					

					if($('.SlideActive').attr('tag') == $('#MainSlideNavi ul li:last-child').attr('tag')) {
			        	// go back to first
						$('#BGSlide'+1).addClass('SlideActive');

						$('.SlideTabActive').removeClass('SlideTabActive')
						$('#SlideTab'+1).addClass('SlideTabActive');
						sliding = true;


							$('html, body').scrollTop(oldSlide.height());
							$('html, body').animate({
					            scrollTop: 0
					        }, 500 , (function(){
					            	oldSlide.removeClass('SlideActive');
					            	$('#Header_Bar').animate({
						            	top: 0
						        	}, 500, function(){

						        		sliding = false;
						        	});
					            })
					        );	

			        } else {
			        	//go down one
			        	activeSlide++;

						$('#BGSlide'+ activeSlide).addClass('SlideActive');

						$('.SlideTabActive').removeClass('SlideTabActive')
						$('#SlideTab'+activeSlide).addClass('SlideTabActive');


						sliding = true;

						if(activeSlide == 2){

							$('html, body').scrollTop(0);

							var headerH = $('#Header_Bar').height();


				        		$('html, body').animate({
						            scrollTop: oldSlide.height()
						        }, 500 , (function(){
						            	oldSlide.removeClass('SlideActive');
						            	sliding = false;
	
						            	FinishFirstPage();


						            })
						        );	
	


						} else {

							$('html, body').scrollTop(0);
							$('html, body').animate({
					            scrollTop: oldSlide.height()
					        }, 500 , (function(){
					            	oldSlide.removeClass('SlideActive');
					            	sliding = false;
					            })
					        );
						}

			        }


			    }  

		    } 


	}

var MatrixObj;
	function FinishFirstPage(){

        	$('#WebDesignIcon').css('top', '-150px');
		$('#WebDevIcon').css('top', '-150px');
		$('#WebSEOIcon').css('top', '-150px');

    	$('#WebDesignText').css('top', '180px');
		$('#WebDevText').css('top', '180px');
		$('#WebSEOText').css('top', '180px');

		MatrixObj.StopMatrix();
	}

	function StartFirstPage(){


		MatrixObj.StartMatrix('Canvas1');
				$('#WebDesignIcon').animate({
			top: 0
			}, 500, function() {
			$('#WebDevIcon').animate({
				top: 0
				}, 500, function() {
					$('#WebSEOIcon').animate({
						top: 0
						}, 500, function() {

					});	
			});

				
		});

		$('#WebDesignText').animate({
			top: 0
			}, 500, function() {
			$('#WebDevText').animate({
				top: 0
				}, 500, function() {
					$('#WebSEOText').animate({
						top: 0
						}, 500, function() {

					});	
			});

				
		});
	}

	

	$(document).ready(function(e) {

		$('.SlideFooter').click(function() {
			ScrollSlide('DOWN');
		});

				MatrixObj = new MatrixObj();

		$('.flipper').each(function() {
			$(this).flip({
			  axis: 'y',
			  trigger: 'hover'
			});		
		});



	StartFirstPage();


		var sliding = false;

		var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
		$('body').bind(mousewheelevt, function(e){

		    var evt = window.event || e //equalize event object     
		    evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible               
		    var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF

		    var direction = '';

		    	if(delta > 0) {
			        //scroll up
			        direction = 'UP';
			        ScrollSlide(direction);

			    } else {
			    	direction = 'DOWN';
					ScrollSlide(direction);
			    }


		});


//listeners for mobiles
		var ts;
		$(document).bind('touchstart', function (e){
		   ts = e.originalEvent.touches[0].clientY;
		});

		$(document).bind('touchend', function (e){
		   var te = e.originalEvent.changedTouches[0].clientY;
		   if(ts > te+5){
		    	direction = 'DOWN';
				ScrollSlide(direction);
		   }else if(ts < te-5){
		        direction = 'UP';
		        ScrollSlide(direction);
		   }
		});



		$('#MainSlideNavi ul li').each(function(){
			if(sliding == false){
				$(this).click(function(){
					//alert($(this).attr('tag'));

					if($(this).attr('tag') == $('.SlideActive').attr('tag')){
						// user has selected the same slide do nothing

					} else {
						//slide select goto it
							var activateSlide = $(this).attr('tag');
							var oldSlide = $('#BGSlide'+$('.SlideActive').attr('tag'));

							$('#BGSlide'+activateSlide).addClass('SlideActive');

							$('.SlideTabActive').removeClass('SlideTabActive')
							$('#SlideTab'+activateSlide).addClass('SlideTabActive');
							sliding = true;

							if($(this).attr('tag') > $('.SlideActive').attr('tag')){
								//remove header first
								if(oldSlide.attr('tag') == 1){
									
									var headerH = $('#Header_Bar').height();

									$('#Header_Bar').animate({
						            	top: -headerH
						        	}, 500 , (function(){
						        			$('html, body').animate({
								            scrollTop: oldSlide.height()
								        }, 500 , (function(){
								            	oldSlide.removeClass('SlideActive');
								            	sliding = false;
								            })
								        );	
									})
						        );


								} else {

									$('html, body').animate({
							            scrollTop: oldSlide.height()
							        }, 500 , (function(){
							            	oldSlide.removeClass('SlideActive');
							            	sliding = false;
							            })
							        );

								}

							} else {
								sliding = true;
								if(activateSlide == 1){

									$('html, body').scrollTop(oldSlide.height());
									$('html, body').animate({
							            scrollTop: 0
							        }, 500 , (function(){
							        		
							            	oldSlide.removeClass('SlideActive');
							            	$('#Header_Bar').animate({
								            	top: 0
								        	}, 500, function(){

								        		sliding = false;
								        	});
							            	
							            })
							        );


								} else {
									$('html, body').scrollTop(oldSlide.height());
									$('html, body').animate({
							            scrollTop: 0
							        }, 500 , (function(){
							        		sliding = false;
							            	oldSlide.removeClass('SlideActive');

							            })
							        );

								}
								
							}


					}


				});

			}




		});

	});