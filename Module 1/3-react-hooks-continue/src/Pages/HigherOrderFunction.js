const wrapperFunction = (func) => {
  return (num) => {
    return func(num) * 2;
  };
};
const addOne = (num) => {
  return num + 1;
};

const addOneAndDouble = wrapperFunction(addOne);

console.log(addOneAndDouble(4));
