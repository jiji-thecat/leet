export {};

// this is a reference to the object that is currently running the function

const test = {
  prop: 42,
  func: function () {
    console.log(this); // test object
    return this.prop;
  },
};

//console.log(test.func()); // 42

const test2 = {
  prop: 42,
  func: () => {
    console.log(this); // window object if run on browser, if local then {}
    return 'test2';
  },
};

//console.log(test2.func()); // test2

const test3 = {
  prop: 42,
  func: function () {
    const func2 = () => {
      console.log(this); // test3 object, because this is a reference to the object that is currently running the function.
      return this.prop;
    };
    return func2();
  },
};
//console.log(test3.func()); // 42

const test4 = {
  prop: 42,
  func: function () {
    const func2 = () => {
      const obj = {
        prop: 100,
        func: function () {
          console.log(this);
          return this.prop;
        },
      };

      console.log(obj.func()); // 100

      console.log(this); // test3 object, because this is a reference to the object that is currently running the function.
      return this.prop;
    };
    return func2();
  },
};
console.log(test4.func()); // 42
