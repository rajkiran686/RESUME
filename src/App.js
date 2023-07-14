import './App.css';
import './Resume.css'
import Resume from './Resume';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

function App() {
  const componentRef=useRef()
  const handlePrint=useReactToPrint({
    content:()=>componentRef.current
  })
  return (
    <div >
      <h1>CLICK TO VIEW RESUME</h1>
      <button onClick={handlePrint}>click</button>
      <div style={{display:'none'}}>
        <div ref={componentRef}>
          <Resume/>
        </div>
      </div>
      <Resume/>
    </div>
  );
}

export default App;
