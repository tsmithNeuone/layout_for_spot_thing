$(document).ready(function(){
	var col_counter = 0;
	var row_counter = 0;
	$("#internal_container").height($(document).height() - 287);//frame.scrollHeigth -(110 + 180)
	$("#logo_with_shadow").hide();
	
  	$("#logo_no_shadow").hover(function(){
    	$("#logo_with_shadow").toggle();
  	});
  	$("#logo_div").click(function(){
  		if(col_counter % 9 === 0){
  			row_counter+=1;
  			var row_break = "<div id=\"break_line\">"
  			$(".box").append(row_break);
		};

		var small_box = "<div class=\"row\" id=\"row_" + row_counter + "\">"+ (col_counter%9 + 1) + "</div>";
		$(".box").append(small_box);
		
    	col_counter+=1;
  	});
});
$(window).resize(function() {
	$("#internal_container").height($(document).height() - 287);
});
