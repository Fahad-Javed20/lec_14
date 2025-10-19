const FunctionComponent = () => {
  // finding factorial with recursion
  const findFactorial = (n: number): number => {
    if (n == 1 || n == 0) {
      return 1;
    } else {
      return n * findFactorial(n - 1);
    }
  };

  //   sum with Loop
  const addFunction1 = (x: number, y: number): number => {
    let result = 0;
    for (let i = 0; i < y; i++) {
      result = result + x;
    }
    return result;
  };

  //   sum with recursion
  const addFunction2 = (x: number, y: number): number => {
    if (y == 1) return x;

    return x + addFunction2(x, y - 1);
  };

  //   Power with loop
  const findPower = (x: number, y: number): number => {
    let result = 1;
    for (let i = 0; i < y; i++) {
      result = result * x;
    }
    return result;
  };

  //   power with recursion
  const findPowerRec = (x: number, y: number): number => {
    if (y == 1) return x;

    return x * findPowerRec(x, y - 1);
  };

  //   print from 10 to 1

  const print = (n: number): void => {
    if (n == 0) {
      return;
    }

    console.log(n);
    print(n - 1);
  };


//   print first n natural Numbers
const sumNumbers = (n:number):number =>{
    let result = 0
    if(n>0){
       result = n + sumNumbers(n-1);
    }
    return result
}

  return (
    <div className="flex flex-col">
      <button
        onClick={() => {
          console.log(findFactorial(4));
        }}
        className="bg-blue-700 px-3 py-2 mt-5 w-40 "
      >
        Find Factorial
      </button>

      <button
        onClick={() => {
          console.log(addFunction1(3, 5));
        }}
        className="bg-blue-700 px-3 py-2 mt-10  w-40"
      >
        find Sum
      </button>

      <button
        onClick={() => {
          console.log(addFunction2(3, 5));
        }}
        className="bg-blue-700 px-3 py-2 mt-10  w-40"
      >
        Sum with recursion
      </button>
      <button
        onClick={() => {
          console.log(findPower(2, 500));
        }}
        className="bg-blue-700 px-3 py-2 mt-10 w-40 "
      >
        Find Power
      </button>

      <button
        onClick={() => {
          console.log(findPowerRec(2, 500));
        }}
        className="bg-blue-700 px-3 py-2 mt-10 w-40 "
      >
        Power with recursion
      </button>

      <button
        onClick={() => {
          console.log(print(10));
        }}
        className="bg-blue-700 px-3 py-2 mt-10 w-40 "
      >
        print Number
      </button>

       <button
        onClick={() => {
          console.log(sumNumbers(5));
        }}
        className="bg-blue-700 px-3 py-2 mt-10 w-40 "
      >
        sum Number
      </button>
    </div>
  );
};

export default FunctionComponent;
