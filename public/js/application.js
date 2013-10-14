$(document).ready(function(){
  $(document).on("keyup", function(event) {
    if (event.keyCode == 72){
      var active_cell1 = $('#player1_strip').children('.active');
      active_cell1.removeClass('active');
      active_cell1.next().addClass('active');
    }
     if ($('#player1_strip').children().last().hasClass("end active")) {
      alert("player 1 wins!");
      $(document).unbind();
    };

    if (event.keyCode == 65){
      var active_cell2 = $('#player2_strip').children('.active');
      active_cell2.removeClass('active');
      active_cell2.next().addClass('active');
    }
     if ($('#player2_strip').children().last().hasClass("end active")) {
      alert("player 2 wins!");
      $(document).unbind();
    };
  });

});
