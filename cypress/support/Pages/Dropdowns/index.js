import { elements } from "./elements"

class Dropdowns {
    selectItemLista(fruit) {
        //Selecionando um item  da lista
        cy.get(elements.btnPageDropdowns).click()
        cy.get(elements.selectFruit).select(fruit)
        cy.get(elements.notificationSucess).should('be.visible')
    }

    selectMultOpi() {
        //Selecionando multiplas opções
        cy.get(elements.selectHeros).select(['Aquaman', 'Batman', 'Iron Man'])
    }

    selectUltItemList() {
        //Selecionando a última opção de um dropdown (Lista uspensa/Caixa de seleção)
        cy.get(elements.selectLanguage)
            .find('option') // pega todas as opções dentro do dropdown
            .then(options => {//usa uma função para acessar as opções como um array-like.
                const ultimaOpcao = options[options.length - 1].value // pega o valor da última opção
                cy.get(elements.selectLanguage).select(ultimaOpcao) // seleciona essa opção
                cy.get(elements.notificationLang).should('be.visible')
            })
    }

    imprimiTodasOpiList() {
        //imprimindo todas as opções de uma lista 
        cy.get(elements.selectLanguage)
            .find('option')// pega todas as opções dentro do dropdown
            .invoke('val')
            .then(options => { //Armazenou/copiou/encadeou os valores da lista
                cy.log('Optons:', options)
                //console.log(`#lang: ${options}`)
            })
    }

    selectValorListEImprimi(pais) {
        //elecionando um valor da lsta e imprimindo
        cy.get(elements.selectPais)
            .select(pais)
            .invoke('val') //Pegou/recuperou o a o valor selecionado no campo
            .then((Valor) => { //Armazenou/copiou/encadeou o valor
                cy.log('valor Selecionado:', Valor) //Exibiu na tela do Cypress 
                expect(Valor).to.equal(pais);
            })
    }

}

export default new Dropdowns()
