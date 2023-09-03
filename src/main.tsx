import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { ThemeContextProvider } from '@context/theme/themeContextProvider.tsx'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
)
