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

/*

                            1. Project Flow :
                                    User types todo
                                            ↓
                                    Form submit
                                            ↓
                                    handleFormSubmit() run
                                            ↓
                                    Todo object create {text, id, completed}
                                            ↓
                                    setTodos([...todos, newTodo])
                                            ↓
                                    React re-render
                                            ↓
                                    todos.map()
                                            ↓
                                    TodoItem components render

                            2. Checkbox flow:
                                    Checkbox click
                                            ↓
                                    onTodoToggle(id, checked)
                                            ↓
                                    todos.map() me matching id update
                                            ↓
                                    setTodos(updatedTodos)
                                            ↓
                                    React re-render
                                            ↓
                                    Text line-through if completed

                            3. Delete flow:
                                    Delete button click
                                            ↓
                                    handleDeleteTodo(id)
                                            ↓
                                    todos.filter() remove item
                                            ↓
                                    setTodos(newTodos)
                                            ↓
                                    React re-render
                                            ↓
                                    Todo removed from UI

                            4. Empty state flow:
                                    todos.length === 0
                                            ↓
                                    Show "Nothing here, add a Todo"
*/