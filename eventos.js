    let div= document.getElementById('alert');
    div.addEventListener("click",()=>{
        alert('Hola! Soy el div');
    })

    let button = document.getElementById('button');
    button.addEventListener("click", ()=>{
        alert('Hola!');
        event.stopPropagation();
    })