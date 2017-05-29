/**
 * Created by Administrator on 2017/5/24.
 */
// 搜索框开始
$(document).scroll(function () {
   var s = $("body").scrollTop();
   if (s > 80) {
       $(".jd-search-box-cover").css({
           "opacity" : .9
       })
   } else if (s < 80) {
       $(".jd-search-box-cover").css({
           "opacity" : 0
       })
   }

});
// 搜索框结束

// 头部轮播图开始



// 头部轮播图结束
