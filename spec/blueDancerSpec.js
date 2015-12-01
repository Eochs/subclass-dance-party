describe("blueDancer", function() {

  var blueDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blueDancer = new MakeBlueDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function() {
    expect(blueDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that Makes its node blink", function() {
    sinon.spy(blueDancer.$node, 'toggle');
    blueDancer.step();
    expect(blueDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function() {
    it("should call step at least once per second", function() {
      sinon.spy(blueDancer, "step");
      expect(blueDancer.step.callCount).to.be.equal(0);
    //blueDancer = new MakeBlueDancer(10, 20, timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(blueDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blueDancer.step.callCount).to.be.equal(2);
    });
  });
});

