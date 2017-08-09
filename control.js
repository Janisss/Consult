		
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
			$(".content").empty();
		});
		
		//druha kategoria menu
			$(".UM").click(function(){
			alert("karoles");
			$("article").addClass("active");
			$("article").empty();
			setTimeout(function(){
				$.ajax('content-a/marktentritt.html', {
					success: function(response) {
						$("article").html(response);
					}
				});//ajax
			}, 400);
		});
		//koniec-druha kategoria menu