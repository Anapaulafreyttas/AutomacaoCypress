const url = 'https://next.me/'
const btnCokie = '#fechar'
const campoNome = '#name-footer'
const campoCpf = ':nth-child(2) > .StyledTextField--9qujls > #cpf-footer-label > #cpf-footer'
const campoEmail = '#email-footer'
const confirmarEmail = '#email_confirm-footer'
const btnEnviar = '#footer-form > .next-section__container__default > .styles_form-lead__form__YjCVF > #continuar'
const validandoTexto = '.styles_mobile__8fvDF > :nth-child(1)'



describe ('Validando site next' , () => {

    it ('Acessando site next' , () => {
        cy.visit(url);
        cy.get(btnCokie).click();
        cy.get(campoNome).type('Ana Carolina Macedo');
        cy.get(campoCpf).type('55107450458');
        cy.get(campoEmail).type('rosalunabarbosa@libbero.com.br');
        cy.get(confirmarEmail).type('rosalunabarbosa@libbero.com.br');
        cy.get(btnEnviar).click();
        cy.get(validandoTexto).contains('Pronto! Agora você já é quase um next. Nosso e-mail de confirmação vai chegar por aí logo mais.');

       
    })
})