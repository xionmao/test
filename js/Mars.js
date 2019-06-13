$(function(){
	$.ajax({
		type:"get",
		url:"json/Mars.json",
		async:true,
		success:function(data){
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
			for (var cb = 3;cb<=9;cb++) {
				$(".nav-ul-li a").eq(cb).click(function(){
					alert("该功能未开发")
				})
			}
			$(".nav-ul-li").first().children("a").attr("href","index.html")
			$(".nav-ul-li").last().children("a").attr("href","register.html")
			var zh =  $.cookie('chetla')?$.cookie('chetla'):"用户"
			$(".nav-ul-li").last().children("a").html(zh)
			//下拉菜单
			$("<div></div>").addClass("cont").appendTo(".nav-ul>li:eq(1)");
			$("<ul></ul>").appendTo(".cont").addClass("cont-ul");
			$("<li></li>").appendTo(".cont-ul").addClass("cont-ul-li");
			$("<a></a>").appendTo(".cont-ul-li").attr("href","#").addClass("cont-a");
			$("<img />").attr("src",data.nav_img[0]).appendTo(".cont-a");
			$("<div></div>").appendTo(".cont-a").html("努比亚阿尔法");
			$(".nav-ul>li:eq(1)").mouseenter(function(){
				$(".cont").stop()
				$(".cont").slideDown()
			}).mouseleave(function(){
				$(".cont").stop()
				$(".cont").slideUp()
			})
			//附属导航栏
			$("<div></div>").addClass("sub-nav-c").appendTo(".sub-nav")
			$.each(data.sub_nav, function(i,t) {
				$("<div></div>").addClass("sub-nav-n").appendTo(".sub-nav-c")
			});
			$(".sub-nav-n").eq(0).html(data.sub_nav[0])
			$("<ul></ul>").addClass("sub-nav-ul").appendTo($(".sub-nav-n").eq(1))
			$.each(data.sub_info, function(i,t) {
				$("<li></li>").appendTo(".sub-nav-ul")
				$("<a></a>").attr("href","#").html(t).appendTo($(".sub-nav-ul li").eq(i))
			});
			$(".sub-nav-ul a").click(function(){
				alert("该功能未开发")
			})
			$.each(data.sub_bt, function(i,t) {
				$("<a></a>").attr("href","#").html(t).addClass("sub-nav-a").appendTo($(".sub-nav-n").eq(1))
			});
			$(".sub-nav-a").click(function(){
				alert("该功能未开发")
			})
			$(window).scroll(function(){
				var stop =$(window).scrollTop()
				if(stop>0){
					$(".sub-nav").css("top","0")
				} else{
					$(".sub-nav").css("top","66")
				}
			})
			//mars宣传图1
			$("<img />").attr("src",data.Mars1).appendTo(".mars1")
			//mars宣传图2
			$("<img />").attr("src",data.Mars2).appendTo(".mars2")
			//mars宣传图3
			$("<img />").attr("src",data.Mars3).appendTo(".mars3")
			//mars宣传图4
			$("<img />").attr("src",data.Mars4).appendTo(".mars4")
			//mars宣传图5
			$("<img />").attr("src",data.Mars5).appendTo(".mars5")
			for(var c = 1;c<=5;c++){
				$(".mars"+c+"").click(function(){
					alert("该功能未开发")
				})
			}
			//服务
			$.each(data.server_list, function(i,t) {
				$("<div></div>").addClass("server-list-item").appendTo(".phone-server-list");
				$("<a></a>").addClass("item_a").appendTo($(".server-list-item").eq(i));
				$("<i></i>").appendTo($(".item_a").eq(i))
				$("<span></span>").html(t).appendTo($(".item_a").eq(i))
				
			});
			$(".item_a").click(function(){
				alert("该功能未开发")
			})
			$(".item_a i").eq(0).addClass("icon-circle_7-c")
			$(".item_a i").eq(1).addClass("icon-circle_arrow-down2")
			$(".item_a i").eq(2).addClass("icon-circle_sf")
			$(".item_a i").eq(3).addClass("icon-circle_localization")
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
		}
	});
})