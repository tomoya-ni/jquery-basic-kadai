$(function(){
  //クリックしたときに
  $('.btn').on('click', function(){
  //classがtext-boxのもののvalueの値にクリックしました！を代入する
  $('.text-box').prop('value', "クリックしました！");  
  });
});