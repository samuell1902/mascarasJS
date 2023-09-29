let input = document.querySelector("#cpf")
//querySelector: tag, id, classse
//para id e classe, utilizar a mesma notação usada pelo css

// () função anônima
// => arrow functon
// funcion nome() pronto
input.addEventListener("keypress", () => {

let inputlength = input.value.length

    if (inputlength== 3 || inputlength== 7 ) {
        input.value += "."
    }

    else if (inputlength== 11) {
        input.value += "-"
    }
})

///////////////////////////////////////////////////////////////
//cnpj

let inputCnpj=document.querySelector("#cnpj")
inputCnpj.addEventListener("keypress" , () => {

let cnpjlength = inputCnpj.value.length
if (cnpjlength== 2 || cnpjlength== 6 )
{
    inputCnpj.value+= "."
} 
if (cnpjlength==10)
{
    inputCnpj.value+= "/"
}
if (cnpjlength==15)
{
    inputCnpj.value+= "-"
}
    
})


    