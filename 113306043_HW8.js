function calculate() {
	var number1 = parseFloat(document.getElementById('number1').value);
	var number2 = parseFloat(document.getElementById('number2').value);
	var operation = document.getElementById('operation').value;

	var result;

	if (isNaN(number1) || isNaN(number2)) {
		document.getElementById('result').innerText = 'Result = Invalid input';
		return;
	}

	switch (operation) {
		case '+' :
			result = number1 + number2;
			break;
		case '-' :
			result = number1 - number2;
			break;
		case '*' :
			result = number1 * number2;
			break;
		case '/' :
			result = (number2 === 0) ? NaN : number1 / number2;
			break;
		default :
			document.getElementById('result').innerText = 'Result = Invalid input';
	}

	if (isNaN(result)) {
		document.getElementById('result').innerText = 'Result = Cannot divide by zero';
	} else {
		document.getElementById('result').innerText = `Result = ${result.toFixed(2)}`;
	}
}