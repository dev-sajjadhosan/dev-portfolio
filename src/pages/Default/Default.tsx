import { FaDiscord, FaFacebook, FaGithub, FaRegFilePdf } from 'react-icons/fa6'
import { LuLightbulb } from 'react-icons/lu'
import { SiOpenproject } from 'react-icons/si'
import { TbDeviceGamepad2, TbLayoutDashboard } from 'react-icons/tb'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import Notify from '../../components/Notify/Notify'
import useAuth from '../../hooks/useAuth'

const Socials = [
  {
    id: 0,
    label: 'facebook',
    icon: <FaFacebook className="text-lg" />,
    path: '',
  },
  {
    id: 1,
    label: 'github',
    icon: <FaGithub className="text-lg" />,
    path: '',
  },
  {
    id: 2,
    label: 'discord',
    icon: <FaDiscord className="text-lg" />,
    path: '',
  },
]

const DefaultPage = () => {
  const [showNoti, setShowNoti] = useState(false)
  return (
    <>
      {showNoti && (
        <Notify
          change={setShowNoti}
          title="Cooking Part"
          message="This part is Cooking now. So, please came later!"
        />
      )}
      {/* ------------------------- */}
      <div className="w-[30rem] lg:w-2xl bg-[#31363F] h-[22rem] lg:h-screen fixed right-0 -z-10 clip_cone drop-shadow-lg"></div>
      <div className="w-[30rem] lg:w-2xl bg-[#31363F] h-[22rem] lg:h-screen fixed left-0 bottom-0 -z-10 clip_cone_2 drop-shadow-lg"></div>
      {/* ------------------- */}
      <div className="flex min-h-screen justify-center items-center p-10 mb-18 lg:mb-0">
        <div className="card justify-between lg:bg-[#76ABAE] lg:text-black rounded-2xl lg:py-10 lg:px-14 w-[99%] lg:w-[90%] lg:h-[35rem] relative z-10">
          <div className="flex flex-row-reverse justify-between items-center">
            <button
              className="btn btn-sm btn-ghost"
              onClick={() => setToggleDock(!toggleDock)}
            >
              {' '}
              <TbLayoutDashboard className="text-lg" /> Dock{' '}
            </button>
            <div className="flex items-center gap-3">
              <h1 className="text-xs font-bold amita">
                Portfolio{' '}
                <span className="badge badge-xs font-normal">v.01</span>
              </h1>
            </div>
          </div>
          <div className="mt-9 lg:mt-5  flex flex-col lg:flex-row justify-between items-center gap-5">
            <div className="flex flex-col text-center lg:text-left">
              <div className="">
                <h1 className="text-2xl font-bold amita">
                  Welcome to My World
                </h1>
                <p className="text-sm font-mono mt-3">
                  Hey there! 👋 I'm{' '}
                  <span className="text-lg font-bold text-[#EEEEEE]">
                    Sajjad Hosan
                  </span>
                  , a MERN Stack Developer. I love building creative things with
                  code and diving into new tech every day.
                  <span className="font-semibold text-[#EEEEEE]">
                    Because let’s be real—
                  </span>
                  with some coding skills and a computer, you can literally
                  build *anything*.
                </p>
                <p className="text-sm font-mono mt-4">
                  My goal? Helping people by creating wow-worthy tools, sleek
                  UIs, and tech solutions that actually matter.
                </p>
                <p className="text-sm mt-6 italic text-gray-700">
                  — I believe one day, I’ll achieve my big Gooooooal. 🚀
                </p>
              </div>
              <div className="flex gap-4 justify-end items-center mt-20">
                <button className="btn btn-sm btn-neutral font-normal">
                  <FaRegFilePdf className="text-lg" /> Resume
                </button>
                <button className="btn btn-sm btn-ghost font-normal">
                  <SiOpenproject className="text-lg" /> Project
                </button>
              </div>
            </div>
            <div className="w-full lg:w-[58%] mt-5 lg:mt-0">
              <div className="mockup-code w-full space-y-2 text-sm font-normal bg-gray-900 p-6 rounded-xl">
                <pre data-prefix=">" className="text-purple-400">
                  <code>
                    import &#123; 💭 as Dream, 🔥 as Passion &#125; from 'life'
                  </code>
                </pre>
                <pre data-prefix="1">
                  <code>class 👨‍💻 Developer extends 🧬 Human &#123;</code>
                </pre>
                <pre data-prefix="2">
                  <code> constructor() &#123;</code>
                </pre>
                <pre data-prefix="3">
                  <code> this.name = "Sajjad Hosan" // 🧑‍🚀</code>
                </pre>
                <pre data-prefix="4">
                  <code>
                    {' '}
                    this.stack = ["MongoDB", "Express", "React", "Node.js"] //
                    🛠️
                  </code>
                </pre>
                <pre data-prefix="5">
                  <code>
                    {' '}
                    this.traits = ["Creative 🎨", "Curious 🤔", "Relentless
                    🚴‍♂️","Unique 🪄"]
                  </code>
                </pre>
                <pre data-prefix="6">
                  <code>
                    {' '}
                    this.energy = "∞ when building UIs ✨ || Learning 📖"
                  </code>
                </pre>
                <pre data-prefix="7">
                  <code> &#125;</code>
                </pre>
                <pre data-prefix="8">
                  <code>&#125;</code>
                </pre>
                <pre data-prefix=">" className="text-green-500">
                  <code>// 🎯 Mission: Build legendary tools && System</code>
                </pre>
                <pre data-prefix=">" className="text-green-500">
                  <code>// ⚠️ Error: Dream() || Updating: Passion(🚀)</code>
                </pre>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-between items-center">
            <div className="flex items-center gap-2">
              {Socials.map(({ icon, path, label, id }) => (
                <Link
                  to={path}
                  key={id}
                  className="btn btn-circle btn-sm btn-ghost tooltip transition-all duration-50"
                  data-tip={label}
                >
                  {icon}
                </Link>
              ))}
            </div>
            <div className="flex gap-4 items-center">
              <button
                className="btn btn-circle btn-sm btn-ghost btn-info tooltip"
                data-tip="Nothing"
                onClick={() => setShowNoti(true)}
              >
                <LuLightbulb className="text-lg" />
              </button>
              <button
                className="btn btn-circle btn-sm btn-ghost btn-neutral tooltip"
                data-tip="Games"
                onClick={() => setShowNoti(true)}
              >
                <TbDeviceGamepad2 className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DefaultPage
