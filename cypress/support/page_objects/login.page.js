class loginPage {

    fazerLogin(){
        cy.visit('minha-conta')
        cy.get('#username').type('diego.qa.teste@teste.com.br')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()  
    }
}

export default new loginPage()