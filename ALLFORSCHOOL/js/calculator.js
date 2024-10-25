let currentInput = '';

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function () {
        const value = this.innerText;

        // Додати обробник для відсотка
        if (value === '%') {
            currentInput = (eval(currentInput) / 100).toString(); // Обчислити відсоток
            document.getElementById('input').value = currentInput;
        } else if (value === 'C') {
            currentInput = '';
            document.getElementById('input').value = currentInput;
        } else if (value === 'Del') {
            currentInput = currentInput.slice(0, -1); // Видалити останній символ
            document.getElementById('input').value = currentInput;
        } else if (value === '=') {
            try {
                const result = eval(currentInput);
                document.getElementById('input').value = result;
                currentInput = result.toString();
            } catch (e) {
                document.getElementById('input').value = 'Помилка';
                currentInput = '';
            }
        } else {
            currentInput += value;
            document.getElementById('input').value = currentInput;
        }
    });
});
