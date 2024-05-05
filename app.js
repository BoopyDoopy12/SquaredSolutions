const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#EA783A';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


  let operator = '';
  let operatorSymbol = '';
  let spanAnswer = document.getElementById('answer');
  const operators = document.querySelectorAll('.operators');
  const var1 = document.getElementById('var1');
  const var2 = document.getElementById('var2');
  const enter = document.getElementById('enter');
  const operatorElement = document.getElementById('operator');
  let spanResult = document.getElementById('spanResult');

  operators.forEach((button) => {
    button.addEventListener('click', () => {
      operator = button.textContent;
      switch (operator) {
        case 'Add':
          operatorElement.textContent = '+';
          operatorSymbol = '+';
          break;
        case 'Subtract':
          operatorElement.textContent = '-';
          operatorSymbol = '-';
          break;
        case 'Multiply':
          operatorElement.textContent = '*';
          operatorSymbol = '*';
          break;
        case 'Divide':
          operatorElement.textContent = '/';
          operatorSymbol = '/';
          break;
      }
    });
  });

  enter.addEventListener('click', () => {
    if (!operator) {
      alert('Please press one of the operations!');
    }
		else {
			let num1 = Number(var1.value);
			let num2 = Number(var2.value);
			let result;
			switch (operator) {
				case 'Add':
					result = num1 + num2;
					break;
				case 'Subtract':
					result = num1 - num2;
					break;
				case 'Multiply':
					result = num1 * num2;
					break;
				case 'Divide':
					result = num1 / num2;
					break;
			}
			spanAnswer.textContent = `The answer of ${num1} ${operatorSymbol} ${num2} is`;
			spanResult.textContent = `${result}`;
		}});