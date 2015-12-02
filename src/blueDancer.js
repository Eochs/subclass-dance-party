// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

var MakeBlueDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps * .1);

  this.$node.addClass('blueDancer').removeClass('dancer');
  this.multiplier = 1;
  this.angle = 0;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.oldStep = this.step;
 


};

MakeBlueDancer.prototype = Object.create(MakeDancer.prototype);

MakeBlueDancer.prototype.step = function() {  

  if(!this.hasCollided){
    for(var i = 0; i<window.dancers.length; i++){
      if(window.dancers[i] === this){
      }else if ( window.dancers[i].top <= this.top + 20
                && window.dancers[i].top >= this.top - 20 
                && window.dancers[i].left <= this.left + 20 
                && window.dancers[i].left >= this.left - 20 ){
        this.multiplier *= -1;
        this.hasCollided = true;
        setTimeout(function(){ this.hasCollided = false; }.bind(this), 1000);

      } else if ( window.mouseY <= this.top + 90
                && window.mouseY >= this.top - 90 
                && window.mouseX <= this.left + 90 
                && window.mouseX >= this.left - 90 ) {
        this.multiplier *= -1;
        this.hasCollided = true;
        setTimeout(function(){ this.hasCollided = false; }.bind(this), 500);
      }
    }
  }


   var angle = this.angle;
   MakeDancer.prototype.step.call(this);
   this.top += Math.sin(angle) * .5;
   this.left += Math.cos(angle) * .5;
   this.setPosition(this.top, this.left);
   this.angle = angle + (0.01)*this.multiplier;
  };