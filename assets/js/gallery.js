/******************Gallery-loopのjs追記*******************************/
lightbox.option({
  'showImageNumberLabel': false,
  'alwaysShowNavOnTouchDevices': true,
  'wrapAround': true,
  'imageFadeDuration' : 0,
})

//****GALLERY PAGE ****/
//********galleryスペシャルテプレートのスライダー部分↓↓↓**************
let num = 0;//表示されている画像のナンバー
let duration = 200;//アニメーションにかかる時間

//右の矢印をクリック
$(".next").on("click",nextP);
//左の矢印をクリック
$(".prev").on("click",prevP);

let windowWidth = $(window).width();

$(window).resize(function() {
  windowWidth = $(window).width();
});

//右の矢印をクリックしたときに呼び出される関数
function nextP(){
  num++;
  if(num >= 6){
      $(".gallery-slider-list").stop().animate({left:(windowWidth > 768 ? -50 : -100)*num+"vw"},duration, function(){
        $(".gallery-slider-list").css({left:0});
      });
      $(".gallery-slider-list li").removeClass("selected");
      $(".gallery-slider-list li:nth-child("+(num+1)+")").addClass("selected");
      $(".gallery-slider-list li:first-child").addClass("selected");
      num = 0;
  }else{
      $(".gallery-slider-list").stop().animate({left:(windowWidth > 768 ? -50 : -100)*num+"vw"},duration);
      $(".gallery-slider-list li").removeClass("selected");
      $(".gallery-slider-list li:nth-child("+(num+1)+")").addClass("selected");
  }
}

//左の矢印をクリックしたときに呼び出される関数
function prevP(){
  num--;
  if(num < 0){
    num = 5;
    $(".gallery-slider-list").stop().animate({left:(windowWidth > 768 ? "50vw" : "100vw")},duration, function(){
      $(".gallery-slider-list").css({left:(windowWidth > 768 ? -50 : -100)*num+"vw"});
    });
    $(".gallery-slider-list li").removeClass("selected");
    $(".extra-slide").addClass("selected");
    $(".gallery-slider-list li:nth-child("+(num+1)+")").addClass("selected");
  }else{
    $(".gallery-slider-list").stop().animate({left:(windowWidth > 768 ? -50 : -100)*num+"vw"},duration);
    $(".gallery-slider-list li").removeClass("selected");
    $(".gallery-slider-list li:nth-child("+(num+1)+")").addClass("selected");
  }
}

//上限と下限を指定してランダムな数字を生成するrand関数
function rand(mn,mx){
  return Math.floor(Math.random()*(mx-mn+1))+mn;
}

for(let i=0 ; i<150 ; i++){
  $(".champagne-wrapper").append("<div class='bubble p" + i + "'></div>");

  let wh = rand(10,35);//cssでaspect-ratio: 1 / 1;を書いてもok
  let r = rand(180,183);//rgbで色指定を簡単にする変数
  let g = rand(140,144);
  let b = rand(40,46);
  let a = rand(20,80)*0.01;

  $(".p"+i).css({
    "left":rand(0,100)+"vw",//後ろに単位を足している
    "top":rand(0,1300)+"vh",
    "width":wh,
    "height":wh,
    "background-color":"rgba("+r+","+g+","+b+","+a+")",
    "filter":"blur("+rand(0,2)+"px)",
    "animation-duration":rand(100,200)*0.01+"s",
  });
}