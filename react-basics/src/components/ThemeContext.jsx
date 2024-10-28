import React, { useContext, useState } from 'react'
const theme = React.createContext()
const ThemeContext = ({children}) => {
    const [themeMode,setThemeMode]=useState("light")
    const toggleTheme = ()=>themeMode=="light"?setThemeMode("dark"):setThemeMode("light")
    const contentStyle = {
        backgroundColor:themeMode=="light"?"wheat":"gray",
        color:themeMode=="light"?"black":"white",
        height:'100vh'
    }
  return (
    <theme.Provider value={{themeMode,toggleTheme}}>
        <div style={contentStyle}>
        {children}
        </div>

    </theme.Provider>
  )
}
export default ThemeContext
export const UseTheme = ()=>useContext(theme)
