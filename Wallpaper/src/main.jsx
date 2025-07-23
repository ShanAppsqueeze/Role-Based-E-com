import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/About',
//     element: <About />
//   },
//   {
//     path: '/Contact',
//     element: <Contact />
//   }, 
//   { path: "*",
//     element: <Error404/>

//   }
// ]);

  <StrictMode>
    <App />
  </StrictMode>,
)
