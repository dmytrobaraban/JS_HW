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
