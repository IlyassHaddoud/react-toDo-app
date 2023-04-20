import Task from "./Task";

const TaskList = ({ tasks, toggleTask, remove }) => {
  return (
    <div className="taskList">
      {tasks.length == 0 && <p>no tasks availables</p>}
      {tasks.map((task) => (
        <Task
          task={task}
          toggleTask={toggleTask}
          remove={remove}
          key={task.id}
        />
      ))}
    </div>
  );
};

export default TaskList;
