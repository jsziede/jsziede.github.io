var $target = $('.text-center');
inView.threshold(0.5);
inView('.project').on('enter', function(el){
  var color = $(el).attr('data-background-color');
  $target.css('background-color', color );
});