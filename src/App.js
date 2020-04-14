import React, { Fragment, useState } from 'react';
//Fragment puede exportar varios elementos... Sin necesidad de meterlo todo en un <div>
import Header from './components/Header';
import Form from './components/Form';
import './App.css';

const App = () => {

  const [quantity, saveQuantity] = useState(0) //state to quantity 
  const [term, saveTerm] = useState(0)

  return (
    <Fragment>
      <Header titulo='Cotizador de Prestamo'/> {/*titulo is prop to the Header component */}
      <div className="container">
        <Form 
          quantity={quantity}
          saveQuantity={saveQuantity}
          term={term}
          saveTerm={saveTerm}
        />
      </div>
    </Fragment>
  );
}

export default App;