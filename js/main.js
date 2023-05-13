{
  // スライドショー
  // PC用
  {
    function play() {
      setTimeout(() => {
        pcImages[currentIndex].classList.remove('current');
        currentIndex++;
        if (currentIndex > pcImages.length - 1) {
          currentIndex = 0;
        }
        pcImages[currentIndex].classList.add('current');
        play();
      }, 5000);
    }
    const pcImages = document.querySelectorAll('.MV .slides.pc');
    let currentIndex = 0;
    play();
  }
  // SP用
  {
    function play() {
      setTimeout(() => {
        spImages[currentIndex].classList.remove('current');
        currentIndex++;
        if (currentIndex > spImages.length - 1) {
          currentIndex = 0;
        }
        spImages[currentIndex].classList.add('current');
        play();
      }, 5000);
    }
    const spImages = document.querySelectorAll('.MV .slides.sp');
    let currentIndex = 0;
    play();
  }

  // ハンバーガー
  $(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });

  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });


}