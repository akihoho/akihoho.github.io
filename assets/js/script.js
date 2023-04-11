//****TOP PAGE ****/
/*スクロールしてfade in*/

const targets = document.getElementsByClassName('fadein');
for(let i = targets.length; i--;){
    let observer = new IntersectionObserver((entries, observer) => {
      for(let j = entries.length; j--;){
    if (entries[j].isIntersecting) {
    entries[j].target.classList.add('scrollin');
    } else{
    entries[j].target.classList.remove('scrollin');
    }
  }
  });
  observer.observe(targets[i]);
}

/*サイド固定リンクfooterで消す*/
jQuery(function() {

  var footer = $('.footer').innerHeight(); // footerの高さを取得
  
  window.onscroll = function () {
    var point = window.pageYOffset; // 現在のスクロール地点 
    var docHeight = $(document).height(); // ドキュメントの高さ
    var dispHeight = $(window).height(); // 表示領域の高さ
  
    if(point > docHeight-dispHeight-footer){ // スクロール地点>ドキュメントの高さ-表示領域-footerの高さ
      $('.link-button').addClass('is-hidden'); //footerより下にスクロールしたらis-hiddenを追加
    }else{
      $('.link-button').removeClass('is-hidden'); //footerより上にスクロールしたらis-hiddenを削除
    }
  };
  });

//モバイル版ナブバーがスクロールしたら出てくる際のコード------------------------------->
const navbar = $('.header');
const hamburgerButton = $('.trigger');
  const win = $(window);
  let windowHeight = win.height();   // Get the window height.スクリーンの高さがわかる

  win.on("scroll", function () {
      if ($(this).scrollTop() > windowHeight ) {//スクリーンの高さよりスクロールすると
          navbar.addClass("active-nav");
          hamburgerButton.addClass("active-nav");//クラス名
      } else {
          navbar.removeClass("active-nav");
          hamburgerButton.removeClass("active-nav");
      }
  }).on("resize", function(){ // If the user resizes the window
      windowHeight = $(this).height(); // you'll need the new height value
  });

//pc版topのロゴがスクロールしたら出てくる際のコード------------------------------->
const navlogo = $('.top-nav-logo');
  win.on("scroll", function () {
      if ($(this).scrollTop() > windowHeight ) {//スクリーンの高さよりスクロールすると
          navlogo.addClass("active-nav-logo");
      } else {
          navlogo.removeClass("active-nav-logo");
      }
  }).on("resize", function(){ // If the user resizes the window
      windowHeight = $(this).height(); // you'll need the new height value
  });

//ナブメニュー選択中のページのカレント表示--------------->
  // 現在のURLを取得
  var currentUrl = window.location.href;
  var currentHost = window.location.hostname;
  
  // ヘッダー内のaタグを取得
  var headerLinks = document.querySelectorAll('.nav-list a');

  // リンクをループして現在のURLと一致するリンクにクラスを追加する
  for (var i = 0; i < headerLinks.length; i++) {
      var linkUrl = headerLinks[i].href;

      if (currentUrl.indexOf(linkUrl) !== -1) {
        headerLinks[i].classList.add('current');
      }
  }
//ハンバーガーボタン-------------------------------->
let openNav = ()=>{
  document.querySelector("body").classList.toggle("open");
}
//クリックイベント
const trigger = document.querySelector(".trigger")
trigger.addEventListener("click",openNav);
