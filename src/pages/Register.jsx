import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../api/userApi'
import Swal from 'sweetalert2'

const Register = () => {
    let [username, setUsername] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        register(username, email, password)
        .then(data=>{
            if(data.error){
                Swal.fire('Warning',data.error,'warning')
            }
            else{
                Swal.fire('Congrats!!!','User registered successfully','success')
            }
        })
    }


    return (
        <>
            <form className='p-5 border-4 border-slate-400 w-1/2 mx-auto my-5 rounded-2xl'>
                <h1 className='text-center underline'>Register</h1>
                <label htmlFor="username" className='text-2xl'>Username</label>
                <input type="text" className='outline px-3 py-1 w-full rounded-lg text-3xl'
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="username" className='text-2xl mt-2'>Email</label>
                <input type="text" className='outline px-3 py-1 w-full rounded-lg text-3xl'
                    onChange={e => setEmail(e.target.value)}
                />

                <label htmlFor="username" className='text-2xl mt-2'>Password</label>
                <input type="text" className='outline px-3 py-1 w-full rounded-lg text-3xl'
                    onChange={e => setPassword(e.target.value)}
                />

                <button className='bg-blue-400 px-4 py-1 text-white mt-2 rounded w-full hover:bg-blue-500 active:bg-blue-400 hover:shadow-2xl active:shadow-xl'
                    style={{ fontSize: '24px' }}
                    onClick={handleSubmit}
                >
                    Register
                </button>

                <p className='text-2xl'>Already have an account?
                    <Link to={'/login'}>Login</Link>
                </p>


            </form>
        </>
    )
}

export default Register