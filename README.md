# Node.js Server Crashing Under Load

This repository demonstrates a common issue in Node.js applications where the server crashes unexpectedly without providing clear error messages when handling a high volume of requests.  The problem is related to unhandled exceptions within the request handling logic.  The solution shows how to implement proper error handling using try...catch blocks and event listeners to prevent unexpected crashes.

## Setup:

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.
4. Run `node server.js` to start the server.
5. Use a load testing tool (like k6 or Apache Bench) to simulate a high volume of requests to the server.