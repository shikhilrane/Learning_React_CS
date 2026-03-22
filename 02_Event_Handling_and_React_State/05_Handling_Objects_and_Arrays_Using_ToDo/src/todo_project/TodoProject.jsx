import React, {useState} from 'react'
import TodoItem from './TodoItem';

const TodoProject = () => {
    const [todos, setTodos] = useState([]);
    
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const todoText = e.target.todo.value;

        const newTodos = [...todos, {
            text : todoText,
            id : crypto.randomUUID(),
            completed : false
        }];

        setTodos(newTodos);

        e.target.reset();
    };

    const onTodoToggle = (id,checked) => {
        const newTodos = todos.map((item) => {
            if (item.id === id) {
                return { ...item, completed:checked };
            }
            return item;
        })
        setTodos(newTodos);
    }

    const handleDeleteTodo = (id) => {
        const newTodo = todos.filter(item => item.id !== id);
        setTodos(newTodo)
    }

    const empptyState = (
        <h2>Nothing here, add a Todo</h2>
    )

    return (
    <div>
        <h1>Super Todo</h1>

        <form onSubmit={handleFormSubmit}>
            <input type="text" name="todo" placeholder="Enter your todo here" />
            <button>Submit</button>
        </form>

        {todos.length > 0 ? (
            <div>
                {todos.map((item) => {
                    return <TodoItem key={item.id} item={item} onTodoToggle={onTodoToggle} onTodoDelete={handleDeleteTodo}/>;
                })}
            </div>) : (empptyState)
        }

        
    </div>
    );
}

export default TodoProject