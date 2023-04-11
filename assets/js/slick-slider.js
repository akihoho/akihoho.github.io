//****Slick only ****/

/*Lesson slickスライド*/
$(function(){
    $('.slider , .slider-mobile').slick({
        autoplay:false, //自動再生の調整
        dots:false, //ドット部分を表示する
        speed: 500, //スライドスピード
        arrows:true, //左右の矢印
});
});


/*TOP Slick-slider メインビジュアル*/
$(".slideshow-container , .slideshow-container-tab , .slideshow-container-mobile" ).slick({
    autoplay: true,
    autoplaySpeed:5000,//自動再生するスピード 5秒
    pauseOnHover: false,
    fade: true,
    dots: false,
    responsive: [{
      breakpoint: 600,
      settings: {
        dots: false,
      }
    }]
  });