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

export default {capitalize,reverseString,Calculator}