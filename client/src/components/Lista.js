import React from 'react'
import Filas from './Filas'
import TitulosTabla from './TitulosTabla'

const Lista = ({titulos, data}) => {
    const filas = data.data.map( (fila) => <Filas key={fila.id} {...fila} />)
    return (
        <table className="ui celled table">
        <thead>
            <TitulosTabla titulos={titulos}/>
        </thead>
        <tbody>
            {filas}
        </tbody>
        </table>
    )
}

export default Lista
