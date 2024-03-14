export async function Api() {
    const response = await fetch(`/src/JSON/images.json`);
    const data = await response.json();
    console.log(data);

    return data; 
}
