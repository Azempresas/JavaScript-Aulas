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

//Função gerarSenha

function gerarSenha(n) {
  let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let senha = "";

  for (let i = 0; i < n; i++) {
      let indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      senha += caracteres[indiceAleatorio];
  }

  return senha;
}

// Função para gerar a senha e exibi-la no HTML
function gerarSenhaHTML() {
  let tamanho = document.getElementById("tamanho").value; // Pega o valor do input
  tamanho = Number(tamanho); // Converte para número

  if (tamanho < 1) {
      document.getElementById("resultado").innerText = "Digite um número válido!";
      return;
  }

  let senhaGerada = gerarSenha(tamanho); // Chama a função gerarSenha()
  document.getElementById("resultado").innerText =  senhaGerada; // Exibe a senha na página
}

//Notas da faculdade, Venon é ruim! 

function verificarNota() {
  let nota = Number(document.getElementById("nota").value);
  let resultadoweb = document.getElementById("resultadoweb");
  if( nota < 0 || nota > 10) {
    resultadoweb.innerText = "Nota inválida, digite uma nota entre 0 e 10";
    return;
  }
    let mensagemnotas = "Sua Nota é: " + nota + " <br>";
    if(nota > 6 ) {
      mensagemnotas += "Aprovado, pode passar do Venon 🎉\n"; 
    }else if (nota >=5 ) {
      mensagemnotas += "Recuperação, Venon está de olho em você 👀 \n";
    } else {
      mensagemnotas += "Reprovado, Venon vai devorar você até as tripas! ❌\n";
    }
    switch (Math.floor(nota)) {
      case 10: mensagemnotas += "Aprovado com louvor"; break;
      case 9: mensagemnotas += "Aprovado com louvor"; break;
      case 8: mensagemnotas += "Aprovado com distinção"; break;
      case 7: mensagemnotas += "Aprovado com distinção"; break;
      case 6:mensagemnotas += "Aprovado"; break;
      case 5: mensagemnotas += "Recuperação"; break;
      default: mensagemnotas += "Reprovado";
  }
 resultadoweb.innerHTML = mensagemnotas;
}



