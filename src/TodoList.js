import React from 'react'

function TodoList({todo}) {

    function handleDelete(){
        dispatch({ type: "todo_delete", payload: {  } });
      }
    return (
        <div>
            <h2>{todo.name}</h2>
            <button onClick={() => handleDelete(todo.name)}>delete</button>
        </div>
    )
}

export default TodoList
<div className="h2"></div>