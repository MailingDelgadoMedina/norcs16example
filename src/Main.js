import React, { useRef } from 'react';

function Main() {

//     Changes made:
// useRef Hook: Instead of document.getElementById, I used useRef to manage the dialog element, which is a cleaner approach in React.
// Semantic Input Types: I added placeholders for the input fields to provide better user guidance.
// useEffect for Future Enhancements: If you need to add more complex state or lifecycle methods later, useEffect and useState can be used for managing form data or handling submissions.
  const taskWindowRef = useRef(null);

  function OpenTaskWindow() {
    taskWindowRef.current.showModal();
  }

  function CloseTaskWindow() {
    taskWindowRef.current.close();
  }

  return (
    <main>
      <button id="createTask" onClick={OpenTaskWindow}>
        Create New Task
      </button>

      <dialog id="taskWindow" ref={taskWindowRef}>
        <h1>Enter Your Task</h1>
        <label>Task Name:</label>
        <input type="text" placeholder="Enter task name" />
        
        <label>Task Details:</label>
        <input type="text" placeholder="Enter task details" />
        
        <label>Task Assignees:</label>
        <input type="text" placeholder="Enter task assignees" />
        
        <label>Task Date:</label>
        <input type="date" /> <input type="time" />
        
        <label>Task Due:</label>
        <input type="date" /> <input type="time" />
        
        <br />
        <button onClick={CloseTaskWindow}>Submit Task</button>
      </dialog>
    </main>

  );
}

export default Main;
