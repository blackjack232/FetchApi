import fetch from 'cross-fetch';

// const user = {
//     name: "Fredy Alexander",
//     apellido: "España Garcia",
//     edad: 25
// }

// const options = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({user})

// }

// const respuesta = async (url) => {
//     return await fetch(url,options)
//         .then(response => response.json())
//         .then(res => {
//             console.log(res)
//         })
// }


// respuesta("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")

//*****************************POST CON FETCH ********************/
// const saveUsuario = async (url) => {
//     const user = {
//         name : "Ricardo Gonzales",
//         age : 20,
//         email : "ricardo@gmail.com"
//     }
//     const options = {
//         method : "POST",
//         headers : {
//             "Content-Type":"application/json"
//         },
//         body : JSON.stringify(user)
//     }
//     await fetch(url,options)
//     .then(res => res.json())
//     .then(res =>{
//         console.log(res)
//     })
//     .catch(error =>{console.log(error)})
// }

// const respuesta = await saveUsuario("http://localhost:5000/api/users")
// console.log(respuesta)

//*****************************GET CON FETCH ********************/

// const getUsers = async (url) => {

//     return await fetch(url)
//         .then(res => res.json())


// }

// const respuesta = await getUsers("http://localhost:5000/api/users")

// console.log(respuesta)


//*****************************GET CON FETCH ********************/

// const updateUser = async (url) => {
//     const user = {
//         name: 'Arturo Gonzales',
//         age: 70,
//         email: 'arturoo@gmail.com'
//     }
//     const options = {
//         method : 'PUT',
//         headers : {"Content-Type":"application/json"},
//         body:JSON.stringify(user)
//     }
//     const respuesta = await fetch(url, options)
//         .then(res => res.text())

//         return respuesta
       
// }
// const id = "6351f6256ca770f2ce5459bd";
// const respuesta = await updateUser(`http://localhost:5000/api/users/${id}`);

// console.log(respuesta)

//*****************************DELETE CON FETCH ********************/


// const deleteUser = async (url) => {
  
//     const options = {
//         method : 'DELETE'
//     }
//     const respuesta = await fetch(url, options)
//         .then(res => res.text())
//         return respuesta
       
// }
// const id = "6351f6256ca770f2ce5459bd";
// const respuesta = await deleteUser(`http://localhost:5000/api/users/${id}`);

// console.log(respuesta)

//*****************************BUSCAR POR ID ********************/

const getUserId = async (url) => {
    const options = {
        method : 'GET'
    }
    const respuesta = await fetch(url, options)
        .then(res => res.json())

        return respuesta
       
}
const id = "6351f6906ca770f2ce5459bf";
const respuesta = await getUserId(`http://localhost:5000/api/users/${id}`);

console.log(respuesta)