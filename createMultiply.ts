const createMultiple = (num: number) => {
  return (num2: number) => {
    return num * num2;
  };
};

const mul2 = createMultiple(2);
console.log(mul2(3));
