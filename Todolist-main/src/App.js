import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addTask = () => {
    const newTask = {
      title: newTaskTitle,
      description: newTaskDescription,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
    setNewTaskDescription("");
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index, newTitle, newDescription) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      title: newTitle,
      description: newDescription,
    };
    setTasks(updatedTasks);
  };

  const confirmTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="form-group ">
        <label style={{textAlign:"center"}} htmlFor="title">Title:</label>
        <div className="inputFlex">
        <input
          id="title"
          className="form-control inputAlign"
          value={newTaskTitle}
          onChange={(event) => setNewTaskTitle(event.target.value)}
        />

        </div>
      </div>
      <div className="form-group">
        <label style={{textAlign:"center"}}  htmlFor="description">Description:</label>
        <div className="inputFlex">

        <input
          id="description"
          className="form-control inputAlign"
          value={newTaskDescription}
          onChange={(event) => setNewTaskDescription(event.target.value)}
        /></div>
      </div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px"}}>      <button className="btn btn-primary" onClick={addTask}>
        Add Task
      </button>
</div>
      <div className="form-group">
        <label style={{textAlign:"center"}}  htmlFor="search">Search:</label>
        <div className="inputFlex">

        <input
          id="search"
          className="form-control inputAlign"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        </div>
      </div>
      <ul className="list-group">
        {filteredTasks.map((task, index) => (
          <li className="list-group-item" key={index}>
            <h3 style={{padding:"4px",textAlign:"center",color:"red"}}>{task.title}</h3>
            <p style={{padding:"6px",color:"blue"}}>{task.description}</p>
            {!task.completed && (
              <div  style={{display:"flex",justifyContent:"center",padding:"5px"}}className="btn-group">
               <div>
               <button
                  className="btn btn-secondary"
                  onClick={() => {
                    const newTitle = prompt("Enter new title:");
                    const newDescription = prompt("Enter new description:");
                    editTask(index, newTitle, newDescription);
                  }}
                >
                  Edit
                </button>
                </div>
                <div>
                <button
                  className="btn btn-success"
                  onClick={() => confirmTask(index)}
                >
                  Confirm
                </button>
                </div>
              </div>
            )}
            <div style={{display:"flex",justifyContent:"center",padding:"5px"}}>
            <button
              className="btn btn-danger"
              onClick={() => removeTask(index)}
            >
              Remove
            </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
