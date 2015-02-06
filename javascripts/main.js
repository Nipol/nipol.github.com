$('#clocktime').countdown('2015/4/25 00:00:00')
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
    $(this).html('오늘은 결혼식입니다! 참여해 주시여 신랑과 신부를 축하해주세요!').parent().addClass('disabled');
  });