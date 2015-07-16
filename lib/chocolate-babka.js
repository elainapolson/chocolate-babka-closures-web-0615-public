var counterCreator = function counterCreator(number) { 
  var number = number;
  return function numberIncrementer() {
    return number += 1
  }
}

function countAnnouncer(line, counterCreator) {
  return function bakeryAnnouncer() {
    return "Now serving " + line + " number " + counterCreator() + "!"
  }
}