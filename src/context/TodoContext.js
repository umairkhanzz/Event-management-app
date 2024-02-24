import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "my first todo work",
        completed: false,
    }],
    addTodo: (todo) => {},
    updateTodo: (id , todo) => {},
    deleteTodo: (id) => {},
    toogleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}