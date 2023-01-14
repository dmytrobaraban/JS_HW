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
