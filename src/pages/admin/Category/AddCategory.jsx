import React, { useState } from 'react'

const AddCategory = () => {
  let [category, setCategory] = useState('')
  let [success, setSuccess] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    fetch(`http://localhost:5000/addcategory`, {
      method: "POST",
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
          setCategory('')
        }
      })
      .catch(error => console.log(error))
  }

  return (
    <>
      <form className='p-10 rounded-xl shadow-2xl'>
        <input type="text" className='w-full px-4 py-2 border'
          onChange={e => setCategory(e.target.value)}
          value={category}
        />
        <button className='btn' onClick={handleSubmit}>Add Category</button>
      </form>
    </>
  )
}

export default AddCategory