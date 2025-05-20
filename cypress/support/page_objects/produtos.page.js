class produtosPage{

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

export default new produtosPage()