
import './App.css';
import BaseScreen from "./components/screens/BaseScreen";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Page_Accueil from './components/pages/accueil/Page_Accueil';
import Pret_A_Porter from './components/pages/Pret_A_Porter/PretAPorter';
import Boutique from './components/pages/boutique/Boutique';
import Visage from './components/pages/cosmetiques/visage/Visage';
import Corps from './components/pages/cosmetiques/corps/Corps';
import Cosmetiques from './components/pages/cosmetiques/pageCosmetiques/Cosmetiques';
import Accessoires from './components/pages/accessoires/Accessoires';
import Sacs from './components/pages/accessoires/sacs/Sacs';
import Bijoux from './components/pages/accessoires/bijoux/Bijoux';
import Ceintures from './components/pages/accessoires/ceintures/Ceintures';
import Chaussures from './components/pages/accessoires/chaussures/Chaussures';
import Echarpes from './components/pages/accessoires/echarpes/Echarpes';
import Connexion from './components/pages/connexion/Connexion';
import Jupes from './components/pages/Pret_A_Porter/jupes/Jupes';
import Manteaux from './components/pages/Pret_A_Porter/manteau/Manteaux';
import Bas from './components/pages/Pret_A_Porter/bas/Bas';
import Hauts from './components/pages/Pret_A_Porter/hauts/Hauts';
import Paiement from './components/pages/paiement/Paiement';
import PageBas from './components/pages/Pret_A_Porter/bas/Bas';
import PageHauts from './components/pages/Pret_A_Porter/hauts/PageHaut';
import PageJupes from './components/pages/Pret_A_Porter/jupes/PageJupes';
import PageManteaux from './components/pages/Pret_A_Porter/manteau/PageManteaux';
import Contact from './components/pages/contact/Contact';
import Panier from './components/pages/panier/Panier';
import { useEffect, useState } from 'react';



function App() {
  const [ text , setText ] = useState ( "" );
useEffect (() => {
fetch ( 'http://boutique-laura/' )
. then ( response => response . text ())
. then ( content => setText ( content ));
}, [])

  return (
 <BrowserRouter>
 <Routes>
    <Route path="/" element={<BaseScreen />}>
      <Route index element={<Page_Accueil/>}/>
      <Route path='Boutique' element={<Boutique/>}/>
      <Route path='PretAPorter' element={<Pret_A_Porter/>}/>
      <Route path='Cosmetiques' element={<Cosmetiques/>}/>
      <Route path='Visage' element={<Visage/>}/>
      <Route path='Corps' element={<Corps/>}/>
      <Route path='Accessoires' element={<Accessoires/>}/>
      <Route path='Sacs' element={<Sacs/>}/>
      <Route path='Bijoux' element={<Bijoux/>}/>
      <Route path='Echarpes' element={<Echarpes/>}/>
      <Route path='Chaussures' element={<Chaussures/>}/>
      <Route path='Ceintures' element={<Ceintures/>}/>
      <Route path='Jupes' element={<Jupes/>}/>
      <Route path='Manteaux' element={<Manteaux/>}/>
      <Route path='Hauts' element={<Hauts/>}/>
      <Route path='Bas' element={<Bas/>}/>
      <Route path='Connexion' element={<Connexion/>}/>
      <Route path='Bas' element={<PageBas/>}/>
      <Route path='PageHauts' element={<PageHauts/>}/>
      <Route path='PageJupes' element={<PageJupes/>}/>
      <Route path='PageManteaux' element={<PageManteaux/>}/>
      <Route path='Paiement' element={<Paiement/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='Panier' element={<Panier/>}/>
      <Route path='*' element={<h1>page non trouvée</h1>}/>
  </Route>v
 </Routes>
 </BrowserRouter>
  );
}


export default App;
