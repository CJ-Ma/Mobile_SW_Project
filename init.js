var current = new Object();

$(document).ready(function(){
	current.level = 1;

	$('.carousel').carousel()
	$('.carousel').carousel({interval: 3000 })

	$().ready(function(event){
		$("#img1").attr("src",'./image/logo.png');
		var firstimage;
		$.ajax({
			url:'./server/test.jsp',
			type:'post',
			data:{
				commandType:'test',
				firstimage:firstimage
			},
			dataType:'json',
			success:function(data){
				$("#FirstSlide").attr("src",data[0].firstimage);
				$("#SecondSlide").attr("src",data[1].firstimage);
				$("#ThirdSlide").attr("src",data[2].firstimage);
				$("#FourSlide").attr("src",data[3].firstimage);
				$("#FiveSlide").attr("src",data[4].firstimage);
				$("#SixSlide").attr("src",data[5].firstimage);
			},
			error:function(e){
				alert("접근실패");
			}
		})
	});

	$().ready(function(event){
		var title;
		var firstimage;
		var overview;
		var eventstartdate;
		var eventenddate;
		$.ajax({
			url:'./server/test1.jsp',
			type:'post',
			data:{
				commandType:'festival',
				title:title,
				firstimage:firstimage,
				overview:overview,
				eventstartdate:eventstartdate,
				eventenddate:eventenddate
			},
			dataType:'json',
			success:function(data){
				$("#festival-img").attr("src",data[0].firstimage);
				$("#festival-title").append(data[0].title);
				$("#festival-date").append(data[1].eventstartdate+' ~ '+data[1].eventenddate);
			},
			error:function(e){
				alert("접근실패");
			}
		})
	});
	
	$().ready(function(event){
		var title;
		var firstimage;
		var overview;
		var eventstartdate;
		var eventenddate;
		$.ajax({
			url:'./server/festival/festival_2.jsp',
			type:'post',
			data:{
				commandType:'festival_2',
				title:title,
				firstimage:firstimage,
				overview:overview,
				eventstartdate:eventstartdate,
				eventenddate:eventenddate
			},
			dataType:'json',
			success:function(data){
				$("#festival-img2").attr("src",data[0].firstimage);
				$("#festival-title2").append(data[0].title);
				$("#festival-date2").append(data[1].eventstartdate+' ~ '+data[1].eventenddate);
			},
			error:function(e){
				alert("접근실패");
			}
		})
	});

	$().ready(function(event){
		var title;
		var firstimage;
		$.ajax({
			url:'./server/family-travel/exp_1.jsp',
			type:'post',
			data:{
				commandType:'exp_1',
				title:title,
				firstimage:firstimage
			},
			dataType:'json',
			success:function(data){
				$("#experience-img1").attr("src",data[0].firstimage);
				$("#experience-title1").append(data[0].title);
			},
			error:function(e){
				alert("접근실패");
			}
		})
	});
	
	$().ready(function(event){
		var title;
		var firstimage;
		$.ajax({
			url:'./server/family-travel/exp_2.jsp',
			type:'post',
			data:{
				commandType:'exp_2',
				title:title,
				firstimage:firstimage
			},
			dataType:'json',
			success:function(data){
				$("#experience-img2").attr("src",data[0].firstimage);
				$("#experience-title2").append(data[0].title);
			},
			error:function(e){
				alert("접근실패");
			}
		})
	});
	
	$().ready(function(event){
		var title;
		var firstimage;
		$.ajax({
			url:'./server/family-travel/exp_3.jsp',
			type:'post',
			data:{
				commandType:'exp_3',
				title:title,
				firstimage:firstimage
			},
			dataType:'json',
			success:function(data){
				$("#experience-img3").attr("src",data[0].firstimage);
				$("#experience-title3").append(data[0].title);
			},
			error:function(e){
				alert("접근실패");
			}
		})
	});
	
	$().ready(function(event){
		var title;
		var firstimage;
		$.ajax({
			url:'./server/family-travel/exp_4.jsp',
			type:'post',
			data:{
				commandType:'exp_4',
				title:title,
				firstimage:firstimage
			},
			dataType:'json',
			success:function(data){
				$("#experience-img4").attr("src",data[0].firstimage);
				$("#experience-title4").append(data[0].title);
			},
			error:function(e){
				alert("접근실패");
			}
		})
	});
	
	$().ready(function(event){
		var title;
		var firstimage;
		$.ajax({
			url:'./server/healing-travel/healing_1.jsp',
			type:'post',
			data:{
				commandType:'healing_1',
				title:title,
				firstimage:firstimage
			},
			dataType:'json',
			success:function(data){
				$("#healing-img1").attr("src",data[0].firstimage);
				$("#healing-title1").append(data[0].title);
			},
			error:function(e){
				alert("접근실패");
			}
		})
	});
	
	$().ready(function(event){
		var title;
		var firstimage;
		$.ajax({
			url:'./server/healing-travel/healing_2.jsp',
			type:'post',
			data:{
				commandType:'healing_2',
				title:title,
				firstimage:firstimage
			},
			dataType:'json',
			success:function(data){
				$("#healing-img2").attr("src",data[0].firstimage);
				$("#healing-title2").append(data[0].title);
			},
			error:function(e){
				alert("접근실패");
			}
		})
	});
	
	$().ready(function(event){
		var title;
		var firstimage;
		$.ajax({
			url:'./server/healing-travel/healing_3.jsp',
			type:'post',
			data:{
				commandType:'healing_3',
				title:title,
				firstimage:firstimage
			},
			dataType:'json',
			success:function(data){
				$("#healing-img3").attr("src",data[0].firstimage);
				$("#healing-title3").append(data[0].title);
			},
			error:function(e){
				alert("접근실패");
			}
		})
	});
	
	$().ready(function(event){
		var title;
		var firstimage;
		$.ajax({
			url:'./server/healing-travel/healing_4.jsp',
			type:'post',
			data:{
				commandType:'healing_4',
				title:title,
				firstimage:firstimage
			},
			dataType:'json',
			success:function(data){
				$("#healing-img4").attr("src",data[0].firstimage);
				$("#healing-title4").append(data[0].title);
			},
			error:function(e){
				alert("접근실패");
			}
		})
	});
	
	$().ready(function(event){
		var title;
		var firstimage;
		$.ajax({
			url:'./server/camping-travel/camping_1.jsp',
			type:'post',
			data:{
				commandType:'camping_1',
				title:title,
				firstimage:firstimage
			},
			dataType:'json',
			success:function(data){
				$("#camping-img1").attr("src",data[0].firstimage);
				$("#camping-title1").append(data[0].title);
			},
			error:function(e){
				alert("접근실패");
			}
		})
	});
	
	$().ready(function(event){
		var title;
		var firstimage;
		$.ajax({
			url:'./server/camping-travel/camping_2.jsp',
			type:'post',
			data:{
				commandType:'camping_2',
				title:title,
				firstimage:firstimage
			},
			dataType:'json',
			success:function(data){
				$("#camping-img2").attr("src",data[0].firstimage);
				$("#camping-title2").append(data[0].title);
			},
			error:function(e){
				alert("접근실패");
			}
		})
	});
	
	$().ready(function(event){
		var title;
		var firstimage;
		$.ajax({
			url:'./server/camping-travel/camping_3.jsp',
			type:'post',
			data:{
				commandType:'camping_3',
				title:title,
				firstimage:firstimage
			},
			dataType:'json',
			success:function(data){
				$("#camping-img3").attr("src",data[0].firstimage);
				$("#camping-title3").append(data[0].title);
			},
			error:function(e){
				alert("접근실패");
			}
		})
	});
	
	$().ready(function(event){
		var title;
		var firstimage;
		$.ajax({
			url:'./server/camping-travel/camping_4.jsp',
			type:'post',
			data:{
				commandType:'camping_4',
				title:title,
				firstimage:firstimage
			},
			dataType:'json',
			success:function(data){
				$("#camping-img4").attr("src",data[0].firstimage);
				$("#camping-title4").append(data[0].title);
			},
			error:function(e){
				alert("접근실패");
			}
		})
	});
	
});
