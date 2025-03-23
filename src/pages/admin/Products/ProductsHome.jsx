import React, { useEffect, useState } from 'react'
import { API, getAllProducts } from '../../../api/productAPI'

const ProductsHome = () => {
  let [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts()
      .then(data => {
        if (data.error) {
          console.log(data.error)
        }
        else {
          setProducts(data)
        }
      })
  }, [])

  return (
    <div className='p-10'>
      <h1>Products</h1>
      <table className='w-[80vw] border-2 text-center bg-amber-50'>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Product Image</th>
            <th>Product Title</th>
            <th>Product Price</th>
            <th>Count</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.length > 0 &&
            products.map((product, i) => {
              return <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <img src={`${API}/${product.product_image}`} alt={product.product_name} className='w-40 h-40'/>
                </td>
                <td>{product.product_name}</td>
                <td>Rs.{product.product_price}</td>
                <td>{product.count_in_stock}</td>
                <td>{product.category?.category_name}</td>
                <td>
                  <button className='btn '>Update</button>
                  <button className='btn '>Delete</button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ProductsHome