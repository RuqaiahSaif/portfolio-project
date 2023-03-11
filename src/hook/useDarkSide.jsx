import React, { useEffect, useState } from 'react'

function useDarkSide() {
    const [theme, setTheme] =useState(localStorage.theme);
    const colorTheme = theme === 'light' ? 'dark' : 'light';
    useEffect(()=>{
        const root = window.document.documentElement
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        // save theme to local storage
        localStorage.setItem('theme',theme);
    },[theme,colorTheme]);
  return [colorTheme,setTheme]
}

export default useDarkSide
