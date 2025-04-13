import React, { useEffect, useState } from 'react'
import { FaGripfire } from 'react-icons/fa6'

interface NotifyProps {
  title?: string
  message?: string
  change: (value: boolean) => void
}

const Notify: React.FC<NotifyProps> = ({ title, message, change }) => {
  const [show, setShow] = useState(true)
  const [progress, setProgress] = useState(0)
  //   if (close) return null
  useEffect(() => {
    if (!show) return
    const time = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(time)
          setShow(false)
          change(false)
          return 100
        }
        return p + 1
      })
    }, 50)

    return () => clearTimeout(time)
  }, [show, change])

  if (!show) return null

  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-1/2 card rounded-2xl p-12 bg-[#31363F] w-xl overflow-hidden z-50">
        <div className="flex flex-col items-center justify-between">
          <FaGripfire className="text-4xl" />
          <h1 className="text-2xl font-light mt-3 amita">{title}</h1>
          <p className="mt-1 font-light amita">{message}</p>
        </div>
        <progress
          id="notify"
          className="progress h-1 w-1/2 absolute -bottom-1 left-1/2 -translate-1/2"
          value={progress}
          max="100"
        >
          {progress}
        </progress>
      </div>
    </>
  )
}

export default Notify
