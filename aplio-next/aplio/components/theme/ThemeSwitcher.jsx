'use client'
import { DarkMode, LightMode } from '@/data/svgImages'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
  const [mount, setMount] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  useEffect(() => {
    setMount(true)
  }, [])

  return mount ? (
    <div className="toggle-button fixed right-5 z-[10000000000] max-lg:bottom-2.5 lg:top-1/3">
    
    </div>
  ) : null
}

export default ThemeSwitcher
