import React, {useEffect, useState} from 'react';
import {db} from './firebase'

const App = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        db.collection("todos")
            .get()
            .then(snapshot => {
                const todos = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setTodos(todos)
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    }, [])

    return (
        <div>
            <ul>
                {todos.map(todo =>
                    <li key={todo.id}>
                        <p>
                            {todo.title}
                        </p>
                    </li>)}
            </ul>
        </div>
    );
}

export default App;
