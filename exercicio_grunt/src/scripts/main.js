document.addEventListener('DOMcontentloaded', function(){
    document.getElementById('formulario-numeroMaximo').addEventListener('submit',function(evento){
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parserInt(numeroMaximo);

        let numeroA = Math.random () * numeroMaximo;
        numeroA = Math.floor(numeroA + 1);

        document.getElementById('resultadoSorteio').innerText = numeroA; 
        document.querySelector('.resultado').style.display = 'block';
    })
})