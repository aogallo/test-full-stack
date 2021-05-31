import React from 'react'
import Lista from '../components/Lista'
import response from '../servicios/index';
import { useQuery } from 'react-query'

const Cliente = () => {
    const titulos = ["Codigo", "Nombre", "NIT", "Correo"]
    const { isLoading, status, data, isFetching, error } = useQuery('posts', response)

    if (isLoading) return 'Cargando...';
    return(
        <>
            Cliente
            <Lista titulos={titulos}  data={data}/>
        </>
    )
}

export default Cliente
