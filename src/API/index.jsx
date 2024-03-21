const URL_API = "http://localhost:4000" // Se cambia url del api a localhost

export async function Api() { // -> getImagesfromApi
    const response = await fetch(`${URL_API}/pinterest`);
    const data = await response.json();

    return data; 
}

export async function ApiId(id) { // -> getImageById
    const response = await fetch(`${URL_API}/pinterest/${id}`);
    const data = await response.json();

    return data; 
}

export async function createImage(body) {
    const response = await fetch(`${URL_API}/pinterest/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    return response
}

