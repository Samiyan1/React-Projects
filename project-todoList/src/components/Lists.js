import React from 'react'
import ListItam from './ListItam'

function Lists({del, done, todos}) {
     if(todos.length <= 0){
          return (
               <div className="bg-danger p-3 rounded">
                    <h4 className="text-white">کاری برای انجام نیست</h4>
               </div>
          )
     }
     return (
          <div className="listWrap">
               <ul className="list-group">
                  {
                       todos && todos.map((todo) => (
                         <ListItam 
                           key={todo.id}
                           id={todo.id}
                           title={todo.title}
                           delHandler={del}
                           doneHandler={done}
                           done = {todo.done}
                           
                           />
                       ))
                  }
               </ul>
          </div>
     )
}

export default Lists
