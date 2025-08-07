import InputEntrada from '../../support/Pages/Entradas';
import Buttons from '../../support/Pages/Buttons';
import Dropdowns from '../../support/Pages/Dropdowns';
import Alerts from '../../support/Pages/Alerts';
import Waits from '../../support/Pages/Waits';



describe('Exercicios Cypress', () => {

    context('Validações diversas', () => {

        beforeEach(() => {
            cy.visit("/")
        });

        it('Validações Input (Entradas)', () => {

            InputEntrada.entradaDedados('Teste da Silva')
            InputEntrada.nevegaViaTab('Teste da Silva2')//Navegação via tecla TAB
            InputEntrada.obterAtributo()//Recuperar um atributo de um campo   
            InputEntrada.clearText()//Limpar um texto
            InputEntrada.validateDisabledfield()//Validar campo Desabilitado
            InputEntrada.validateReadonlyfield()//validar campo somente leitura

        });
        it('Validações Buttons', () => {

            Buttons.obterCordenadasDoBotao() //Obter cordenadas do botão
            Buttons.obterACorDoBotao() //Obter a cor de um Botão
            Buttons.obterlarguraEAlturaDoBotao() //Encontrar largura e Altura de um Botão
            Buttons.validaBotaoDesabilitado() //Validar Botão desabilitado
            Buttons.clicaESegura() //Clicar e segurar um Botão
        });
        it('Validações de Dropdown (Listas e itens suspensas', () => {

            Dropdowns.selectItemLista('Apple') //Selecionando um item  da lista
            Dropdowns.selectMultOpi()  //Selecionando multiplas opções
            Dropdowns.selectUltItemList()//Selecionando a última opção de um dropdown (Lista uspensa/Caixa de seleção)
            Dropdowns.imprimiTodasOpiList() //imprimindo todas as opções de uma lista
            Dropdowns.selectValorListEImprimi('Argentina') //Selecionando um valor da lsta e imprimindo

        });
        it('Validações de Alerts (Alertas)', () => {

            Alerts.confirmaAlertaSimples() //Confirmar um alerta simples que exibe apenas OK
            Alerts.confirmaOuCancelaAlert()//Confirmar ou Cancelar um alerta que exibe OK e Cancelar
            Alerts.alertComEntradaDeTexto('Teste teste teste') //Interagir com um alerta que exige entrada de texto e em seguida Confirmar ou Cancelar
            Alerts.alertModerno() //Interage com alerta moderno, valida a mengem e fecha o alarta

        });
        it('Interagir com Radio Buton', () => {

            //Selecionando um radio Button
            cy.get(':nth-child(7) > .menu-card > .card > .card-footer > .card-footer-item').click()
            cy.get("#yes").click() //Marca como check um rado button
            cy.get("#yes").should("be.checked") //Valida se o radio button está checado
            cy.get("#no").should("not.be.checked") //Valida se o radio button não está checado

            //Confirmando se você pode selecionar apenas um botão de opção
            cy.get("#one").click()
            cy.get("#one").should('be.checked')
            cy.get("#two").should('not.be.checked')
            cy.get("#two").click()
            cy.get("#two").should('be.checked')
            cy.get("#one").should('not.be.checked')

            //Encontrando Bug - Onde deve ser selecionado apenas um radio button
            cy.get("#nobug").click()
            cy.get("#nobug").should('be.checked')
            cy.get("#bug").should('not.be.checked')
            cy.get("#bug").click()
            cy.get("#bug").should('be.checked')
            //cy.get("#nobug").should('not.be.checked')

            //Identificando qual radio button está marcado
            cy.get('#foo').then(radio => { //Armazenou/copiou/encadeou o valor
                if (radio.is(':checked')) { //Informada a seguinte condção: SE radio (foo) estiver checked, trazer o LOG O radio "Sim" está marcado
                    cy.log('O radio "Foo" está marcado');
                } else { //Informada a seguinte condção: SENÃO, fazer a mesma verificaão no outro radio button
                    //cy.get('#notfoo').should('be.checked');
                    cy.get('#notfoo').then(radio2 => {
                        if (radio2.is(':checked')) {
                            cy.log('O radio "notfoo" está marcado');
                        } else { cy.log('Nenhum Radio está marcado'); } // se nenhum estiver marcado deve trazer esta mensagem

                    })
                }
            });

            //Identificar qual radio button está desabilitado
            cy.get("#going").then(radio1 => { //Pega o elemento e Armazenou/copiou/encadeou o valor do elemento #going na variavel radio1
                if (radio1.is(':disabled')) { //Informada a seguinte condção: SE radio1 estiver desabilitado
                    cy.log('Radio button INDO desabilitado') //trazer o LOG 'Radio button INDO desabilitado'
                } else { //SENÃO
                    cy.get("#notG").then(radio2 => { //Pega o elemento e Armazenou/copiou/encadeou o valor do elemento #notG na variavel radio2
                        if (radio2.is(':disabled')) { //Informada a seguinte condção: SE radio2 estiver desabilitado
                            cy.log('Radio button NÃO VOU desabilitado') //trazer o LOG 'Radio button NÃO VOU desabilitado'
                        } else { //SENÃO
                            cy.get("#maybe").then(radio3 => { //Pega o elemento e Armazenou/copiou/encadeou o valor do elemento #maybe na variavel radio3
                                if (radio3.is(':disabled')) { //Informada a seguinte condção: SE radio3 estiver desabilitado
                                    cy.log('Radio button TALVEZ desabilitado') //trazer o LOG 'Radio button TALVEZ desabilitado'
                                } else { cy.log('Nenhum radio button está desabilitado') } //SENÃO trazer o log 'Nenhum radio button está desabilitado'
                            })

                        }
                    })
                }

            })

            //Identificando se o checkbox está marcado
            cy.get(':nth-child(6) > .checkbox > input').then(checkbox => {
                if (checkbox.is(':checked')) {
                    cy.log('checkbox selecionado')
                } else { cy.log('checkbox não está selecionado') }
            })

        });
        it('Interagindo com slider (Botão deslizante)', () => {
            cy.get(':nth-child(14) > .menu-card > .card > .card-footer > .card-footer-item').click()
            cy.get("#generate") // seletor da bolinha do slider
                .invoke('val', 20)        // Define o valor do slider
                .trigger('input')         // Dispara o evento de input
            //  .trigger('mousedown', { which: 1 }) // pressiona o mouse - usar quando precisar deslizar o botão
            //  .trigger('mousemove', { clientX: 50 }) // move até posição X  - usar quando precisar deslizar o botão
            //  .trigger('mouseup'); // solta o mouse   - usar quando precisar deslizar o botão
            cy.get("button[class='button is-primary']").click()
            // Validando se a quantidade de itens selecionados no slider bate com a quantidade de itens mostrado na mensagem de confrmação
            cy.get('.notification').invoke('text').then((texto) => {
                const paises = texto.split(' - ');
                const quantidade = paises.length;
                cy.log(`Quantidade de países: ${quantidade}`);
                expect(quantidade).to.eq(20);
            });

        });

        it.only('Interagir com Waits (Aguardar para depois realizar ação', () => {
            Waits.FuncaoWait()
        });

    });

});