$(function(){
  $('#change-color').on('click', function(){
    $('#target').css('color', 'red');
  });
  $('#change-text').on('click', function(){
  //Hello!に文字内容変更
    $('#target').text('Hello!');
    });
  $('#fade-in').on('click', function(){
    $('#target').fadeIn();
  });
  $('#fade-out').on('click', function(){
    $('#target').fadeOut();
  });
});