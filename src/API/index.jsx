export async function Api() {
    const response = await fetch("https://todo-para-isa.zeabur.app/pinterest");
    const data = await response.json();

    return data; 
}

export async function ApiId(id) {
    const response = await fetch(`https://todo-para-isa.zeabur.app/pinterest/${id}`);
    const data = await response.json();

    return data; 
}