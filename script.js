$(document).ready(function() {
  $(".item1").click(
    function() {
      $(".p1").toggle(1000);
    }
  );
});
$(document).ready(function() {
  $(".item2").click(function() {
    $(".p2").toggle(1000);
  });
});
$(document).ready(function() {
  $(".item3").click(function() {
    $(".p3").toggle(1000);
  });
});
$(document).ready(function() {
  $(".item4").click(function() {
    $(".p4").toggle(1000);
  });
});

$(".hamburger").click(function(){
  $("header").toggle(1000)
});
