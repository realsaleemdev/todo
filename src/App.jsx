import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";
import './App.css';
import { useEffect, useState } from "react";

export default function App() {
  const [taskList, setTaskList] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tasklist")) || [];
    } catch {
      return [];
    }
  });

  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList));
  }, [taskList]);
  return (
    <>
      <div className="app">
        <Header />
        <AddTask
          taskList={taskList}
          setTaskList={setTaskList}
          task={task}
          setTask={setTask}
        />
        <ShowTask
          taskList={taskList}
          setTaskList={setTaskList}
          setTask={setTask}
        />
      </div>
    </>
  );
}