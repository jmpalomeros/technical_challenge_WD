import { Routes, Route } from "react-router-dom";
import './App.css';
import PhoneList from './components/PhoneList';
import PhoneDetails from './components/PhoneDetails';


function App() {
  return (
    <div className="App">
      

    <Routes>
    
      <Route path="/" element={<PhoneList />}/>
      <Route path='/phones/:id' element={<PhoneDetails />}/>
      
    </Routes>
    </div>
  );
}

export default App;
