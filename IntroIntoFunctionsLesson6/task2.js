function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

function messageBasedOnAge(age) {
  if (isAdult(age)) {
    return "Person is an adult.";}
else {
    return "Person is not an adult.";
  }

}
console.log(messageBasedOnAge(25));
console.log(messageBasedOnAge(15));
