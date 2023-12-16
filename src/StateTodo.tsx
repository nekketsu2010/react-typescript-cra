import { useState } from "react";
import './StateTodo.css';

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

    const handleDone = (e: React.MouseEvent<HTMLButtonElement>) => {
        setTodo(todo.map(item => {
            if (item.id === Number(e.currentTarget.dataset.id)) {
                return {
                    ...item,
                    isDone: true
                };
            } else {
                return item;
            }
        }));
    };

    const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
        setTodo(todo.filter(item => item.id !== Number(e.currentTarget.dataset.id)));
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
                    <li key={item.id} className={item.isDone ? 'done' : ''}>
                        {item.title}
                        <button type="button" onClick={handleDone} data-id={item.id}>済</button>
                        <button type="button" onClick={handleRemove} data-id={item.id}>削除</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}