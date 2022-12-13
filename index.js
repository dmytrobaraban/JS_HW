// 1.

/*

for (let i = 1; i <= 10; i++){
  if (i % 2 === 0 && i % 3 !== 0 ){
    console.log('Fiz');
  } else if (i % 3 === 0){
    console.log('FizBuz');
  } else {
    console.log('Buz');
  }
}

*/

// 2.

/*

const fact = 7
let result = 1;
for (let i = 1; i <= fact; i++){
  result *= i
}

console.log(res)

*/

// 3.

/*

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
const reamsOfPaperPerPeriod = consumptionPerWeek * weeksAmount / sheetsInReamPaper;
const ifResultNotInteger = Number( Math.trunc(reamsOfPaperPerPeriod) + 1);

if (Number.isInteger(reamsOfPaperPerPeriod) === false){
  console.log(ifResultNotInteger);
} else {
  console.log(reamsOfPaperPerPeriod);
}

*/

// 4.


/*

// Варіант 1.

function roomAndFloorNumber(roomNumber){
    const roomsOnFloor = 3;
    const floors = 9;
    const roomOnPorch = roomsOnFloor * floors; // вираховуємо кількість квартир на підїзд
    let countOfPorch = 0;
    let countOfFloor = 0;
    for (let i = 1; i <= roomNumber; i++){ // вичислюємо підїзд
      if (i % roomOnPorch === 0){
        countOfPorch += 1
      }
    }
    const roomsRest = roomNumber - (countOfPorch * roomOnPorch) // вичислюємо залишок квартир для точнішого вирахування підїзду 
    if (roomsRest >= 1 && roomsRest <= 3){
      countOfPorch += 1;
      countOfFloor = 1;
    } else if (roomsRest >= 4 && roomsRest <= 6) {
      countOfPorch += 1;
      countOfFloor = 2;
    } else if  (roomsRest >= 7 && roomsRest <= 9) {
      countOfPorch += 1;
      countOfFloor = 3;
    } else if  (roomsRest >= 10 && roomsRest <= 12) {
      countOfPorch += 1;
      countOfFloor = 4;
    } else if  (roomsRest >= 11 && roomsRest <= 15) {
      countOfPorch += 1;
      countOfFloor = 5;
    } else if  (roomsRest >= 16 && roomsRest <= 18) {
      countOfPorch += 1;
      countOfFloor = 6;
    } else if  (roomsRest >= 19 && roomsRest <= 21) {
      countOfPorch += 1;
      countOfFloor = 7;
    } else if  (roomsRest >= 20 && roomsRest <= 24) {
      countOfPorch += 1;
      countOfFloor = 8;
    } else if  (roomsRest >= 25 && roomsRest <= 27) {
      countOfPorch += 1;
      countOfFloor = 9;
    } else if (roomsRest === 0){
      countOfFloor = 9;
    }
    const porch = countOfPorch;
    const floor = countOfFloor;
    console.log(`The room in ${porch} porch and on ${floor} floor.`)
  }

roomAndFloorNumber(456)

*/

/*

// Варіант 2.

function roomAndFloorNumber(roomNumber){
    const roomsOnFloor = 3;
    const floors = 9;
    const roomOnPorch = roomsOnFloor * floors; // вираховуємо кількість квартир на підїзд
    let countOfPorch = 0;
    let countOfFloor = 0;
    for (let i = 1; i <= roomNumber; i++){ // вичислюємо підїзд
      if (i % roomOnPorch === 0){
        countOfPorch += 1
      }
    }
    let roomsRest = roomNumber - (countOfPorch * roomOnPorch) // вичислюємо залишок квартир для точнішого вирахування підїзду 
    if (roomsRest >= 1) {
      countOfPorch += 1;
      const floorOfRoom = roomsRest / roomsOnFloor;
      if (Number.isInteger(floorOfRoom)){
       countOfFloor = floorOfRoom;   
      } else {
       countOfFloor = Number( Math.trunc(flooOfRoom) + 1);
      }
    } else if (roomsRest === 0) {
      countOfFloor = 9;
    } 
    const porch = countOfPorch;
    const floor = countOfFloor;
    console.log(`The room in ${porch} porch and on ${floor} floor.`)
  }

roomAndFloorNumber(333)

*/

/*

// Варіант 3.

function roomAndFloorNumber(roomNumber){
    const roomsOnFloor = 3;
    const floors = 9;
    let floor = 0;
    const roomOnPorch = roomsOnFloor * floors; // вираховуємо кількість квартир на підїзд
    let porch = roomNumber / roomOnPorch;
    if (!Number.isInteger(porch)){
      floor = ( roomNumber - ( Number( Math.trunc(porch) ) * roomOnPorch ) ) / roomsOnFloor;
    } if (!Number.isInteger(floor)) {
      floor = Number( Math.trunc(floor) ) + 1;
    }
    if (!Number.isInteger(porch)){
      porch = Number( Math.trunc(porch) + 1)
    }
    console.log(`The room in ${porch} porch and on ${floor} floor.`)
  }

roomAndFloorNumber(444)

*/

// 5.
/*

function buildPiramide(mediana){
  for (let i = 0; i < mediana; i++){
    let dash = '-'.repeat(mediana - i - 1);
    let thorp = '#'.repeat(i * 2 + 1);
    console.log(`${dash}${thorp}${dash}`)
  }
}

buildPiramide(6)

*/