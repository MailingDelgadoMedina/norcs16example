import React from 'react';

function Tasks({ tasks }) {
  console.log('Tasks array:', tasks); // Add a console log to verify the data

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.length === 0 ? (
          <li>No tasks available</li>
        ) : (
          tasks.map((task, index) => (
            <li key={index}>
              <strong>{task.name}</strong>: {task.details}, assigned to {task.assignees} on {task.date} at {task.time}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Tasks;
