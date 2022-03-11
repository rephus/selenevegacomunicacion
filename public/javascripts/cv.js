$(document).ready(function(){
  setInterval(blinker, 1000);
  initFaq();
});

function blinker() {
    $('.new').fadeOut(500);
    $('.new').fadeIn(500);
}

function initFaq() {
    $('.faq_q').click(function(){
      $faqa = $(this).siblings('.faq_a');
      
      if ($faqa.is(':visible')) $faqa.hide("slow");
      else {
        $('.faq_a').hide("slow");
        $faqa.show("slow");
      }
      //$(this).siblings('.faq_a').toggle("slow");
    });
}