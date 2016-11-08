/**
 * Created by Administrator on 2016/11/8.
 */
$(document).ready(function(){
    initMap();
});

var smalMap;
function initMap(){
    smalMap = new AMap.Map('smalMap', {
        center: [114.16280329,30.62881431],
        zoom: 16
    });
}

function checkChange(){
    var val = $("input[type=radio]:checked").val();
    console.log(val);
    if(val == 0){
        $("#btn-chose").html("完&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp成")
    }else{
        $("#btn-chose").html("下&nbsp&nbsp一&nbsp&nbsp步")
    }
}