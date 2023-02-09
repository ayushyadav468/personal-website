import Image from "next/image"
import Link from "next/link"

type ProjectData = {
  id: number,
  imageUrl: string,
  type: string,
  heading: string,
  description: string,
  websiteUrl: string,
  githubUrl: string
}

const PROJECT_CARD_DATA: ProjectData[] = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
    type: 'website',
    heading: 'E for Everything',
    description: 'An e-commerce website developed using ReactJs, NodeJS, Express and MongoDB. Deployed on vercel',
    websiteUrl: 'https://e-for-everything-client.vercel.app/',
    githubUrl: 'https://github.com/ayushyadav468/e-for-everything-client'
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
    type: 'website',
    heading: 'Hulu Clone',
    description: 'Hulu Clone made using NextJS, TypeScript and TailwindCSS. Deployed on vercel',
    websiteUrl: 'https://hulu-clone-ayush.vercel.app/',
    githubUrl: 'https://github.com/ayushyadav468/hulu-clone'
  }
]

const ProjectCard = ({ data }: { data: ProjectData }) => {
  return (
    <div className="px-3 py-3 md:px-0 md:py-0 flex flex-col gap-4 border border-gray md:border-none md:flex-row md:gap-0 rounded md:rounded-none relative">
      <div className={`flex-1 ${data.id % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
        <Image
          src={data.imageUrl}
          alt={data.heading}
          width={615}
          height={520}
          loading='lazy'
          className={`min-w-full md:relative md:top-[15%] ${data.id % 2 === 0 ? "md:right-[5%]" : "md:left-[5%]"} md:z-10 rounded md:rounded-md md:shadow-md md:scale-110`}
        />
      </div>
      <div className={`md:px-8 flex flex-col justify-center items-start gap-2 md:border md:border-gray rounded-md flex-1 ${data.id % 2 === 0 ? "md:order-1 md:pr-[8.5%]" : "md:order-2 md:pl-[8.5%]"}`}>
        <p className="uppercase text-primary text-sm font-bold tracking-wider">{data.type}</p>
        <h3 className="mt-1 mb-2 md:mb-4 text-2xl font-semibold tracking-wide">{data.heading}</h3>
        <p className="mb-2 md:mb-4 text-text text-sm font-normal tracking-wide">{data.description}</p>
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <Link href={data.githubUrl} target="_blank" className='text-primary text-sm md:text-base font-bold md:tracking-wider hover:text-primary-dark'>Code on github</Link>
          <Link href={data.websiteUrl} target="_blank" className='group flex justify-center items-center gap-2'>
            <p className="text-primary text-sm md:text-base font-bold md:tracking-wider">See Live Version</p>
            <svg className='relative left-0 group-hover:left-2 transition-all duration-300' width="28" height="12" viewBox="0 0 28 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM27.5303 6.53033C27.8232 6.23744 27.8232 5.76256 27.5303 5.46967L22.7574 0.696699C22.4645 0.403806 21.9896 0.403806 21.6967 0.696699C21.4038 0.989593 21.4038 1.46447 21.6967 1.75736L25.9393 6L21.6967 10.2426C21.4038 10.5355 21.4038 11.0104 21.6967 11.3033C21.9896 11.5962 22.4645 11.5962 22.7574 11.3033L27.5303 6.53033ZM1 6.75H27V5.25H1V6.75Z" fill="#0f7bf1" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section className="px-6 py-10 md:px-0" id="projects">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-s-500 font-bold tracking-wide">Projects</h2>
        <div className="pt-10 pb-0 md:py-10 flex flex-col gap-10 md:gap-40">
          {PROJECT_CARD_DATA.map((cardData) => {
            return (
              <ProjectCard data={cardData} key={cardData.id} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects