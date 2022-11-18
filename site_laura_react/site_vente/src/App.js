
import './App.css';
import BaseScreen from "./components/screens/BaseScreen";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';


function App() {
  
  return (
 <BrowserRouter>
 <Routes>
    <Route path="/" element={<BaseScreen />}>
  </Route>
 </Routes>
 </BrowserRouter>
  );
}


export default App;
