// Exercise 1

// Напиши функцию, которая принимает 1 параметр. При первом вызове, она его запоминает, при втором - суммирует переданый параметр с тем, 
// что передали первый раз и тд. Запрещается использовать глобальные переменные как хранилище результатов счетчика.

const createCounter = () => {
 let result = null;
 return (initCount) => {
  result += initCount;
  console.log(result);
 };
};

const counter = createCounter();
counter(3); 
counter(5); 
counter(228);

// Exercise 2

// Создать функцию которая будет возвращать массив в котором будут лежать все значения - аргументы переданные в данную функцию. 
// Но если мы ничего не передадим в параметрах, то массив очистится. Запрещается использовать глобальные переменные как хранилище значений.

const createArr = () => {
  let arr = [];
  return (args) => {
    if (args === undefined){
      arr = [];
      return console.log(arr);
    }
    arr.push(args);
    console.log(arr);
  };
};

const getUpdatedArr = createArr();

getUpdatedArr(3);
getUpdatedArr(5);
getUpdatedArr({name: 'Vasya'});
getUpdatedArr();
getUpdatedArr(4);

// Exercise 3

// Содать функцию , которая при каждом вызове будет показывать разницу в секундах между временем когда ее вызывали последний раз и теперешним. 
// Вызываем первый раз, то ретерним строку 'Enabled'. Запрещается использовать глобальные переменные как хранилище значений. 

const getInterval = () => {
  let gettingTime = null;
  return () => {
   if (!gettingTime){
     gettingTime = Date.now();
     return 'Enabled';
   }
    const currentTime = Date.now();
    const timeDifference = Math.round((currentTime - gettingTime) / 1000);
    gettingTime = currentTime;
    return timeDifference;
  };
};

const getTime = getInterval();

console.log(getTime());
setTimeout( () => {
  console.log(getTime());
}, 2000);
setTimeout( () => {
  console.log(getTime());
}, 5000);
