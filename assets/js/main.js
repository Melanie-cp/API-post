const btnPost = document.querySelector("#btn-post")
const postData = document.querySelector("#post-data")

const API_URL = "https://jsonplaceholder.typicode.com/posts"

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
        console.log(data)

    } catch (error) {
        console.log("error", error)
    }

}

getData()

// btnPost.addEventListener("click", getData)
