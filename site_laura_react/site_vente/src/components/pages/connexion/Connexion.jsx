import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import "./Connexion.css";
function Connexion() {

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink className='bouton' onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Connexion
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink className='bouton' onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            S'enregistrer
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Mot de passe' id='form2' type='password'/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Se souvenir de moi' />
            <a href="!#">Mot de passe oublié ?</a>
          </div>

          <MDBBtn  className="bouton mb-4 w-100">Connexion</MDBBtn>
         

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <MDBInput wrapperClass='mb-4' label='Nom' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Prénom' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Mot de passe' id='form1' type='password'/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label="j'ai lu et accepte les conditions d'utilsations" />
          </div>

          <MDBBtn className="bouton">Enregistrer</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Connexion;