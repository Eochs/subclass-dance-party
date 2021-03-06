// //Creates and returns a new dancer object that can step
// var MakeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };







var MakeDancer = function(top,left,timeBetweenSteps){
  this.$node;
  if (window.terryCrewsMode) {
    this.$node = $("<span style=width: 90px; height: 90px; display:block; position: absolute <img src='terry crews head.jpg'></span>")
  } else {
    this.$node = $('<span class="dancer"></span>');
  } 
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.hasBeenLinedUp = false;
  this.hasCollided = false;

};

MakeDancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    if ( ! this.hasBeenLinedUp ) {
      setTimeout(function(){this.step()}.bind(this), this.timeBetweenSteps);
    }
};

MakeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
    this.top = top;
    this.left = left;
};

MakeDancer.prototype.lineUp = function() {
  this.$node.animate({ top : "500"});


}









