$(function(){
  var amount = 200;
     $('.pagetop').hide();
 
     $(window).scroll(function(){
     var scrollPoint = $(this).scrollTop();
     (scrollPoint > amount)?$('.pagetop').fadeIn():(scrollPoint < amount)?$('.pagetop').fadeOut():$('.pagetop').show();
   });

  //iOS�΍�
  //iOS�ł͋^���v�f���܂�a�^�O�̃����N�͂Q��^�b�v���Ȃ��ƑJ�ڂƃy�[�W���X�N���[�������Ȃ����߁A
  //���[�U�[�G�[�W�F���g�����iOS�̏ꍇ��body�^�O��ios��t�^���A�Ώۂ̋^���v�f��display: none����
  var ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua)) {
    $("body").addClass("ios");
  }

  //�y�[�W���X�N���[��
  var $nav = $(".gnav");
  var navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position
      },
      300,
      "swing"
    );
    return false;
  });

});

