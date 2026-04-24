console.log("Olá, JavaScript!")

/* =====================================================
   MANIPULAÇÃO DO DOM
   ===================================================== */

/*
- DOM (Document Object Model) representa a estrutura HTML da página.
- Permite acessar e manipular elementos dinamicamente via JavaScript.
*/

// Nome do usuário que será exibido na página
const userName = 'Cleibson'

// Obtém o elemento HTML pelo id e altera apenas o texto interno
const userNameElement = document.getElementById('user-name')

if (userNameElement) {
   userNameElement.textContent = userName
}

/* =====================================================
   OPERADORES MATEMÁTICOS
   ===================================================== */
/*
Operadores aritméticos básicos:
+  → soma
-  → subtração
*  → multiplicação
/  → divisão

Observações:
- Em JavaScript, números inteiros e decimais são do tipo `number`
- Não existe distinção entre int e float
*/

/*
Funções úteis:
- parseInt() → converte para número inteiro
- Number()   → converte para número (int ou decimal)
- typeof     → retorna o tipo da variável
*/

/*
Exemplo:

const n1 = 7
const n2 = 2.5
const total = n1 / n2

console.log(typeof n1)   // number
console.log(typeof n2)   // number
console.log(total)
*/

/* =====================================================
   VARIÁVEIS E TIPOS PRIMITIVOS
   ===================================================== */
/*
Tipos primitivos mais comuns:
- string  → texto
- number  → números inteiros ou decimais
- boolean → true ou false
*/

/*
Exemplo:

const name = "Mestre Yoda"
const idade = 100
const jedi = true

console.log(name)
console.log(idade)
console.log(jedi)
*/

/* =====================================================
   COMPARAÇÕES
   ===================================================== */

/*
IGUALDADE NÃO ESTRITA (==)
- Compara apenas o valor
- O JavaScript converte os tipos automaticamente
- NÃO é recomendada para código profissional
*/
// console.log(1 == '1') // true

/*
DESIGUALDADE NÃO ESTRITA (!=)
- Compara apenas o valor
*/
// console.log(4 != 1) // true

/*
IGUALDADE ESTRITA (===)
- Compara valor E tipo
- BOA PRÁTICA
*/
// console.log(3 === '3') // false
// console.log(3 === 3)   // true

/*
DESIGUALDADE ESTRITA (!==)
- Retorna true se o valor OU o tipo forem diferentes
*/
// console.log(3 !== '3') // true
// console.log(3 !== 3)   // false
// console.log(3 !== 4)   // true

/*
COMPARAÇÕES NUMÉRICAS
- Strings podem ser convertidas implicitamente para number
- Esse comportamento pode gerar bugs
*/

// console.log(4 > '1')  // true
// console.log(1 < 2)    // true
// console.log(5 >= 3)   // true
// console.log(2 <= 2)   // true

/* =====================================================
   FUNÇÕES
   ===================================================== */

/*
Funções são blocos reutilizáveis de código.

Estrutura:
- Palavra-chave: function
- Nome da função
- Parâmetros (opcional)
- Corpo da função {}
*/

/*
Função sem retorno:
- Executa uma ação
- Não retorna valor
*/
// function soma(n1, n2) {
//   console.log(n1 + n2)
// }

// soma(5, 100)

/*
Função com retorno:
- Retorna um valor usando `return`
- Facilita reutilização e testes
*/
// function soma(n1, n2) {
//   return n1 + n2
// }

// const resultado = soma(5, 5)
// console.log(resultado)

/* =====================================================
   TIPAGEM NO JAVASCRIPT
   ===================================================== */
/*
JavaScript utiliza TIPAGEM DINÂMICA:

- O tipo é definido em tempo de execução
- Uma variável pode mudar de tipo ao longo do código

Exemplo:
*/
let valor = 10        // number
valor = "texto"      // string (válido)

/*
Comparação com tipagem estática (C#, Java):
- Tipo definido na declaração
- Não pode ser alterado

Resumo:
- JavaScript → flexível, erros em runtime
- C# / Java  → mais seguro, erros em compilação
*/

/* =====================================================
   CONTROLE DE FLUXO
   ===================================================== */

//BDD desenvolvimento guiado por comportamento.

/*
Formato padrão de uma História de Usuário:

- Sendo...  → identifica o ATOR (quem usa o sistema)
- Posso...  → descreve a FUNCIONALIDADE
- Para...   → define o VALOR ou BENEFÍCIO gerado

Essa estrutura ajuda a manter o foco no usuário
e no motivo real da funcionalidade existir.
*/

// Sendo um cliente correntista do banco
// (ATOR: usuário que possui conta ativa no banco)
//
// Posso sacar dinheiro em caixas eletrônicos
// (FUNCIONALIDADE: permitir saque nos terminais)
//
// Para poder comprar em lugares que não aceitam
// cartão de crédito ou débito
// (VALOR: garantir acesso a dinheiro físico quando necessário)




/* =====================================================
   HISTÓRIA DE USUÁRIO
   ===================================================== */

/*
Formato da História de Usuário:

- Sendo... → ATOR (quem utiliza o sistema)
- Posso... → FUNCIONALIDADE
- Para...  → VALOR GERADO / BENEFÍCIO
*/

// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixas eletrônicos
// Para poder comprar em lugares que não aceitam
// cartão de crédito ou débito


/* =====================================================
   CENÁRIOS (BDD)
   ===================================================== */

/*
Os cenários descrevem comportamentos esperados do sistema
em diferentes situações, servindo como base para testes
manuais e automatizados.
*/

// Cenário 01: Saque realizado com sucesso
// Cenário 02: Tentativa de saque com valor superior ao saldo disponível
// Cenário 03: Tentativa de saque com valor acima do limite permitido por operação


/* =====================================================
   CENÁRIO 01 — Saque com sucesso
   ===================================================== */

// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 999 reais
// Então o valor deve ser deduzido do meu saldo
// E devo receber 999 reais em espécie


/* =====================================================
   CENÁRIO 02 — Saque com valor superior ao saldo
   ===================================================== */

// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Então nenhum valor deve ser deduzido do meu saldo
// E deve ser exibida uma mensagem de alerta informando que o valor do saque não pode ser superior ao saldo disponível


/* =====================================================
   CENÁRIO 03 — Saque acima do limite por operação
   ===================================================== */

// Dado que meu saldo é de 1000 reais
// E que o valor máximo permitido por operação seja 700 reais
// Quando tento sacar 701 reais
// Então nenhum valor deve ser deduzido do meu saldo
// E deve ser exibida uma mensagem de alerta informando
// que o limite por transação é de 700 reais

// ============================================
// Cenário 01 – Meu exemplo (criação própria)
// Objetivo: realizar um saque simples retornando
// o valor restante em conta
// ============================================

// function saque(vs, vc) {
//     return vs - vc
// }

// var saldo = saque(1000, 999)
// console.log(saldo)


// ============================================
// Cenário 02 – Meu exemplo (criação própria)
// Objetivo: validar tentativa de saque maior
// que o saldo disponível
// ============================================

// saque(1001)

// if (valorRestanteEmConta) {
//   valorRestanteEmConta < 0
//   console.log('Ops, saldo insuficiente! Seu saldo é de ' + saldo)
// }


// ============================================
// Cenário 03 – Meu exemplo (criação própria)
// Objetivo: limitar o valor máximo permitido
// por saque (regra de negócio)
// ============================================

// var saldo = 1000
// var limiteSaque = 700

// function saque(valor) {

//    if (valor > limiteSaque) {
//       console.log('Ops, o valor limite de saque é de 700 reais por transação!')
//    } else {
//       saldo = saldo - valor
//    }

// }

// saque(700)
// console.log('Saldo atual', + saldo)


// ======================================================================
// Cenário 01, 02 e 03 – Exemplo do professor
// Um único bloco de código para tratar:
// • Saldo insuficiente
// • Limite máximo de saque
// • Atualização do saldo
// ======================================================================

// var saldo = 1000

// function saque(valor) {

//    if (valor > saldo) {
//       console.log('Valor do saque superior ao saldo. Seu saldo é de', + saldo)
//    } 
//    else if (saque > 700) {
//       console.log('Ops! O valor limite para saque é de 700 reais')
//    } 
//    else {
//       saldo = saldo - valor
//       console.log('Maravilha, voce sacou ' + valor)
//    }

// }

// saque(500)
// console.log('Saldo atual', + saldo)


// ======================================================================
// Comentário explicativo – Estrutura IF
// ======================================================================
// O "if" é uma estrutura de controle de fluxo utilizada para tomada
// de decisão baseada em condições.
// Ele permite que o código execute caminhos diferentes de acordo com
// o resultado de uma expressão booleana (true ou false).
//
// Neste contexto, o "if" avalia regras de negócio como:
// • saldo suficiente
// • limite máximo permitido
//
// Caso a condição do "if" não seja atendida, o fluxo segue para o
// "else if" ou, não havendo mais condições, para o "else".


// ===================
// ARRAYS – "Gaveteiros"
// ===================

// Um Array é uma estrutura de dados usada para armazenar
// vários valores dentro de uma única variável.
// Cada valor ocupa uma posição (índice), que começa em 0.
// A ideia do "gaveteiro" ajuda a visualizar: cada gaveta
// guarda um item diferente e pode ser acessada pelo seu número.

// var gaveteiro = [
//   'trecos, comprimidos, canetas, papeis malucos',
//   'Roupas de salão',
//   'Roupas esportivas',
//   'Ternos'
// ]

// // Acessa o primeiro item do array (posição 0)
// console.log(gaveteiro)

// var personagens = [
//   'Mestre Yoda',
//   'Luke Skywalker',
//   'Princesa Leia',
//   'Darth Vader'
// ]

// =====================================
// Métodos de Array – push, pop e filter
// =====================================


// push:
// Acessa o array/lista e adiciona um novo elemento ao final
// personagens.push('c3pO')
// personagens.push('R2D2')
// console.log(personagens)


// // pop:
// // Remove o último elemento do array
// personagens.pop()
// console.log(personagens)


// // filter:
// // Percorre todo o array e retorna um novo array
// // contendo apenas os elementos que atendem à condição
// // Neste caso, remove o personagem "Darth Vader"
// personagens = personagens.filter(function (p) {
//    return p !== 'Darth Vader'
// })
// console.log(personagens)


// // Forma de buscar um único elemento usando filter:
// // "p" representa cada item do array durante a iteração
// // A função percorre o array e retorna apenas o elemento
// // que seja exatamente igual a "Mestre Yoda"
// personagens = personagens.filter(function (p) {
//    return p === 'Mestre Yoda'
// })
// console.log(personagens)
// 

// ========================
// CONTROLES DE REPETIÇÃO
// ========================

// Arrays de exemplo
var personagens = [
  'Mestre Yoda',
  'Luke Skywalker',
  'Princesa Leia',
  'Darth Vader'
]

var personagensChaves = [
  'Chaves',
  'Kiko',
  'Seu Madruga',
  'Seu Barriga',
  'Professor Girafales',
  'Jaiminho'
]


// =======================================
// forEach
// =======================================
// O forEach é um método específico de Arrays.
// Ele percorre cada elemento do Array, do início ao fim,
// executando uma função para cada item.
// Não retorna um novo Array e não permite interrupção (break).

// Primeiro: imprime todos os elementos do Array
personagens.forEach(function(p){
   console.log(p)
})


// =======================================
// for...in
// =======================================
// O for...in percorre as chaves (índices) do Array.
// Em Arrays, os índices são 0, 1, 2, 3...
// Normalmente é mais usado para objetos, mas funciona em Arrays.

// Imprime no console o índice de cada elemento
for (var i in personagens){
   console.log(i)
}


// =======================================
// for...in acessando valores
// =======================================
// Aqui o for...in percorre os índices,
// e usamos o índice para acessar o valor do Array.
// Forma mais verbosa e menos recomendada para Arrays simples.

for (var i in personagensChaves) {
   console.log(personagensChaves[i])
}


// =======================================
// for clássico
// =======================================
// O for clássico é o laço mais conhecido e flexível.
// Ele possui três partes:
// 1. Inicialização da variável
// 2. Condição de parada
// 3. Incremento
//
// O ciclo continua enquanto a condição for verdadeira.
// Quando a condição retorna false, o laço é encerrado.

for (var i = 0; i <= 10; i++) {
   console.log(i)
   // O código será executado até que i seja maior que 10
}