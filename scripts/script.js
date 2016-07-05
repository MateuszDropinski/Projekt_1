$(document).ready(function(){
    $('.hamburger').click(function(){
        $('.navbar').slideToggle(500); 
    });
   $('li a').click(function(){
      $this = $(this);
        var where = $($this.attr('data-element'));
        var top=where.offset().top;
       $('html, body').animate({scrollTop: top},500);
       if($(window).width() < "768px")$('.navbar').slideToggle(500);        
   });
    $(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scroll').fadeIn();
		} else {
			$('.scroll').fadeOut();
		}
	});
	$('.scroll').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});
});