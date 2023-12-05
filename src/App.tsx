import React from 'react';
import { useState } from "react";
import './App.css';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { Task } from './Task';

function App() {
  const [taskList, setTaskList] = useState(
    [
      {name:'test1', done:false},
      {name:'test2', done:true},
      {name:'test3', done:false}  
    ]
  );

  const update = (task: Task) => {
    setTaskList(
      [...taskList, task]
    );
    console.log(taskList);
  }
  const deleteTask = (index: number) => {
    taskList.splice(index, 1)
    setTaskList(
      [...taskList]
    );
    console.log(taskList);
  }

  return (
    <div className="App">
      <TaskForm onUpdate={update} />
      <TaskList taskList={taskList} onUpdate={deleteTask} />
    </div>
  );
}

export default App;
