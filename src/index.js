import "./styles.css";

const mensaje = (nombre) => "hola soy el " + nombre + "\n";
const division = (numa, numb) => {
  if (numb === 0) return "division entre cero!";
  else return numa / numb;
};

var resultado = division(4, 2);

// function test() {
//   console.log(mensaje("juan") + "resultado de la division:\n" + resultado);
// }

var pokemones;
var testText = "renderizando en DOM";

//fetch
fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    pokemones = data.results;
    console.log(pokemones);

    let namesPokes = [];
    pokemones.forEach((element) => {
      namesPokes.push(element.name);
    });
    console.log(namesPokes);
  })
  .catch((error) => console.log(error));

//asing await
const getPokemons = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();

    const arrayNames = data.results.map((pokes) => pokes.url);
    //console.log(arrayNames);

    // filtrar a bulbas con map
    const bulbas = data.results.filter((pokes) => pokes.name !== "venusaur");
    console.log(bulbas);
  } catch (error) {}
};

getPokemons();

document.getElementById("app").innerHTML = `
<h1>Hello Izzy!</h1>
<div>
  i love write code
  <button type="button">love!</button>
  <label id="text"> ${testText} </label
</div>
`;
