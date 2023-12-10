import React from 'react';
import './style/App.css'

const App = (prop) => {
  return (
    <div>
      <header>
        <h1>Welcome To<br/>WP Cam</h1>
        <div className='buttonWrapper'>
          <button className='button'>Get Started</button>
        </div>
      </header>
    </div>
  )
};

export default App;