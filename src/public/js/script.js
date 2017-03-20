$(function () {
    // 静态访问-图片处理
    $("img").filter(function(idx){
        $(this).attr('src','./'+$(this).attr('src'));
    });
});