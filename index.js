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

function roomAndFloorNumber(roomNumber){
    const roomsOnFloor = 3;
    const floors = 9;
    let floor = 0;
    const roomOnPorch = roomsOnFloor * floors;
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
