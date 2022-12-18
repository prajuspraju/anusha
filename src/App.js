//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    
      
    <h1>student form</h1>
    <hr></hr>
      <form id="name">
       
        name:<input type="text" name="name" required></input><br></br>
        regno:<input type="text" name="reg" required></input><br></br>
       email:<input type="email" name="email"></input><br></br>
        address:<textarea></textarea><br></br>
       <input type="submit" onclick="submit"></input>
      </form>
        
      
    </div>
  );
}

export default App;
