//Collatz Conjecture

var user_number = 2003

const calculate_box = (user_number) => {
  if(user_number % 2 === 0) {
    return user_number / 2
  } else {
    return (user_number * 3) + 1
  }
}

while(true) {
  var data = calculate_box(user_number)
  user_number = data
  console.log(data)
  calculate_box(data)
}

