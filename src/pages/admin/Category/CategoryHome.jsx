import React, { useEffect, useState } from 'react'
import AddCategory from './AddCategory'
import EditCategory from './EditCategory'
import Swal from 'sweetalert2'

const CategoryHome = () => {
    let [categories, setCategories] = useState([])
    let [success, setSuccess] = useState(false)
    let [addForm, showAddForm] = useState(false)

    let [editForm, showEditForm] = useState(false)
    let [editId, setEditId] = useState('')
    let [editCategoryName, setEditCategoryName] = useState('')

    const getAllCategories = () => {
        return fetch(`http://localhost:5000/getallcategories`)
            .then(response => { return response.json() })
            .catch(error => console.log(error))
    }

    const handleDelete = id => e => {
        e.preventDefault()

        Swal.fire({
            title: "ALERT !!!!",
            text: "Are you sure ?",
            showCancelButton: true,
            icon: 'question',
            cancelButtonText: "NO !!!",
            confirmButtonText: "YESS !!",
            cancelButtonColor: '#ffccaa',
            confirmButtonColor: "#ccffaa",
            position: 'top-right',
            timer: 3000,
            timerProgressBar: true
        })
            .then(result => {
                if (result.isConfirmed) {
                    return fetch(`http://localhost:5000/deletecategory/${id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                    })
                        .then(response => response.json())
                        .then(result => {
                            if (result.error) {
                                Swal.fire('Warning', result.error, 'error')
                            }
                            else {
                                Swal.fire('Congrats!!', 'Category Deleted Successfully', 'success')
                                setSuccess(true)
                            }
                        })
                }
            })

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

    const handleEdit = category => e => {
        e.preventDefault()
        setEditId(category._id)
        setEditCategoryName(category.category_name)
        showEditForm(true)
    }

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
                        <button className='btn'
                            onClick={handleEdit(category)}
                        >Edit</button>
                        <button className='btn'
                            onClick={handleDelete(category._id)}
                        >Delete</button>
                    </div>
                })
            }

            <hr className='my-2 w-full' />

            {
                addForm &&
                <AddCategory data={{ success, setSuccess, addForm, showAddForm }} />
            }
            {
                editForm &&
                <EditCategory data={{ success, setSuccess, editForm, showEditForm, id: editId, category_name: editCategoryName }} />
            }

        </div>
    )
}

export default CategoryHome