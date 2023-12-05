//imporrtação do catalogo e as funções de carregar produto e handleclik
import { catagolo, } from "./dados.js";
import { findProduct, carregaProduto, addItemCarrinho} from "./funcoes.js";

//função que ira adionar o produto na home
let carrinhoCompras = JSON.parse(localStorage.getItem('carrinho'))

//criação de uma lista para armazenar os produtos que foram adicionados no carrinho
console.log(carrinhoCompras)
if(carrinhoCompras == null){
    carrinhoCompras = []
}

//função que irá adicionar o produto individual na pagina
let id = localStorage.getItem("prodID")
let item = findProduct(catagolo, id)

carregaProduto(item)
addItemCarrinho(item, carrinhoCompras)