import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './First'
import Second from './second'
import MyRoutes from './MyRoutes'
import './mystyle.css'
import { MyContextProvider } from './hooks/myContext'

export const MyThemeContext = createContext()

function App() {
  let [myTheme, setMyTheme] = useState('')
  return (
    <>
      <MyThemeContext.Provider value={myTheme}>
        <button
        className={`${myTheme=='dark'?'dark-':''}btn btn`} 
        style={{
          position: 'fixed',
          top: '50%',
          right: '2%',
          zIndex: 99
        }}
          onClick={() => {
            if (myTheme === "dark") {
              setMyTheme("")
            }
            else {
              setMyTheme("dark")
            }
          }}
        >
          {myTheme === "dark" ? "DARK" : "LIGHT"}
        </button>
        <MyContextProvider>
          <MyRoutes />
        </MyContextProvider>
      </MyThemeContext.Provider>
    </>
  )
}

export default App
