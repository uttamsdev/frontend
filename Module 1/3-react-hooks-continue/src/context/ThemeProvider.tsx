import { Children, Dispatch, ReactNode, createContext, useState } from "react";

type TThemeProverProps = {
    children: ReactNode;
}

export type TThemeContext = {
    dark: boolean,
    setDark: Dispatch<React.SetStateAction<boolean>>
}
//create context
export const ThemeContext = createContext<TThemeContext | undefined>(undefined)
const ThemeProvider = ({children} : TThemeProverProps) => {
    const [dark, setDark] = useState(false);
    const values = {
        dark,
        setDark
    }
  return (
    <ThemeContext.Provider value={values}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;