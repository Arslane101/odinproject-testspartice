//Capitalize function
function capitalize(text){
    return text[0].toUpperCase() + text.slice(1)
}

//reverse 
function reverseString(text){
    let reverse = []
    for (let i=0;i<text.length;i++){
        reverse[i]= text[text.length-i-1]
    }
    console.log(reverse)
    return reverse.join("")
}
//Calculator
const Calculator = (() => {
    let result;
    function add(a,b){
        result = a+b
        return result
    }
    function substract(a,b){
        result = a-b
        return result
    }
    function multiply(a,b){
        result = a*b
        return result
    }
    function divide(a,b){
        result = a/b
        return result
    }
    return {add,divide,multiply,substract}

})()

//cipher
function caesarCipher(text,factor){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

    let result = []
    for (let i=0;i<text.length;i++){
      if(alphabet.indexOf(text[i]) !== -1 ){
        if(alphabet.indexOf(text[i])+factor >= alphabet.length) result[i]= alphabet[alphabet.indexOf(text[i])+factor-alphabet.length]
        else result[i]= alphabet[alphabet.indexOf(text[i])+factor]
      } 
      else if(uppercase.indexOf(text[i]) !== -1 ){
        if(uppercase.indexOf(text[i])+factor >= uppercase.length) result[i]= uppercase[uppercase.indexOf(text[i])+factor-uppercase.length]
        else result[i]= uppercase[uppercase.indexOf(text[i])+factor]
      }
      else result[i] = text[i]
    }
    console.log(result)
    return result.join("")
}

const AnalyzeArray = (array) => {
  const sortedArr = array.sort((a, b) => a - b);
  const average = array.reduce((acc, curr) => acc + curr, 0) / array.length;
  const length = array.length;
  const min = sortedArr[0];
  const max = sortedArr[sortedArr.length -1];

  const result = { average, min, max, length };
  return result;
};
export default {capitalize,reverseString,Calculator,caesarCipher,AnalyzeArray}

