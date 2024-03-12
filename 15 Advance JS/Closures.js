// Scope 

let score = 4;
function one(){
    let score = 0;
    console.log(score);
}

one()
console.log(score);


/*++++++++++++++++++++++++++++++++++++++++++++++++++*/

function outerFunc(){
    let outerVar = "I am at scope level 1"
    function innerFunc(){
        let innerVar = "I am at scope level 2"
        console.log(outerVar);
    }
    console.log(innerVar);
    innerFunc()
}
outerFunc()

// :::Output:::
// I am at scope level 1 


/*++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//  Lexical Scoping: Inner function accessing outer function properties

const myGlobalValue = 0;
function func(){
    const val1 = 1;
    console.log(myGlobalValue);

    function innerFunc(){
        const val2 = 2
        console.log(val2, val1, myGlobalValue);
        
        function innerofInnerfunc(){
            const val3 = 3
            console.log(val3, val2, val1, myGlobalValue);
        }
        innerofInnerfunc()
    }
    innerFunc()
}
func()



/*++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// Closure: It is an inner function that has access to the outer function's variables and parameters

function superFunc(){
    let outerValue = 'I am outer'
    function minorFunc(){
        console.log(outerValue);
    }
    minorFunc()
}
superFunc()


/*++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// Closure Real World Example: ek inner function ko ek outer function ke andar define karte hain, tab inner function ke paas access hota hai us outer function ke variables aur parameters ka, aur ye access outer function ke execution khatam ho jane ke baad bhi bana rahta hai.  

const errorMessage = 'File not found'
setTimeout(function callback(){
    console.log(errorMessage);
}, 1000)

let pageCount = 0
const items = [2, 4, 5, 6, 7 ,8]
items.forEach(function iterator(num){
    pageCount++
})

