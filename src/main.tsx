import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='min-h-screen bg-slate-800'>
      <App />
    </div>
  </React.StrictMode>,
)
