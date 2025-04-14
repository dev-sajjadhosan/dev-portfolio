import React, { useState } from 'react'
import { CgArrowsExpandUpRight, CgTapDouble } from 'react-icons/cg'
import { IoIosArrowDown } from 'react-icons/io'
import { LuExternalLink, LuGithub } from 'react-icons/lu'
import { TbDownload, TbHeart, TbShare3, TbSourceCode } from 'react-icons/tb'

type BlobCardUIProps = {
  id: number
  url: string
  label: string
  demo: string
  repo?: object
  repo_status: boolean
  love?: []
  comment?: []
}

const BlobCardUI: React.FC<BlobCardUIProps> = ({
  id,
  url,
  label,
  demo,
  repo,
  repo_status,
  love,
  comment,
}) => {
  const [image, setImage] = useState<string | null>(null)
  const [data, setData] = useState<object | null>(null)

  console.log(data)
  return (
    <>
      {image && (
        <div className="fixed top-0 left-0 hero hero-overlay justify-center items-center w-full h-screen backdrop-blur-2xl p-5 z-10">
          <button
            className="absolute top-2 right-5 btn btn-sm btn-primary font-light px-6"
            onClick={() => setImage(null)}
          >
            Close <IoIosArrowDown />{' '}
          </button>
          <img src={image} alt="" width={600} className="rounded-2xl" />
        </div>
      )}

      <div className="h-[23rem] m-5 relative">
        <svg viewBox="0 20 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FF1066"
            d="M56.7,-67.3C70.9,-55.7,78.1,-35.4,77.4,-17C76.6,1.4,67.9,17.8,56.1,27C44.4,36.2,29.5,38.2,16.9,39.9C4.4,41.6,-5.9,43,-19.2,42.5C-32.4,42.1,-48.7,39.8,-60.1,29.9C-71.6,20,-78.3,2.5,-72.7,-9.9C-67.1,-22.4,-49.1,-29.8,-35,-41.4C-20.8,-53.1,-10.4,-69,5.4,-75.4C21.3,-81.9,42.5,-79,56.7,-67.3Z"
            transform="translate(100 100) scale(-1,1)"
          />
        </svg>
        <div className="absolute top-10 left-31 flex flex-col">
          <img
            src="https://cdn.dribbble.com/userupload/12396741/file/original-6b6eaddb15ae46930f8280eeb1f7a7e7.jpg?resize=1024x768&vertical=center"
            alt=""
            className="rounded-3xl cursor-pointer transition-all duration-50 hover:scale-105"
            width={200}
            onClick={() =>
              setImage(
                'https://cdn.dribbble.com/userupload/12396741/file/original-6b6eaddb15ae46930f8280eeb1f7a7e7.jpg?resize=1024x768&vertical=center',
              )
            }
          />
          <div className="mt-2">
            <h2 className="text-lg font-light"># Project {id}</h2>
            <p className="text-xs font-light w-xs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis placeat fugiat odit ipsum at dolores.
            </p>
            <div className="mt-4 flex justify-end items-center gap-2">
              <button
                className="btn btn-sm btn-ghost font-light tooltip"
                data-tip="source"
              >
                <TbSourceCode className="text-lg" />
              </button>
              <button
                className="btn btn-sm btn-ghost font-light tooltip"
                data-tip="demo"
              >
                <CgTapDouble className="text-lg" />
              </button>
              <button
                onClick={() =>
                  setData({
                    id,
                    url,
                    label,
                    demo,
                    repo,
                    repo_status,
                    love,
                    comment,
                  })
                }
                className="btn btn-sm btn-ghost font-light tooltip"
                data-tip="view"
              >
                <CgArrowsExpandUpRight className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------- */}

      <div
        className={`fixed card rounded-3xl w-2 h-2 bg-gray-800 transition-all duration-200 z-20 overflow-scroll ${
          data
            ? 'h-screen w-full p-10 bg-gray-600 top-0 right-0'
            : 'top-5 right-5'
        }`}
      >
        <div className={`opacity-0 ${data && 'opacity-100 delay-75'}`}>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-light"># ViewSlide</h2>
            <button
              className="btn btn-sm btn-warning px-6 font-light"
              onClick={() => setData(null)}
            >
              Close
            </button>
          </div>
          <div className="card mt-8 p-5">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-light">
                # Landing Page{' '}
                <span className="badge badge-xs badge-info">Private</span>
              </h1>
              <div className="flex items-center gap-3">
                <button className="btn btn-sm font-light">
                  <TbHeart fontSize={18} /> love
                </button>
                <button className="btn btn-sm font-light">
                  <TbDownload fontSize={18} /> download
                </button>
                <button className="btn btn-sm font-light">
                  <TbShare3 fontSize={18} /> share
                </button>
              </div>
            </div>
            <img
              src="https://cdn.dribbble.com/userupload/12396741/file/original-6b6eaddb15ae46930f8280eeb1f7a7e7.jpg?resize=1024x768&vertical=center"
              alt=""
              width={400}
              className='my-3 rounded-3xl ml-auto'
            />
            <h2 className="text-xl font-light"># Project {id}</h2>
            <p className="text-xl font-light">
              # Describe :{' '}
              <span className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                sit rerum impedit debitis cupiditate, porro blanditiis velit
                nulla ab laborum in culpa accusamus non inventore magnam alias.
                Quibusdam possimus eligendi consectetur suscipit eum laborum
                commodi temporibus, ipsum corrupti nulla molestias hic a
                dignissimos dolore quos nesciunt sunt quis perferendis quidem.
              </span>
            </p>
            <p className="text-xl font-light"># Tecnologies</p>
            <ul className="timeline mt-3 mx-auto">
              {[...Array(5).keys()].map((i) => (
                <li>
                  <hr className="bg-gray-300 rounded-2xl" />
                  {i % 2 === 0 && (
                    <div className="timeline-start timeline-box">React</div>
                  )}
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="text-success h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  {i % 2 !== 0 && (
                    <div className="timeline-end timeline-box">Express</div>
                  )}
                  <hr className="bg-gray-200 rounded-2xl" />
                </li>
              ))}
            </ul>
            <p className="text-xl font-light"># Features</p>
            <ul className="grid grid-cols-5 gap-5 mt-3 w-fit ">
              {[...Array(15).keys()].map((_, i) => (
                <li className="badge badge-primary">{i}. Authentication</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlobCardUI
