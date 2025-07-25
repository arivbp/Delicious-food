import {data} from './data.js'

let container = document.getElementById('container')
let fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', ()=>{

    data.forEach(burger => {
        const{id, nombre, precio, img} = burger
        let nuevoE = document.createElement("div");

        nuevoE.innerHTML =
        `
         <div class="card">
                <div class="card-head">
                    <h4>${nombre}</h4>
                    <img src="${img}" alt="">
                </div>
                <div class="card-body">
                    <p>precio:${precio}</p>
                    <button>añadir a carrito</button>
                </div>
            </div>
        
        `
        fragment.appendChild(nuevoE)
    });
    container.appendChild(fragment)
})    