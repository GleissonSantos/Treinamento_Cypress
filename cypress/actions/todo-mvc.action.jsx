export function addTodo(text){
    cy.get('.new-todo').type(text + '{enter}')
}

export function checkLabel(text){
    cy.get('label').should('have.text', text)
}

export function deleteTodo(){
    cy.get('.destroy').click({force:true})
}

export function emptyTodo(){
    cy.get('.todo-list').should('not.have.descendants', 'li')

}

export function checkTodo(){
    cy.get('.toggle').click()

}

export function isChecked(){
    cy.get('.toggle').should('be.checked')

}

export function checkTextDecoration(){
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')

}