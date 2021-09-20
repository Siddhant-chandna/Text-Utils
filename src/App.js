import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';

function App() {
  return (
    <>
         
    {/* <Navbar/>                                                        default props will be called  */}
      <Navbar title="TextUtils11" about="About11"/>                     {/* used props  */}
    <div className="container my-3">
      <TextForm heading="Enter Text in textArea"/>
      {/* <About/> */}
    </div>
    
    </>
  );
}

export default App;
