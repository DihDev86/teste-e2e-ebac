class ProdutosPage {

    fazerLogin(){
        cy.visit('minha-conta')
        cy.get('#username').type('diego.qa.teste@teste.com.br')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
    }
    
    visitarProdutos(){
        cy.visit('produtos')
        
    }

    buscarProdutoNoSearch(produto){
        cy.get('[name="s"]').eq(1).type(produto)
        cy.get('.button-search').eq(1).click()
    }

    addProdutoCarrinho(tamamho,cor,quantidade){
        cy.get(`.button-variable-item-${tamamho}`).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        
    }



}

export default new ProdutosPage()