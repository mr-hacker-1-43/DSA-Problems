const palindromeStr = (str) => {
  //   let x = reveseStr(str);
    let reveseStr='';
    for (let i = str.length-1; i >=0; i--) {
        reveseStr += str[i];
    }
    // console.log(reveseStr);
  if (reveseStr === str) {
    return true;
  } else {
    return false;
  }
};
let palidStr = palindromeStr("rajesejar");
console.log(palidStr);
