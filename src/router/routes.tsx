import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import ProjectPage from '../pages/Projects/Projects'
import DefaultPage from '../pages/Default/Default'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <DefaultPage />,
      },
      {
        path: '/projects',
        element: <ProjectPage />,
      },
    ],
  },
])
