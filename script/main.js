$(function(){

    //메뉴

    $(".main>li").hover(function(){
        $(".sub").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();

    }) //hover

    //이미지 슬라이드

    var n = 0 //인덱스
    setInterval(function(){
        if(n==2){
            n=0;
        }else{
            n++;
        }//if
        console.log(n);

        $(".top_move").animate({top : n*(-300) + "px"}, 500)

    },2500)

    // 탭
    $(".cont1 h2").click(function(){
        $(".container .cont1 h2").addClass("on");
        $(this).removeClass("on");
        
        $(".cont1 ul").hide();
        $(this).next().css({display : "flex"})



    }) //click
    
    
    //팝업

    $(".pop").click(function(){
        $(".popup").show();
    })
    $(".close").click(function(){
        $(".popup").hide();
    })



})//j