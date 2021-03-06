$(document).ready(function() {
  window.dancers = [];
  window.terryCrewsMode = false;

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random()
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer);
  });

  $(".nightmareModeButton").on("click", function(event) {
    var power = new Audio('audio/power.mp3');
    power.play()
    //$('body').css({background: url('imgs/nebulae.jpg')});
    for(var i = 0; i<window.dancers.length; i++){
      window.dancers[i].$node.append($('<img src="imgs/terry crews head.png">'));
      window.dancers[i].$node.css({border : 0});

    }
  });

});

$(".lineUpButton").on("click", function(event) { 
  for(var i = 0; i<window.dancers.length; i++){
    if(!window.dancers[i].hasBeenLinedUp){
      window.dancers[i].lineUp();
      window.dancers[i].hasBeenLinedUp = true;
    } else {
      window.dancers[i].hasBeenLinedUp = false;
      window.dancers[i].step();
    }
  }
    
});

$('body').mousemove(function(e){
  window.mouseX = e.pageX;
  window.mouseY = e.pageY;
});

