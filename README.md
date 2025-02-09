# Stage 1 Backend - Number Classification API

## Project Description

This project is a public API developed for the HNG12 Stage 1 Backend task. It accepts a number via a GET request and returns several mathematical properties of that number along with a fun fact. The API determines whether the number is prime, perfect, or an Armstrong number, calculates the sum of its digits, and indicates its parity (odd/even).

## Features

- **Mathematical Classification:**  
  - Determines if the number is **prime**.
  - Checks if the number is a **perfect** number.
  - Validates if the number is an **Armstrong** number.
  - Identifies the **parity** (odd or even).

- **Digit Sum Calculation:**  
  - Computes the sum of the digits of the number.

- **Fun Fact Retrieval:**  
  - Fetches an interesting fun fact from the [Numbers API](http://numbersapi.com) using the "math" category.

- **Error Handling:**  
  - Returns a `400 Bad Request` when the input is not a valid integer.

- **CORS Enabled:**  
  - Allows cross-origin requests.

## Technology Stack

- **Programming Language:** JavaScript (Node.js)
- **Framework:** Express.js
- **Middleware:** cors (for handling CORS)
- **External API:** [Numbers API](http://numbersapi.com)

## Installation and Setup Instructions

### Prerequisites
- Node.js (v12 or higher)
- npm (Node Package Manager)

### Steps
1. **Clone the Repository:**
    ```bash
        git clone https://github.com/Musab1258/hng12-backend-tasks.git
    ```

2. **Navigate to the Project Directory**:
    ```bash
        cd 
    ```

3. **Install Dependencies**:
    ```bash
        npm install
    ```

4. **Run the Server**:
    ```bash
        npm start
    ```

    The API will start on http://localhost:3000.

## API Documentation

### Endpoint

- URL: GET /api/classify-number
- Query Parameter:
    - number: an integer to be classified

### Request Example
    ```bash
        GET http://localhost:3000/api/classify-number?number=371
    ```

### Successful Response (HTTP 200)

    ```json
        {
            "number": 371,
            "is_prime": false,
            "is_perfect": false,
            "properties": ["armstrong", "odd"],
            "digit_sum": 11,
            "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
        }
    ```

### Error Response (HTTP 400)

        ```json
            {
                "number": "alphabet",
                "error": true
            }
        ```

### Deployment

The API can be accessed publicly at this endpoint. 

    ```perl
        https://hng12-backend-tasks-stage1.onrender.com/api/classify-number?number=371
    ```