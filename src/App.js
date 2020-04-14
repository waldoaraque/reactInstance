import React, { Fragment, useState } from 'react';
//Fragment puede exportar varios elementos... Sin necesidad de meterlo todo en un <div>
import Header from './components/Header';
import Form from './components/Form';
import Message from './components/Message';
import './App.css';
import Result from './components/Result';
import Spinner from './components/Spinner'
const App = () => {

  const [quantity, saveQuantity] = useState(0) //state to quantity 
  const [term, saveTerm] = useState('')//state to errors
  const [total, saveTotal] = useState(0)
  const [loading, saveLoading] = useState(false)

  let comp
  if (loading) {
    comp = <Spinner/>
  } else if (total === 0) {
    comp = <Message/>
  } else {
    comp = <Result
              total={total}
              term={term}
              quantity={quantity}
            />
  }

  return (
    <Fragment>
      <Header titulo='Cotizador de Prestamo'/> {/*titulo is prop to the Header component */}
      <div className="container">
        <Form 
          quantity={quantity}
          saveQuantity={saveQuantity}
          term={term}
          saveTerm={saveTerm}
          saveTotal={saveTotal}
          saveLoading={saveLoading}
        />
        <div className="mensajes">
          {comp /*get the results*/}
        </div>
        
      </div>
    </Fragment>
  );
}

export default App;