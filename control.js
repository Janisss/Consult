		
		//SKRIPTY NA PRECHODY PRVEJ KATEGORIE V MENU
		$(".cubeA").click(function(){
			$(".content").addClass("active");
			$(".content").empty();
			setTimeout(function(){
				$.ajax('menu/content-a.html', {
					success: function(response) {
						$(".content").html(response);
					}
				});//ajax
			}, 400);
		});
		$(".cubeB").click(function(){
			$(".content").addClass("active");
			$(".content").empty();
			setTimeout(function(){
				$.ajax('menu/content-b.html', {
					success: function(response) {
						$(".content").html(response);
					}
				});//ajax
			}, 400);
		});		
		$(".cubeC").click(function(){
			$(".content").addClass("active");
			$(".content").empty();
			setTimeout(function(){
				$.ajax('menu/content-c.html', {
					success: function(response) {
						$(".content").html(response);
					}
				});//ajax
			}, 400);
		});
		$(".cubeD").click(function(){
			$(".content").addClass("active");
			$(".content").empty();
			setTimeout(function(){
				$.ajax('menu/content-d.html', {
					success: function(response) {
						$(".content").html(response);
					}
				});//ajax
			}, 400);
		});		
		//KONIEC PRVEJ KATEGORIE


		$(".cubeB").click(function(){
			$(".content").addClass("active");
		});
		
		$(".cubeC").click(function(){
			$(".content").addClass("active");
		});
		
		$(".cubeD").click(function(){
			$(".content").addClass("active");
		});
		
		$(".home").click(function(){
			$(".content").removeClass("active");
			$("article").removeClass("active");
			$(".content").empty();
			$("article").empty();
		});
		