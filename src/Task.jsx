const Task = (props) => {
  return (
    <div className="task">
      <div className="content">
        <input type="checkbox" />
        <p>{props.content}</p>
      </div>
      <div className="btns">
        <button>delete</button>
      </div>
    </div>
  );
};

export default Task;
