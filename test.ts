const obj = {
  name: 'Object',
  greet: function () {
    const arrow = function () {
      console.log(this.name); // 厳格モードではundefined
    };
    arrow();
  },
};

obj.greet(); // "Object" が出力される
