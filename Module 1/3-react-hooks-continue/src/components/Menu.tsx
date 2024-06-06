import { createContext, useContext } from "react"

//component level provider
const MenuContext = createContext(null);
export const MenuList = ({children}) => {
    return (
        <MenuContext.Provider value={{theme: 'dark'}}>
            <ul>{children}</ul>
        </MenuContext.Provider>
    )
}

export const MenuItem = () => {
    const {theme} = useContext(MenuContext)
    console.log(theme);
    return <div>Menu Item</div>
}