function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("Can not perform the division by 0");
    } else {
      resolve(num1 / num2);
    }
  });
}

divideFn(10,0)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
