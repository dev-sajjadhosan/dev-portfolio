import {
  GoGlobe,
  GoPaperclip,
  GoPerson,
  GoRelFilePath,
  GoRepo,
  GoTools,
} from 'react-icons/go'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const dockObject = [
  {
    id: 0,
    label: 'default',
    icon: <GoRelFilePath className="text-lg" />,
    path: '/',
  },
  {
    id: 1,
    label: 'project',
    icon: <GoRepo className="text-lg" />,
    path: '/projects',
  },
  {
    id: 2,
    label: 'blog',
    icon: <GoPaperclip className="text-lg" />,
    path: '/blogs',
  },
  {
    id: 3,
    label: 'skill',
    icon: <GoTools className="text-lg" />,
    path: '/skills',
  },
  {
    id: 4,
    label: 'contact',
    icon: <GoGlobe className="text-lg" />,
    path: '/contact',
  },
  {
    id: 5,
    label: 'about',
    icon: <GoPerson className="text-lg" />,
    path: '/about',
  },
]

const Dock = () => {
  const { toggleDock } = useAuth()
  console.log(toggleDock)
  return (
    <>
      <div
        className={`fixed bottom-8 left-1/2 w-96 p-3 bg-base-100 menu menu-horizontal gap-3 justify-center rounded-xl transition-all duration-300 ${
          toggleDock == true
            ? 'visible opacity-100 z-40 -translate-x-1/2'
            : ' opacity-0 -z-40'
        }`}
      >
        {dockObject.map(({ label, path, icon }, i) => (
          <li key={i} className={`tooltip`} data-tip={label}>
            <Link to={path}>{icon}</Link>
          </li>
        ))}
      </div>
    </>
  )
}

export default Dock
