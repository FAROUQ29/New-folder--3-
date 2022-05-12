// SWITCH
// let score = 100

//   switch (true){
//    case (score >= 70):
//       alert('A');
//    break;
//    case (score >= 60):
//        alert ('B');
//    break;
//    case (score >= 50):
//       alert('C');
//    break;
//    case (score >= 45):
//       alert('D');
//    break;
//    case (score >= 40):
//       alert ('E');
//    break;
//       default:
//       alert ('F');
//    break;

//   }

//   SEQUENTIONAL   
  
// for (let i = 0; i < 10; i += 1) {
//    alert(i);
// }


// PRIME NUMBERS
// for (let i = 100; i <= 300; i++){
//    let zainab = 0;
//    for (let j = 2; j < i; j++)
// {
// if (i % j ==0){
//    zainab = 1
//    break;
//   }
// }
// if (zainab == 0){
//    console.log(i)
//  }
// }

// NUMBERS FROM 1-100
// for (i = 1; i < 100; i++) {
//    console.log(i);
// }

// EVEN NUMBERS WITHIN 2-200
// for (let i = 2; i <= 200; i++) {
//    if (i % 2 ===0)
//      console.log(i)
// }
function isEven(num){
   if (num % 2 === 0){
      return true;
   } else {
      return false;
   }
}

console.log(isEven(81))