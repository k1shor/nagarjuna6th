import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyContext from '../hooks/myContext'
import { MyThemeContext } from '../App'
import { login } from '../api/userApi'

const Login = () => {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let [success, setSuccess] = useState(false)
    let [error, setError] = useState('')
    let [role, setRole] = useState(0)

    let value = useContext(MyContext)
    let theme = useContext(MyThemeContext)

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        login(email, password)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setSuccess(true)
                    setRole(data.role)
                }
            })
    }

    const showError = () => {
        if (error) {
            return <div className='bg-red-300 py-4 text-center'>{error}</div>
        }
    }
    const redirect = () => {
        if (success) {
            if(role == 1){
                navigate('/admin/dashboard')
            }
            else{
                navigate('/')
            }
        }
    }

    return (
        <>
            {showError()}
            {redirect()}
            {value}
            <form className={`mybg${theme === 'dark' ? '-dark' : ''} p-5 border-4 border-slate-400 w-1/2 mx-auto my-5 rounded-2xl `}>

                <h1 className='text-center underline'>Login</h1>

                <label htmlFor="username" className='text-2xl mt-2'>Email</label>
                <input type="text" className='outline px-3 py-1 w-full rounded-lg text-3xl'
                    onChange={e => setEmail(e.target.value)}
                />

                <label htmlFor="username" className='text-2xl mt-2'>Password</label>
                <input type="text" className='outline px-3 py-1 w-full rounded-lg text-3xl'
                    onChange={e => setPassword(e.target.value)}
                />

                <button className='bg-blue-400 px-4 py-1 text-white mt-2 rounded w-full hover:bg-blue-500 active:bg-blue-400 hover:shadow-2xl active:shadow-xl'
                    style={{ fontSize: '24px' }} onClick={handleSubmit}>
                    LOGIN
                </button>
                <button className="btn btn-accent">Accent</button>

                <div className="flex justify-content-between">
                    <p className='text-2xl'>Do not have an account?
                        <Link to={'/register'}>Sign up now.</Link>
                    </p>
                    <Link className='text-2xl' to={'/forgetpassword'}>Forget Password</Link>

                </div>


            </form>
        </>
    )
}

export default Login