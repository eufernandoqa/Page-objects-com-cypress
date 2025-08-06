import { elements } from "./elements";

class Button {

    //Obter cordenadas do botão
    obterCordenadasDoBotao() {
        cy.get(elements.btnPagesButtons).click()
        cy.get(elements.encontrarCordenadas).then((button) => {//Dentro do bloco .then, a variável $button conterá o elemento DOM do cy.get('#position')
            const position = button.position();//Este método do jQuery retorna/obtem um objeto com as propriedades top e left, representando as coordenadas do canto superior esquerdo do elemento
            const x = position.left;//Extrai a coordenada X (esquerda) do objeto position.
            const y = position.top;//Extrai a coordenada Y (topo) do objeto position.
            cy.log(`Coordenadas X: ${x}, Y: ${y}`);//Exibe as coordenadas no log do Cypress
        });
    }

    obterACorDoBotao() {
        //Obter a cor de um Botão
        cy.get(elements.qualAcor)
            .invoke('css', 'background-color') //Pegou/recuperou o a cor de fundo(background-color)
            .then((cor) => { //Armazenou/copiou/encadeou
                cy.log('Cor de fundo:', cor)//Exibiu o valor no log do Cypress
                // Você pode fazer asserções com a cor aqui
                expect(cor).to.eq('rgb(42, 157, 144)') //Assert
            })
    }

    obterlarguraEAlturaDoBotao() {
        //Encontrar largura e Altura de um Botão
        cy.get(elements.AlturaELargura)
            .invoke('outerWidth')//O método invoke() permite que você chame métodos JavaScript em um elemento selecionado. outerWidth() e outerHeight() são métodos do JavaScript que retornam a largura e altura de um elemento
            .then((largura) => {
                cy.log('Largura:', largura)
                expect(largura).to.eq(174.219)
            })
        cy.get(elements.AlturaELargura)
            .invoke('outerHeight')//O método invoke() permite que você chame métodos JavaScript em um elemento selecionado. outerWidth() e outerHeight() são métodos do JavaScript que retornam a largura e altura de um elemento
            .then((altura) => {//Armazenou/copiou/encadeou a altura
                cy.log('Altura:', altura)//Exibiu o valor do da altura no log do Cypress
                expect(altura).to.eq(40)//Assert pegando o resultado que o log trouxe e inclundo aqui no código
            })
    }

    validaBotaoDesabilitado() {
        //Validar Botão desabilitado
        cy.get(elements.isDisabled).should('be.disabled')
    }

    clicaESegura() {
        //Clicar e segurar um Botão
        cy.get(elements.clicaSegura)
            .trigger('mousedown') // Pressiona o botão
            .wait(2000)           // Aguarda 2 segundos com o botão pressionado
            .trigger('mouseup')   // Solta o botão
    }





}

export default new Button()