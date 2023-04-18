import { useEffect, useState } from "react";
import Task from "./Task";

const TaskList = () => {
  const [tasks, setTasks] = useState(() => {
    if (localStorage.getItem("tasks")) {
      return JSON.parse(localStorage.getItem("tasks"));
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className="taskList">
      {!tasks && "no todos"}
      {tasks.map((task) => (
        <Task content={task.name} />
      ))}
    </div>
  );
};

export default TaskList;
