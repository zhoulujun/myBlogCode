/**
 * Created by lujun on 2015-06-24.
 */

function setmodel(value, id, siteid, q) {
    $("#typeid").val(value);
    $("#search a").removeClass();
    id.addClass('on');
    if(q!=null && q!='') {
        window.location='?m=search&c=index&a=init&siteid='+siteid+'&typeid='+value+'&q='+q;
    }
}
$(function(){
    $(".swap-tap").children().on("click",function(){

        var tabs=$(this).addClass("active").parent().nextAll();
        tabs.not(tabs.eq($(this).index()).removeClass("hidden")).addClass("hidden");
    });

});

