const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalc');
const pResult = document.querySelector('#result');

//btn.addEventListener('evento', 'el codigo JS que queramos ejecutar al momento del evento')
//btn.addEventListener('click', btnOnClick);
//form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event) {
// //    console.log(event); para ver el evento
//     event.preventDefault(); //para que la página no se recargue al momento de presionar el boton
//     const sumaInputs = Number(input1.value) + Number(input2.value);
//     pResult.innerText = "El resultado es " + sumaInputs;
// }

btn.addEventListener('click', sumarInputValues);
function sumarInputValues(event) {
        const sumaInputs = Number(input1.value) + Number(input2.value);
        pResult.innerText = "El resultado es " + sumaInputs;
    }
