// Task_1

/* 

const citiesAndCountries = {
  Київ: 'Україна',
  'Нью-Йорк': 'США',
  Амстердам: 'Нідерланди',
  Берлін: 'Німеччина',
  Париж: 'Франція',
  Ліссабон: 'Португалія',
  Відень: 'Австрія',
};

const result = [];
for (const key in citiesAndCountries){
  result[result.length] = `${key} - це ${citiesAndCountries[key]}`;
}

console.log(result) 

*/

// Task_2

/*

const amount = 12;
const len = 3;
const result = [];
const arr = [];

for (let i = 1; i <= amount; i++){
 arr[arr.length] = i;
}
for (let j = 0; j < arr.length; j += len){
  result[result.length] = arr.slice(j, j + len);
}

console.log(result)

*/

/*

// Task_3

const namesOfDays = {
    ua: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота', 'Неділя'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

function getNameOfDay(lang, day) {
  if (day === 0 || day > 7) {
    alert ('Error! Enter a day number from 1 to 7 !')
  }
  if (lang === 'ua') {
    day = namesOfDays.ua[day - 1];
  } else if (lang === 'en')
    day = namesOfDays.en[day - 1];
   // lang === 'ua' ? day = namesOfDays.ua[day - 1] : day = namesOfDays.en[day - 1]; // version 2
  return day;
}

console.log(getNameOfDay('ua', 7))

*/


/*

// Task_4

function sumOfLessNumbers(arr){
  arr = Array.from(new Set(arr));
  if (arr.length < 4) {
    return console.log('The array has less than four elements');
  }
  arr = arr.filter(num => Number.isInteger(num) && Math.sign(num) !== -1);
  arr.sort((a, b) => a - b);
  return arr[0] + arr[1];
}

console.log(sumOfLessNumbers([12, 12.8, 12, 4, 6, -8, 9, 5]))

*/
