/// <reference types="cypress" />

import loginPage from "../support/page_objects/login.page";
import produtosPage from "../support/page_objects/produtos.page";




context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

/*  Como cliente 
-Quero acessar a Loja EBAC 
-Para fazer um pedido de 4 produtos 
-Fazendo a escolha dos produtos
-Adicionando ao carrinho
-Preenchendo todas opções no checkout
-E validando minha compra ao final */

beforeEach(() => {
    loginPage.fazerLogin()
    cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a')
    .should('be.visible')
    .and('contain', 'Sair');
    

});

  //Teste feito com Page Objects
it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    let qtd = 4
    produtosPage.visitarProdutos()
    produtosPage.buscarProdutoNoSearch('Apollo Running Short')
    produtosPage.addProdutoCarrinho(36,'Black', qtd)
    cy.get('.woocommerce-message').should('contain', qtd + ' × “Apollo Running Short” foram adicionados no seu carrinho.')
    })



});
