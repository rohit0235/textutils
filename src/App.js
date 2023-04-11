import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {
  return (
    <>
    <Navbar/>
    <Alert  alert="This Website Uses Cookies "/>      
    <div className="container">
    
    <Textform/>
    </div>
           
      
      
    </>
  );
}

export default App;
