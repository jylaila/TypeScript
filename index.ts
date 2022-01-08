//Tratando a tag Input
//informar que não é um elemento generico e sim um input
const input = document.getElementById("input") as HTMLInputElement;
//consigo acessar as propriedades do elemento do tipo input
input.value;

input.addEventListener('input', (event)=>{
    //informar que event é o evento do input e não genérico
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
})
