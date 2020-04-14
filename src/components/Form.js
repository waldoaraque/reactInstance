import React, {Fragment, useState} from 'react';
import { calculateTotal } from '../helpers'
const Form = (props) => {
    const { 
        quantity, 
        saveQuantity, 
        term, 
        saveTerm,
        total, 
        saveTotal,
        saveLoading
    } = props
    const [error, saveError] = useState(false) //state to validate the form
    const calculateLoan = e => {
        e.preventDefault()

        if (quantity === 0 || term === '') {
            saveError(true)
            return
        } 
        saveError(false)

        saveLoading(true)

        setTimeout(() => {
            const total = calculateTotal(quantity, term)
            console.log(total)
            saveTotal(total)
            saveLoading(false)
        }, 3000)
    }
    
    return(
        <Fragment>
            <form onSubmit={calculateLoan }>
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input 
                            className="u-full-width" 
                            type="number" 
                            placeholder="Ejemplo: 3000" onChange={ e => saveQuantity( parseInt(e.target.value) ) }
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select 
                            className="u-full-width"
                            onChange={ e => saveTerm( parseInt(e.target.value) ) }
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            value="Calcular" 
                            className="button-primary u-full-width" 
                        />
                    </div>
                </div>
            </form>

            {(error) ? <p className="error"> Todos los campos son obligatorios </p> : null }
            
        </Fragment>
    )
}

export default Form;