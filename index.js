const emplyeeArr = [
    {
        id: 1,
        name: 'Денис',
        surname: 'Хрущ',
        salary: 1010, 
        workExperience: 10, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 2,
        name: 'Сергей',
        surname: 'Войлов',
        salary: 1200, 
        workExperience: 12, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 3,
        name: 'Татьяна',
        surname: 'Коваленко',
        salary: 480, 
        workExperience: 3, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 4,
        name: 'Анна',
        surname: 'Кугир',
        salary: 2430, 
        workExperience: 20, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'female'
    },
    {
        id: 5,
        name: 'Татьяна',
        surname: 'Капустник',
        salary: 3150, 
        workExperience: 30, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 6,
        name: 'Станислав',
        surname: 'Щелоков',
        salary: 1730, 
        workExperience: 15, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 7,
        name: 'Денис',
        surname: 'Марченко',
        salary: 5730, 
        workExperience: 45, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'male'
    },
    {
        id: 8,
        name: 'Максим',
        surname: 'Меженский',
        salary: 4190, 
        workExperience: 39, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 9,
        name: 'Антон',
        surname: 'Завадский',
        salary: 790, 
        workExperience: 7, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 10,
        name: 'Инна',
        surname: 'Скакунова',
        salary: 5260, 
        workExperience: 49, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 11,
        name: 'Игорь',
        surname: 'Куштым',
        salary: 300, 
        workExperience: 1, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
];

// Exercise 1

// Створення функції-конструктору зі всіма властивостями об'єкта employee із масиву emplyeeArr.

const Emploee = function(employee) { 
   this.id = employee.id;
   this.name = employee.name;
   this.surname = employee.surname;
   this.salary = employee.salary;
   this.workExperience = employee.workExperience;
   this.isPrivileges = employee.isPrivileges;
   this.gender = employee.gender;
};

// Exercise 2

// Додавання функції-конструктору метод getFullName який повертає повне ім'я починаючи з прізвища у вигляді рядку.

Emploee.prototype.getFullName = function() {
     return `${this.surname} ${this.name}`;
   };

// Exercise 3

// Створення стрілочної функції (arrow function) в якому будуть об'єкти створені функцією-конструктором Emploee.

const createEmployesFromArr = (arr) => { 
   const employeesList = [];

   for(const employee of arr) {
      const employeer = new Emploee(employee);
      employeesList.push(employeer);
   }

   return employeesList;
};

const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);

// console.log(createEmployesFromArr(emplyeeArr)) // для перевірки

// Exercise 4

// Створення стрілочної функції, яка повертає масив зі всіма повними іменами кожного employee, що знаходяться в emplyeeConstructArr.

const getFullNamesFromArr = (arr) => {
     const employeersFullNameList = [];
  
     for(const employee of arr) {
       employeersFullNameList.push(employee.getFullName());
     }
     return employeersFullNameList;
};

// console.log(getFullNamesFromArr(emplyeeConstructArr)) // для перевірки

// Exercise 5

// Створення стрілочної функції, яка повертає середнє значення зарплати всіх employee.

const getMiddleSalary = (arr) => {
   const salaryOfAllemployee = [];
   let count = null;
   for(const employee of arr) {
     salaryOfAllemployee.push(employee.salary);
   }
   for(const employeeSalary of salaryOfAllemployee){
       count += employeeSalary / salaryOfAllemployee.length;
   }
   return Math.floor(count);
};

// console.log(getMiddleSalary(emplyeeConstructArr)) // для перевірки
