var customMatchers = {
  toBeBetween: function(util, customEqualityTesters){
    return {
      compare: function(actual, expected){
        if (expected === undefined){
          expected = '';
        }
        var result = {};
        result.pass = actual >= expected[0] && actual <= expected[1];
        if(result.pass) {
          result.message = "Expected " + actual + " not to be between " + expected[0] + " and " + expected[1];
        } else {
          result.message = "Expected " + actual + " to be between " + expected[0] + " and " + expected[1];
        }
        return result;
      }
    };
  }
};
