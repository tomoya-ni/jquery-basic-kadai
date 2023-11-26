$(function(){
  //東京
  $('#tokyo').on('click', ()=>{
    $('#target').text('東京の');
    $('#tokyo').toggleClass('click');
    const url = 'https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json';
    fetch(url)
    .then((response) => response.json()) 
    .then((data) => {
      const weather = data[0].timeSeries[0].areas[0].weathers[1];
      $('#tommorow').text(weather);
    });
  });
  //名古屋
  $('#nagoya').on('click', ()=>{
    $('#target').text('名古屋の');
    $('#nagoya').toggleClass('click');
    const url = 'https://www.jma.go.jp/bosai/forecast/data/forecast/220000.json';
    fetch(url)
    .then((response) => response.json()) 
    .then((data) => {
      const weather = data[0].timeSeries[0].areas[0].weathers[1];
      $('#tommorow').text(weather);
    });
  });
  //大阪
  $('#osaka').on('click', ()=>{
    $('#target').text('大阪の');
    $('#osaka').toggleClass('click');
    const url = 'https://www.jma.go.jp/bosai/forecast/data/forecast/270000.json';
    fetch(url)
    .then((response) => response.json()) 
    .then((data) => {
      const weather = data[0].timeSeries[0].areas[0].weathers[1];
      $('#tommorow').text(weather);
    });
  });
});