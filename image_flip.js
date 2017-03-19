
var aLi=$('.content li');
var aImg=$('.content li img');
var aSpan=$('.content li span');

//console.log(aLi);

aLi.each(function (index) {
    /*比用mouseover好，因为不用受到子元素的干扰*/
    $(this).mouseenter(function (e) {
        /*aSpan.eq(index).stop();
        aImg.eq(index).stop();*/
        console.log(this);
        aImg.eq(index).animate({
            top:37,
            height:0
        },80,'',function () {
            $(this).hide();
            aSpan.eq(index).show().animate({
                top:0,
                height:75
            },80);
        });
    });
    
    $(this).mouseleave(function () {
        //aSpan.eq(index).stop();
        //aImg.eq(index).stop();
        aSpan.eq(index).animate({
            top:37,
            height:0
        },80,'',function () {
            //$(this).hide();
            aImg.eq(index).show().animate({
                top:0,
                height:75
            },80);
        })
    })
});