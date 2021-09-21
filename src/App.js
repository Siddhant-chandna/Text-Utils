import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, { useState } from 'react'

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const ShowAlert= (message,type)=>{
        setalert({
          msg:message,
          type:type
        })
        setTimeout(() =>{
          setalert(null);
        },1000);
  }

  const togglemode= ()=>{
   if(mode==='dark'){
    setmode('light');
    document.body.style.backgroundColor='white';
    ShowAlert("Light mode has been Enabled","success");
   }
   else{
     setmode('dark');
     document.body.style.backgroundColor='#011b41';
     ShowAlert("Dark mode has been Enabled","success");
   }
  }


                                  // page
  return (
    <>
         
    {/* <Navbar/>                                                        default props will be called  */}
      <Navbar title="TextUtils" about="About" mode={mode} togglemode={togglemode}/>                     {/* used props  */}
      <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm ShowAlert={ShowAlert} heading="Enter Text in textArea" mode={mode}/>
      {/* <About/>  */}
    </div>
    
    </>
  );
}

export default App;
