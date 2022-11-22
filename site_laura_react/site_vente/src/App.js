
import './App.css';
import BaseScreen from "./components/screens/BaseScreen";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Page_accueil from './components/pages/accueil/Page_accueil';


function App() {
  
  return (
 <BrowserRouter>
 <Routes>
    <Route path="/" element={<BaseScreen />}>
      <Route index element={<Page_accueil/>}/>
      <Route path='boutique' element={<h1>helloboutique</h1>}/>
      <Route path='pagePretAPorter' element={<h1>page pret a porter</h1>}/>
      <Route path='*' element={<h1>page non trouvée</h1>}/>
  </Route>
 </Routes>
 </BrowserRouter>
  );
}


export default App;
