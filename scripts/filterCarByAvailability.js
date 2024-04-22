function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  for (let i = 0; i < cars.length; i++) {
      if (cars[i].available === true) {
          result.push(cars[i]);  
      }
  }
  console.log("Available cars:", result);
  return result;
  
}
