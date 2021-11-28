$('.accordion__item .title').click(function() {
    const wrapper = $(this).parent().parent();
    const panel = $(this).parent().find('.panel');
    const title = $(this);

    if (!panel.attr('class').includes('active')) {
        const currActivePanel = wrapper.find('.active');
        currActivePanel.slideToggle();
        currActivePanel.removeClass('active');
        currActivePanel.siblings('.title').removeClass('minus');
        panel.addClass('active');
        title.addClass('minus');
        
    } else {
        panel.removeClass('active');
        title.removeClass('minus');
    }
    
    panel.slideToggle();
});

$(document).ready(function(){
    $(window).on("scroll", function () {
       if ($(this).scrollTop() > 400) {
          $('.backTop-btn').fadeIn('slow');
       } else {
          $('.backTop-btn').fadeOut('slow');
       }
    });
    
    $(".backTop-btn").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 10);
    });
  });