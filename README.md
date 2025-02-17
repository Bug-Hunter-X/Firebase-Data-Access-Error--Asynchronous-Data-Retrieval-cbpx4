# Firebase Data Access Error: Asynchronous Data Retrieval

This repository demonstrates a common error when working with Firebase and provides a solution.

The problem arises when attempting to access data from a Firebase document snapshot before the asynchronous data retrieval is complete.  This often leads to unexpected `undefined` values or exceptions.

The solution involves ensuring proper asynchronous handling using `.then()` or `async/await` to guarantee data availability before access.

## Bug

The `bug.js` file showcases the problematic code, illustrating how accessing `doc.data().myField` before the data is available causes an error.

## Solution

The `bugSolution.js` file demonstrates the correct approach to handle asynchronous data retrieval and resolve the error.

## How to Reproduce

1. Clone this repository.
2. Install the Firebase JavaScript SDK: `npm install firebase`
3. Configure Firebase (replace placeholders in `bug.js` and `bugSolution.js` with your project's configuration).
4. Run `bug.js` and observe the error.  Then, run `bugSolution.js` and observe the correct behavior.