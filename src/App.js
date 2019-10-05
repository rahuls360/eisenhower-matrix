import React from 'react';
import './theme.scss';
import Card from './Card';
import classNames from 'classnames';

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="app-main">
      <div className="container mt-3">
        <div className="columns">
          <div className="column">
            <Card setOpen={setOpen} open={open} />
          </div>
          <div className="column">
            <Card setOpen={setOpen} open={open} />
          </div>
          <div className="column">
            <Card setOpen={setOpen} open={open} />
          </div>
          <div className="column">
            <Card setOpen={setOpen} open={open} />
          </div>
        </div>
        <div className={classNames({
          'modal': true,
          'is-active': open
        })}>
          <div className="modal-background" onClick={() => setOpen(false)}></div>
          <div className="modal-content">
            <div className="box">
              <p>This is my modal</p>
            </div>
          </div>
          <button class="modal-close is-large" aria-label="close" onClick={() => setOpen(false)}></button>
        </div>
      </div>
    </div>
  );
}

export default App;
