$(function(){
	$("#text").hide();
	$("#add").hide();
	$('.main .right p').on('click',function(){
		$('#text').show();
		$("#add").show();
		
	})
	$("#add").on('click',function(){
		 var value = $("#text").val();
		 if(value==""){
		 	alert("请输入文字");
		 }else{
		 	$("<li><span>x</span>"+value+"</li>").insertBefore($(this));
		 	$("#text").val("");
		 }
		 $(".right .uls li span").on("click",function(){
			$(this).parent().remove();
		})
	})
	$(".right .uls li span").on("click",function(){
		$(this).parent().remove();
	})
})