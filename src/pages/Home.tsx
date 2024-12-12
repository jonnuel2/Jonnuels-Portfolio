import Button from "../components/Button";
import ProfileImg from "../assets/Profile-img.jpg";
import Agripeller from "../assets/Agripeller.png";
import Bpo from "../assets/BPO.png";
import Crm4Smes from "../assets/CRM4SMEs.png";
import Interra from "../assets/INTERRA.png";
import Invas from "../assets/INVAS.png";
import MedAdher from "../assets/MEDADHER.png";
import Nigsims from "../assets/Nigsims.png";

// pdf
import Resume from "../assets/Emmanuel Kachikwu's Resume.pdf";

// logos
import ReactJs from "../assets/react.svg";
import Css from "../assets/css-logo.png";
import Typescript from "../assets/Typescript-logo.png";
import Js from "../assets/javascript-logo.png";
import Figma from "../assets/figma-logo.png";
import Github from "../assets/github-logo.png";
import Handlebars from "../assets/handlebars-logo.webp";
import Tailwind from "../assets/Tailwind-logo.svg";

interface Skills {
  name: string;
  percentage: number;
  img: string;
}

interface Projects {
  title: string;
  desc: string;
  img: string;
  href: string;
}

const Home = () => {
  const skills: Skills[] = [
    { name: "React", percentage: 80, img: ReactJs },
    { name: "Typescript", percentage: 70, img: Typescript },
    { name: "Tailwind", percentage: 95, img: Tailwind },
    { name: "CSS", percentage: 95, img: Css },
    { name: "Figma", percentage: 98, img: Figma },
    { name: "Javascript", percentage: 80, img: Js },
    { name: "Github", percentage: 75, img: Github },
    { name: "Handlebars", percentage: 50, img: Handlebars },
  ];

  const projects: Projects[] = [
    {
      title: "Agripeller - Digital Livestock Marketplace",
      desc: "Agripeller is a digital marketplace that helps automate and simplify the retailing process of livestock.",
      img: Agripeller,
      href: "https://agri-peller.onrender.com/",
    },
    {
      title: "Nigsims - Seed Supply Chain Liberalization",
      desc: "Nigsims is a platform that provides a one-stop solution for seed supply chain liberalization. ",
      img: Nigsims,
      href: "https://nigsims.ng/",
    },
    {
      title: "MedAdher - Drug Adherence Monitoring",
      desc: "A platform that provides real-time monitoring of drug adherence for patients. ",
      img: MedAdher,
      href: "https://medadher.com/",
    },
    {
      title: "Invas - Bill payment Application",
      desc: "A platform that enables easy and secure bill payments.",
      img: Invas,
      href: "https://invas.ng/",
    },
    {
      title: "Interra Networks Limited - ICT Providers",
      desc: "Interra Networks Limited provides ICT solutions for businesses. ",
      img: Interra,
      href: "https://www.interranetworks.com/",
    },
    {
      title: "CRM4SMEs - Tailored CRM Solutions",
      desc: "Provides tailored CRM solutions for small and medium-sized enterprises, ",
      img: Crm4Smes,
      href: "https://crm4sme.ng/",
    },
    {
      title: "BPO - Business Outtsourcing",
      desc: " Providing services to businesses seeking to optimize their operations. ",
      img: Bpo,
      href: "https://www.interraoutsourcing.com/",
    },
  ];

  return (
    <div className="bg-primary">
      {/* hero section  */}
      <div
        id="hero"
        className="container flex flex-col gap-6 md:flex-row items-center h-[70%] py-16"
      >
        <div className="flex flex-col items-center md:items-start gap-8 w-full md:w-[55%] order-2 md:order-1">
          <div>
            <h1 className="font-cormorant text-2xl md:text-3xl flex flex-col text-center md:text-left">
              Hello! I'm {"  "}
              <span className=" text-4xl font-[520] md:text-5xl">
                Emmanuel Kachikwu
              </span>
            </h1>
            <h3 className="text-text-grey  text-md md:text-lg text-center md:text-left">
              UX Engineer specializing UIUX Design and Frontend Development.
            </h3>
          </div>
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <Button
              label="Get Resume"
              icon="material-symbols-light:download-sharp"
              iconRotation="0deg"
            />
          </a>
        </div>
        <div className="w-full md:w-[45%] order-1 md:order-2 rounded-full overflow-clip">
          <img src={ProfileImg} alt="Profile" />
        </div>
      </div>

      {/* about me */}
      <div id="about" className="bg-primary2 py-16">
        <div className="container space-y-12">
          <div>
            <div className="text-text-grey">|| About Me...</div>
            <div className="font-cormorant text-2xl md:text-5xl">
              A Little about myself
            </div>
          </div>
          <div className="text-text-grey text-md md:text-lg">
            Hey there! 👋 I'm Emmanuel Kachikwu, a passionate Frontend Developer
            on a mission to make the web ✨ shine! With skills in React,
            JavaScript, and CSS, I create snappy, visually stunning, and
            user-friendly websites and apps that make users go "wow!" 🚀 Whether
            I’m turning a wireframe into a fully functional app 🖥️ or perfecting
            a pixel for that flawless UI 🎨, I'm all about bringing ideas to
            life in the most interactive way possible. When I’m not coding,
            you’ll find me exploring the latest design trends, experimenting
            with cool new tech 🔧, or contributing to awesome open-source
            projects 🌍. Let’s collaborate and build something amazing! 😎🔥
          </div>
        </div>
      </div>

      {/* skills */}
      <div id="skills" className="bg-primary py-16">
        <div className="container space-y-12">
          {/* skills head */}
          <div>
            <div className="text-text-grey">|| Skills</div>
            <div className="font-cormorant text-2xl md:text-5xl">My Skills</div>
          </div>

          {/* skills body */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="h-[80px] md:h-[100px] bg-primary2  w-full rounded-[20px] flex justify-center gap-4 "
              >
                {/* progress bar component */}
                <div className="w-full flex flex-col justify-center px-4 md:px-6">
                  {/* label */}
                  <div className="flex items-center gap-4">
                    <div className="h-auto w-[10%]">
                      <img src={skill.img} alt="" />
                    </div>
                    <label
                      htmlFor=""
                      className="text-text-grey text-xl md:text-2xl"
                    >
                      {skill.name}
                    </label>
                  </div>
                  {/* progress bar */}
                  <div className="flex gap-4 items-center">
                    <div className="w-[100%] h-[5px] bg-gray-700 py-1 px-[2px] flex items-center border border-gray-600 rounded-full">
                      <div
                        className=" h-[5px] bg-white rounded-full"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-text-grey text-md md:text-2xl">
                      {skill.percentage}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* live projects */}
      <div id="live-projects" className="bg-primary2 py-16">
        <div className="container space-y-12">
          {/* live projects header */}
          <div>
            <div className="text-text-grey">|| Awesome Projects</div>
            <div className="font-cormorant text-2xl md:text-5xl">
              Live Projects
            </div>
          </div>
          {/* live projects body */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                href={project.href}
                target="_blank"
                key={index}
                className="transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-primary duration-300 z-[2]"
              >
                <div>
                  <img
                    src={project.img}
                    alt=""
                    className="transition-all duration-300"
                  />
                </div>
                {/* title */}
                <div className="p-4">
                  <div className="text-lg">{project.title}</div>
                  <div className="text-sm font-poppins text-text-grey">
                    {project.desc}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* contact me */}
      <div className="bg-primary py-16">
        <div className="container flex flex-col items-center gap-4 justify-center">
          <div className="text-text-grey">|| Get In Touch</div>
          <div className="font-cormorant text-2xl md:text-5xl">
            Let's Connect
          </div>
          <Button
            onClick={() =>
              (window.location.href =
                "mailto:nonsokach@gmail.com?subject=Let's%20Connect&body=Hi%20there,%20I%20would%20love%20to%20connect%20with%20you%20on%20some%20exciting%20projects%20and%20ideas.")
            }
            label="Contact Me"
            icon="mdi:email"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
