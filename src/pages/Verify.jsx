import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { verifyEmail } from '../api/userApi'

const Verify = () => {
    let [success, setSuccess] = useState(false)
    let [error, setError] = useState('')

    let params = useParams()
    // params : {token: 93c97bf469d939dae656fea25f7277787660f10bc6a7046d}
    let token = params.token

    useEffect(() => {
        verifyEmail(token)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setSuccess(true)
                }
            })
    }, [])

    const showError = () => {
        if (error) {
            return <div className='text-center py-4 bg-red-300'>{error}</div>
        }
    }

    const showSuccess = () => {
        if (success) {
            return <div className='text-center py-4 bg-green-300'>
                Email Verified Successfully.
            </div>
        }
    }

    return (
        <>
            {showError()}
            {showSuccess()}
        </>
    )
}

export default Verify