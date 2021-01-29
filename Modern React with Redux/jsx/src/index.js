// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

function getText() {
  return 'click on me!';
}

// Create a react component
const App = () => {
  const style = { backgroundColor: 'blue', color: 'white' };
  const buttonText = { text: 'Click me' };
  const labelText = 'Enter name:';
  const moreButtonText = ['Hi', 'There'];

  return (
    <div>
      <label className='label' htmlFor='name'>
        {labelText}
      </label>
      <input id='name' type='text' />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
        {labelText}
        {moreButtonText}
        {getText()}
        Submit
      </button>

      <button style={style}>More Button</button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
