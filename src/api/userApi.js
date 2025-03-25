import { API } from "./productAPI"

export const register = (username, email, password) => {
    return fetch(`${API}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const verifyEmail = (token) => {
    return fetch(`${API}/verify/${token}`)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const login = (email, password) => {
    return fetch(`${API}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}