// Break -->

// for(i = 1; i < 20; i++){
//     if(i===5){
//         break;
//     }
//     console.log(i);
// }

// logs: 1 2 3 4


// Nested if-Else -->
// outer: for(let i=1; i<3; i++){
//     inner: for(let j=1; j<=3; j++){
//         if(i+j == 3){
//             continue outer;
//         }
//         console.log(`Outer: ${i},  Inner: ${j}`);
//     }
// }



// Continue -->

// for(i = 1; i < 10; i++){
//     if(i%3==0){
//         continue;
//     }
//     console.log(i);
// } 
//  logs: 1 2 4 5 7 8


// Comma operator -->

let x = ((1 + 2), (3 * 4));

console.log(x); // Output: -1
