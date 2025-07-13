import { createContext, useState } from "react";


export let NavbarContext = createContext()


export default function NavbarContextProvider({children}) {
    const [number, setNumber] = useState(0);
  
    return <NavbarContext.Provider value={{number , setNumber}}>
        {children}
    </NavbarContext.Provider>
}