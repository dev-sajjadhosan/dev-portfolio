import { useEffect, useState } from 'react'
import BlobCardUI from '../../components/Card/Card'
import axios from 'axios'

const blobProjects = [
  {
    title: 'Portfolio V2',
    description: 'A modern personal website built with Next.js and Tailwind.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    imageUrl: '/images/portfolio.png',
    repoUrl: 'https://github.com/yourname/portfolio-v2',
    liveUrl: 'https://yourdomain.com',
    layout: 'vertical',
  },
  {
    title: 'DevFinder App',
    description: 'Search GitHub profiles with GitHub API and theme toggling.',
    tags: ['React', 'API', 'Dark Mode'],
    imageUrl: '/images/devfinder.png',
    repoUrl: 'https://github.com/yourname/devfinder',
    liveUrl: 'https://devfinder-demo.netlify.app',
    layout: 'horizontal',
  },
  {
    title: 'Blog CMS',
    description: 'Full-stack blog with Markdown editor and user auth.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    imageUrl: '/images/blogcms.png',
    repoUrl: 'https://github.com/yourname/blog-cms',
    liveUrl: 'https://blogcms.vercel.app',
    layout: 'horizontal',
  },
]

const ProjectPage = () => {
  const [data, setData] = useState<string[] | []>([])

  useEffect(() => {
    axios.get('/public/project.json').then((res) => {
      setData(res.data)
      console.log(res.data)
    })
  }, [])
  return (
    <>
      <div className="p-10">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-light"># Project</h3>
          <div className="flex items-center gap-3">
            <button
              className="btn btn-sm btn-circle tooltip"
              data-tip="tooltip"
            >
              s
            </button>
            <button
              className="btn btn-sm btn-circle tooltip"
              data-tip="tooltip"
            >
              s
            </button>
            <button
              className="btn btn-sm btn-circle tooltip"
              data-tip="tooltip"
            >
              s
            </button>
          </div>
        </div>
        <div className="mt-13 grid lg:grid-cols-2 gap-5">
          {/* <div className="card p-5 bg-base-200">
            <div className="flex items-center justify-between">
              <h1 className="text-sm font-light"># Project 01</h1>
              <button className="btn btn-sm btn-circle">s</button>
            </div>
            <figure>
              <img
                className="rounded-3xl mt-2"
                src="https://cdn.dribbble.com/userupload/12396741/file/original-6b6eaddb15ae46930f8280eeb1f7a7e7.jpg?resize=1024x768&vertical=center"
                alt=""
              />
            </figure>
            <div className="mt-5 flex items-center gap-2">
              <button className="btn btn-sm">Demo</button>
              <button className="btn btn-sm btn-primary font-light">
                Demo
              </button>
            </div>
          </div> */}
          {data.slice(1, 10)?.map((item, i) => (
            <BlobCardUI key={i} {...item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProjectPage
