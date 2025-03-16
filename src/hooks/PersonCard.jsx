import React from 'react'

const PersonCard = ({name, address, phone}) => {
// const PersonCard = (props) => {
    // let name = props.name
    // let address = props.address
    // let phone = props.phone

    // destructuring an object
    // let {name, address, phone} = props
    
    return (
        <div className='m-5 p-5 border-4 rounded-4xl shadow-2xl'>
            <h1 className='text-2xl'>{name}</h1>
            <h2 className='text-xl'>{address}</h2>
            <h2 className='text-xl'>{phone}</h2>
        </div>
    )
}

export default PersonCard