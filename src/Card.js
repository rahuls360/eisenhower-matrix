import React from 'react';

function Card({ setOpen, open, title }) {
  const [tasks, setTasks] = React.useState([]);
  return (
    <div className="card">
      <h3 className="subtitle">{title}</h3>
      {tasks.map(task => (
        <li>{task}</li>
      ))}
      <button className="button is-primary" onClick={() => setOpen(!open)}>+</button>
    </div>
  )
}
export default Card;