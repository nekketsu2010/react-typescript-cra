import React from "react";
import { useState } from "react";
import type { Task } from './Task';

type TaskFormProps = {
    onUpdate: (task: Task) => void
};

export default function TaskForm({onUpdate}: TaskFormProps) {
    let taskName = 'hello';
    const sendTask = () => onUpdate({name:taskName, done:false});

    return (
        <>
            <div>
                <label>タスク名</label>
                <input type="form" value={taskName} />
                <input type="button" value="追加" onClick={sendTask} />
            </div>
        </>
    )
}
