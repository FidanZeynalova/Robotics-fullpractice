import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import { ROUTES } from './routes/Routes'

let Routes = createBrowserRouter(ROUTES)

function App() {
  return (

    <RouterProvider router={Routes} />
  )
}

export default App
