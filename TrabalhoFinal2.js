function calcular() {
    let idade = document.querySelector("#idade").value;
    let altura = document.querySelector("#altura").value;
    let peso = document.querySelector("#peso").value;
  
    let imc = peso / (altura * altura / 10000);
  
    let fatorComorbidade = obterFatorComorbidade(imc);
  
    let planoBasicoA = 100 + (idade * 10 * (imc / 10));
    let planoStandardA = (150 + (idade * 15)) * (imc / 10);
    let planoPremiumA = (200 - (imc * 10) + (idade * 20)) * (imc / 10);
  
    let planoBasicoB = 100 + (fatorComorbidade * 10 * (imc / 10));
    let planoStandardB = (150 + (fatorComorbidade * 15)) * (imc / 10);
    let planoPremiumB = (200 - (imc * 10) + (fatorComorbidade * 20)) * (imc / 10);
  
    
    document.querySelector("#planoBasicoA").textContent = planoBasicoA;
    document.querySelector("#planoStandardA").textContent = planoStandardA;
    document.querySelector("#planoPremiumA").textContent = planoPremiumA;
  
    document.querySelector("#planoBasicoB").textContent = planoBasicoB;
    document.querySelector("#planoStandardB").textContent = planoStandardB;
    document.querySelector("#planoPremiumB").textContent = planoPremiumB;
  
    
    let planoMaisVantjoso = obterPlanoMaisVantjoso(planoBasicoA, planoStandardA, planoPremiumA, planoBasicoB, planoStandardB, planoPremiumB);
  
    
    document.querySelector("#planoMaisVantjoso").textContent = planoMaisVantjoso;
  }
  
  function obterFatorComorbidade(imc) {
    if (imc < 18.5) {
      return 10;
    } else if (imc >= 18.5 && imc <= 24.9) {
      return 1;
    } else if (imc >= 25 && imc <= 29.9) {
      return 6;
    } else if (imc >= 30 && imc <= 34.9) {
      return 10;
    } else if (imc >= 35 && imc <= 39.9) {
      return 20;
    } else {
      return 30;
    }
  }
  
  function obterPlanoMaisVantjoso(planoBasicoA, planoStandardA, planoPremiumA, planoBasicoB, planoStandardB, planoPremiumB) {
    let planos = [planoBasicoA, planoStandardA, planoPremiumA, planoBasicoB, planoStandardB, planoPremiumB];
  
    let planoMaisVantjoso = planos[0];
    for (let i = 1; i < planos.length; i++) {
      if (planos[i] < planoMaisVantjoso) {
        planoMaisVantjoso = planos[i];
      }
    }
  
    return planoMaisVantjoso;
  }