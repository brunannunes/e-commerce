//imporrtação do catalogo e as funções de carregar produto e handleclik
import { catagolo } from "./dados.js";
import { carregarProdutos, handleClick } from "./funcoes.js";

//filtro que irá selecionar os produtos que estarão na home
const listaVestidosDestaques = catagolo.filter( item => item.categoria === "Vestidos" && item.home == true)
console.log(listaVestidosDestaques)
const listaVestidosNosso = catagolo.filter(produto => produto.categoria === "Nosso" && produto.home == true) 
const localOndeCarregarProdutos = document.querySelector("#produtos_destaques")
const localOndeCarregarNossos = document.querySelector("#nossos_vestidos")
console.log(listaVestidosNosso)

//chamar a função para os produtos aparecerem na home
carregarProdutos(listaVestidosDestaques,localOndeCarregarProdutos)
carregarProdutos(listaVestidosNosso,localOndeCarregarNossos)
handleClick()
