export const API = `http://localhost:5000`

export const getAllProducts = () => {
    return fetch(`${API}/getallproducts`)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const getProductDetails = (id) => {
    return fetch(`${API}/getproductdetails/${id}`)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const getAllCategories = () => {
    return fetch(`${API}/getallcategories`)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const addProduct = (product) => {
    return fetch(`${API}/addproduct`, {
        method: "POST",
        headers:{
            Authorization: ''
        },
        body: (product)
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}