// Copyright (c) 2026 goclaw test
const VERSION = "0.1.0";

function Add(a, b) { return a + b; }
function Subtract(a, b) { return a - b; }
function Multiply(a, b) { return a * b; }

function Divide(a, b) {
    if (b === 0) {
        return { error: "division by zero" };
    }
    return a / b;
}

module.exports = { Add, Subtract, Multiply, Divide };
