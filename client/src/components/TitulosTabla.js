import React from 'react'

const TitulosTabla = ({titulos}) => {
    return (
        <tr>
            {
                titulos.map( titulo => <th key={ titulo }>{ titulo } </th>)
            }
        </tr>
    )
}

export default TitulosTabla;