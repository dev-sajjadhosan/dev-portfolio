import { Outlet } from 'react-router-dom'
import Dock from './components/Dock/Dock'

function App() {
  return (
    <>
      <Outlet />
      <Dock />
    </>
  )
}

export default App
