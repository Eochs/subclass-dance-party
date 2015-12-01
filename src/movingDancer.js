// var MakeMovingDancer = function(top, left, timeBetweenSteps) {
//   MakeDancer.call(this, top, left, timeBetweenSteps);

//   this.$node.addClass('movingDancer').removeClass('dancer');
//   //this.$node.prepend('<img src="img/cat.png" style="position: relative">');
  
//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function
//   //this.oldStep = this.step;
//   this.angle = 0;
//   //this.lastTime = null;


// };

// MakeBlueDancer.prototype = Object.create(MakeDancer.prototype);

// MakeBlueDancer.prototype.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     //this.oldStep();
//     //this.$node.toggle();
//     // var time = new Date().getTime();
//     // if (this.lastTime != null) {
//     //   this.angle += (time - this.lastTime) * 0.001;
//     // }
    

//     this.$node.animate({
//      top: this.angle,
//      left: this.angle
//     });

//     this.angle += 1;

//     MakeDancer.prototype.step.call(this);
//   };