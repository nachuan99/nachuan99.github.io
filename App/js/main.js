// js code for footer

// var tabBarBottom = document.getElementsByClassName("tabBarBottom");

// var tabBar = document.getElementById("tabBar")


// for (i = 0; i < 5; i++) { 
// 	var button = tabBarBottom[i];
// 	button.addEventListener("click", function() {
		
// 		for (i = 0; i < 5; i++) {
// 			tabBarBottom[i].classList.remove("activeButton", "hoverButton");
// 		};

// 		this.classList.add("activeButton");
// 	});

// 	button.addEventListener("mouseover", function() {
		
// 		for (i = 0; i < 5; i++) {
// 			tabBarBottom[i].classList.remove("hoverButton", "activeButton");
// 		};

// 		this.classList.add("hoverButton");
// 	});

// 	button.addEventListener("mouseleave", function() {
// 		this.classList.remove("hoverButton");
// 	});
// };



// svg load

$(".like").html('<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px"><title>Artboard 47</title><path d="M9.42,15.64c10.32-10.72,27.87-10.39,38.39.13L50,18l2.19-2.19C62.71,5.25,80.26,4.92,90.58,15.64a26.55,26.55,0,0,1-.36,37.18L87.54,55.5,51.34,91.7a1.9,1.9,0,0,1-2.69,0L9.78,52.82A26.55,26.55,0,0,1,9.42,15.64Z"/></svg>');

$(".comment").html('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve"><g><path d="M12,72h15l0.2,13.3c0,0.8,0.5,1.4,1.1,1.8c0.3,0.1,0.6,0.2,0.9,0.2c0.4,0,0.9-0.1,1.2-0.4L49.7,72H86c1.1,0,2-0.9,2-2V13   c0-1.1-0.9-2-2-2H12c-1.1,0-2,0.9-2,2v57C10,71.1,10.9,72,12,72z M14,15h70v53H49c-0.4,0-0.9,0.1-1.2,0.4L31.2,81.2L31,70   c0-1.1-0.9-2-2-2H14V15z"/><path d="M27.1,28.3c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1-0.1-0.2-0.1-0.4-0.1c-0.3-0.1-0.5-0.1-0.8,0c-0.1,0-0.2,0.1-0.4,0.1   c-0.1,0-0.2,0.1-0.3,0.2c-0.1,0.1-0.2,0.1-0.3,0.2C24.2,29,24,29.5,24,30c0,0.1,0,0.3,0,0.4c0,0.1,0.1,0.2,0.1,0.4   c0,0.1,0.1,0.2,0.2,0.3s0.1,0.2,0.2,0.3C25,31.8,25.5,32,26,32c0.5,0,1-0.2,1.4-0.6c0.1-0.1,0.2-0.2,0.2-0.3   c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.1-0.4c0-0.1,0-0.3,0-0.4c0-0.5-0.2-1-0.6-1.4C27.3,28.5,27.2,28.4,27.1,28.3z"/><path d="M27.8,41.2c0-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.1-0.2-0.2-0.3c-0.8-0.8-2.1-0.8-2.8,0c-0.1,0.1-0.2,0.2-0.2,0.3   c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.1,0.2-0.1,0.4c0,0.1,0,0.3,0,0.4c0,0.5,0.2,1,0.6,1.4c0.1,0.1,0.2,0.2,0.3,0.2   c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0.1,0.2,0.1,0.4,0.1c0.1,0,0.3,0,0.4,0c0.1,0,0.3,0,0.4,0c0.1,0,0.3-0.1,0.4-0.1   c0.1,0,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.1,0.3-0.2C27.8,43,28,42.5,28,42c0-0.1,0-0.3,0-0.4C27.9,41.5,27.9,41.4,27.8,41.2z"/><path d="M27.8,53.2c0-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.2-0.2-0.3-0.2s-0.2-0.1-0.3-0.2   c-0.1-0.1-0.2-0.1-0.4-0.1c-0.6-0.1-1.3,0.1-1.8,0.5c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.1,0.2-0.1,0.4   c0,0.1,0,0.3,0,0.4c0,0.5,0.2,1,0.6,1.4C25,55.8,25.5,56,26,56c0.1,0,0.3,0,0.4,0c0.1,0,0.2-0.1,0.4-0.1c0.1,0,0.2-0.1,0.3-0.2   c0.1-0.1,0.2-0.1,0.3-0.2C27.8,55,28,54.5,28,54c0-0.1,0-0.3,0-0.4C27.9,53.5,27.9,53.4,27.8,53.2z"/><path d="M34,32h38c1.1,0,2-0.9,2-2s-0.9-2-2-2H34c-1.1,0-2,0.9-2,2S32.9,32,34,32z"/><path d="M34,44h38c1.1,0,2-0.9,2-2s-0.9-2-2-2H34c-1.1,0-2,0.9-2,2S32.9,44,34,44z"/><path d="M34,56h38c1.1,0,2-0.9,2-2s-0.9-2-2-2H34c-1.1,0-2,0.9-2,2S32.9,56,34,56z"/></g></svg>');

$(".share").html('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path d="M64.6,31.3V22L80,37.4L64.6,52.8V42c-17.9,2.1-26.5,22.5-26.5,22.5C38.1,47.3,49.7,33.2,64.6,31.3z M70.3,74.2H23.7V33.6  h28.7c2.8-1.7,5.8-3,9-3.7H21.9c-1,0-1.9,0.8-1.9,1.9v44.4c0,1,0.8,1.9,1.9,1.9h50.3c1,0,1.9-0.8,1.9-1.9V46.3L70.3,50V74.2z"/></svg>');

// default hide

$(".page, .subPage").hide();

// header
$(".backButtonForMe").on("click", function() {
	$("#wishlist, #myJourney").hide();
	$("#me").fadeIn(500);
});

$(".backButtonForTimeline").on("click", function() {
	$("#postJourney").hide();
	$("#timeline").fadeIn(500);
});

$(".backButtonForPostJourney").on("click", function() {
	$("#journeyPreview").hide();
	$("#postJourney").fadeIn(500);
});

$(".backButtonForMessage").on("click", function() {
	$("#conversationPage").hide();
	$("#message").fadeIn(500);
});

// tabBarBottom


$("#tabBar .tabBarBottom").on("click", e => {
	var index = $(e.currentTarget).index();
	var page = $($(".page")[index]);
	$(".page, .subPage, #discover .tabBar").hide();
	page.fadeIn(500);
});

$(".tabBarBottom").on("click", e => {
	$(e.currentTarget).siblings().removeClass("activeButton activeText");
	$(e.currentTarget).addClass("activeButton activeText");
	$(e.currentTarget).addClass("activeButtonBG");
	setTimeout(function(){ $(e.currentTarget).removeClass("activeButtonBG"); }, 200);
	
});


// like button

$(".like").addClass("notLiked");

$(".like").on("click", e => {
	$(e.currentTarget).toggleClass("notLiked").toggleClass("liked");
});

$(".post .like").on("click", e => {
	var parent = $(e.currentTarget).parent().parent().clone();
	id = parent.attr('id');
	if ($(e.currentTarget).hasClass("liked")) {
		$("#wishlistPost").append(parent);
	} else {
		$("#wishlistPost").find("#"+id).remove();
	}
});

// wishlist

$("#wishlistButton").on("click", function() {
	$("#me").hide();
	$("#wishlist").fadeIn(500);
});

// myJourney
$("#myJourneButton").on("click", function() {
	$("#me").hide();
	$("#myJourney").fadeIn(500);
});


// timeline
$(".add").on("click", function() {
	$("#postJourney").fadeIn(500);
	$("#timeline").hide();
});

$(".preview").on("click", function() {
	$("#journeyPreview").fadeIn(500);
	$("#postJourney").hide();
});

// for post 

$("#postButton").on("click", function() {
	alert("Successfully Posted");
})


// post journey

$(".preview").on("click", function() {
	if($("#tripTitle").val()) {
		$("#tripTitleR").text($("#tripTitle").val());
	}
	if($("#tripLocation").val()) {
		$("#tripLocationR").text($("#tripLocation").val());
	}
	if($("#tripDate").val()) {
		$("#tripDateR").text($("#tripDate").val());
	}
	if($("#tripDes").val()) {
		$("#tripDesR").text($("#tripDes").val());
	}
});

$("#conversation1").on("click", function() {
	$("#conversationPage").fadeIn(500);
	$("#message, #tabBar").hide();
});


// discover
$("#searchInput").focus(function() {
	$("#discover .tabBar").fadeIn(500);
});

