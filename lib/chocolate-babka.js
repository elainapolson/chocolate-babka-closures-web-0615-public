function counterCreator(number) { // start at a number based on what is passed in
  var number = number;

  return function numberIncrementer() { // return a function that increments number passed in
    return number += 1
  }
}


function countAnnouncer(line, number) {
  var number = number();
  return function bakeryAnnouncer() {
    return "Now serving " + line + " number " + number + "!"
  }
}