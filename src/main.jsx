import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthContextElements from './context/AuthContextElements.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextElements>
    <App />
    </AuthContextElements>
  </React.StrictMode>,
)
