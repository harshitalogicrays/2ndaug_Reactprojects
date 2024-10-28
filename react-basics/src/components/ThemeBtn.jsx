import React from 'react'
import { UseTheme } from './ThemeContext'

const ThemeBtn = () => {
    const theme = UseTheme()
  return (
    <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox"
    onClick={()=>theme.toggleTheme()}/>
  </div>
  )
}

export default ThemeBtn
