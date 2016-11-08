/**
 * Created by Administrator on 2016/11/7.
 */
$(document).ready(function(){

});

function accept(){
    var t = '<div class="expend-menu">';
    t += '<iframe src="../view/expendMenu.html" style="width: 470px;height: 638px;border: none;"/>';
    t += '</div>';
    $(t).appendTo("body",parent.parent.document);
    var left=20;
    $(".expend-menu").css("width",470);
    $(".expend-menu").css("height",638);
    $(".expend-menu").css("left",left+200);
    var top = 60;
    $(".expend-menu").css("top",top);
    $(".expend-menu").css("position","absolute");
    $(".expend-menu").css("z-index",10000);
    $(".left-expend-box").css("background-image","url(../image/icon_close.png)");
}