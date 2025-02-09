const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Helper function to check for prime numbers
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Helper function to check for perfect numbers
function isPerfect(n) {
  if (n < 2) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;
      if (i !== n / i) {
        sum += n / i;
      }
    }
  }
  return sum === n;
}

// Helper function to check if a number is an Armstrong number
function isArmstrong(n) {
  const str = n.toString();
  const numDigits = str.length;
  const sum = str.split('').reduce((acc, digit) => acc + Math.pow(Number(digit), numDigits), 0);
  return sum === n;
}

// Helper function to compute the sum of digits
function digitSum(n) {
  return n.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
}

// Determine the properties array based on Armstrong and parity
function getProperties(n) {
  const properties = [];
  if (isArmstrong(n)) {
    properties.push("armstrong");
  }
  // Always add parity (odd/even)
  properties.push(n % 2 === 0 ? "even" : "odd");
  return properties;
}

// Asynchronously fetch a fun fact from the Numbers API using the "math" type
async function fetchFunFact(n) {
  try {
    const response = await fetch(`http://numbersapi.com/${n}/math?json`);
    if (!response.ok) {
      throw new Error("Failed to fetch fun fact");
    }
    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error(error);
    return "No fun fact available.";
  }
}

// API endpoint for classifying numbers
app.get("/api/classify-number", async (req, res) => {
  const numberParam = req.query.number;
  const num = Number(numberParam);

  // Validate input: it must be provided and an integer
  if (!numberParam || isNaN(num) || !Number.isInteger(num)) {
    return res.status(400).json({
      number: numberParam,
      error: true
    });
  }

  // Fetch fun fact asynchronously
  const fun_fact = await fetchFunFact(num);

  // Construct the response object
  const responseObj = {
    number: num,
    is_prime: isPrime(num),
    is_perfect: isPerfect(num),
    properties: getProperties(num),
    digit_sum: digitSum(num),
    fun_fact: fun_fact
  };

  res.status(200).json(responseObj);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
