/** Variaveis da atividade 1. mudar  cor de um bloco.
 * Referência ao elemento com ID "container".
 * O elemento é um contâiner para manter os outros objetos da atividade 1 organizados.
 * 
 * @type{HTMLElement}
 */

let container = document.getElementById("container"); 

/** Variaveis da atividade 1. mudar  cor de um bloco.
 *  Refêrencia ao elemento com ID "bloco1"
 *  Este bloco pode ser manipulado para alterar sua cor.
 * 
 * @type {HTMLElement}
 * 
 */

let bloco1 = document.getElementById("bloco1")     

/** Variaveis da atividade 1. mudar  cor de um bloco.
 *  Refêrencia ao elemento com ID "bloco2"
 *  Este bloco pode ser manipulado para alterar sua cor.
 * 
 * @type {HTMLElement}
 * 
 */

let bloco2 = document.getElementById("bloco2")  

/** Variaveis da atividade 1. mudar  cor de um bloco.
 *  Refêrencia ao elemento com ID "bloco3"
 *  Este bloco pode ser manipulado para alterar sua cor.
 * 
 * @type {HTMLElement}
 * 
 */

let bloco3 = document.getElementById("bloco3")        

/** Variaveis da atividade 2. Contador de cliques.
 *  Esta variavel referencia ao o texto que indica quantas vezes algum cubo foi clicado.
 *  Indicando o elemento de ID "cliques".
 * 
 * @type {HTMLElement}
 * 
 */

let cliques = document.getElementById("cliques")

/** Variaveis da atividade 2. Contador de cliques.
 *  Esta variavel referencia o botão que reinicia o contador.
 *  Indicando o elemento de ID "reset".
 * 
 * @type {HTMLElement}
 * 
 */

let reset = document.getElementById("reset")

/** Variaveis da atividade 2. Contador de cliques.
 *  Esta variavel conta a quantidade de cliques feitos.
 * 
 * @type {number}
 * 
 */

let clickCount = 0;

/** Variaveis da atividade 3. Esconder DIV.
 *  Esta variavel referencia o botão que esconde o contâiner da atividade 1.
 *  Indicando o elemento de ID "esconderContainer".
 * 
 * @type {HTMLElement}
 * 
 */

let esconderBotao = document.getElementById("esconderContainer");

/** Variaveis da atividade 4. Alterar texto com prompt.
 *  Esta variavel referencia o texto que será modificado.
 *  Indicando o elemento de ID "texto".
 * 
 * @type {HTMLElement}
 * 
 */

let texto = document.getElementById("texto");

/** Variaveis da atividade 4. Alterar texto com prompt.
 *  Esta variavel referencia o botão que modificará o texto.
 *  Indicando o elemento de ID "editTexto".
 * 
 * @type {HTMLElement}
 * 
 */

let botaoTexto = document.getElementById("editTexto");

/** Variaveis da atividade 5. mudança de texto ao pressionar uma tecla.
 *  Esta variavel referencia o texto que será modificado.
 *  Indicando o elemento de ID "teclaTexto".
 * 
 * @type {HTMLElement}
 * 
 */

let teclaTexto = document.getElementById("teclaTexto");

/** Variaveis da atividade 5. Mudança de Texto ao Pressionar Tecla.
 *  Esta variavel referencia o prompt que o úsuario irá inserir as letras.
 *  Indicando o elemento de ID "input".
 * 
 * @type {HTMLElement}
 * 
 */

const input = document.querySelector("input");

/** Variaveis da atividade 6. Eleições Municipais.
 *  Esta variavel referencia o botão 'VOTAR' que irá abrir os detalhes sobre os políticos.
 *  Indicando o elemento de ID "VOTAR".
 * 
 * @type {HTMLElement}
 * 
 */


 let VOTAR = document.getElementById("VOTAR");


/** Atividade 1 e 2.
 * Evento de clique no bloco1. Quando o bloco é clicado:
 * 1. Gera uma cor aleatória.
 * 2. Altera o fundo de 'bloco1' para essa cor.
 * 3. Incrementa o contador de cliques e atualiza o texto na tela.
 * 
 * @param {HTMLElement} bloco1 - Elemento que terá sua cor modificada.
 * @param {number} clickCount - Elemento que indica a quantidade de cliques dados.
 * @type {Event}
 */
bloco1.addEventListener('click', function() {
    /**
     * Gera uma cor aleatória.
     *  É utilizado Math.random() para gerar um número entre 0 e 16777215, então este número é transformado em uma cor.
     * 
     * @type {string} 
     */
    let randomColour = Math.floor(Math.random() * 16777215).toString(16);
    
    // Aplica a cor aleatória ao fundo de 'bloco1'.
    bloco1.style.backgroundColor = "#" + randomColour;
    
    // Incrementa o contador de cliques
    clickCount += 1;
    
    /**
     * Atualiza o texto exibido no elemento 'cliques'.
     * 
     * @type {string} O texto que exibe o número de cliques.
     */
    cliques.innerText = "Cliques: " + clickCount;
});


 /** Atividade 1 e 2.
  *  Evento de clique no bloco 2, quando clicado ele:
  * 1. Gera uma cor aleatória.
  * 2. Altera o fundo de 'bloco2' para esta cor.
  * 3. Incrementa o contador de cliques e atualiza o texto na tela.
  * 
  * @param {HTMLElement} bloco2 - Elemento que terá sua cor modificada.
  * @param {number} clickCount - Elemento que indica a quantidade de cliques dados.
  *  @type {Event}
  */
bloco2.addEventListener('click', function(){
    /** 
     * Gera uma cor aleatória.
     * Utiliza o método Math.random() para gerar um número aleatório até 16777215, então converte este número em uma cor.
     * 
     *  @type {string}
     */
    let randomColour = Math.floor(Math.random()* 16777215).toString(16);

    //Aplica a cor aleatória no bloco 2.
    bloco2.style.backgroundColor = "#" + randomColour;

    //Incrementa o contador de cliques.
    clickCount += 1;

    /**
     * Atualiza o texto exibido no elemento 'cliques'
     * 
     * @type {string} o texto que exibe a quantidade de cliques.
     */
    cliques.innerText = "Cliques: " + clickCount;
})

/** Atividade 1 e 2.
  *  Evento de clique no bloco 3, quando clicado ele:
  * 1. Gera uma cor aleatória.
  * 2. Altera o fundo de 'bloco3' para esta cor.
  * 3. Incrementa o contador de cliques e atualiza o texto na tela.
  * 
  * @param {HTMLElement} bloco3 - Elemento que terá sua cor modificada.
  * @param {number} clickCount - Elemento que indica a quantidade de cliques dados.
  *  @type {Event}
  */
bloco3.addEventListener('click', function(){

   /** 
     * Gera uma cor aleatória.
     * Utiliza o método Math.random() para gerar um número aleatório até 16777215, então converte este número em uma cor.
     * 
     *  @type {string}
     */
    let randomColour = Math.floor(Math.random()* 16777215).toString(16);

      //Aplica a cor aleatória no bloco 3.
    bloco3.style.backgroundColor = "#" + randomColour;
    //Incrementa o contador de cliques.
    clickCount += 1;
    //Atualiza o texto exibido no elemento 'cliques'.
    cliques.innerText = "Cliques: " + clickCount;
})
 
    /** Atividade 2.
     * Quando pressionado o botão 'reset' ele irá reiniciar o contador.
     *
     * @param {number} clickCount - Valor que é transformado em 0.
     * @param {HTMLElement} Cliques - É atualizado para apresentar a nova quantidade de cliques.
     * @type {Event} - evento 'click' disparado quando o botão reset é pressionado.
     */
reset.addEventListener('click', function(){
    // Transforma o valor do contador de cliques em 0.
    clickCount = 0;
    //Atualiza o texto exibido no elemento 'cliques'.
    cliques.innerText = "Cliques: " + clickCount;
})

   /**
     * Ele verifica o nome do botão e modifica a visibilidade do contâiner de acordo,
     * Quando seu texto é 'Esconder', ele tornará a visibilidade do contâiner em 'none', mas caso
     * Contrário, ele tornará sua visibilidade 'flex'.
     * 
     * @param {HTMLElement} container - Elemento que será ocultado.
     * @param {HTMLElement} esconderBotao - Elemento que controlará a visibilidade do contâiner.
     * @type {Event}
     */
esconderBotao.addEventListener('click', function(){
    
   
    if(esconderBotao.innerText == "Esconder"){
    //Verifica o teto do botão, modifica ele para 'Mostrar' e modifica a visibilidade do contâiner para 'none'
    container.style.display = "none"
    esconderBotao.innerText = "Mostrar"
    } else{
    //Modifica o texto do botão para 'Esconder' e modifica a visibilidade do contâiner para 'flex'.
    container.style.display = "flex"
    esconderBotao.innerText = "Esconder"
    }
})

/** Atividade 4.
 * Quando pressionado o botão 'botãoTexto' irá perguntar ao usuário para inserir um novo texto
 * que substituirá o texto chamado de 'texto'.
 * 
 * 
 */
botaoTexto.addEventListener('click', function(){
    //É pedido para o usuário inserir o novo texto.
    let novoTexto = prompt("Insira o novo texto.")
    //O texto antigo é substituido pelo novo.
    texto.innerText = novoTexto;
})

    /** Atividade 5.
     *  Sempre que algo for escrito no 'input', a última letra aparecerá no texto de 'teclaTexto'
     * 
     * @param {HTMLElement} input - local onde as teclas serão inseridas.
     * @param {HTMLElement} teclaTexto - texto que será modificado e mostrará a última tecla pressionada.
     * @param {Event} a - objeto do evento 'keyDown' que contém informações auxiliares, como qual a tecla pressionada.
     * @type {Event}
     */
input.addEventListener('keydown', function(a){

    teclaTexto.innerText = 'Última tecla pressionada: '+ a.key;
    //Atualiza o texto para apresentar a última tecla pressionada.
})

VOTAR.addEventListener('click', function(){
    
})