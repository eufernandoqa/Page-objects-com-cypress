import { elements } from "./elements"

class InputEntrada {
    entradaDedados(fullname) {
        // Entrada de texto
        cy.get(elements.btnPageEntradas).click()
        cy.get(elements.nomeCompleto).type(fullname) // Digitar Full
    }
    nevegaViaTab(name) {
        //Navegação via tecla TAB
        cy.get(elements.adicioneUmtexto).clear().type(name) //Limpa o campo e Escreve um novo texto
        cy.press(Cypress.Keyboard.Keys.TAB) //Pressiona a tecla TAB 
    }
    obterAtributo() {
        //Recuperar um atributo de um campo 
        cy.get(elements.oQueHadentro)
            .invoke('attr', 'value') //Pegou/recuperou o valor do atributo
            .then((valorAtributo) => { //Armazenou/copiou/encadeou o valor do atributo -> Agora fazer algo com o valor obtido
                cy.log(valorAtributo); // Exibe o valor do atributo no log do Cypress
            });
    }
    clearText() {
        //Limpar um texto
        cy.get(elements.limparOtexto).clear()
    }

    validateDisabledfield() {
        //Validar campo Desabilitado
        cy.get(elements.campoDesabilitado).should('be.disabled')
    }
    // Validar campo somente leitura
    validateReadonlyfield() {
        cy.get(elements.somenteLeitura).should('have.attr', 'readonly') //.should('have.attr', 'readonly'): Afirma que o elemento selecionado deve ter o atributo readonly (somente leitura)
    }


}

export default new InputEntrada()