$(function(){
    // 轮播图触屏滑动
    banner()
    function banner(){
        var startX=0
    var moveX=0
    var distanceX=0
    $('.wjs-banner').on('touchstart',function(e){
        startX=e.originalEvent.targetTouches[0].clientX
    })
    $('.wjs-banner').on('touchmove',function(e){
        moveX=e.originalEvent.changedTouches[0].clientX
        distanceX=moveX-startX
    })
    $('.wjs-banner').on('touchend',function(e){
        if(distanceX>0){
            // 上一张
            $('.carousel').carousel('prev')
        }
        if(distanceX<0){
            // 下一张
            $('.carousel').carousel('next')
        }
        startX=0
        moveX=0
        distanceX=0
    })
    }
    //动态设置ul的宽度
    // 获取盒子宽度
    // width();             content 
    // innerWidth();        content+padding
    // outerWidth();        content+padding+border
    // outerWidth(true);    content+padding+border+margin
    setWidth()
    function setWidth() {
        var w = 0;
        $('.wjs-tabs li').each(function (index, ele) {
            w += $(ele).outerWidth(true);
        });
        //设置宽度
        $('.wjs-tabs').width(w);
    }

})