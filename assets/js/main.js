//declarar elementos del DOM
const btnPost = document.querySelector("#btn-post")
const postData = document.querySelector("#post-data")

//constante API
const API_URL = "https://jsonplaceholder.typicode.com/posts"

//no se usa el innerHTML ya que puede recibir código malicioso
// const displayData = (data) => {
//     data.forEach((element) => {
//         postData.innerHTML += `<li><strong>${element.title}</strong><br>${element.body}</li>`;
//     })
// }

//construir etiqueta en HTML (document.createElement) para más seguridad
const displayData = (data) => {
    data.forEach((element) => {
        const li = document.createElement("li");

        const title = document.createElement("span");
        title.textContent = element.title;
        title.style.fontWeight = "bold";
        li.appendChild(title);

        const body = document.createElement("p");
        body.textContent = element.body;
        li.appendChild(body);

        postData.appendChild(li);
    });
};

// solicitud http: con fetch ($.ajax jquery)
// fetch nos devuelve promesa, resolver con async y await o then

const getData = async () => {
    try {
        const response = await fetch(API_URL)

        //validaciones error
        if (!response.ok) {
            console.log("la api falló")
            console.log("código de error: ", response.status)
        }
        //procesar el json
        const data = await response.json()
        // console.log(data)

        displayData(data)

    } catch (error) {
        console.log("error", error)
    }

}

//ejecutar al detectart click (getData sin paréntesis)
btnPost.addEventListener("click", getData)