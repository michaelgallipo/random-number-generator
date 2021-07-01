function randomNumber(min, max) {
  event.preventDefault();
  console.log(min, max);
  let number = Math.floor(Math.random() * (max - min + 1)) + parseInt(min)
  console.log(number);
  document.querySelector(".numberInsert").innerHTML = number;
  // return number;
}
