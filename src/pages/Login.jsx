import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyContext from '../hooks/myContext'
import { MyThemeContext } from '../App'

const Login = () => {

    let value = useContext(MyContext)
    let theme = useContext(MyThemeContext)

    return (
        <>
            {value}
            <form className={`mybg${theme==='dark'?'-dark':''} p-5 border-4 border-slate-400 w-1/2 mx-auto my-5 rounded-2xl `}>
            
                <h1 className='text-center underline'>Login</h1>

                <label htmlFor="username" className='text-2xl mt-2'>Email</label>
                <input type="text" className='outline px-3 py-1 w-full rounded-lg text-3xl' />

                <label htmlFor="username" className='text-2xl mt-2'>Password</label>
                <input type="text" className='outline px-3 py-1 w-full rounded-lg text-3xl' />

                <button className='bg-blue-400 px-4 py-1 text-white mt-2 rounded w-full hover:bg-blue-500 active:bg-blue-400 hover:shadow-2xl active:shadow-xl'
                    style={{ fontSize: '24px' }}>
                    Register
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