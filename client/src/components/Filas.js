import React, { useEffect } from 'react'

const Filas = ({id,nombre,nit,correo}) => {

    return (
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{nit}</td>
            <td>{correo}</td>
        </tr>
    )
}

export default Filas
