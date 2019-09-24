var request = new XMLHttpRequest();

/*request.open('GET', 'http://api.timezonedb.com/v2.1/get-time-zone?key=YOUR_API_KEY&format=json&by=position&lat=40.689247&lng=-74.044502', true);

request.onload = function(){
    // Begin accessing JSON data here
   var data = JSON.parse(this.response);
   console.log(data);
}

request.send();*/

document.getElementById('txtFrase').addEventListener('keyup', (event) => {
    let key = event.key;

    let frase = document.getElementById('txtFrase').value;
    let fraseV = '';

    frase = frase.replace(/ /g, "");

    for (let i = frase.length - 1; i >= 0; i--) {
        fraseV += frase[i].toLowerCase();
    }
    console.log(fraseV);

    if (fraseV == frase.toLowerCase()) {
        document.getElementById('esPalindroma').textContent = 'Es palíndroma';
    } else {
        document.getElementById('esPalindroma').textContent = 'No es palíndroma';
    }

    if (!(key == 'CapsLock' || key == 'Shift' || key == 'Backspace')) {

        let letra = document.createElement('p');
        letra.classList.add('bg-success');
        letra.classList.add('text-white');
        letra.classList.add('rounded');
        letra.classList.add('col-3');
        letra.textContent = key;
        document.getElementById('contLetras').appendChild(letra);

    }
});

let btnVerificar = document.getElementById('btnVerificar').addEventListener('click', verificar);

function verificar() {


}

function mostrarLetras() {
    let frase = document.getElementById('txtFrase').value;
    frase = frase.replace(/ /g, "");

    for (let i = 0; i < frase.length; i++) {
        let letra = document.createElement('p');
        letra.classList.add('bg-success');
        letra.classList.add('text-white');
        letra.classList.add('rounded');
        letra.classList.add('col-3');
        letra.textContent = frase[i];
        document.getElementById('contLetras').appendChild(letra);
    }

}