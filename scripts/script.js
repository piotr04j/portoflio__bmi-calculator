window.addEventListener("DOMContentLoaded", function() {
	
        var textInstruction = document.querySelector('.instruction'),
		textInforamtion = document.querySelector('.information'),
		buttonInstruction = document.querySelector('.btn__instruciton'),
		buttonInformation = document.querySelector('.btn__info'),
		buttonCalculate = document.querySelector('.btn__calculate'),
		resultContainer = document.querySelector('.result'),
		result = document.getElementById('bmi-value'),
		resultPicture = document.getElementById('js-result-picture');
		textInforamtion.style.display = 'none';
		textInstruction.style.display = 'none';
	buttonInformation.addEventListener('click', function(){

		if( textInforamtion.style.display === 'none'){
			textInforamtion.style.display = 'block';
			textInstruction.style.display = 'none';
			resultContainer.style.display = 'none';
			buttonInstruction.innerHTML = 'instruction';
			buttonInformation.innerHTML = 'X';
		} else {
			textInforamtion.style.display = 'none';
			textInstruction.style.display = 'none';
			buttonInformation.innerHTML = 'information';
		}
	})

	buttonInstruction.addEventListener('click', function(){

		if( textInstruction.style.display === 'none'){
			textInforamtion.style.display = 'none';
			textInstruction.style.display = 'block';
			resultContainer.style.display = 'none';
			buttonInformation.innerHTML = 'information';
			buttonInstruction.innerHTML = 'X';
		} else {
			textInforamtion.style.display = 'none';
			textInstruction.style.display = 'none';
			buttonInstruction.innerHTML = 'instruction';
		}
	})



	buttonCalculate.addEventListener('click', function(){

	var	kgValue = document.getElementById('js-get-kg').value,			cmValue = document.getElementById('js-get-cm').value;

		if((kgValue > 300 || kgValue < 20)||(cmValue > 250 || cmValue < 50)){
			alert('You can enter value between 20kg to 300kg and from 50cm to 250cm');
		} else {
			var reslutBMI = (kgValue / (cmValue*cmValue)) * 10000;
			showResult();
			chcekGender();
			calculateResult(reslutBMI);
		}

	})

	function showResult() {
		if( !resultContainer.style.display || resultContainer.style.display === 'none' ) {
			resultContainer.style.display = 'block';
			textInforamtion.style.display = 'none';
			textInstruction.style.display = 'none';
			buttonInformation.innerHTML = 'information';
			buttonInstruction.innerHTML = 'instruction';
			buttonCalculate.innerHTML = 'again';

		} else {
			resultContainer.style.display = 'none';
			buttonCalculate.innerHTML = 'calculate';
		}
	}
	function calculateResult(getResult){
			var value = getResult.toFixed(2);

		if( value < 18.5 ){
			result.innerHTML = value + ' your weight is too low!';
			resultPicture.src = 'img/picture-food.png';
		} else if  (  value > 18.5 && value < 25) {
			result.innerHTML = value + ' your weight is ok!';
			resultPicture.src = 'img/picture-ok.png';
		} else {
			result.innerHTML = value + ' your weight is too big!';
			resultPicture.src = 'img/picture-nofood.png';
		}
	}

	function chcekGender(){
		var female = document.getElementById('js-woman'),
			male = document.getElementById('js-man');
		if (female.checked) {
			document.querySelector('.result').style.background = '#e76486';
		} else {
			document.querySelector('.result').style.background = '#3333ff';
		}
	}
}, false);
