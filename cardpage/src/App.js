import logo from './logo.svg';
import './App.css';
import Mainpage from './components/Mainpage';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
        <div style={{backgroundColor:"#E5E5E5"}}>
        <Navbar/>
        <Mainpage/>
        </div>
    </>
    
  )
}

export default App;
