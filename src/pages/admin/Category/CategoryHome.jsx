import React, { useEffect, useState } from 'react'
import AddCategory from './AddCategory'

const CategoryHome = () => {
    let [categories, setCategories] = useState([])
    let [success, setSuccess] = useState(false)
    let [addForm, showAddForm] = useState(false)

    const getAllCategories = () => {
        return fetch(`http://localhost:5000/getallcategories`)
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
                    setSuccess(false)
                }
            })
    }, [success])

    return (
        <div className='p-10'>
            <h1 className='text-2xl text-center underline mb-5'>Categories</h1>

            <button className='btn bg-gradient-to-r from-green-500 to-blue-200 '
                onClick={() => showAddForm(!addForm)}>
                Add New Category</button>

            {
                categories.length > 0 &&
                categories.map((category, i) => {
                    return <div className='my-5'>
                        <h1> Category: {category.category_name}</h1>
                        <button className='btn'>Edit</button>
                        <button className='btn'>Delete</button>
                    </div>
                })
            }

            <hr className='my-2 w-full' />

            {
                addForm &&
                <AddCategory data={{ success, setSuccess, addForm, showAddForm }} />
            }
        </div>
    )
}

export default CategoryHome