$(document).ready(function(){
  $('#get_color').click(function(event) {

    $.post('/color', function(data){
      $('#color_me li:nth-child('+ data.cell +')').css("background-color", data.color)
    })
  })

});
