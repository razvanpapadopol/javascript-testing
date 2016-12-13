//jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
describe("Calculator", function() {

  var calc;

  describe('FX Tests', function() {
    var el;

    beforeEach(function() {
      el = $("<div style='display: block'>some content</div>");
      $("#container").append(el);
      calc = new Calculator(el);
    });

    afterEach(function() {
      el.remove();
    });

    it('should work with a visual effect', function(done) {
      var callback = function(){
        expect(el.css("display")).toBe("none");
        done();
      }
      calc.hideResult(callback);
    });

  });

  describe('pause before hiding', function(){
    it('should call my function after two seconds', function(done) {
      var calc = new Calculator();
      var flag = false;
      var cb = function() {
        flag = true;
      }

      calc.pauseBeforeHiding(cb);
      expect(flag).toBeFalsy();

      setTimeout(function(){
        expect(flag).toBeTruthy();
        done();
      }, 2200);

    })
  });

  describe('mock clock', function() {
    beforeEach(function() {
      jasmine.clock().install();
    });

    it('should call my callback after two seconds - mock clock', function() {
      var calc = new Calculator();
      var callbackCalled = false;

      var callback = function() {
        callbackCalled = true;
      };

      calc.pauseBeforeHiding(callback);
      jasmine.clock().tick(1999);
      expect(callbackCalled).toBeFalsy();
      jasmine.clock().tick(2001);
      expect(callbackCalled).toBeTruthy();
    });

    afterEach(function() {
      jasmine.clock().uninstall();
    });
  });
});
