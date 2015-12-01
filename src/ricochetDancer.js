var MakeRicochetDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps * .1);

  this.$node.addClass('ricochetDancer').removeClass('dancer');
  this.multiplier = 10;
  this.maxY = $("body").height();
  this.maxX = $("body").width();
  this.signX = 1;
  this.signY = 1;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.oldStep = this.step;
  


};

MakeRicochetDancer.prototype = Object.create(MakeDancer.prototype);

MakeRicochetDancer.prototype.step = function() {
 
    // this.$node.animate({'top': '500'}, {
    //     duration: 1000, 
    //     complete: function() {
    //         this.$node.animate({top: 0}, {
    //             duration: 1000, 
    //             complete: step});
    //     }});
  
  if (this.top > this.maxY || this.top < 0) {
    this.signY *= -1;
  } else if (this.left > this.maxX || this.left < 0) {
    this.signX *= -1;
  } else {
    for(var i = 0; i<window.dancers.length; i++){
      if(window.dancers[i] === this){
        console.log(this);
      }else if ( window.dancers[i].top <= this.top + 30
                && window.dancers[i].top >= this.top - 30 
                && window.dancers[i].left <= this.left + 30 
                && window.dancers[i].left >= this.left - 30 ){
        this.signY *= -1;
        this.signX *= -1;
      }
    }
  }

   //  var angle = this.angle;
   MakeDancer.prototype.step.call(this);
   // this.top += Math.sin(angle) * .5;
   // this.left += Math.cos(angle) * .5;
   this.setPosition(this.top + this.signY, this.left + this.signX);
   // this.angle = angle + 0.01;
  };