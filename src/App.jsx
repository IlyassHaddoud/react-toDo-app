import { useEffect, useState } from "react";
import Header from "./Header";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    if (localStorage.getItem("tasks")) {
      return JSON.parse(localStorage.getItem("tasks"));
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (id, checked) => {
    setTasks((currentTasks) => {
      return currentTasks.map((t) => {
        if (t.id == id) {
          return { ...t, checked };
        }
        return t;
      });
    });
  };

  const remove = (id) => {
    const filtredTasks = tasks.filter((task) => task.id != id);
    setTasks(filtredTasks);
  };

  return (
    <div className="App">
      <Header setTasks={setTasks} />
      <TaskList tasks={tasks} toggleTask={toggleTask} remove={remove} />
    </div>
  );
}

export default App;
