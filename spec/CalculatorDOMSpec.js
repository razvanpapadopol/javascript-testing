describe("CalculatorDOM", function() {
  var calc;
  var OutputId = "#calc-fixture";

  beforeEach(function(){
    $('body').append($('#template-wrapper').html().replace('-template', ''));
    calc = new CalculatorDOM($(OutputId));
  });

  afterEach(function(){
    $(OutputId).remove();
  });

  it("should be able to add 1 plus 1", function() {
    calc.add(1,1);
    expect($(OutputId).text()).toBe('2');
  });

});
