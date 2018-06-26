$(function(){
	var k = $(window).height();
	var flag = false;
	$('.next').click(function(){
		$.fn.fullpage.moveSectionDown();
	})
	$('#fullpage').fullpage({
		navigation: true,
		loopBottom:true,
		loopTop:true,
		// navigationPosition:'left'
		afterLoad:function(anchorLink,index){
		//   if(index == 2){
		// 	  $('.next').fadeOut();
		// 	$('.search').show().animate({"right":370},1500,"easeInOutElastic",function(){
		// 		$('.search-words').animate({"opacity":1},500,function(){
		// 			$('.search').hide();
		// 			$('.search-02-1').show().animate({"height":30,"right":250,"bottom":452},1000)
		// 			$('.goods-02').show().animate({"height":218},1000)
		// 			$('.words-02').animate({"opacity":1},500,function(){
		// 				$('.next').fadeIn();
		// 			})
		// 		})
		// 	});
		//   }
		},
		onLeave:function(index,nextIndex,direction){
			$('.next').fadeOut();
			if(nextIndex == 1){
				$('.next').fadeIn();
			}
			if(index == 1 && nextIndex == 2){
			  $("img, .move").attr("style","");
			  $('.search').show().animate({"right":370},1500,"easeInOutElastic",function(){
				  $('.search-words').animate({"opacity":1},500,function(){
					  $('.search').hide();
					  $('.search-02-1').show().animate({"height":30,"right":250,"bottom":452},1000)
					  $('.goods-02').show().animate({"height":218},1000)
					  $('.words-02').animate({"opacity":1},500,function(){
						  $('.next').fadeIn();
					  })
				  })
			  });
			}
			if(index == 2 && nextIndex == 3){
				$('.shirt-02').show().animate({"bottom":-(k-250),"width":207,"left":260},2000,function(){
					$('.img-01-a').animate({"opacity":1},500,function(){
						$('.btn-01-a').animate({"opacity":1},500,function(){
							$('.next').fadeIn();
						})
					})
				})
				$('.cover').show();
			}
			if(index == 3 && nextIndex == 4){
				$('.shirt-02').hide();
				$('.t1f').show().animate({"bottom":-((k - 250) + 50),"left":260},2000,function(){
					$(this).hide();
					$('.car-img').show();
					$('.car').animate({"left":"120%"},3000,"easeInElastic",function(){
						// $('.words-04-a').animate({"opacity":1},500)
						$('.note').show();
						$('.note-img , .words-04-a').animate({"opacity":1},1000,function(){
							$('.next').fadeIn();
						})
					
					})
				})
			}
			if(index == 4 && nextIndex == 5){
				$('.hand-05').animate({"bottom":0},2000,function(){
					$('.mouse-05-a').animate({"opacity":1},500);
					$('.t1f-05').show().animate({"bottom":70},1000,function(){
						$('.ordre-05').animate({"bottom":390},500,function(){
							$('.words-05').addClass('words-05-a');
							$('.next').fadeIn();
						})
					})
				})
			}

			if(index == 5 && nextIndex == 6){
				$('.t1f-05').animate({"bottom":-(k-500),"left":"40%","width":65},2000,function(){
					$(this).hide();
				})
				$('.box-06').animate({"left":"38%"},2000,function(){
					$(this).animate({"bottom":40},1000,function(){
						$(this).hide();
						$('.pop-06').show();
						$('.words-06-a').show().animate({"left":"30%"},500,"easeOutElastic");
						$('.section6').animate({"backgroundPositionX":"100%"},4000,function(){
							$('.boy').animate({"height":305,"bottom":116},1500,function(){
								$(this).animate({"right":500},500,function(){
									$('.door').animate({"opacity":1},500,function(){
										$('.girl').show().animate({"height":306,"right":350},500,function(){
											$('.pop-07').show();
											$('.next').fadeIn();
										});
									})
								})
							})
						})
					})
				})
			}
			
			if(index == 6 && nextIndex == 7){
				setTimeout(function(){
					$('.star').animate({"width":120},1000,function(){
						$('.good-07').show();
						$('.next').fadeIn();
					})
				},1000)
			}

			$('.beginShoping').hover(function(){
				$('.btn-08-a').toggle();
			})
			$(document).mousemove(function(event){
				var x = event.pageX - $('.hand-08').width()/2;
				var y = event.pageY + 10;
				var minY =k - 449;
				if(y < minY){
					y = minY;
				}
				$('.hand-08').css({"left":x,"top":y});
			})
			$('.again').click(function(){
				$.fn.fullpage.moveTo(1);
				$("img, .move").attr("style","");
			})
			
		}
	});
})