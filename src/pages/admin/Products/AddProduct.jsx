import React, { useEffect, useState } from 'react'
import { addProduct, getAllCategories } from '../../../api/productAPI'
import Swal from 'sweetalert2'

const AddProduct = () => {
    let [product, setProduct] = useState({})
    let [categories, setCategories] = useState([])

    let { product_name, product_price, product_description, count_in_stock } = product

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

    const handleChange = e => {
        if(e.target.name === 'product_image'){
            setProduct({...product, [e.target.name]: e.target.files[0]})
        }
        else{
            setProduct({...product, [e.target.name]: e.target.value})
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        let productFormData = new FormData()
        for(var key in product){
            productFormData.append(key, product[key])
            console.log(key, product[key])
        }
        addProduct(productFormData)
        .then(data=>{
            if(data.error){
                Swal.fire("Attention!!!", data.error, 'error')
            }
            else{
                Swal.fire('Congrats!!!',"Product added successfully", "success")
            }
        })
    }

    return (
        <div className='p-10'>
            <h1>Add New Product</h1>
            <label htmlFor="product_name">Product Title</label>
            <input type="text" name='product_name' value={product_name} id='product_name' className='input' onChange={handleChange}/>

            <label htmlFor="product_price">Price</label>
            <input type="number" name='product_price' value={product_price} id='product_price' className='input' onChange={handleChange} />

            <label htmlFor="product_description">Description</label>
            <textarea name="product_description" id="product_description" value={product_description} className='input' onChange={handleChange}></textarea>

            <label htmlFor="count_in_stock">Count in Stock</label>
            <input type="number" id='count_in_stock' name='count_in_stock' value={count_in_stock} className='input' onChange={handleChange} />

            <label htmlFor="category">Category</label>
            <select name="category" id="category" className='input' onChange={handleChange}>
                <option value="" selected disabled>Choose Category</option>
                {
                    categories.length > 0 &&
                    categories.map((category) => {
                        return <option value={category._id} key={category._id}>
                            {category.category_name}
                        </option>
                    })
                }
            </select>

            <label htmlFor="product_image">Image</label>
            <input type="file" id='product_image' name='product_image' className='input' onChange={handleChange} />

            <button className='btn' onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default AddProduct