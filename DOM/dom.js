let divUnico = document.getElementById("div-unico");
// let divsComun = document.getElementsByClassName("div-comun");

//como selector css (1. obtener un unico elemento - la primera coincidencia)
//como selector css (2. obtener una collection elementos - todos)

let multiples = document.querySelectorAll(".div-comun");

for (let i = 0; i < multiples.length; i++) {
  multiples[i].innerHTML = "hi";
}

divUnico.innerHTML = `
<ul>
<li>elemento 1</li>
<li>elemento 2</li>
<li>elemento 3</li>
</ul>
`;

//crear elementos con JavaScript

// let div = document.createElement("div");

// div.innerHTML = "hola";

// div.innerHTML = "Mundo";

let ul = document.createElement("ul");

ul.id = "lista-unica";
ul.className = "lista-desordenada";

ul.id = "nuevo-id";
ul.classList.add("nueva-clase");
ul.classList.remove("lista-desordenada");

//OPERARA CON LOS ATRIBUTOS DE CADA ELEMENTO
//crear nuevos atributos
ul.setAttribute("data", "usuarios");
//actualizar
ul.setAttribute("data", "nuevo-valor-atributo-data");
//obtener el valor del atributo por su nombre
console.log(ul.getAttribute("data"));
//eliminar un atributo
ul.removeAttribute("data");

for (let i = 1; i <= 10; i++) {
  let li = document.createElement("li");
  let textoNodo = document.createTextNode("Elemento " + i);
  li.appendChild(textoNodo);
  ul.appendChild(li);
}

document.body.appendChild(ul);

// ul.style.display = "flex";
// ul.style.flexDirection = "column";
// ul.style.gap = "20px";

//ELIMINAR EL NODO UL // el elemento desde qeu llamamos sea su padre
// document.body.removeChild(ul);
