

function imc(){
     var nome = document.getElementById('nome').value
     var altura = document.getElementById('altura').value
     var peso = document.getElementById('peso').value
     var resultado = document.getElementById('resultado')
        
    console.log('entrou')
    if (nome !== '' && altura !== '' && peso !== ''){
        
        var valorIMC = (peso /(altura * altura)).toFixed(2)
        
        let Grau = '';
        if (valorIMC < 18.5){
            Grau = 'Abaixo do peso.'
        } else if (valorIMC < 25){
            Grau = 'Peso ideal.';
        } else if (valorIMC < 30){
            Grau = 'Levemente acima do peso.';
        } else if (valorIMC < 35){
            Grau = 'Obesidade Grau I.';
        } else if(valorIMC < 40){
            Grau = ' Obesidade Grau II.';
        } else {
            Grau = 'Obesidade Grau III (mórbida),Procure um médico com urgêcia.';
        }

        resultado.textContent = `Olá ${nome} seu imc é ${valorIMC} e você se encontra:  ${Grau}`
    
    }else {
        resultado.textContent = 'Preencha todos os campos!!!'
    }
       
}
