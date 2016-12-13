var CalculatorDOM = function(element){
  this.el = element;
};

CalculatorDOM.prototype.add = function(a, b){
  $(this.el).html(a + b);
}

CalculatorDOM.prototype.divide = function(a, b){
  $(this.el).html(a / b);
}
