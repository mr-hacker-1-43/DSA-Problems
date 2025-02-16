const reveseStr = (str) => {
    let reveseStr='';
    for (let i = str.length-1; i >=0; i--) {
        reveseStr += str[i];
    }
    return reveseStr;
};
let x='Rajesh';
let y=reveseStr(x);
console.log(x+": Reversed as :"+y);
