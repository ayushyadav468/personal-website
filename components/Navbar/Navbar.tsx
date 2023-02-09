import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const LogoSvg = () => {
  return (
    <svg
      className="w-[45px] h-[45px]"
      width="21"
      height="18"
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4851 16L9.86712 2L2 16H9.86712M14.4554 10.1667L19 2"
        stroke="#0f7bf1"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const Navbar = () => {
  const navbarRef = useRef<HTMLElement>(null);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

  // Hamberger menu click handler
  // Change css classes
  const showMenuHandler = () => {
    // disable scroll on body when menu is open
    if (document && document.body && !showMenu) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
    setShowMenu(prev => !prev);
  };

  useEffect(() => {
    // Changes navbar styles from normal to glassmorphic
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 10) {
        if (navbarRef && navbarRef.current) {
          setNavbarScrolled(true);
        }
      } else {
        setNavbarScrolled(false);
      }
    };
  }, []);

  return (
    <header className={`w-full fixed top-0 z-50 ${navbarScrolled || showMenu ? "bg-white shadow-lg" : "bg-ghost-white shadow-none"} transition-all duration-700`} ref={navbarRef}>
      <div className="w-full md:max-w-screen-xl mx-auto py-4 px-2 relative md:px-0 flex justify-between items-center">
        <Link href={'/'} className='flex items-center gap-4'>
          <LogoSvg />
          <p className="text-lg font-semibold tracking-wide">Ayush Yadav</p>
        </Link>
        <ul className="hidden md:flex md:justify-end md:items-center md:gap-8 md:text-base md:font-medium md:text-text">
          <li className="border-b-2 border-b-transparent hover:border-b-black transition-all duration-700">
            <Link href={'/'} scroll={false} aria-label={'scroll to home page top'}>
              Home
            </Link>
          </li>
          <li className="border-b-2 border-b-transparent hover:border-b-black transition-all duration-700">
            <Link href={'/#skills'} scroll={false} aria-label={'scroll to skills section'}>
              Skills
            </Link>
          </li>
          <li className="border-b-2 border-b-transparent hover:border-b-black transition-all duration-700">
            <Link href={'/#projects'} scroll={false} aria-label={'scroll to projects section'}>
              Projects
            </Link>
          </li>
          <li className="border-b-2 border-b-transparent hover:border-b-black transition-all duration-700">
            <Link href={'/#about-me'} scroll={false} aria-label={'scroll to about me section'}>
              About me
            </Link>
          </li>
          <li>
            <Link href={'/#contact'} scroll={false} className="py-2 px-6 border-2 text-primary font-medium border-primary rounded-3xl hover:text-white hover:bg-primary transition-all duration-300" aria-label={'scroll to contact me section'}>
              Contact
            </Link>
          </li>
        </ul>

        <ul
          className={`${showMenu ? 'right-0' : '-right-full'
            } absolute top-[77px] w-full min-h-[calc(100vh-64px)] flex flex-col justify-center items-center gap-12 bg-white md:hidden transition-right duration-700`}
        >
          <li className="border-b-2 border-b-transparent hover:border-b-black transition-all duration-700">
            <Link href={'/'} scroll={false} onClick={showMenuHandler}>
              Home
            </Link>
          </li>
          <li className="border-b-2 border-b-transparent hover:border-b-black transition-all duration-700">
            <Link href={'/#skills'} scroll={false} onClick={showMenuHandler}>
              Skills
            </Link>
          </li>
          <li className="border-b-2 border-b-transparent hover:border-b-black transition-all duration-700">
            <Link href={'/#projects'} scroll={false} onClick={showMenuHandler}>
              Projects
            </Link>
          </li>
          <li className="border-b-2 border-b-transparent hover:border-b-black transition-all duration-700">
            <Link href={'/#about-me'} scroll={false} onClick={showMenuHandler}>
              About me
            </Link>
          </li>
          <li>
            <Link href={'/#contact'} scroll={false} onClick={showMenuHandler} className="py-2 px-6 border-2 text-primary font-medium border-primary rounded-3xl hover:text-white hover:bg-primary transition-all duration-300">
              Contact
            </Link>
          </li>
        </ul>

        <button
          className='flex flex-col justify-center gap-1 md:hidden'
          onClick={showMenuHandler}
          aria-label='Menu'
        >
          <span
            className={`inline-block w-8 h-1 bg-black transition-all duration-200 ${showMenu ? 'rotate-45 translate-y-2' : null
              } `}
          ></span>
          <span
            className={`inline-block w-6 h-1 bg-black transition-all duration-200 ${showMenu ? 'opacity-0' : null
              } `}
          ></span>
          <span
            className={`inline-block w-8 h-1 bg-black transition-all duration-200 ${showMenu ? '-rotate-45 -translate-y-2' : null
              } `}
          ></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar