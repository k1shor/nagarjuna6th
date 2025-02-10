import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './First'
import Second from './second'
import MyRoutes from './MyRoutes'
import './mystyle.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyRoutes/>
    </>
  )
}

export default App
