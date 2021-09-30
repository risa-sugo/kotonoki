// JavaScript Document

//ハンバーガー
$('.open-button').on('click', function () {
  $('.open-button').toggleClass('close');
  $('.nav-wrapper').toggleClass('slide-in');
  $('body').toggleClass('noscroll');
});

//pagetopボタン
$(function () {
  $("#page-top").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $("#page-top").fadeIn(500);
    } else {
      $("#page-top").fadeOut();
    }
  });
  $("#page-top").click(function () {
    $("body,html").animate({
      scrollTop: 0
    }, 500);
    return false;
  });

});

//page内リンク
$('#page-link a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top; //idの上部の距離を取得
  $('body,html').animate({
    scrollTop: pos
  }, 500); //500の数値が大きくなるほどゆっくりスクロール
  return false;
});

$('.slider').slick({
  autoplay: true, 
  infinite: true, 
  slidesToShow: 3, 
  slidesToScroll: 3, 
  prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
  dots: false, 
  responsive: [{
      breakpoint: 10000, 
      settings: {
        slidesToShow: 3, 
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1040, 
      settings: {
        slidesToShow: 2, 
        slidesToScroll: 1, 
      }
    },
  ]
});

// eachTextAnimeにappeartextというクラス名を付ける定義
function EachTextAnimeControl() {
  $('.eachTextAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");

    } else {
      $(this).removeClass("appeartext");
    }
  });
}
// 画面が読み込まれたらすぐに動かす
$(window).on('load', function () {
  //spanタグを追加する
  var element = $(".eachTextAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });
  EachTextAnimeControl(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述


// fadeup
function fadeAnime() {
  $('.fadeUpTrigger').each(function () { 
    var elemPos = $(this).offset().top - 50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp'); // 画面内に入ったらfadeUpというクラス名を追記
    } else {
      $(this).removeClass('fadeUp'); // 画面外に出たらfadeUpというクラス名を外す
    }
  });
}

// 画面をスクロールをしたら動かす
$(window).scroll(function () {
  fadeAnime(); 
}); 

// 画面が読み込まれたらすぐに動かす
$(window).on('load', function () {
  fadeAnime(); 
}); 


