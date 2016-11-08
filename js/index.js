$(document).ready(new function () {
    initMap();
});
var map;
function initMap(){
     map = new AMap.Map('map', {
        center: [114.16280329,30.62881431],
        zoom: 16
    });
}
//展开左边菜单栏
var isOpen = false;
function expendLeftMenu(){
    if( !isOpen){
        var t = '<div class="expend-menu">';
        t += '<iframe src="../view/expendMenu.html" style="width: 470px;height: 638px;border: none;"/>';
        t += '</div>';
        $(t).appendTo("body");
        var obj = document.getElementById("expend-menu-id");
        var left=(obj.getBoundingClientRect().left+$("#expend-menu-id").width());
        $(".expend-menu").css("width",470);
        $(".expend-menu").css("height",638);
        $(".expend-menu").css("left",left+20);
        var top = (obj.getBoundingClientRect().top -( $(".expend-menu").height() / 2) + $("#expend-menu-id").height() / 2);
        $(".expend-menu").css("top",top);
        $(".expend-menu").css("position","absolute");
        $(".expend-menu").css("z-index",10000);
        $(".left-expend-box").css("background-image","url(../image/icon_close.png)");
        isOpen = true;
    }else{
        isOpen = false;
        $(".left-expend-box").css("background-image","url(../image/icon_open.png)");
        $(".expend-menu").remove();
    }
}
//地图层级控制
function zoomIn(){
    map.zoomIn();
}
function zoomOut(){
    map.zoomOut();
}
//显示蓝房子
var showHouse = false;
var blueHouses =[];
function showBlueHouse(){
    if(showHouse){
        for(var i in blueHouses){
            map.remove(blueHouses[i]);
        }
        showHouse = false;
        return;
    }
    $.ajax({
        url : "../json/showbluehouse",
        dataType:"json",
        contentType :"charset = utf-8",
        success:function(resp){
            console.log(resp);
           if(resp.code == 1000){
               blueHouses = [];
               for(var i in resp.msg){
                    var marker = new AMap.Marker({
                        position : new AMap.LngLat( resp.msg[i].lon, resp.msg[i].lat),
                        icon : "../image/icon_blue_house.png"
                    });
                    marker.setMap(map);
                   //AMap.event.addListener(marker, 'click', function(){
                   //
                   //});
                   blueHouses.push(marker);
               }
               showHouse = true;
           }else{

           }
        },
        error : function(){

        }
    });
}
