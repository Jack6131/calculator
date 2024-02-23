import postfixEval from "./math";
export default function infixToPostfix(expression) {
    const precedence = {
        '+': 1,
        '-': 1,
        'x': 2,
        '/': 2
    };

    const output = [];
    const operatorStack = [];
    let numberBuffer = '';

    for (let i = 0; i < expression.length; i++) {
        const token = expression[i];
        console.log(token)
        if (!isNaN(token)) {
            numberBuffer += token;
        } else {
            if (numberBuffer !== '') {
                output.push(numberBuffer);
                numberBuffer = '';
            }
            if (token === '(') {
                operatorStack.push(token);
            } else if (token === ')') {
                while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
                    output.push(operatorStack.pop());
                }
                operatorStack.pop(); // Discard the '('
            } else { // token is an operator
                while (operatorStack.length > 0 && precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]) {
                    output.push(operatorStack.pop());
                }
                operatorStack.push(token);
            }
        }
    }

    if (numberBuffer !== '') {
        output.push(numberBuffer);
    }

    while (operatorStack.length > 0) {
        output.push(operatorStack.pop());
    }

    return postfixEval(output);
}

// Example usage:


//console.log(postfixExpressionArray); // Output: "10 2 3 * + 4 5 / 6 + 7 * -"
