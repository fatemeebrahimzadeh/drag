import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Drag from "./Drag/Drag";

function App() {

  const [mounted, setMounted] = useState(false)

  let dragReference = useRef<HTMLDivElement>(null)
  let dragMouseDown: React.MouseEventHandler<HTMLDivElement> | undefined

  if (mounted) {
    dragMouseDown = Drag(dragReference)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="App">
      <div
        className='App__drag'
        ref={dragReference}
        onMouseDown={dragMouseDown} >
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <h1>Drag Logo Please</h1>
    </div>
  );
}

export default App;
