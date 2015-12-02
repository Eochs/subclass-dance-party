var MakeBounceDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps * .1);

  this.$node.addClass('bounceDancer').removeClass('dancer');
  this.multiplier = 10;
  this.maxY = $("body").height();
  this.maxX = $("body").width();

  this.angle = Math.random() * 360;
  this.signX =  Math.cos(this.angle);
  this.signY = Math.sin(this.angle);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.oldStep = this.step;
  


};

MakeBounceDancer.prototype = Object.create(MakeDancer.prototype);

MakeBounceDancer.prototype.step = function() {
 
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
    if(!this.hasCollided){
      for(var i = 0; i<window.dancers.length; i++){
        if(window.dancers[i] === this) continue;

        var otherX = window.dancers[i].left;
        var otherY = window.dancers[i].top;
        var dist = Math.sqrt( (otherX - this.left)*(otherX - this.left) + (otherY - this.top)*(otherY - this.top)  );
        if (dist < 10) {
          this.angle = (360-this.angle)%360;
          if (this.angle >= 0 && this.angle < 90) {
            this.signX = Math.cos(this.angle);
            this.signY = Math.sin(this.angle);
          } else if (this.angle >= 90 && this.angle < 180) {
            this.signX = -Math.cos(this.angle);
            this.signY = Math.sin(this.angle);
          } else if (this.angle >= 180 && this.angle < 270) {
            this.signX = -Math.cos(this.angle);
            this.signY = -Math.sin(this.angle);
          } else {
            this.signX = Math.cos(this.angle);
            this.signY = -Math.sin(this.angle);
          } 
          
          this.hasCollided = true;
          setTimeout(function(){ this.hasCollided = false; }.bind(this), 500);
        }

        // if ( window.dancers[i].top <= this.top + 20
        //           && window.dancers[i].top >= this.top - 20 
        //           && window.dancers[i].left <= this.left + 20 
        //           && window.dancers[i].left >= this.left - 20 ){
        //   this.signY *= -1;
        //   this.signX *= -1;
        //   this.hasCollided = true;
        //   setTimeout(function(){ this.hasCollided = false; }.bind(this), 1000);
        // } else if ( window.mouseY <= this.top + 40
        //           && window.mouseY >= this.top - 40 
        //           && window.mouseX <= this.left + 40 
        //           && window.mouseX >= this.left - 40 ) {
        //   this.signY *= -1;
        //   this.signX *= -1;
        //   this.hasCollided = true;
        //   setTimeout(function(){ this.hasCollided = false; }.bind(this), 500);
        // }
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