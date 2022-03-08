// 問題１
const array = [2, 4, 7, 5, 4, 3, 8];

const result = array.filter(function (item, index) {
  return array.indexOf(item) == index;
});

console.log(result);


// 問題２
function leapYear(year) {
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    return `${year}は閏年です。`;
  }
  else {
    return `${year}は閏年ではありません。`;
  }
}

console.log(leapYear(2020));
console.log(leapYear(2021));