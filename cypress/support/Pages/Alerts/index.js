import { elements } from "./elements";

class Alerts {
    confirmaAlertaSimples() {
        //Confirmar um alerta simples que exibe apenas OK
        cy.get(elements.btnPageAlerts).click()
        cy.get(elements.btnAccept).click()
        cy.on('window:alert', (str) => {//Pode ser usado quando o alerta só exibe a opção OK Obs.: 'str' contém a mensagem do alerta.
            expect(str).to.equal('Hey! Welcome to LetCode'); //Validação:Espera que a váriavél do alerta (str) seja igual a mensagem que foi informada.
        });
    }

    confirmaOuCancelaAlert() {
        //Confirmar ou Cancelar um alerta que exibe OK e Cancelar
        cy.get(elements.btnConfirm).click()
        cy.on('window:confirm', (str) => { //Pode ser usado quando o alerta só exibe a opção OK e Cancel Obs.: 'str' contém a mensagem do alerta.
            expect(str).to.equal('Are you happy with LetCode?');
            //return true; // Retorna true para simular o clique em "OK"
            return false; // Retorna false para simular o clique em "Cancelar"
        });
    }

    alertComEntradaDeTexto(texto) {
        //Interagir com um alerta que exige entrada de texto e em seguida Confirmar ou Cancelar
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(texto)
            return true;
            //return false;
        });
        cy.get(elements.btnPrompt).click();
        cy.get(elements.notificationSucess).should('be.visible')

    }

    alertModerno(){
        //Interage com alerta moderno, valida a mengem e fecha o alarta
            cy.get(elements.btnAlertModern).click()
            cy.get('.title').should('have.text', 'AlertModern Alert - Some people address me as sweet alert as well LetCode by Koushik Chatterjee')
            cy.get("button[class='modal-close is-large']").click()
    }

}

export default new Alerts()