import React, { useEffect, useState } from 'react'
import AddCategory from './AddCategory'

const CategoryHome = () => {
    let [categories, setCategories] = useState([])

    const getAllCategories = () => {
        return fetch(`http://localhost:5000/getallcategories`)
        // return fetch(`https://fakestoreapi.com/products`)

            .then(response => { return response.json() })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getAllCategories()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategories(data)
                }
            })
    }, [])

    return (
        <div className='p-10'>
            <h1 className='text-2xl text-center underline mb-5'>Categories</h1>
            {
                categories.length > 0 &&
                categories.map((category, i)=>{
                    return <div className='my-5'>
                        {/* <h1>{i+1}. {category.title}</h1> */}
                        {/* <img src={category.image} className='w-56' alt="" />
                        <h1> Price: {category.price}</h1>
                        <h1> Description: {category.description}</h1> */}
                        <h1> Category: {category.category_name}</h1>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                })
            }

            <hr className='my-2 w-full' />

            <AddCategory/>
        </div>
    )
}

export default CategoryHome