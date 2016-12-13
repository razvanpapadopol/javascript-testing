function callMyCallback(cb){
  cb();
}

describe("Spying on callbacks", function() {
  it("should spy on a callback", function() {
    var spyCB = jasmine.createSpy('myspy');
    callMyCallback(spyCB);
    expect(spyCB).toHaveBeenCalled();
  });
});

var myObj = {
  save: function() {
    //...
  },
  getQuantity: function() {
    return 5;
  }
}

describe("Spying on existing functions", function() {

  it('should spy on save', function() {
    var spy = spyOn(myObj, 'save');
    myObj.save();
    expect(spy).toHaveBeenCalled();
  });

  it('should spy on getQuantity', function() {
    var spy = spyOn(myObj, 'getQuantity').and.returnValue(10);
    expect(myObj.getQuantity()).toEqual(10);
  });

  it('should spy on getQuantity fake', function() {
    var spy = spyOn(myObj, 'getQuantity').and.callFake(function() {
      console.log('returning 20');
      return 20
    });
    expect(myObj.getQuantity()).toEqual(20);
  });

  it('should spy on getQuantity callthrough', function() {
    var spy = spyOn(myObj, 'getQuantity').and.callThrough();
    expect(myObj.getQuantity()).toEqual(5);
    expect(spy).toHaveBeenCalled();
  });

  it('should spy on getQuantity throw', function() {
    var spy = spyOn(myObj, 'getQuantity').and.throwError(new Error('problem'));
    var qty;
    try {
      qty = myObj.getQuantity();
    } catch(ex) {
      qty = ex.message;
    }
    expect(qty).toEqual('problem');
  });

});

describe("Create Spy Objects", function() {

  it('should create a spy objects', function() {
      var spy = jasmine.createSpyObj('mySpy', ['getName', 'saveName']);
      spy.getName.and.returnValue('john');
      spy.saveName.and.callFake(function() {
        console.log('save called');
      });
      expect(spy.getName()).toEqual('john');
      spy.saveName();
      expect(spy.saveName).toHaveBeenCalled();
  });

});

describe("Jasmine Spy Matchers", function() {

  it('should verify arguments', function() {
      var spy = jasmine.createSpy('mySpy');
      spy(1);
      expect(spy).toHaveBeenCalledWith(1);
  });

});
