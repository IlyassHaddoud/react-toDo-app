import { useState } from "react";

const Header = ({ setTasks }) => {
  const [newTask, setNewTask] = useState("");
  const add = () => {
    if (newTask != "") {
      setTasks((previous) => [
        ...previous,
        { id: crypto.randomUUID(), title: newTask, checked: false },
      ]);
    }
    setNewTask("");
  };
  return (
    <div className="header">
      <h1>ToDo list</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <input type="submit" value="Add" onClick={add} />
    </div>
  );
};

export default Header;
