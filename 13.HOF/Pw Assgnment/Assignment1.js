/** Reverse String */ 
console.log("Wait 2 Second....");

var x = setTimeout(function(){
    console.log(reverseFun('Niraj Kumar Dangi'));
}, 2000);

var reverseFun = function(output){
    var splitArray = output.split('').reverse().join('');
    return splitArray; 
}

/* :::Output::: 
 *  
 *  Wait 2 Second....
 *  ignaD ramuK jariN  
 */ 
