//slider

console.log('corinthians')

let count = 1; 
console.log(document.getElementById("radio1")) 
// .checked = true; 

setInterval( function() {
    nextImage();
}, 2000)

//função para passar para a proxima imagem

function nextImage() {
    count++; 

    //Faz voltar para a primeira imagem
    if(count > 3) {
        count = 1; 
    }

    document.getElementById("radio"+count).checked = true;

}
