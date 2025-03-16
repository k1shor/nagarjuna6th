import React, { useState } from 'react'

const TestPage = () => {
    let [question, setQuestion] = useState('')
    let [result, setResult] = useState('')

    let [loading, setLoading] = useState(false)

    const getResponse = async () => {
        setLoading(true)
        const url = 'https://chatgpt-42.p.rapidapi.com/matag2';
        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': '73858d0151msh8bee677ef926c60p155007jsn03c6ca43bdf2',
                'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: 'user',
                        content: { question }
                    }
                ],
                web_access: false
            })
        };
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setLoading(false)
        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    }

    return (
        <div className='flex justify-end items-center h-[100vh]'>
            <div className='fixed top-5 left-5'>
                <input type="text" className='input'
                    onChange={e => setQuestion(e.target.value)} />

                {
                    loading ?
                        <button className='btn' disabled>LOADING</button>
                        :
                        <button className='btn' onClick={getResponse}>SUBMIT</button>
                }


            </div>
            <div className='h-[100vh] border-2 w-3/5 p-5'>
                { }
            </div>
        </div>
    )
}

export default TestPage