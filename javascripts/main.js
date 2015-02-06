$('#clocktime').countdown('2015/4/25 00:00:00')
  .on('update.countdown', function(event) {
    var format = '%H시간 %M분 남았습니다!';
    if(event.offset.days > 0) {
      format = '%-d일 ' + format;
    }
    if(event.offset.weeks > 0) {
      format = '%-w주 ' + format;
    }
    format = '결혼식 까지 ' + format;
    $(this).html(event.strftime(format));
  })
  .on('finish.countdown', function(event) {
    $(this).html('오늘은 결혼식입니다! 오후 2시까지 식장에 참석해 주셔서 신랑과 신부를 축복해주세요!').parent().addClass('disabled');
  });