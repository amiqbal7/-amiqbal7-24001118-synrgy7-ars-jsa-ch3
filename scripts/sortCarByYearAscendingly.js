function sortCarByYearAscendingly(cars) {
  console.log("Original array:", cars);

  const result = [...cars];

  for (let i = 1; i < result.length; i++) {
    let currentCar = result[i];
    let j = i - 1;

    while (j >= 0 && result[j].year > currentCar.year) {
      result[j + 1] = result[j];
      j--;
    }
    result[j + 1] = currentCar;
  }

  console.log("Sorted by year ascending:", result);
  return result;
}
