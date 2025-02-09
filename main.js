function verificarIdade(){

let idade = prompt("Venon esta te perguntando,  qual é sua idade?");

idade = Number(idade);
let mensagem = "";

if(idade<=12){
  mensagem = "Muito Joven";
}else if(idade>=12 && idade<=17){
mensagem ="Espera um pouco";
}else{
  mensagem ="Devora ele, ate as tripas";
}
alert(mensagem);
}

function calcular(a, b, operador){
  if(operador === "+") {
    return a + b;
  }else if(operador === "-"){
    return a-b;
  }else if(operador=== "*"){
    return a*b;
  }else if (operador === "/"){
    return a/b;
  } else {
    return "Operação  Invalida";
  }
  
  
}
console.log(calcular(190, 5, "+"));
console.log(calcular(190, 5, "-"));
console.log(calcular(190, 5, "*"));
console.log(calcular(190, 5, "/"));


function gerarSenha(n){
  let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let senha = "";
  for(let i=0; i<n ; i++){
    let indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[indiceAleatorio];
  }
  return senha;
}
  console.log(gerarSenha(8));
  console.log(gerarSenha(10));
  console.log(gerarSenha(15));



