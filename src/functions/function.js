function square(number) {
    return number * number;
}

// Function can change the property of the object 
function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
  const myCar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(myCar.make); // "Honda"
  myFunc(myCar);
  console.log(myCar.make); // "Toyota"

// It also can changes any of the array 's value

function myFunc(theArr) {
    theArr[0] = 30;
  }
  
  const arr = [45];
  
  console.log(arr[0]); // 45
  myFunc(arr);
  console.log(arr[0]); // 30