// Wait for DOM to fully load before accessing form
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#calcForm');  // Specific ID selector
  
  if (!form) {
    console.error('Form not found! Check HTML.');
    return;
  }
  
  // Line ~30: Safe onsubmit assignment
  form.onsubmit = function(event) {
    event.preventDefault();  // Prevent page reload
    
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    
    let result;
    switch (operator) {
      case '+': result = num1 + num2; break;
      case '-': result = num1 - num2; break;
      case '*': result = num1 * num2; break;
      case '/': 
        if (num2 === 0) {
          result = 'Error: Division by zero!';
        } else {
          result = num1 / num2;
        }
        break;
      default: result = 'Invalid operator';
    }
    
    // Display result
    document.getElementById('result').textContent = `Result: ${result}`;
    document.getElementById('result').style.display = 'block';
  };
  
  console.log('Calculator initialized successfully!');
});