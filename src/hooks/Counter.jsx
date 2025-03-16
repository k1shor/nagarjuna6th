import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Counter = () => {
    let [count, setCount] = useState(0)
    let [count2, setCount2] = useState(0)
    /*
    let [var_name, function] = useState(initial value)

    var_name : name of the state variable
    function : function to update value of the state variable
    initial value: 
            0 - number
            '' or "" - string
            true or false - boolean
            [] - array
             {} - object

    useEffect - to show side effect when a state changes
    syntax : 
        useEffect(function, dependency array)
        function - side effect to be shown
        dependency array - list of state variables
            [] -> effect is shown at page load only
             [a,b,c] -> effect is shown at page load and when a or b or c changes
null - effect is shown at page load, and when any of the state changes
    
    */
    useEffect(() => {
        alert("Count is updated")
    },[count, count2])

    return (
        <div className='text-3xl flex justify-evenly items-center h-[100vh] flex-col'>
            <span>Counter: {count}</span>
            {
                count < 10 &&
                <Button variant='contained' onClick={() => {
                    setCount(++count)
                }}>INCREASE</Button>
            }

            {
                count > 0 &&
                <Button variant='contained' onClick={() => {
                    setCount(--count)
                }}>DECREASE</Button>
            }
            <span>Counter: {count2}</span>
            {
                count2 < 100 &&
                <Button variant='contained' onClick={() => {
                    setCount2(count2+10)
                }}>INCREASE</Button>
            }

            {
                count2 > 0 &&
                <Button variant='contained' onClick={() => {
                    setCount2(count2-10)
                }}>DECREASE</Button>
            }
        </div>
    )
}

export default Counter