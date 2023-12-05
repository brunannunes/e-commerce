
//Função para carregar todos os produtos utliziando a estrutura do HTML
export function carregarProdutos(listaProdutos,localHTML){
    listaProdutos.forEach(produto => {
        let html = ` <div class="box-container" id="${produto.id}">
       
                 <div class="box" id="${produto.id}">
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                    <a href="./Produto1.html">
                    <img src="${produto.imagemProduto}" id="${produto.id}" alt="">
                    </a>
                    <h3>${produto.nomeProduto}</h3>
                    <span>$${produto.precoProduto}</span>
                    <a href="./Produto1.html" class="btn">
                    <button class="comprar" id="${produto.id}">adicionar</button>
                    </a>
                 </div>
               `
        localHTML.innerHTML += html
        
    });  
}

//Função para carregar o produto individualmente
export function carregaProduto(item){
    const gridProduto = document.querySelector("#individual")
    let html = 
    `<div class="image">
    
    <img src="${item.imagemProduto}" alt="">
</div>
<div class="texto">
    <h3>${item.nomeProduto}</h3>
    <div class="preco">
        <p>${item.precoProduto}</p>
    </div> 
    <div class="qtd_input">
    <input type="number" id="qtd" value=1>
    </div> 
    <div class="tamanho">
        <p>Tamanhos</p>
        <button><a href="#" class="btn">XS</a></button>
        <button><a href="#" class="btn">S</a></button>
        <button><a href="#" class="btn">M</Main></a></button>
        <button><a href="#" class="btn">G</a></button>
        <button><a href="#" class="btn">GG</a></button>
    </div>
    <div class="adicionar-btn">
        <a href="./carrinho.html">
        <button class="comprar"><a href="#" class="btn">adicionar</a></button>
    </div>
</div>>`
gridProduto.innerHTML += html
}

//função para selecionar a div onde se encontra o html do produto
export function handleClick(){
    let produtos = document.querySelectorAll(".box")
    console.log(produtos)

    //para cada click um evento ira acontecer(a ID do produto sera selecionada)
    produtos.forEach(produto => produto.addEventListener('click', (evento) => {
       
        let idProduto = evento.target.id
       localStorage.setItem('prodID',idProduto)
        console.log(idProduto)
     
    }      
      ))}

      //encontrara o produto pela sua id
export function findProduct(produtos, prodID){
            let produto = produtos.find(prod => prod.id== prodID )
            return produto 
        }


//função para adiconar o produto no carrinho
export function addItemCarrinho (item, carrinhoCompras){
            let botaoComprar = document.querySelector('button.comprar')
            console.log(botaoComprar)
            botaoComprar.addEventListener('click', () => {
                let quantidade = parseInt(document.querySelector('input#qtd').value)
                let newItem = {...item,quantidade}
                //item.quantidade = quantidade
                alert("item adicionado ao carrinho")
                carrinhoCompras.push(newItem)
                localStorage.setItem('carrinho',JSON.stringify(carrinhoCompras))
        })
        }

//função para calcular o preço total
export function calcTotal(carrinhoCompras){
    let total = 0;
 
    const totalCarrinho = document.querySelector('.totalCarrinho')
 
    totalCarrinho.innerHTML = '';
 
    console.log(totalCarrinho)
 
    carrinhoCompras.forEach(item =>{
        total += (item.precoProduto * item.qtd);
    })
 
    let totCarrinho = `<p><b>R$${total.toFixed(2)}</b></p>`;
 
    totalCarrinho.innerHTML += totCarrinho;
 
}

  
