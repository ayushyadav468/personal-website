import Link from "next/link"

const ContactBanner = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="max-w-screen-xl mx-auto py-8 md:px-12 flex flex-col md:flex-row justify-between items-center bg-primary md:rounded-xl">
        <div>
          <h2 className="mb-1 text-center md:text-start text-s-400 font-semibold text-white tracking-wide">You have a job or project?</h2>
          <p className="text-lg text-white text-center md:text-start">{"If you're interested in working together, don't hesitate!"}</p>
        </div>
        <div className="mt-8 md:mt-0">
          <Link href='/#contact' className="py-3 px-8 text-primary bg-white text-lg font-bold rounded-md shadow-md">Get in touch</Link>
        </div>
      </div>
    </section>
  )
}

export default ContactBanner