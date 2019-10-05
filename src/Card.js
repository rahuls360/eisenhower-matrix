import React from 'react';

function Card({ setOpen, open }) {
  const [tasks, setTasks] = React.useState([]);
  return (
    <div className="card">
      {tasks.map(task => (
        <li>{task}</li>
      ))}
      <button className="button is-primary" onClick={() => setOpen(!open)}>+</button>
    </div>
  )
}
export default Card;