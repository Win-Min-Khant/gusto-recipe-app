import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { StrictMode } from 'react'
import Layout from './Layout'
import Home, { recipeLoader } from './pages/Home'
import RecipeDetail from './pages/Recipe'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>,
        loader: recipeLoader
      },
      {
        path: '/recipes/:id',
        element: <RecipeDetail/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
