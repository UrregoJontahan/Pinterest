export async function Api() {
    const response = await fetch("https://todo-para-isa.zeabur.app/pinterest");
    const data = await response.json();
    console.log(data);

    return data; 
}
