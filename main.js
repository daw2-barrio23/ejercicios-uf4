console.log("hola")

//Ejercicio 1.1

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(usuarios => {
        const tabla = document.getElementById('meteDatos')
        usuarios.slice(0, 5).forEach(usuarios => {
            const row = document.createElement('tr')
            row.innerHTML = `
            <td>${usuarios.id}</td>
            <td>${usuarios.name.split(' ')[0]}</td>
            <td>${usuarios.name.split(' ')[1]}</td>
            <td>${usuarios.email}</td>`;

            console.log(`id: ${usuarios.id},` , `nombre: ${usuarios.name},`, `email: ${usuarios.email}`)
            
            tabla.appendChild(row)
            
        });

    })
    .catch(error => console.error('Error'))
//function usuarios(){}