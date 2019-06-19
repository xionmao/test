$(function(){
	$.ajax({
		type:"get",
		url:"json/index.json",
		async:false,
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
			$(".nav-ul-li").eq(2).children("a").attr("href","Mars.html")
			$(".nav-ul-li").eq(5).children("a").attr("href","service.html")
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
			//轮播图
			$.each(data.Rot_c, function(i,t){
				$("<div></div>").addClass("swiper-slide").appendTo(".swiper-wrapper");
				$("<img />").attr("src",t).appendTo($(".swiper-slide").eq(i))
			});
			//导购
			$("<ul></ul>").addClass("Shopping-ul").appendTo(".Shopping")
			$.each(data.Shopping, function(i,t) {
				$("<li></li>").appendTo(".Shopping-ul").html("<a href='#'><h2>"+t+"</h2></a>").addClass("Shopping-ul-li")
			});
			$("<div></div>").appendTo(".Shopping-ul-li").addClass("Shopping-div");
			$.each(data.Shopping_img, function(i,t) {
				$("<a></a>").addClass("Shopping-commodity").appendTo(".Shopping-div").prop("href","#").html("<div class='Shopping-img'><img src="+t.img+"></div><p>"+t.text+"</p>")
			});
			$(".Shopping-ul-li").mouseenter(function(){
				$(".Shopping-div").css("display","block")
			}).mouseleave(function(){
				$(".Shopping-div").css("display","none")
			})
			//商品
			$("<div></div>").addClass("nb-mall-list-newrelease").appendTo(".nb-mall-list")
			$("<ul></ul>").addClass("nb-mall-list-newrelease-ul").appendTo(".nb-mall-list-newrelease");
			$("<li></li>").addClass("nb-mall-list-newrelease-ul-li1").appendTo(".nb-mall-list-newrelease-ul")
			$.each(data.newrelease_text, function(i,t) {
				$("<a></a>").addClass("nb-mall-list-newrelease-ul-li1-a").appendTo(".nb-mall-list-newrelease-ul-li1")
				$("<i></i>").appendTo($(".nb-mall-list-newrelease-ul-li1 a").eq(i))
				$("<p></p>").html(t).appendTo($(".nb-mall-list-newrelease-ul-li1 a").eq(i))
			});
			$(".nb-mall-list-newrelease-ul-li1-a").eq(0).addClass("bgc")
			$(".nb-mall-list-newrelease-ul-li1-a").mouseenter(function(){
				$(".nb-mall-list-newrelease-ul-li1-a").removeClass("bgc")
				$(this).addClass("bgc")
			})
			$(".nb-mall-list-newrelease-ul-li1-a i").eq(0).addClass("icon-circle_refresh")
			$(".nb-mall-list-newrelease-ul-li1-a i").eq(1).addClass("icon-circle_cloud-up")
			$(".nb-mall-list-newrelease-ul-li1-a i").eq(2).addClass("icon-circle_shield")
			$(".nb-mall-list-newrelease-ul-li1-a i").eq(3).addClass("icon-circle_ser")
			$(".nb-mall-list-newrelease-ul-li1-a i").eq(4).addClass("icon-circle-server")
			$(".nb-mall-list-newrelease-ul-li1-a i").eq(5).addClass("icon-circle_arrow-down")
			$.each(data.newrelease, function(i,t) {
				$("<li></li>").addClass("nb-mall-list-newrelease-ul-li").appendTo(".nb-mall-list-newrelease-ul")
				$("<img />").attr("src",t).appendTo($(".nb-mall-list-newrelease-ul-li").eq(i))
			});
			//热卖1
			$("<div></div>").addClass("nbc-new1-box").appendTo(".nb-mall-list")
			$("<div></div>").addClass("nbc-new1-box-text").appendTo(".nbc-new1-box");
			$("<h2></h2>").html(data.nbc_text[0]).appendTo(".nbc-new1-box-text");
			$("<a></a>").html(data.nbc_text[1]).appendTo(".nbc-new1-box-text");
			$("<ul></ul>").addClass("cl-mall").appendTo(".nbc-new1-box")
			$.each(data.nbc_img1, function(i,t) {
				$("<li></li>").addClass("cl-mall-li").appendTo(".cl-mall");
			});
			$("<img />").addClass("mc").attr("src",data.nbc_img1[0]).appendTo($(".cl-mall-li").eq(0));
			$("<div></div>").addClass("cl-mall-div").appendTo(($(".cl-mall-li").not($(".cl-mall-li").eq(0))));
			$("<div></div>").addClass("malltext").appendTo(($(".cl-mall-li").not($(".cl-mall-li").eq(0))));
			$("<div></div>").addClass("mall-btn").appendTo(($(".cl-mall-li").not($(".cl-mall-li").eq(0))));
			for(var sti = 0;sti<data.nbc_img1.length;sti++){
				var imgs = data.nbc_img1[sti]
				$(".cl-mall-div").eq(sti-1).html($("<img />").attr("src",imgs))
			}
			$("<h2></h2>").appendTo(".cl-mall-div");
			$("<p></p>").appendTo(".cl-mall-div");
			$.each(data.mall_text1, function(i,t) {
				$(".cl-mall-div h2").eq(i).html(t)
			});
			$.each(data.mall_text2, function(i,t) {
				$(".cl-mall-div p").eq(i).html(t)
			});
			$.each(data.mall_Presentprice, function(i,t) {
				$(".malltext").eq(i).html("<span>￥"+t+"</span><span> | </span>")
			});
			$.each(data.mall_Originalprice, function(i,t) {
				$(".malltext").eq(i).append("<span><s>"+t+"</s></span>")
			});
			$(".mall-btn").html("<a href='#'>查看详情</a><a href='#'>立刻购买</a>")
			//热卖2
			$("<div></div>").addClass("nbc-new2-box").appendTo(".nb-mall-list")
			$("<div></div>").addClass("nbc-new1-box-text").appendTo(".nbc-new2-box");
			$("<h2></h2>").html(data.nbc_text[2]).appendTo($(".nbc-new1-box-text").eq(1));
			$("<a></a>").html(data.nbc_text[1]).appendTo($(".nbc-new1-box-text").eq(1));
			$("<ul></ul>").addClass("cl-mall").appendTo(".nbc-new2-box")
			$.each(data.nbc_img2, function(i,t) {
				$("<li></li>").addClass("cl-mall-li1").appendTo($(".cl-mall").eq(1));
			});
			$("<img />").addClass("mc").attr("src",data.nbc_img2[0]).appendTo($(".cl-mall-li1").eq(0));
			$("<div></div>").addClass("cl-mall-div1").appendTo(($(".cl-mall-li1").not($(".cl-mall-li1").eq(0))));
			$("<div></div>").addClass("malltext1").appendTo(($(".cl-mall-li1").not($(".cl-mall-li1").eq(0))));
			$("<div></div>").addClass("mall-btn1").appendTo(($(".cl-mall-li1").not($(".cl-mall-li1").eq(0))));
			for(var st = 0;st<data.nbc_img2.length;st++){
				var imgc = data.nbc_img2[st]
				$(".cl-mall-div1").eq(st-1).html($("<img />").attr("src",imgc))
			}
			$("<h2></h2>").appendTo(".cl-mall-div1");
			$.each(data.mall_text3, function(i,t) {
				$(".cl-mall-div1 h2").eq(i).html(t)
			});
			$.each(data.mall_Presentprice1, function(i,t) {
				$(".malltext1").eq(i).html("<span>￥"+t+"</span><span> | </span>")
			});
			$.each(data.mall_Originalprice1, function(i,t) {
				$(".malltext1").eq(i).append("<span><s>"+t+"</s></span>")
			});
			$(".mall-btn1").html("<a href='#'>立刻购买</a>");
			$(".cl-mall li").on("mouseenter",function(){
				$(this).children(".malltext").css("display","none")
				$(this).children(".malltext1").css("display","none")
				$(this).children(".mall-btn").css("display","block")
				$(this).children(".mall-btn1").css("display","block")
			}).on("mouseleave",function(){
					$(this).children(".malltext").css("display","block")
					$(this).children(".malltext1").css("display","block")
					$(this).children(".mall-btn").css("display","none")
					$(this).children(".mall-btn1").css("display","none")
			})
			//热评
			$("<div></div>").addClass("hot-title").appendTo(".service_c");
			$("<h2></h2>").html(data.hot_title[0]).appendTo(".hot-title");
			$("<a></a>").html(data.hot_title[3]).appendTo(".hot-title");
			$("<ul></ul>").addClass("nb-mall-box").appendTo(".service_c");
			$.each(data.hot_img, function(i,t) {
				$("<li></li>").appendTo(".nb-mall-box")
				$("<img />").attr("src",t).appendTo($(".nb-mall-box li").eq(i))
				$("<div></div>").addClass("nb-mall-box-text").appendTo($(".nb-mall-box li").eq(i))
				$("<h2></h2>").appendTo($(".nb-mall-box-text").eq(i))
				$("<p></p><").appendTo($(".nb-mall-box-text").eq(i))
			});
			$.each(data.hot_text1, function(i,t) {
				$(".nb-mall-box-text h2").eq(i).html(t)
			});
			$.each(data.hot_text2, function(i,t) {
				$(".nb-mall-box-text p").eq(i).html(t)
			});
			//视频
			$("<div></div>").addClass("hot-title").appendTo(".service_c");
			$("<h2></h2>").html(data.hot_title[1]).appendTo($(".hot-title").eq(1));
			$("<a></a>").html(data.hot_title[3]).appendTo($(".hot-title").eq(1));
			$("<ul></ul>").addClass("nb-mall-box").appendTo(".service_c");
			$.each(data.hot_img1, function(i,t) {
				$("<li></li>").appendTo($(".nb-mall-box").eq(1))
				$("<img />").attr("src",t).appendTo($(".nb-mall-box").eq(1).children("li").eq(i))
				$("<div></div>").addClass("figure").appendTo($(".nb-mall-box").eq(1).children("li").eq(i))
				$("<i></i>").appendTo($(".figure").eq(i))
				$("<div></div>").addClass("nb-mall-box-text1").appendTo($(".nb-mall-box").eq(1).children("li").eq(i))
				$("<h2></h2>").appendTo($(".nb-mall-box-text1").eq(i))
				$("<p></p><").appendTo($(".nb-mall-box-text1").eq(i))
			});
			$.each(data.hot_text3, function(i,t) {
				$(".nb-mall-box-text1 h2").eq(i).html(t)
			});
			$.each(data.hot_text4, function(i,t) {
				$(".nb-mall-box-text1 p").eq(i).html(t)
			});
			$(".nb-mall-box li").mouseenter(function(){
				$(this).children(".figure").css({"background":"red"})
			}).mouseleave(function(){
				$(this).children(".figure").css({"background":"rgba(210,210,210,0.6)"})	
			})
			//服务
			$("<div></div>").addClass("hot-title").appendTo(".service_c");
			$("<h2></h2>").html(data.hot_title[2]).appendTo($(".hot-title").eq(2));
			$("<a></a>").html(data.hot_title[3]).appendTo($(".hot-title").eq(2));
			$("<ul></ul>").addClass("service").appendTo(".service_c");
			$.each(data.service_t, function(i,t) {
				$("<li></li>").appendTo(".service");
				$("<div></div>").addClass("sico").appendTo($(".service li").eq(i))
				$("<div></div>").addClass("sdiv").appendTo($(".service li").eq(i))
				$(".sico").eq(0).html("<i class='icon-circle_report'></i>")
				$(".sico").eq(1).html("<i class='icon-circle_cog'></i>")
				$("<h2></h2>").html(t).appendTo($(".sdiv").eq(i))
			});
			$.each(data.service_info, function(i,t) {
				$("<p></p>").html(t).appendTo($(".sdiv").eq(i))
			});
			$("<div></div>").addClass("phone-server-list").appendTo(".service_c");
			$.each(data.server_list, function(i,t) {
				$("<div></div>").addClass("server-list-item").appendTo(".phone-server-list");
				$("<a></a>").addClass("item_a").appendTo($(".server-list-item").eq(i));
				$("<i></i>").appendTo($(".item_a").eq(i))
				$("<span></span>").html(t).appendTo($(".item_a").eq(i))
			});
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
            $(".Shopping-commodity").click(function(){
            	alert("该功能未开发")
            })
            $(".swiper-slide img").click(function(){
            	alert("该功能未开发")
            })
            $(".nb-mall-list-newrelease-ul").click(function(){
            	alert("该功能未开发")
            })
            $(".nbc-new1-box").click(function(){
            	alert("该功能未开发")
            })
            $(".nbc-new2-box").click(function(){
            	alert("该功能未开发")
            })
            $(".service_c li").click(function(){
				alert("该功能未开发")
			})
            $(".item_a").click(function(){
				alert("该功能未开发")
			})
            $(".bg-base-dark li").click(function(){
            	alert("该功能未开发")
            })
		}
	});
		var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal', // 垂直切换选项
	    loop: true, // 循环模式选项	    
	    // 如果需要前进后退按钮
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	    effect : 'fade',
	    autoplay:true,
	    autoplay:{
	    	disableOnInteraction:false,
	    }
  })   
})