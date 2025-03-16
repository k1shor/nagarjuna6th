import React, { useState } from 'react'

const EditCategory = ({data}) => {
    let {success, setSuccess, editForm, showEditForm, id, category_name} = data
    let [category, setCategory] = useState(category_name)

  const handleSubmit = e => {
    e.preventDefault()
    fetch(`http://localhost:5000/updatecategory/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ category_name: category })
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          alert(data.error)
        }
        else {
          alert("category added successfully")
          setSuccess(true)
          showEditForm(!editForm)
        //   setCategory('')
        }
      })
      .catch(error => console.log(error))
  }

  return (
    <>
      <form className='p-10 rounded-xl shadow-2xl fixed top-7 right-7'>
        <h1>Edit Category</h1>
        <input type="text" className='w-full px-4 py-2 border'
          onChange={e => setCategory(e.target.value)}
          value={category}
        />
        <button className='btn' onClick={handleSubmit}>Edit Category</button>
      </form>
    </>
  )
}

export default EditCategory