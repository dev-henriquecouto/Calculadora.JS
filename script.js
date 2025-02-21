//funçoes p/ cada operação 
//soma
function soma(numero1, numero2){ 
    return numero1 + numero2 
}
//subtração 
function subtracao(numero1, numero2){
    return numero1 - numero2
}
//divisão 
function divisao(numero1, numero2){
    return numero1 / numero2
}
//multiplicação 
function multplicacao(numero1, numero2){
    return numero1 * numero2
}

//var => btn resultado/ btn clear 
const btnresultado = document.getElementById("btnresultado")
const btnclear = document.getElementById("btnclear")

//var => btn operações 
const btnsoma = document.getElementById("btnsoma") //soma
const btnsubtracao = document.getElementById("btnsubtracao") //subtração 
const btndivisao = document.getElementById("btndivisao") //divisão
const btnmultiplicacao = document.getElementById("btnmultiplicacao") //multiplicação 

//var resultado = 0
let resultadosoma = 0

//soma.onlick
btnsoma.addEventListener("click", () => {
    //background.toggle 
    btnsoma.style.backgroundColor = "#426B81"

    //var => numero1 / numero-2
    const numero1 = Number(document.getElementById("input-1").value) //captura o valor do 1º input
    const numero2 = Number(document.getElementById("input-2").value) //captura o valor do 2º input

    //var => resultado(soma)
    resultadosoma = soma(numero1, numero2) //recebe o resultado da operação e atribui ao resultado

    btnresultado.addEventListener("click", () => {
        //background.toggle 
        btnsoma.style.backgroundColor = "#4E4E4E"

        //validação dos inputs 
        if(numero1 == "" || numero2 == ""){
            alert("Preencha os dados corretamente para realizar a operação")
        } else{
             //captura o valor do input resultado 
            document.getElementById("inputresultado").value = resultadosoma //imprime a variavel resultado ao input 
        }
    })
})

//subtração.onclic
btnsubtracao.addEventListener("click", () => {
    //background.toggle 
    btnsubtracao.style.backgroundColor = "#426B81"
    const numero1 = Number(document.getElementById("input-1").value)
    const numero2 = Number(document.getElementById("input-2").value) 

    resultadosoma = subtracao(numero1, numero2)

    btnresultado.addEventListener("click", () => {
        //background.toggle 
        btnsubtracao.style.backgroundColor = "#4E4E4E"

        //validação dos inputs 
        if(numero1 == "" || numero2 == ""){
            alert("Preencha os dados corretamente para realizar a operação")
        } else{
             //captura o valor do input resultado 
            document.getElementById("inputresultado").value = resultadosoma //imprime a variavel resultado ao input 
        }
    })
})

//divisão.onclick
btndivisao.addEventListener("click", () => {
    //background.toggle 
    btndivisao.style.backgroundColor = "#426B81"
    const numero1 = Number(document.getElementById("input-1").value)
    const numero2 = Number(document.getElementById("input-2").value) 

    resultadosoma = divisao(numero1, numero2)

    btnresultado.addEventListener("click", () => {
        //background.toggle 
        btndivisao.style.backgroundColor = "#4E4E4E"
        
        //validação dos inputs 
        if(numero1 == "" || numero2 == ""){
            alert("Preencha os dados corretamente para realizar a operação")
        } else{
             //captura o valor do input resultado 
            document.getElementById("inputresultado").value = resultadosoma //imprime a variavel resultado ao input 
        }
    })
})

//multiplicação.onlick
btnmultiplicacao.addEventListener("click", () => {
    //background.toggle 
    btnmultiplicacao.style.backgroundColor = "#426B81"
    const numero1 = Number(document.getElementById("input-1").value)
    const numero2 = Number(document.getElementById("input-2").value) 

    resultadosoma = multplicacao(numero1, numero2)

    btnresultado.addEventListener("click", () => {
        //background.toggle 
        btnmultiplicacao.style.backgroundColor = "#4E4E4E"
        
        //validação dos inputs 
        if(numero1 == "" || numero2 == ""){
            alert("Preencha os dados corretamente para realizar a operação")
        } else{
             //captura o valor do input resultado 
            document.getElementById("inputresultado").value = resultadosoma //imprime a variavel resultado ao input 
        }
    })
})

//clear.onclick
btnclear.addEventListener("click", () => {
    document.getElementById("input-1").value = "" //limpa os inputs atribuindo ""
    document.getElementById("input-2").value = ""
    document.getElementById("inputresultado").value = ""
})


