import welcome from "./assets/Welcome.svg";
// import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
import { useLowPowerSpringScroll } from "./hooks/useScrollProgressObserver";
import { useRef } from "react";
import profile from './assets/profile2.webp'
import lantern from './assets/lantern.png'
import star from './assets/star.png'
import half from './assets/half.png'

const Frame = () => {
  const navigationItems = [
    { label: "About", link: 'about' },
    { label: "Projects", link: 'projects' },
    { label: "Skills", link: 'skills' },
    { label: "Contact", link: 'contacts' },
    { label: "Download CV", link: 'downloadcv' },
  ];

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
      <header className="flex flex-col mx-auto gap-4 sm:py-12 py-2 sm:px-10 px-5 left-0 w-full min-h-screen">
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
          <img src={lantern} alt="lantern" className="absolute top-0 left-10 h-40 z-10" />
          <img src={lantern} alt="lantern" className="absolute -top-10 right-1/4 h-40 z-10" />
          <img src={star} alt="star" className="absolute -top-0 right-10 h-40 z-10" />
          <nav className="flex-col gap-3 flex justify-center self-stretch z-20 relative">
            {navigationItems.map((item, index) => (
              <div key={index} className="bg-[#ffdd97] rounded-xl flex justify-center items-center shadow-lg hover:shadow-none" >
                <a
                  className="h-11 flex items-center justify-center px-2 [font-family:'Cardo-Regular',Helvetica] font-normal text-[#22AD9E] text-nowrap font-semibold text-md tracking-[0] leading-[normal] hover:text-[#0F4842]" href={`#${item.link}`}
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
      <section id="about" className="w-full flex min-h-screen bg-white px-5 sm:px-10 sm:py-12 py-2" ref={aboutMeRef}>
        <div className="w-full flex-1 flex flex-col bg-gray-100 rounded-xl" style={{
          transform: `scale(${0.5 + percentage * 0.5})`,
          willChange: 'transform'
        }}>
          <h2 className="text-center text-[#22AD9E] text-3xl mt-1 font-semibold">About</h2>
          <div className="w-full flex-1 flex flex-col p-1">
            <div className="h-1/2 bg-green-100 flex justify-center items-center">
              <img src={half} alt="half" className="h-full"/>
            </div>
            <div className="h-1/2 bg-blue-400"></div>
          </div>

        </div>
      </section>

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