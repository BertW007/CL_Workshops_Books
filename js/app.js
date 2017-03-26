$(document).ready(function () {

$.ajax({url: "http://date.jsontest.com/", success: function(result){
        $("#date").html(result.date);
    }});

$.ajax({url: "http://swapi.co/api/people/4/", success: function(result){
      $("#actor").html(result.films);
  }});



});
