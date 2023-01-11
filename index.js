// Exersise 1

const studentArr = [
  {
    name: 'Сергей',
    surname: 'Войлов',
    ratingPoint: 1000,
    schoolPoint: 1000,
    course: 2,
  },
  {
    name: 'Татьяна',
    surname: 'Коваленко',
    ratingPoint: 880,
    schoolPoint: 700,
    course: 1,
  },
  {
    name: 'Анна',
    surname: 'Кугир',
    ratingPoint: 1430,
    schoolPoint: 1200,
    course: 3,
  },
  {
    name: 'Станислав',
    surname: 'Щелоков',
    ratingPoint: 1130,
    schoolPoint: 1060,
    course: 2,
  },
  {
    name: 'Денис',
    surname: 'Хрущ',
    ratingPoint: 1000,
    schoolPoint: 990,
    course: 4,
  },
  {
    name: 'Татьяна',
    surname: 'Капустник',
    ratingPoint: 650,
    schoolPoint: 500,
    course: 3,
  },
  {
    name: 'Максим',
    surname: 'Меженский',
    ratingPoint: 990,
    schoolPoint: 1100,
    course: 1,
  },
  {
    name: 'Денис',
    surname: 'Марченко',
    ratingPoint: 570,
    schoolPoint: 1300,
    course: 4,
  },
  {
    name: 'Антон',
    surname: 'Завадский',
    ratingPoint: 1090,
    schoolPoint: 1010,
    course: 3,
  },
  {
    name: 'Игорь',
    surname: 'Куштым',
    ratingPoint: 870,
    schoolPoint: 790,
    course: 1,
  },
  {
    name: 'Инна',
    surname: 'Скакунова',
    ratingPoint: 1560,
    schoolPoint: 200,
    course: 2,
  },
];

class Student {
  constructor(enrolee) {
    this.id = Student.ID++;
    this.isSelfPayment = true;
    Object.assign(this, enrolee);

    Student.listOfStudents.push(this);
    Student.filterBySelfPayment();
  }

  static ID = 1;
  static listOfStudents = [];

  static filterBySelfPayment() {
    const studentsList = Student.listOfStudents;
    studentsList.sort((a, b) => {
      if (b.ratingPoint > a.ratingPoint) return 1;
      if (b.ratingPoint < a.ratingPoint) return -1;
      if (b.ratingPoint === a.ratingPoint) {
        b.schoolPoint > a.schoolPoint ? 1 : 0;
      }
    });
    studentsList.slice(0, 5).forEach((e) => (e.isSelfPayment = false));
    studentsList.slice(5).forEach((e) => (e.isSelfPayment = true));
  }
}

for (const enrolee of studentArr) {
  new Student(enrolee);
}

console.log(Student.listOfStudents);

// Exersise 2

class CustomString {
  
  constructor(string){
    this.string = string;
  }
  
  reverse(string){
    let result = '';
    for (let i = 0; i < string.length; i++){
      result = string[i] + result;
    }
    return result;
  }
  
  ucFirst(string){
    const arr = [];
    for (let i = 0; i < string.length; i++){
      if (i === 0){
       arr.push(string[i].toUpperCase());
       continue;
      }
      arr.push(string[i]);
    }
    return arr.join('');
  }
  
  ucWords(string){
    const arr = [];
    for (let i = 0; i < string.length; i++){
      if (i === 0){
       arr.push(string[i].toUpperCase());
       continue;
      } else if (string[i - 1] === ' '){
        arr.push(string[i].toUpperCase());
        continue;
      }
      arr.push(string[i]);
    }
    return arr.join('');
  }
  
}

// Для перевірки
const myString = new CustomString();
console.log('reverse() =>', myString.reverse('qwerty'));
console.log('ucFirst() =>', myString.ucFirst('qwerty'));
console.log('ucWords() =>', myString.ucWords('qwerty qwerty qwerty'));

// Exersise 3

class Validator {
  static EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  static DOMAIN_REGEXP =
    /^(?!:\/\/)([a-zA-Z0-9-]+\.){0,5}[a-zA-Z0-9-][a-zA-Z0-9-]+\.[a-zA-Z]{2,64}?$/gi;

  static DATE_REGEXP =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

  static PHONE_REGEXP =
    /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;

  checkIsEmail(email) {
    return Validator.EMAIL_REGEXP.test(email);
  }
  checkIsDomain(domain) {
    return Validator.DOMAIN_REGEXP.test(domain);
  }
  checkIsDate(date) {
    return Validator.DATE_REGEXP.test(date);
  }
  checkIsPhone(phoneNumber) {
    return Validator.PHONE_REGEXP.test(phoneNumber);
  }
}

const validator = new Validator();

console.log(validator.checkIsEmail('vasya.pupkin@gmail.com'));
console.log(validator.checkIsDomain('google.com'));
console.log(validator.checkIsDate('30.11.2019'));
console.log(validator.checkIsPhone('+38 (066) 937-99-92'));
