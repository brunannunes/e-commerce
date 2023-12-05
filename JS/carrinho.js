
let carrinhoCompras = JSON.parse(localStorage.getItem('carrinho'))


let pedidos = JSON.parse(localStorage.getItem("pedidos"))
//console.log(carrinhoCompras)
if(pedidos == null){
    pedidos = []
}
// if(carrinhoCompras == null){
//     carrinhoCompras = []
// }

let cartList = document.querySelector(".shop")
carrinhoCompras.forEach(produto => {
    let html = `<div class="box" id="${produto.id}">

    <img src="${produto.imagemProduto}" alt="">

    <div class="content">

        <h3>${produto.nomeProduto}</h3>

        <h4>Preço: R$ ${produto.precoProduto}</h4>

        <p class="unit">Quantidade: <input value="${produto.quantidade}"></p>

       

        <i class="fa fa-trash">  Remover</i>

            

       

    </div>

</div>`

        cartList.innerHTML += html
});

let delBtn = document.querySelectorAll(".fa.fa-trash")
console.log(delBtn)
delBtn.forEach(botao => botao.addEventListener("click", (event) => {
    let item = event.target.parentElement.parentElement
    cartList.removeChild(item)
    let index = carrinhoCompras.findIndex(produto => produto.id == item.id)
    carrinhoCompras.splice(index,1)
    localStorage.setItem('carrinho', JSON.stringify(carrinhoCompras))
}))

let finalizar = document.querySelector(".input-button")
finalizar.addEventListener('click', ()=>{

    let endereco = {
        endereco:document.querySelector("input#adress").value,
        numero:document.querySelector("input#number").value,
        CEP:document.querySelector("input#CEP").value,
        complemento:document.querySelector("input#Complemento").value,
        bairro:document.querySelector("input#bairro").value,
        cidade:document.querySelector("input#Cidade").value,
        pais:document.querySelector("input#País").value,
        telefone:document.querySelector("input#phone").value,
    }
    
    let codPedido = (pedidos.length) + 1
    if(pedidos == null || pedidos == 0){
        codPedido = 1
    }

    let pedido = {
        itens: carrinhoCompras,
        endereco: endereco,
        id: codPedido
    }

    pedidos.push(pedido)
    localStorage.setItem('pedidos',JSON.stringify(pedidos))
    alert("pedido finalizado")
    localStorage.removeItem("carrinho")
    localStorage.removeItem("prodID")
    location.reload()
})