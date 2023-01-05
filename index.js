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
