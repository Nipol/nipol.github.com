$('#clocktime').countdown('2015/4/25 12:00:00')
  .on('update.countdown', function(event) {
    var format = '%H:%M:%S';
    if(event.offset.days > 0) {
      format = '%-d 일 ' + format;
    }
    if(event.offset.weeks > 0) {
      format = '%-w 주 ' + format;
    }
    $(this).html(event.strftime(format));
  })
  .on('finish.countdown', function(event) {
    $(this).html('결혼식이 종료되었습니다. 참석해주셔서 감사합니다.').parent().addClass('disabled');
  });