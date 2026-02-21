import welcome from "./assets/Welcome.svg";
import { useLowPowerSpringScroll } from "./hooks/useScrollProgressObserver";
import { useRef } from "react";
import profile from './assets/profile2.webp'
import lantern from './assets/lantern.png'
import star from './assets/star.png'
import ticketbooking from './assets/ticketbooking.png'
import ecommerce from './assets/ecommerce2.png'
import { useState } from "react";

const Frame = () => {
  const navigationItems = [
    { label: "About", link: 'about' },
    { label: "Projects", link: 'projects' },
    { label: "Skills", link: 'skills' },
    { label: "Contact", link: 'contacts' },
    { label: "Download CV", link: 'downloadcv' },
  ];

  const [activeProject, setActiveProject] = useState(null);

  const handleActiveProject = (id) => {
    setActiveProject(id)
  }

  const projects = [
    {
      src: ecommerce,
      href: 'https://shopeasearpon.netlify.app',
      id: 1,
      title: "ShopEase"
    },
    {
      src: ticketbooking,
      href: 'https://book-ticket-arpon.netlify.app',
      id: 2,
      title: "SwiftBus"
    }
  ]

  const projectSections = [
    {
      id: 1,
      top: "740px",
      buttons: [
        { top: "782px", left: "78px" },
        { top: "783px", left: "274px" },
        { top: "783px", left: "470px" },
      ],
      lines: [
        { top: "884px" },
        { top: "914px" },
        { top: "947px" },
        { top: "980px", width: "371px" },
      ],
      imageBox: { top: "938px", left: "634px" },
    },
    {
      id: 2,
      top: "1421px",
      buttons: [
        { top: "1449px", left: "80px" },
        { top: "1450px", left: "276px" },
        { top: "1450px", left: "472px" },
      ],
      lines: [
        { top: "1551px" },
        { top: "1581px" },
        { top: "1614px" },
        { top: "1647px", width: "371px" },
        { top: "1706px" },
        { top: "1741px" },
        { top: "1774px" },
        { top: "1807px", width: "371px" },
        { top: "1866px", width: "371px" },
      ],
      imageBox: {
        top: "1550px",
        left: "614px",
        width: "406px",
        height: "383px",
      },
    },
  ];

  const skillsBoxes = [
    { top: "2156px", left: "396px" },
    { top: "2156px", left: "563px" },
    { top: "2305px", left: "401px" },
    { top: "2305px", left: "571px" },
    { top: "2440px", left: "635px" },
    { top: "2119px", left: "110px" },
    { top: "2243px", left: "244px" },
    { top: "2243px", left: "727px" },
    { top: "2097px", left: "252px" },
    { top: "2264px", left: "102px" },
    { top: "2402px", left: "784px" },
    { top: "2440px", left: "338px" },
    { top: "2097px", left: "715px" },
    { top: "2102px", left: "857px" },
    { top: "2248px", left: "867px" },
    { top: "2428px", left: "190px" },
  ];

  const contactBoxes = [
    { top: "2770px", left: "396px" },
    { top: "2770px", left: "563px" },
    { top: "2919px", left: "401px" },
    { top: "2919px", left: "571px" },
    { top: "3054px", left: "635px" },
    { top: "2733px", left: "110px" },
    { top: "2857px", left: "244px" },
    { top: "2857px", left: "727px" },
    { top: "2711px", left: "252px" },
    { top: "2878px", left: "102px" },
    { top: "3016px", left: "784px" },
    { top: "3054px", left: "338px" },
    { top: "2711px", left: "715px" },
    { top: "2716px", left: "857px" },
    { top: "2862px", left: "867px" },
    { top: "3016px", left: "190px" },
  ];

  const aboutMeRef = useRef()
  // const isVisible = useIntersectionObserver(aboutMeRef, { threshold: 0.5 });
  const percentage = useLowPowerSpringScroll(aboutMeRef, 40, 0.2);

  return (
    <div className="bg-white w-full min-h-[3546px] relative scroll-smooth">
      <header className="flex flex-col mx-auto gap-4 sm:py-12 py-2 sm:px-10 px-5 left-0 w-full min-h-dvh">
        <div className="flex flex-col gap-1">
          <img
            className="w-80 h-[92px]"
            alt="Welcome"
            src={welcome}
          />

          <h1 className="w-[196px] [font-family:'Cardo-Regular',Helvetica] font-normal text-black sm:text-3xl text-2xl tracking-[0] leading-[normal]">
            I am Arpon
          </h1>

          <p className="[font-family:'Cardo-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
            Focused on building creative MERN Stack WebApp.
          </p>

          <p className="[font-family:'Cardo-Regular',Helvetica] font-normal text-black text-md sm:text-lg tracking-[0] leading-[normal]">
            I started exploring web technology years ago out of pure curiosity. I eventually found my place in it, and despite the uncertainties, I’ve realized it’s what I love to do most.</p>
        </div>

        <div className="w-full bg-blue-400 h-full flex gap-2 flex-1 py-4 px-2 justify-evenly bg-hero-banner relative overflow-hidden">
          <img src={lantern} alt="lantern" className="absolute top-0 left-10 h-32 sm:h-40 z-10" />
          <img src={lantern} alt="lantern" className="absolute -top-10 right-10 h-32 sm:h-40 z-10" />
          <img src={star} alt="star" className="absolute -top-0 right-1/2 h-32 sm:h-40 z-10" />
          <nav className="flex-col gap-3 flex justify-center self-stretch z-20 relative">
            {navigationItems.map((item, index) => (
              <div key={index} className="bg-[#ffdd97] rounded-xl flex justify-center items-center shadow-lg hover:shadow-none" >
                <a
                  className="h-11 flex items-center justify-center px-2 font-serif text-[#22AD9E] text-nowrap font-semibold text-md tracking-[0] leading-[normal] hover:text-[#0F4842]" href={`#${item.link}`}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </nav>
          <div className="w-[277px] self-stretch rounded-xl border-2 border-[#0E4741] shadow-2xl relative z-20" >
            <img src={profile} alt="arpon" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </header>
      <section id="about" className="w-full flex h-auto bg-white px-5 sm:px-10 sm:py-12 py-2" ref={aboutMeRef}>
        <div className="w-full flex-1 flex flex-col pb-4 bg-gray-100 rounded-xl" style={{
          transform: `scale(${0.5 + percentage * 0.5})`,
          willChange: 'transform'
        }}>
          <h2 className="text-center lg:text-4xl text-xl sm:text-3xl font-serif mt-4 font-semibold">About Me</h2>
          <div className="mx-auto px-2 lg:px-16 lg:py-4">
            <p className="text-center text-xl">
              I am Arpon Das, a dynamic MERN Stack Developer based in Kushtia, Bangladesh. I specialize in building high-performance, cross-browser compatible web applications that prioritize both functionality and user experience.
            </p>
            <h3 className="text-center font-semibold lg:my-4 font-serif text-xl">What I Do?</h3>
            <p className="text-center text-lg">
              I turn ideas into reality using the MERN stack (MongoDB, ExpressJS, React, and Node.js). My technical toolkit includes:
            </p>
            <div className="flex justify-center px-10">
              <ul className="list-disc mt-2">
                <li className="">
                  Frontend: Crafting responsive designs with ReactJS, Redux, and Tailwind CSS.
                </li>
                <li>
                  Backend: Developing secure server-side logic using ExpressJS and JSON Web Tokens (JWT) for authentication.
                </li>
                <li>
                  Performance: Ensuring clean, maintainable code through disciplined version control with Git.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex h-auto bg-white px-5 sm:px-10 sm:py-12 py-2" id='project'>
        <div className={`flex h-auto flex-col transition-all duration-1000 py-2 px-4 bg-linear-to-bl from-[#B6C99B] to-[#E7F5DC] overflow-hidden w-full`}>
          <div className="mx-auto pt-1 pb-6 overflow-hidden">
            <h1 className={`text-center lg:text-4xl text-xl sm:text-3xl font-serif mt-4 font-semibold`}>Featured Projects</h1>
          </div>
          <div className="flex h-full pb-2 flex-col sm:flex-row-reverse relative">
            <div className={`transition-all duration-500 h-[400px] w-full flex overflow-hidden shadow-blue-950 shadow-lg rounded-sm `}>
              {projects.map((project) => {
              return (
                <>
                  <div className={`w-full transition-all duration-700 bg-no-repeat bg-cover bg-top shrink-0 overflow-hidden  border-[#EE8181]`} >
                    <img src={project.src} alt={project.title} className="object-contain"/>
                  </div>
                </>)
            })}
            </div>
            <div className="w-full flex justify-between items-center px-3 h-10 sm:hidden absolute bottom-1/3">
              <button className="w-auto h-auto active:bg-[#c47547] hover:bg-[#c47547] rounded-full">
                <svg className="rotate-225 rounded-full border h-11 w-11" viewBox="0 -960 960 960" fill="black"><path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z" /></svg>
              </button>
              <button className="w-auto h-auto active:bg-[#c47547] hover:bg-[#c47547] rounded-full">
                <svg className="rotate-45 rounded-full border h-11 w-11" viewBox="0 -960 960 960" fill="black"><path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z" /></svg>
              </button>
            </div>
            <div className={`sm:flex w-full hidden gap-3 sm:content-start sm:items-start sm:flex-wrap overflow-hidden  transition-all duration-500`}>
              {projects.map((project) => {
                return (
                  <div className="w-full sm:w-auto shrink-0 flex" key={project.id}>
                    <button onClick={() => handleActiveProject(project.id)} className={`${activeProject === project.id ? "bg-black text-white" : "bg-[#E7F5DC]"} bg-[#E7F5DC] outline-none group hover:bg-black hover:text-white px-2 font-normal h-11 rounded-sm text-black text-lg flex items-center gap-1 mx-auto`} key={project.id}>{project.name}<svg className={`${activeProject === project.id ? "fill-white" : "fill-black"} hidden sm:block group-hover:fill-white group-active:bg-[#c47547] group-active:rotate-45 p-0.5 group-active:rounded-full group-hover:rotate-45 transition-all duration-100`} height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z" /></svg></button>
                  </div>
                )
              })}
              <div className="flex w-full mt-10">
                {/* {projects.map((project) => {
                return (
                  <div className="w-full shrink-0 hidden sm:flex sm:pr-4 transition-all duration-300" key={project.id}>
                    <p className="text-lg sm:text-2xl"></p>
                  </div>
                )
              })} */}

              </div>
            </div>
          </div>
        </div>
      </section >

      {/* {projectSections.map((section) => (
        <section
          key={section.id}
          className="absolute left-10 w-[1020px] h-[641px] bg-[#d9d9d9] rounded-xl"
          style={{ top: section.top }}
        >
          {section.buttons.map((button, index) => (
            <div
              key={index}
              className="absolute w-44 h-[39px] bg-[#de3737] rounded-xl"
              style={{ top: button.top, left: button.left }}
            />
          ))}

          {section.lines.map((line, index) => (
            <div
              key={index}
              className="absolute h-[19px] bg-[#de3737]"
              style={{
                top: line.top,
                left: "80px",
                width: line.width || "420px",
              }}
            />
          ))}

          {section.imageBox && (
            <div
              className="absolute bg-[#de3737] rounded-xl"
              style={{
                top: section.imageBox.top,
                left: section.imageBox.left,
                width: section.imageBox.width || "277px",
                height: section.imageBox.height || "246px",
              }}
            />
          )}
        </section>
      ))} */}

      {/* <section className="absolute top-[2035px] left-10 w-[1020px] h-[574px] bg-[#d9d9d9] rounded-xl">
        {skillsBoxes.map((box, index) => (
          <div
            key={index}
            className="absolute w-32 h-[124px] bg-[#c62a2a] rounded-xl"
            style={{ top: box.top, left: box.left }}
          />
        ))}
      </section> */}

      {/* <section className="absolute top-[2649px] left-10 w-[1020px] h-[574px] bg-[#d9d9d9] rounded-xl">
        {contactBoxes.map((box, index) => (
          <div
            key={index}
            className="absolute w-32 h-[124px] bg-[#c62a2a] rounded-xl"
            style={{ top: box.top, left: box.left }}
          />
        ))}
      </section> */}

      {/* <footer className="absolute top-[3263px] left-0 w-[1100px] h-[282px] bg-[#d9d9d9]" /> */}
    </div>
  );
};

export default Frame;