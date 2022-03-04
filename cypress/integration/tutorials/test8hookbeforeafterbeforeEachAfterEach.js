/// <reference types="cypress" />

describe('Hooks', function(){

  before( function() {    //It will be executed before starting all test
    cy.log('It will be executed before starting all tests')
  });

  after(function(){   //It will be executed at the end of all test
    cy.log('It will be executed after all tests')
  })

  beforeEach(function() {  //It will be executed before starting each and every test
    cy.log('It will be executed before each and every test')
  });

  afterEach(function(){  //It will be executed after each and every test
    cy.log('It will be executed after each and every test')
  })

  it('Test 1', function(){
    cy.log('Test 1')
  })

  it('Test 2', function(){
    cy.log('Test 2')
  })

  it('Test 3', function(){
    cy.log('Test 3')
  })

})
