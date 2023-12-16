import { useState } from "react";

type Todo = {
    id: number,
    title: string,
    created: Date,
    isDone: boolean
}

let maxId = 0;
export default function StateTodo() {
    const [title, setTitle] = useState('');
    const [todo, setTodo] = useState([] as Todo[]);

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleClick = () => {
        setTodo([
            ...todo,
            {
                id: ++maxId,
                title,
                created: new Date(),
                isDone: false
            }
        ]);
        setTitle('');
    };

    return (
        <div>
            <label>
                やること：
                <input type="text" name="title" value={title} onChange={handleChangeTitle} />
            </label>
            <button type="button" onClick={handleClick}>追加</button>
            <hr />
            <ul>
                {todo.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}