// Assignment 5: URL Validator

function urlValidator(url) {
    const urlPattern = /^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$/igm;

    const isValid = urlPattern.test(url);

    if (isValid) {
        console.log('It is a Valid URL ✅');
    } else {
        console.log('Not a Valid URL ❎');
    }

    return isValid;
}

const userInputUrl = "https://chat.openai.com/c/eca5560a-8c38-4461-af22-184a7af9061c";
const isValidUrl = urlValidator(userInputUrl);
console.log(isValidUrl);

/* :::Output::: 
 *  
 *  It is a Valid URL ✅
 *  true
 */
