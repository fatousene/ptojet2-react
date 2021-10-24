import gomycode from './gomycode.png';
import './App.css';
import './style.css';
import  video1 from'./video1.mp4';

function App() {
  return (
  <div style={{border:"solid 2 black",maxWidth:"100vw"}}>

    <h1 className="titlered">Your Name Here</h1>
    
    <img src={gomycode} alt="gomycode"/>
    <img src="/logo192.png"/>
    <br></br>
    <br></br>
    <video controls>
       <source src={video1} type="video/mp4"/>
    </video>

  </div>
   
  
   
  );
}

export default App;
