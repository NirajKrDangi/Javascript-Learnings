// Assignment 6: LinkedIn Profile URL Validation

function urlValidator(url) {
    const urlPattern = /^https?:\/\/(www\.)?linkedin\.com\/(?:in\/)?[\da-zA-Z]{5,30}$/;

    const isValid = urlPattern.test(url);

    if (isValid) {
        console.log('It is a Valid LinkedIn URL ✅');
    } else {
        console.log('Not a Valid LinkedIn URL ❎');
    }
    
    return isValid;
}

const isValidLinkedInUrl  = "https://www.linkedin.com/nirajkr88";
const isValidUrl = urlValidator(isValidLinkedInUrl );
console.log(isValidUrl);

/* :::Output::: 
 *  
 *  It is a Valid LinkedIn URL ✅
 *  true
 */