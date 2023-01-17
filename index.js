// Excercise 1

// Создать функцию которая будет удалять людей из массива по индексу, который мы передадим параметром.

(() => {
const arr = ['Vasya', 'Petya', 'Alexey'];

function deleteElementInArr(arr, numberOfElement){
  arr.splice(numberOfElement, 1);
  return arr;
}

console.log('Excercise 1', deleteElementInArr(arr, 1));
})();
// Excercise 2

// Создать функцию которая вернет все ключи обьекта переданного параметром.
(() => {
const obj = { name: 'Vasya', age: 1}

function getAllKeys(obj) {
  return Object.keys(obj);
}

console.log('Excercise 2', getAllKeys(obj))
})();

// Excercise 3

// Создать функцию которая вернет все значения объекта переданного параметром.

(() => {
const obj = { name: 'Vasya', age: 1}

function getAllValues(obj) {
  return Object.values(obj);
}

console.log('Excercise 3', getAllValues(obj));
})();

// Excercise 4

// Cодать функцию,где мы первым параметром передадим объект с новым кандидатом,
// а вторым параметром - id любого кондидата в массиве condidateArr. 
// Функция должна будет вставить кандидата переданного через первый параметр в массив
// перед кондидатом у которого id равно тому что передали во-втором параметре.

const obj = {
    id: 3,
    name: 'Vasya'
}

const secondObj = {
    id: 4,
    name: 'Katya'
}

const arr = [
    {
        id: 1,
        name: 'Kolya'
    },
    {
        id: 2,
        name: 'Petya'
    },
];

function insertIntoarr(obj, objId) {
 const searchId = arr.findIndex(e => e.id === objId);
 return arr.splice(searchId, 0, obj);
}

console.log('Excercise 4')

insertIntoarr(obj, 2)
console.log(arr)

insertIntoarr(secondObj, 1)
console.log(arr)

// Excercise 5

// Создайте класс Condidate который будет принимать параметром объект из массива condidateArr.
// Добавить метод с именем state который вернет штат в котором живает наш кондидат.
// Информация о штате находится в свойстве address и это третья запись после запятой.

class Condidate {
  constructor(condidate) {
    this.state = this.state(condidate.address);
  }
  state(address) {
    return address.split(',')[2];
  }
}

const condidat = new Condidate(condidateArr[2]);

console.log(condidat.state);

// Excercise 6

// Создать функцию которая выведет массив с названиями фирм взятыми из св-ва company.
// Если фирмы повторяются в массиве, то удалить дубликаты. Все так же используем массив candidateArr

function companysOfCondidates(arr) {
  const arrOfCompanys = [];
  arr.forEach((item) => arrOfCompanys.push(item.company));
  // const condidate = arr.map((item) => item.company);
  // arrOfCompanys.push(...condidate);
  const filteredArr = arrOfCompanys.filter(
    (item, index) => index === arrOfCompanys.indexOf(item)
  );
  return filteredArr;
}

console.log(companysOfCondidates(condidateArr));

// Excercise 7

//Создать функцию которая выведет мне массив id всех кондидатов, которые были зарагестрированны
// в том же году что и год указанный в параметре.

function idWhoRegistered(arr, year) {
  const newArr = [];
  arr.forEach((item) => {
    item.registered = new Date(item.registered).getFullYear();
    newArr.push(item);
  });

  const idCondidates = [];

  newArr.forEach((item) => {
    item.registered === year && idCondidates.push(item._id);
  });

  return idCondidates;
}

console.log(idWhoRegistered(condidateArr, 2014));

// Excercise 8

// Создать функцию которая вернет массив с экземплярами - кандидатами, отфильтрованных по кол-ву непрочитанных сообщений.
// Смотрим св-во greeting, там указанно это количество в строке, Вам надо достать это число из строки и сверять
// с тем что в параметер вашей функции. Все так же используем массив candidateArr

const filteredByUnreadCount = (arr, count) => {
  const countOfunreadmessages = (string) => Number(string.split(' ')[5]);
  return arr.filter((item) => countOfunreadmessages(item.greeting) === count);
};

console.log('Excercise 8', filteredByUnreadCount(condidateArr, 8));

// Excercise 9

// Создать функцию которая вернет массив по свойству gender. Все так же используем массив candidateArr

const arrOfGender = (arr, gender) => {
  const newArr = [];
  arr.forEach((item) => {
    item.gender === gender && newArr.push(item);
  });
  return newArr
};

console.log('Exercise 9', arrOfGender(condidateArr, 'female'));
