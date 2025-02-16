function xor(x1, x2) {
    return x1 !== x2 ? 1 : 0;
  }
  
  const testCases = [
    { x1: 0, x2: 0 },
    { x1: 0, x2: 1 },
    { x1: 1, x2: 0 },
    { x1: 1, x2: 1 },
  ];
  
  console.log("x1\tx2\ty");
  testCases.forEach(testCase => {
    const { x1, x2 } = testCase;
    const y = xor(x1, x2);
    console.log(`${x1}\t${x2}\t${y}`);
  });
  