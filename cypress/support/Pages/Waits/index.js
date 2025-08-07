import { elements } from "./elements";

class Waits {

      FuncaoWait() {
            //Confirmar um alerta simples que exibe apenas OK
            cy.get(elements.btnPageWaits).click()
            cy.get(elements.btnChamaAlerta).click()
            cy.wait(5000)
            cy.on('window:alert', (str) => {//Pode ser usado quando o alerta só exibe a opção OK Obs.: 'str' contém a mensagem do alerta.
                expect(str).to.equal("Finally I'm here, just to say Hi :)"); //Validação:Espera que a váriavél do alerta (str) seja igual a mensagem que foi informada.
            });
        }


}

export default new Waits()