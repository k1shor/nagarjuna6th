import React from 'react'
import PersonCard from './PersonCard'

const DisplayPersons = () => {
  return (
    <>
     <PersonCard name='Shyam' address='bhaktapur' phone='9876543234'/>   
     <PersonCard/>   
     <PersonCard/>   
     <PersonCard/>   
     <PersonCard/>   
    </>
  )
}

export default DisplayPersons