for (  x = 0; x<=10; x++){
    console.log(x +"Leonardo")
    console.log(x+"23 anos")
    
}


const alunos = ["katia" , "pedro" ,  "Mouskalia"]

console.log("quantidade de caracteres")
if(alunos.length <=10){
console.log ("os alunos podem ser cadastrado")
}

console.log ("quantidades de caracteres")

for (let index = 0; index < alunos.length; index ++){
   const atual = alunos [index];
    if(atual.length <3){
        console.log(atual + " : o  alunos pode (a) inferior a 3 caracterias e nao pode ser cadastrado")}
    else{
        console.log(atual + " : o aluno pode ser cadastrado.")}
    }



const produtos = ["tenis" , "boné" , "camiseta"]

console.log("quantidade de caracteres")
if(produtos.length <=100){
 console.log ("não pode ser cadastrados")
}
