var current = new Object();

$(document).ready(function(){
	current.level = 1;

	$('.carousel').carousel()
	$('.carousel').carousel({interval: 3000 })
	
	$("#img1").attr("src",'./image/logo.png');

	$().ready(function(event){
		var firstimage;
		var title;
		var overview;
		$.ajax({
			url:'./server/second-main/des_1.jsp',
			type:'post',
			data:{
				commandType:'des_1',
				firstimage:firstimage,
				title:title,
				overview:overview
			},
			dataType:'json',
			success:function(data){
				$("#destination1").attr("src",data[0].firstimage);
				$("#des-title1").append(data[0].title);
				$("#des-overview1").append(data[0].overview);
			},
			error:function(e){
				alert("접근실패");
			}
		})
	});
	
	$().ready(function(event){
		var firstimage;
		var title;
		var overview;
		$.ajax({
			url:'./server/second-main/des_2.jsp',
			type:'post',
			data:{
				commandType:'des_2',
				firstimage:firstimage,
				title:title,
				overview:overview
			},
			dataType:'json',
			success:function(data){
				$("#destination2").attr("src",data[0].firstimage);
				$("#des-title2").append(data[0].title);
				$("#des-overview2").append(data[0].overview);
			},
			error:function(e){
				alert("접근실패");
			}
		})
	});
	
	$().ready(function(event){
		var firstimage;
		var title;
		var overview;
		$.ajax({
			url:'./server/second-main/des_3.jsp',
			type:'post',
			data:{
				commandType:'des_3',
				firstimage:firstimage,
				title:title,
				overview:overview
			},
			dataType:'json',
			success:function(data){
				$("#destination3").attr("src",data[0].firstimage);
				$("#des-title3").append(data[0].title);
				$("#des-overview3").append(data[0].overview);
			},
			error:function(e){
				alert("접근실패");
			}
		})
	});
	
	$().ready(function(event){
		var firstimage;
		var title;
		var overview;
		$.ajax({
			url:'./server/second-main/des_4.jsp',
			type:'post',
			data:{
				commandType:'des_4',
			},
			dataType:'json',
			success:function(data){
				$("#destination4").attr("src",data[0].firstimage);
				$("#des-title4").append(data[0].title);
				$("#des-overview4").append(data[0].overview);
			},
			error:function(e){
				alert("접근실패");
			}
		})
	});
	
});
