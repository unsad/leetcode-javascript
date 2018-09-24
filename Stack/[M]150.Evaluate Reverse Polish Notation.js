/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
      if (Number.isInteger(+tokens[i])) {
          stack.push(tokens[i]);
      } else {
          let temp2 = stack.pop();
          let temp1 = stack.pop();
          switch(tokens[i])
              {
                  case '+':
                      stack.push(+temp1 + +temp2);
                      break;
                  case '-':
                      stack.push(+temp1 - +temp2);
                      break;
                  case '*':
                      stack.push(+temp1 * +temp2);
                      break;
                  case '/':
                      stack.push(~~(+temp1 / +temp2));
                      break;
              }      
      }
  }
  return +stack[0];
};

/**
 * 用栈记录运算数，当遇到运算符号时弹出两个元素计算再入栈
 */