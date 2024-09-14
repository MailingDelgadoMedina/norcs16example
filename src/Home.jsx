import React, { useState, useRef } from 'react';
import Tasks from './Tasks'; // Import the Tasks component

function Home() {
  const taskWindowRef = useRef(null);

  // States to manage form inputs
  const [taskName, setTaskName] = useState(''); // hooks to manage state and is a substitute for getElementById
  const [taskDetails, setTaskDetails] = useState('');
  const [taskAssignees, setTaskAssignees] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const [tasks, setTasks] = useState([]); // State to manage task list

  // Function to open the task dialog
  function OpenTaskWindow() {
    taskWindowRef.current.showModal();
  }

  // Function to close the task dialog
  function CloseTaskWindow() {
    taskWindowRef.current.close();
  }

  // Function to handle task submission
  function handleSubmitTask() {
    const newTask = {
      name: taskName,
      details: taskDetails,
      assignees: taskAssignees,
      date: taskDate,
      time: taskTime,
    };

    setTasks([...tasks, newTask]);

    // Clear inputs
    setTaskName('');
    setTaskDetails('');
    setTaskAssignees('');
    setTaskDate('');
    setTaskTime('');

    CloseTaskWindow();
  }

  return (
    <main>
      <button id="createTask" onClick={OpenTaskWindow}>
        Create New Task
      </button>

      <dialog id="taskWindow" ref={taskWindowRef}>
        <h1>Enter Your Task</h1>
        <p>Task Name:</p>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)} //event listener or handler react version
          placeholder="Enter task name"
        />

        <p>Task Details:</p>
        <input
          type="text"
          value={taskDetails}
          onChange={(e) => setTaskDetails(e.target.value)}
          placeholder="Enter task details"
        />

        <p>Task Assignees:</p>
        <input
          type="text"
          value={taskAssignees}
          onChange={(e) => setTaskAssignees(e.target.value)}
          placeholder="Enter task assignees"
        />

        <p>Task Date:</p>
        <input
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
        />
        <input
          type="time"
          value={taskTime}
          onChange={(e) => setTaskTime(e.target.value)}
        />

        <br />
        <button onClick={handleSubmitTask}>Submit Task</button>
      </dialog>

      {/* Display Tasks */}
      <Tasks tasks={tasks} />
    </main>
  );
}

export default Home;
