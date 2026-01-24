function verificarIdade(){

let idade = prompt("Venon esta te perguntando,  qual é sua idade?");

idade = Number(idade);
let mensagem = "";

if(idade<=12){
  mensagem = "Muito Joven, Venon vai te perdoar";
}else if(idade>=12 && idade<=17){
mensagem ="Venon vai deixar passar desta vez";
}else{
  mensagem ="passou os 18, venon vai te devorar ate as tripas";
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
  document.getElementById("resultadoS").innerText =  senhaGerada; // Exibe a senha na página
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

function jogarNovamente() {
  return confirm("Deseja jogar novamente?");
}
//verificar motorista 
function verificarBoludo(){
  let idadeBoludo = Number(document.getElementById("idadeB").value);
  let resultadoBoludo = document.getElementById("resultadoBoludo");
  
  if (idadeBoludo>=18) {
    resultadoBoludo.innerText = "✅ Você pode dirigir 🚗";
  } else {
    resultadoBoludo.innerText = "❌ Você ainda não pode dirigir."
  }
}

//Notas da Faculdade FAE
function verificarNotaFae() {
  let notaFae = Number(document.getElementById("notaFae").value);
  let resultadoFae = document.getElementById("resultadoFae");
  if( notaFae < 0 || notaFae > 10) {
    resultadoFae.innerText = "Nota inválida, digite uma nota entre 0 e 10";
    return;
  }
    let mensagemnotasFae = "Sua Nota é: " + notaFae + " <br>";
    if(notaFae > 6 ) {
      mensagemnotasFae += "Aprovado, pode passar do Venon 🎉\n"; 
    }else if (notaFae >=5 ) {
      mensagemnotasFae += "Recuperação, Venon está de olho em você 👀 \n";
    }
     else{
      mensagemnotaFae += "Reprovado, Venon vai devorar você até as tripas! ❌\n";
     }
  resultadoFae.innerHTML = mensagemnotasFae;
     }
     //formulário que vai mostrar as váriaveis em tela
     function mostrarDados() {
      let nome = document.getElementById("nome").value;
      let sobrenome = document.getElementById("sobrenome").value;
      let resultadoVariaveis = document.getElementById("resultadoVariaveis");
      resultadoVariaveis.innerText = "Nome Completo: " + nome + " " + sobrenome; 
     }

     //Verifica a estação do ano conforme os numeros inserido no campo type number
     function verificarEstacao() {
      let mes = Number(document.getElementById("mes").value);
      let resultadoMes = document.getElementById("resultadoMes");
      let estacao = "";
      if ( mes < 1 || mes > 12 ) {
        resultadoMes.innerText = "Mes inválido, digite um número entre 1 e 12";
        return;

      } else if ( mes === 12 || mes === 1 || mes === 2 ) {
        estacao = "Verão ☀️";

      } else if ( mes >=3 && mes <= 5 ) {
        estacao = "Outono 🍂";
      } else if ( mes >=6 && mes <= 8 )  {
        estacao = "Inverno ❄️";

      } else {
        estacao = "Primavera 🌸";
      } 
      resultadoMes.innerText = "A estação do ano é: " + estacao; 
      }
      //fim do codigo que verifica estaçao do ano. 

      //Clacule se desconto conforme o tipo de cliente
      function calcularDesconto() {
        let valor = Number(document.getElementById("valor").value);
        let tipo = document.getElementById("tipo").value;
        let resultadoDesconto = document.getElementById("resultadoDesconto");
       
        if( valor <=0 || tipo === "" ) {
          resultadoDesconto.innerText = "❌ Preencha todos os campos corretamente.";
          return;
        }
        let desconto = 0;

      switch (tipo) {
        case "padrao":
          desconto = 10;
          break;
        case "vip":
          desconto = 12;
          break;
        case "funcionario":
          desconto = 15;
          break;
      }

      const valorFinal = valor - (valor * desconto / 100);
      resultadoDesconto.innerText = `💰 Desconto de ${desconto}% aplicado. Valor final: R$ ${valorFinal.toFixed(2)}`;
    }


    //Sistema de Login Simples

    function verificaLogin() {
      const senhaLogin = document.getElementById("senhaLogin").value;
      const resultadoLogin = document.getElementById("resultadoLogin");
      

      if ( senhaLogin === "" ) {
        resultadoLogin.innerText = "❌ Por favor, insira sua senha.";
        return;
      } else if ( senhaLogin === "venon123" ) {
        resultadoLogin.innerText = "✅ Login bem-sucedido! Bem-vindo ao sistema.";
        resultadoLogin.style.color = "green";
      }
      else {
        resultadoLogin.innerText = "❌ Acesso negado!";
        resultadoLogin.style.color = "red";
      }
    }

    // Sistema de Semaforo
    function controlarTransito() {
      //pegar a cor digitada no input
      let cor = document.getElementById("corSemaforo").value;
      //transforar todo o texto em minuscula
      cor = cor.toLowerCase();
      //selecionar os circulos
      let luz = document.getElementById(luz);
      let mensagemSemaforo = document.getElementById("mensagemTransito");

      
    }