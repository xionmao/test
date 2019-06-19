$(function(){
	$.ajax({
		type:"get",
		url:"json/register.json",
		async:true,
		success:function(data){
			var aTag = $("<a href='#'></a>").html(data.info[1]);
			var iTag = $("<img/>").prop("src",data.info[3])
			var imgTag = data.logo
			$(".footer").html(data.info[0])
			aTag.appendTo(".footer").addClass("a-z")
			$(".footer").append(data.info[2])
			iTag.appendTo(".footer").addClass("a-z1")
			$(".footer").append(data.info[4])
			$(".mian-Middle-Logo").css({"background":"url("+data.logo+")","background-position":" 0 -55px"})
		}
	});
	
	var rtrue = $("input[type='radio']").eq(0)
	var rtrue1 = $("input[type='radio']").eq(1)
	$("label").eq(0).on("mousedown",function(){
		$("label").eq(1).css("color","#333")
		$(this).css("color","#E8380D")
	})
	$("label").eq(1).on("mousedown",function(){
		$("label").eq(0).css("color","#333")
		$(this).css("color","#E8380D")
	})
	//配对验证码
	$(document).keypress(function(e){
		if(e.keyCode == 13){
			if(Login()){
				$("input[type=text]").val("");
				$("input[type=password]").val("");
			}
		}
	})
	$("input[type = button]").click(function(){
		if(Login()){
			$("input[type=text]").val("");
			$("input[type=password]").val("");
		}
	})
	function Login(){
		var tal = $("input[type=text]").val();
		var pass = $("input[type=password]").val();
		var talck = $.cookie('chetla')
		var passck = $.cookie('chepass')
		if(tal == talck&&pass == passck){
			alert("登录成功")
			 $(location).attr('href', 'index.html');
			return true
		}else if(tal != talck){
			alert("账号错误")
			return false
		}else if(pass != passck){
			alert("密码错误")
			return false
		}
	}
})