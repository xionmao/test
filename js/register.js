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
	$(".Verification").click(function(){
		Verification()
	})
	$(".input-b").click(function(){
		var tal = $("input[type=text]").eq(0).val();
		var pass = $("input[type=password]").eq(0).val();
		var S_Ver = $("input[type=text]").eq(1).val();
		var Ver =  $(".Verification").html();
		var cbox = $("input[type=checkbox]").prop("checked");
		if(cbox){
			if(checktal(tal)&&checkPassword(pass)&&checkjudge(S_Ver,Ver)){
				alert("注册成功");
				 $(location).attr('href', 'Login.html');
				$.cookie("chetla",tal,{expirse:1})//cookie记住账号
				$.cookie("chepass",pass,{expirse:1})//cookie记住密码
			}
		}else{
			alert("未同意相关协议，将无法进行注册")
		}
	})
	//随机验证码
	function Verification(){
        var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
        var str = '';
        for(var i = 0 ; i < 4 ; i ++ ){
            str += ''+arr[Math.floor(Math.random() * arr.length)];
    	}
        console.log(str)
       $(".Verification").html(str)
	}
	//手机号正则
	function checktal(att){
		var reg = /^1[3|4|5|7|8][0-9]{9}$/;
		var flag = reg.test(att);
		if(flag){
			return true;
		}else{
			alert("手机号非法");
			return false;
		}
	}
	//密码正则
	function checkPassword(str){
	    var reg1 = /[!@#$%^&*()_?<>{}.]{1}/;
	    var reg2 = /([a-zA-Z0-9!@#$%^&*()_?<>{}]){6,16}/;
	    var reg3 = /[a-zA-Z]+/;
	    var reg4 = /[0-9]+/;
	    if(reg1.test(str) && reg2.test(str) && reg3.test(str) && reg4.test(str)){
	        return true;
	    }else if(!reg1.test(str)){
	        alert("密码需包含一个特殊字符");
	        return false;
	    }else if(!reg2.test(str)){
	        alert("密码长度在6-16位");
	        return false;
	    }else if(!reg3.test(str)){
	        alert("密码需含有字母");
	        return false;
	    }else if(!reg4.test(str)){
	        alert("密码需含有数字");
	        return false;
	    }
	}
	//验证码
	function checkjudge(Pair,attr){
		if(Pair == attr){
			return true;
		}else{
			 alert("验证码错误;请注意大小写");
	        return false;
		}
	}
})