import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// const Hello=() => {
//   return <div>Hello</div>
// }

createRoot(document.getElementById('root')).render(
    <App />
)

// export default Hello
