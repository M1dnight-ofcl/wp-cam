/* eslint-disable no-unused-vars */

import { React, useEffect, useState, useRef } from 'react';
import './style/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate, faCaretDown, faClose } from '@fortawesome/free-solid-svg-icons'

const App = (prop) => {
  const Alert = (prop) => {
    return (
      <div className='alert'>
        <FontAwesomeIcon icon={faClose} className='close' onClick={(e) => {
          e.preventDefault();
          e.target.parentElement.style.top = "200dvh";
        }} />
        <h1>{prop.title}</h1>
        <hr/><br/>
        <p>
          {prop.info}
        </p>
      </div>
    )
  }
  var [Status, setStatus] = useState("Home");
  const [Output, setOutput] = useState([]);
  const generateNewID = () => {
    try {
        let length = 50,
            result = '', 
            characters = `0123456789!@#$%^&*()-_=+[{]}|;:"'<>,./?~aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ`, 
            charactersLength = characters.length,
            counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        let finalresult = btoa(result)
        // console.log(finalresult)
        return finalresult;
    } catch (e) {
        console.error(e);
        return null;
    }
  }
  const appendToOutput = (string) => {
    setOutput((old) => old.concat({
      "id": generateNewID(),
      "contents": string,
      "timestamp": new Date().toLocaleTimeString(),
    }))
  }
  const syncWallpaper = (e) => {
    setOutput([])
    setStatus("Synchronizing")
    e.preventDefault();
    const start = performance.now(); 
    var syncingMenu = document.getElementById('syncing');
    syncingMenu.style.bottom="0";

    appendToOutput(`Synchronization has been initialized`)

    const end = performance.now();
    appendToOutput(`Done in ${end - start}ms`)
    setStatus("Synchronization Complete")
  }
  useEffect(() => {
    document.getElementsByClassName('wrapper')[0].scrollTo({
      top: document.getElementsByClassName('wrapper')[0].scrollHeight,
      behavior: "smooth", 
    })
  }, [Output.length])
  useEffect(() => {
    document.title = `WP Cam: ${Status}`;
    // appendToOutput("lol")
  })
  return (
    <div className='menu'>

      <Alert title="Important!!" info="Please verify that you have the 'override wallpaper' setting enabled to use this plugin. It can be found in the general settings tab." />

      <div id='syncing'>
        <FontAwesomeIcon icon={faCaretDown} className='close' onClick={(e) => {
          e.preventDefault();
          setOutput([])
          document.getElementById('syncing').style.bottom = "-95%";
          setStatus("Home")
        }} />
        <FontAwesomeIcon icon={faArrowsRotate} className='syncingIcon' spin />
        <h1 className='syncingText'>Syncing</h1>
        <code>
          <h1>Output</h1>
          <div className='wrapper'>{Output.map((data) => 
            <p key={data.id}>[{data.timestamp}]: {data.contents}</p>
          )}</div> 
        </code>
      </div>

      <div id='home'>
        <h1>Welcome To<br/>WP Cam</h1>
        <div className='buttonWrapper'>
          <button onClick={(e) => syncWallpaper(e)} className='button'>Sync</button>
        </div>
      </div>

    </div>
  )
};

export default App;