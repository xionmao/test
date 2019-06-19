$(function(){
	$.ajax({
		type:"get",
		url:"json/service.json",
		async:true,
		success:function(data){
			//新建导航栏-副
			$("<div></div>").appendTo(".nav").addClass("nav-top")
			//导航栏-主logo
			$("<a></a>").appendTo(".nav-top").addClass("nav-logo-a")
			$("<img>").prop("src",data.logo).addClass("nav-logo").appendTo($(".nav-logo-a"))
			//导航栏-左
			$("<ul></ul>").addClass("nav-ul").appendTo(".nav-top")
			$.each(data.nav_text, function(i,t){
				$("<li></li>").addClass("nav-ul-li").appendTo(".nav-ul");
				$("<a href='#'></a>").appendTo($(".nav-ul-li").eq(i))
				$(".nav-ul li a").eq(i).html(t)
			});
			for (var cb = 6;cb<=9;cb++) {
				$(".nav-ul-li a").eq(cb).click(function(){
					alert("该功能未开发")
				})
			}
			for (var ca = 3;ca<=4;ca++) {
				$(".nav-ul-li a").eq(ca).click(function(){
					alert("该功能未开发")
				})
			}
			$(".nav-ul-li").last().children("a").attr("href","register.html")
			$(".nav-ul-li").first().children("a").attr("href","index.html")
			$(".nav-ul-li").eq(2).children("a").attr("href","Mars.html")
			var zh =  $.cookie('chetla')?$.cookie('chetla'):"用户"
			$(".nav-ul-li").last().children("a").html(zh)
			//服务标题
			$("<div></div>").addClass("nb-ser-stitle").appendTo(".nb-ser-content");
			$("<h2></h2>").html(data.ser_stitle[0]).appendTo(".nb-ser-stitle");
			$("<h3></h3>").html(data.ser_stitle[1]).appendTo(".nb-ser-stitle");
			//服务块
			$("<div></div>").addClass("nb-ser-sbox").appendTo(".nb-ser-content");
			$("<ul></ul>").addClass("cl").appendTo(".nb-ser-sbox");
			$.each(data.service_t, function(i,t) {
				$("<li></li>").addClass("cl-li").appendTo(".cl")
			});
			$("<div></div>").addClass("figure").appendTo($(".cl").eq(0).children("li"))
			$("<div></div>").addClass("cont").appendTo($(".cl").eq(0).children("li"))
			$(".cl .figure").eq(0).css("background","url(img/nb-sc-policy-ico1.jpg)")
			$(".cl .figure").eq(1).css("background","url(img/nb-sc-policy-ico2.jpg)")
			$("<h2></h2>").appendTo(".cont")
			$("<p></p>").appendTo(".cont")
			$.each(data.service_info, function(i,t) {
				$(".cont h2").eq(i).html(data.service_t[i])
				$(".cont p").eq(i).html(t)
			});
			//服务标题
			$("<div></div>").addClass("nb-ser-stitle").appendTo(".nb-ser-content");
			$("<h2></h2>").html(data.ser_stitle1[0]).appendTo($(".nb-ser-stitle").eq(1));
			$("<h3></h3>").html(data.ser_stitle1[1]).appendTo($(".nb-ser-stitle").eq(1));
			//自助服务
			$("<div></div>").addClass("nb-ser-sbox").appendTo(".nb-ser-content");
			$("<ul></ul>").addClass("cl").appendTo($(".nb-ser-sbox").eq(1))
			$.each(data.service_info1, function(i,t) {
				$("<li></li>").addClass("cl-li1").appendTo($(".cl").eq(1))
				$("<a></a>").appendTo($(".cl-li1").eq(i))
				$("<b></b>").appendTo($(".cl-li1 a").eq(i))
				$("<p></p>").html(t).appendTo($(".cl-li1 a").eq(i))
			});
			$.each(data.service_img, function(i,t) {
					$(".cl-li1 b").eq(i).css("background","url("+t+")")
			});
			//底部服务
			$("<div></div>").addClass("container").appendTo(".bg-base-dark");
			$("<div></div>").addClass("row").appendTo(".container");
			$.each(data.bg_title, function(i,t) {
				$("<div></div>").addClass("col-sm-2").appendTo(".row");
				$("<h5></h5>").html(t).appendTo($(".col-sm-2").eq(i));
				$("<ul></ul>").appendTo($(".col-sm-2").eq(i));
			});
			$.each(data.bg_info1, function(i,t) {
				$("<li></li>").appendTo($(".col-sm-2 ul").eq(0))
				$("<a></a>").html(t).appendTo($(".col-sm-2 ul").eq(0).children("li").eq(i))
			});
			$.each(data.bg_info2, function(i,t) {
				$("<li></li>").appendTo($(".col-sm-2 ul").eq(1))
				$("<a></a>").html(t).appendTo($(".col-sm-2 ul").eq(1).children("li").eq(i))
			});
			$.each(data.bg_info3, function(i,t) {
				$("<li></li>").appendTo($(".col-sm-2 ul").eq(2))
				$("<a></a>").html(t).appendTo($(".col-sm-2 ul").eq(2).children("li").eq(i))
			});
			$.each(data.bg_info4, function(i,t) {
				$("<li></li>").appendTo($(".col-sm-2 ul").eq(3))
				$("<a></a>").html(t).appendTo($(".col-sm-2 ul").eq(3).children("li").eq(i))
			});
			$.each(data.bg_info5, function(i,t) {
				$("<li></li>").appendTo($(".col-sm-2 ul").eq(4))
				$("<a></a>").html(t).appendTo($(".col-sm-2 ul").eq(4).children("li").eq(i))
			});
			$.each(data.bg_info6, function(i,t) {
				$("<li></li>").appendTo($(".col-sm-2 ul").eq(5))
				$("<a></a>").html(t).appendTo($(".col-sm-2 ul").eq(5).children("li").eq(i))
			});
			$("<img />").attr("src",data.bg_img).appendTo($(".col-sm-2 ul:last").children("li").last().css("margin-top","15px").children("a").last())
			//信息
			$("<div></div>").addClass("containe").appendTo(".footer");
			$("<div></div>").addClass("footer-logo").appendTo(".containe");
			$("<img />").attr("src",data.footer_logo).appendTo(".footer-logo");
			$("<div></div>").addClass("footer-Login").appendTo(".containe");
			$.each(data.footer_Login, function(i,t) {
				$("<a></a>").appendTo(".footer-Login");
				$("<span></span>").addClass(t).appendTo($(".footer-Login a").eq(i))
			});
			$("<div></div>").html(data.footer_gs).appendTo(".containe");
			$("<div></div>").addClass("footer-info").appendTo(".containe");
			$(".footer-info").html(data.footer_info);
			$("<div></div>").addClass("footer-st").appendTo(".containe");
			$("<img />").attr("src",data.footer_st[0]).appendTo(".footer-st");
			$("<img />").attr("src",data.footer_st[1]).appendTo(".footer-st");
			//边图标
			$(".icon_t li").eq(1).mouseenter(function(){
				$(".wode").css("display","block")
			}).mouseleave(function(){
				$(".wode").css("display","none")
			})
			$(window).scroll(function(){
                if ($(window).scrollTop()>100){
                    $("#toTop").fadeIn();
                }
                else
                {
                    $("#toTop").fadeOut();
                }
            });
            $("#toTop").click(function(){
                $('body,html').animate({scrollTop:0},1000);
                return false;
            });
            $(".Propaganda").click(function(){
            	alert("该功能未开发")
            })
            $(".nb-ser-sbox").click(function(){
            	alert("该功能未开发")
            })
            $(".bg-base-dark li").click(function(){
            	alert("该功能未开发")
            })
		}
	});
})
