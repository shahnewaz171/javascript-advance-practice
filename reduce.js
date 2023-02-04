const array1 = [1, 2, 3, 4, 5];

//addition
const sum = array1?.reduce(
  (prevValue, currentValue) => prevValue + currentValue
);

// addition with initial value 5
const initialValue = 5;
const sumWithInitialValue = array1?.reduce(
  (prevValue, currentValue, currentIndex) => prevValue + currentValue,
  initialValue
);

// with currentIndex and array
const sumWithCurrentIndex = array1?.reduce(
  (prevValue, currentValue, currentIndex, array) => {
    // console.log(currentIndex);
    // console.log(array);

    console.log(prevValue);

    if (currentIndex < 3) {
      return prevValue + currentValue;
    }
    return prevValue;
  },
  initialValue
);

console.log(sumWithCurrentIndex);
