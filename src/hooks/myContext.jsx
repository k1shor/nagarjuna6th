import { createContext } from "react";

const MyContext = createContext()

export const MyContextProvider = ({children}) => {

   return <MyContext.Provider value={"This is coming from MY CONTEXT."}>
        {children}
    </MyContext.Provider>
}

export default MyContext