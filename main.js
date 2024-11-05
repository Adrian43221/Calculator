let currentInput = '' // Создаем переменную для текущего значения
let previousInput = '' // Создаем переменную для предыдущего значения
let operator = '' // Оператор

function updateDisplay() {
	// Код для обновления дисплея
}

const display = document.querySelector('.display') // Получаем элемент дисплея
const buttons = document.querySelectorAll('.button') // Получаем все кнопки

// Добавляем обработчики событий для каждой кнопки
buttons.forEach(button => {
	button.addEventListener('click', () => {
		const value = button.textContent

		// Добавляем логику обработки нажатий
		if (value >= '0' && value <= '9') {
			currentInput += value
			updateDisplay();
			// Логика для цифр
		} else if (value === 'C') {
			// Логика для кнопки "C"
			currentInput = '';
			previousInput = '';
			operator = '';
			updateDisplay();
		} else if (value === '=') {
			// Логика для кнопки "="
			let result;
			const num1 = parseFloat(previousInput);
			const num2 = parseFloat(currentInput);

			if (operator === '+') {
				result = num1 + num2
			} else if (operator === '-') {
				result = num1 - num2
			} else if (operator === '*') {
				result = num1 * num2
			} else if (operator === '/') {
				result = num1 / num2
			}

			currentInput = result.toString();
			operator = '';
			previousInput = '';
			updateDisplay();
		} else {
			// Логика для операторов
			previousInput = currentInput;
			operator = value;
			currentInput = '';
		}
	});
}); 

function updateDisplay() {
	display.textContent = currentInput   
}