$(document).ready(function () {
  var jbOffset = $('#brand_inner #img').offset();//#nav는 해당 클래스를 적용시킬 곳의 선택자입니다.
  $(window).scroll(function () {
    if ($(document).scrollTop() > 445) {//여기 지정된 길이 이후부터 적용됩니다
      $('#brand_inner #img').addClass("on1");//색깔 바뀔 곳의 클래스 혹은 아이디 지정후 원하는 색상등을 지정
    }
    else {
      $('#brand_inner #img').removeClass("on1");//처음에 보이는 배경부분
    }
  });
  var jbOffset = $('#promise_inner #img').offset();//#nav는 해당 클래스를 적용시킬 곳의 선택자입니다.
  $(window).scroll(function () {
    if ($(document).scrollTop() > 900) {//여기 지정된 길이 이후부터 적용됩니다
      $('#promise_inner #img').addClass("on2");//색깔 바뀔 곳의 클래스 혹은 아이디 지정후 원하는 색상등을 지정
    }
    else {
      $('#promise_inner #img').removeClass("on2");//처음에 보이는 배경부분
    }
  });
});