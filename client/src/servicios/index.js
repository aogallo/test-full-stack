const response = async () => {
    const response = await fetch("http://localhost/cliente")
    return response.json();
}

export default response;