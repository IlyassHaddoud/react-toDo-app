const Task = ({ task, toggleTask, remove }) => {
  return (
    <div className="task">
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
  );
};

export default Task;
