function isAlpahbet(str){
    return /^[A-Za-z]+$/.test(str);
}

console.log(isAlpahbet("Prince"))