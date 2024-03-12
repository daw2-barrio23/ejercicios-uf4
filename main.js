console.log("hola")

//Ejercicio 1.1

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(usuarios => {
        const tabla = document.getElementById('meteDatos')
        usuarios.slice(0, 5).forEach(usuario => {
            const row = document.createElement('tr')
            row.innerHTML = `
            <td class="userId">${usuario.id}</td>
            <td>${usuario.name.split(' ')[0]}</td>
            <td>${usuario.name.split(' ')[1]}</td>
            <td>${usuario.email}</td>`;
            tabla.appendChild(row);
        });

        // Ejercicio 1.2
        tabla.addEventListener('click', function(event) {
            const target = event.target;
            if (target.tagName === 'TD') {
                const userId = target.parentElement.querySelector('.userId').innerText;
                const usuario = usuarios.find(user => user.id == userId);
                if (usuario) {
                    // Mostrar los datos del usuario en una ficha
                    mostrarFicha(usuario);
                }
            }
        });
    })
    .catch(error => console.error('Error'));

    //Ejercicio 1.2
function mostrarFicha(usuario) {
    // Supongamos que tienes un div con id 'fichaUsuario' para mostrar los datos del usuario
    const ficha = document.getElementById('fichaUsuario');
    ficha.innerHTML = `
        <h2>Información del Usuario</h2>
        <p><strong>Nombre:</strong> ${usuario.name}</p>
        <p><strong>Email:</strong> ${usuario.email}</p>
        <p><strong>Teléfono:</strong> ${usuario.phone}</p>
        <p><strong>Empresa:</strong> ${usuario.company.name}</p>
        <p><strong>Dirección:</strong> ${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}</p>
        <p><strong>Código Postal:</strong> ${usuario.address.zipcode}</p>
        <p><strong>Website:</strong> ${usuario.website}</p>
    `;
}

