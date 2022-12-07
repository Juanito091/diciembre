const nombre = document.getElementById('nombre')
const contraseña = document.getElementById('contraseña')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        nombre: nombre.value,
        contraseña: contraseña.value
    }

    console.log(data)
})