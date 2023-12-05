import React from "react";
import { useState } from "react";
import type { Task } from './Task';

type TaskListProps = {
    taskList: Task[],
    onUpdate: (index: number) => void
};

export default function TaskList({ taskList, onUpdate }: TaskListProps) {
    const deleteTask = (e: React.MouseEvent<HTMLElement>) => onUpdate(parseInt(e.currentTarget.dataset.id!, 10));

    return (
        <>
            <div>
                {
                    taskList.map((task, index) => (
                        <p key={index}>
                            {/* チェックボックスでタスクが完了しているかどうかを切り替える */}
                            <input type="checkbox" defaultChecked={task.done} />
                            {task.name}
                            <input type="button" value="削除" onClick={deleteTask} data-id={index} />
                        </p>
                ))}
            </div>
        </>
    )
}
