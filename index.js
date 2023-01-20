// JS_HW 7

// Excercise 1
// Создать поиск кандидатов в массиве candidateArr по номеру телефона.
// Номер телефона может быть указан не полностью и в любом формате.

const FORMAT_PHONE_NUMBER = new RegExp(/\D/gm);

const searchCandidatesByPhoneNumber = (phone) => {
  const newArr = [...condidateArr];
  const formatInputPhone = phone.replace(FORMAT_PHONE_NUMBER, '');
  newArr.forEach((item) => {
    item.phone = item.phone.replace(FORMAT_PHONE_NUMBER, '');
    newArr.push(item);
  });

  return newArr.filter((item) => {
    return item.phone.includes(formatInputPhone);
  });
};
console.log('Excercise 1');

console.log(searchCandidatesByPhoneNumber('43'));
console.log(searchCandidatesByPhoneNumber('+1(86'));
console.log(searchCandidatesByPhoneNumber('+1 (869) 408-3982'));

// Excercise 2

// Создать функцию которая найдет кандидата по  _id и вернет его из массива candidatesArr
// c отформатированной датой регистрации(поле registred).Дата должна иметь формат DD / MM / YY.

const getCandidateById = (id) => {
  const newArr = [...condidateArr];
  const filteredArray = newArr.filter((item) => {
    return item._id.includes(id);
  });
  const date = new Date(filteredArray[0].registered);
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  filteredArray[0].registered = `${day}/${month}/${year}`;
  return filteredArray[0];
};

console.log('Excercise 2', getCandidateById('5e216bc9a6059760578aefa4'));

// Exercise 3
// Написать функцию которая будет сортировать массив canidatesArr по количеству денег
// лежащих на балансе (смотрим свойство balance)  в том порядке, в котором ей укажут в аргементе sortBy.
// Если параметр не был передан, то вернет массив в первоначальном состоянии.

const sortCandidatesArr = (sortBy) => {
  const newArr = [...condidateArr];
  if (sortBy === 'asc')
    newArr.sort((a, b) => {
      return (
        a.balance.slice(1).replace(',', '') -
        b.balance.slice(1).replace(',', '')
      );
    });

  if (sortBy === 'desc')
    newArr.sort((a, b) => {
      return (
        b.balance.slice(1).replace(',', '') -
        a.balance.slice(1).replace(',', '')
      );
    });

  return newArr;
};

console.log('Excercise 3', sortCandidatesArr('desc'));

// Exercise 4
// Написать функцию, которая вернет объект в котором название ключей будут цвета глаз, а значением -
// массив с кандидатами имеющие такой цвет глаз. При этом нельзя самому указывать первоначальный объект
// с возможными вариантами цветами глаз, а сгенерировать их на основе массива с кандидатами,
// то есть пройтись по массиву candidatesArr и брать смотреть на свойство eyeColor и добавлять
// значение цвета глаз кандидата как ключ объекта,
// если такого ключа не существует, ну и не добавлять - если  одноименный ключ уже существует.

const getEyeColorMap = () => {
  const newArr = [...condidateArr];
  const obj = {};
  newArr.forEach((item) => {
    if (!obj.hasOwnProperty(item.eyeColor)) {
      obj[item.eyeColor] = [];
    }
    obj[item.eyeColor].push(item);
  });
  return obj;
};

console.log('Excercise 4', getEyeColorMap());
