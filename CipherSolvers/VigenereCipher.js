let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


function DecryptVigenere(cipher, key){
    let cipherArray = cipher.split("");
    let keyArray = key.split("");
    let resultArray = [];

    let currentKeyIndex = 0;
    for(let i = 0; i < cipherArray.length; i++){
        if(currentKeyIndex == keyArray.length){
            currentKeyIndex = 0;
        }
        let currentLetterIndex = letters.indexOf(cipherArray[i]);
        let keyIndex = letters.indexOf(keyArray[currentKeyIndex]);
        let newLetterIndex = (currentLetterIndex + letters.length - keyIndex) % letters.length;
        resultArray.push(letters[newLetterIndex]);
        currentKeyIndex++;
    }

    return resultArray;
}

function EncryptVigenere(text, key){
    text = text.replace(/\s+/g, '');
    let textArray = text.split("");
    let keyArray = key.split("");
    let resultArray = [];

    let currentKeyIndex = 0;
    for(let i = 0; i < textArray.length; i++){
        if(currentKeyIndex == keyArray.length){
            currentKeyIndex = 0;
        }
        let currentLetterIndex = letters.indexOf(textArray[i]);
        let keyIndex = letters.indexOf(keyArray[currentKeyIndex]);
        let newLetterIndex = (currentLetterIndex + letters.length + keyIndex) % letters.length;
        resultArray.push(letters[newLetterIndex]);
        currentKeyIndex++;
    }

    return resultArray;
}

console.log(DecryptVigenere('aelkqgvpppdw', 'password'));
console.log(EncryptVigenere('lets use maple', 'password'));