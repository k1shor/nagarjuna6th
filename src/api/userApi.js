import { API } from "./productAPI"

export const register = (username, email, password) =>{
    return fetch(`${API}/register`,{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({username, email, password})
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}