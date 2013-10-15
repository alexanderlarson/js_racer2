$(document).ready(function(){
  var start_time = new Date().getTime();
  $(document).on("keyup", function(event) {
    if (event.keyCode == 72){
      var active_cell1 = $('#player1_strip').children('.active');
      active_cell1.removeClass('active');
      active_cell1.next().addClass('active');
    }
    if ($('#player1_strip').children().last().hasClass("end active")) {
      $(document).unbind();
      var end_time = new Date().getTime();
      var time = end_time - start_time
      console.log(time)
      var data = {name : $("#player1_strip").data("player-id"), time : (time/1000)}

      $.post('/winner', data, function(response) {
        console.log(data)
        $('.racer_table').after(response);
      });
    };

    if (event.keyCode == 65){
      var active_cell2 = $('#player2_strip').children('.active');
      active_cell2.removeClass('active');
      active_cell2.next().addClass('active');
    }
    if ($('#player2_strip').children().last().hasClass("end active")) {
      $(document).unbind();
      var end_time = new Date().getTime();
      var time = end_time - start_time
      var data = {name : $("#player2_strip").data("player-id") ,time : (time/1000)}

      $.post('/winner', data, function(response) {
        console.log(data)
        $('.racer_table').after(response);
      });
    };
 });
});

