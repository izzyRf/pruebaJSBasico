import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Izzy!</h1>
<div>
  i love write code
  <button type="button" onclick="test()">love!</button>
  <label id="text"></label
</div>
`;

const mensaje = (nombre) => "hola soy el " + nombre + "\n";
const division = (numa, numb) => {
  if (numb === 0) return "division entre cero!";
  else return numa / numb;
};

var resultado = division(4, 2);

function test() {
  console.log(mensaje("juan") + "resultado de la division:\n" + resultado);
}

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.results);
    //recorrer con foreach
    data.results.forEach((element) => {
      console.log(element.name);
    });
  });
