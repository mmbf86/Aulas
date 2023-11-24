function main() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
  
    const imc = peso / (altura * altura).toFixed(2);
  
    const resultado = document.getElementById('resultado');
    resultado.textContent = `O seu IMC é ${imc.toFixed(2)}. 
    A classificação do seu IMC é: `;
  
    if (imc < 18.5) {
      resultado.textContent += 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
      resultado.textContent += 'Normal';
    } else if (imc > 24.9 && imc <= 29.9) {
      resultado.textContent += 'Acima do peso';
    } else if (imc > 29.9 && imc <= 34.9) {
      resultado.textContent += 'Obesidade grau I';
    } else if (imc > 34.9 && imc <= 39.9) {
      resultado.textContent += 'Obesidade grau II';
    } else {
      resultado.textContent += 'Obesidade grau III';
    }
  }