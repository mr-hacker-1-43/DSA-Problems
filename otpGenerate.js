const otpGenerate = (digit) => {
  let otp = "";
  while (otp.length < digit) {
    otp += Math.floor(Math.random() * 10); // Generates each digit (0-9)
  }
  return otp; 
};

// Generate OTP every second and stop after 10 seconds
let intervalID = setInterval(() => {
  console.log(otpGenerate(6)); 
}, 1000);

// Stop interval after 10 seconds
setTimeout(() => {
  clearInterval(intervalID);
  console.log("OTP generation stopped!");
}, 10000);
