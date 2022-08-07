import { useState, useContext, createContext } from "react";
const UserContext = createContext();
const useUserContext = () => useContext(UserContext);
const UserProvider = ({ children }) => {
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(true);
    
    return (
        <UserContext.Provider value={{name,setPhone,phone,setName}}>
        {children}
        </UserContext.Provider>
    );
    }

    export { UserProvider, useUserContext };