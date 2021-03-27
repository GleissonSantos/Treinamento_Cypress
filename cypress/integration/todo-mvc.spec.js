/// <reference types ="Cypress" />

import {addTodo, checkTodo, checkLabel, deleteTodo, emptyTodo, isChecked, checkTextDecoration} from "../actions/todo-mvc.action"
const faker = require ('faker')

beforeEach(()=>{ cy.visit('/')})


describe ('Lista de tarefas ToDOS', () =>{

    it ('adicionar tarefa', ()=>{
      addTodo(faker.lorem.text(2))
    
    })


    it ('adicionar tarefa', ()=>{
        addTodo('Aprender cypress')
        checkLabel('Aprender cypress')
      })

    it ('remover tarefa', ()=>{
        addTodo('Aprender cypress')
        deleteTodo()
        emptyTodo()
      })

      it('verificar tarefa marcada com o texto cortado', ()=>{
        addTodo('Aprender cypress')
        checkTodo()
        isChecked()
        checkTextDecoration()

      })
    })
    