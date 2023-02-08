import React from 'react'
import TodoFooter from '../TodoFooter/TodoFooter'
import "./TodoList.css"

function TodoList({ todos, setTodos }) {

    // Update Task (active/complete)
    const updateTask = (id) => {
        let updatedTasks = todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
                return todo
            } else {
                return todo
            }
        });
        setTodos(updatedTasks)
    }

    // Calculate incomplete tasks
    const calcNumberOfIncompletedTasks = () => {
        let count = 0;
        todos.forEach(todo => {
            if(!todo.completed) count++
        })
        return count
    }

    // Todo List Component
    return (
        <div className="todolist-container">
        <div className="todos-container">
            <div>
                {todos.map((todo, index) => (
                    <div className={`todo-item ${todo.completed && "todo-item-active"}`} 
                        onClick={() => updateTask(todo.id)}
                    >
                        {todo.task}
                    </div>
                ))}
            </div>
        </div>
        <div>
            <TodoFooter 
                numberOfIncompleteTasks={calcNumberOfIncompletedTasks()}
            />
        </div>
        </div>
    )
}

export default TodoList
