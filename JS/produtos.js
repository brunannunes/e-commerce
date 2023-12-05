//imporrtação do catalogo e as funções de carregar produto e handleclik
import { catagolo } from "./dados.js";
import { carregarProdutos, handleClick } from "./funcoes.js";

//função que irá carregar todos os produtos na pagina de produtos
const catalogoProdutos = document.querySelector("#vestidoo")

carregarProdutos(catagolo,catalogoProdutos)
handleClick()





