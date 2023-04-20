import { useState } from "react";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const add = () => {
    if (newTask != "") {
      setTasks((previous) => [
        ...previous,
        { id: crypto.randomUUID(), title: newTask, checked: false },
      ]);
    }
    setNewTask("");
  };

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
      <div className="header">
        <h1>ToDo list</h1>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input type="submit" value="Add" onClick={add} />
      </div>
      <div className="taskList">
        {tasks.length == 0 && <p>no tasks availables</p>}
        {tasks.map((task) => (
          <div className="task" key={task.id}>
            <div className="content">
              <input
                type="checkbox"
                checked={task.checked}
                onChange={(e) => toggleTask(task.id, e.target.checked)}
              />
              <p>{task.title}</p>
            </div>
            <div className="btns">
              <button onClick={() => remove(task.id)}>delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
