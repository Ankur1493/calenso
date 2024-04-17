import { Link } from "react-router-dom";
import ankurProfile from "../assets/images/ankurProfile.jpeg";
import uditProfile from "../assets/images/udit_profile.png";

const FoundersPublicPage = () => {
  return (
    <div className="w-full my-20 h-2/5  flex flex-col justify-center items-center ">
      <div>
        <h1 className="font-secondHeading text-mainText text-center text-4xl md:text-5xl xl:text-6xl font-bold">
          Book a meeting with creators of Calenso
        </h1>
      </div>
      <div className="text-white h-full flex mt-14 justify-around lg:flex-row font-heading flex-col">
        <div className="bg-home lg:w-2/5 py-6 h-full mx-4 lg:m-0 border-input rounded-[50px] flex-col flex justify-center items-center">
          <img
            src={ankurProfile}
            alt="Ankur Sharma"
            className="w-[200px] rounded-[100px] pb-2"
          />
          <h1 className="text-3xl font-semibold text-center">Ankur Sharma</h1>
          <div className="text-sm w-10/12 py-4 text-input">
            <p>
              Hey! 👋 I'm Ankur, hailing from India and diving deep into the
              world of full-stack development. My toolbox is pretty loaded with
              the MERN stack, spiced up with some Next.js, and for the data
              magic, I lean on PostgreSQL and Redis. GraphQL and trpc? Yep, got
              those covered too. And oh, I'm navigating all of this using Linux,
              so you can bet I'm all about that open-source life.
            </p>{" "}
            <p className="py-2">
              Recently, I led a hands-on session on Git/GitHub for the folks at
              100xDevs, and guess what? It sparked 10+ pull requests from the
              attendees. Talk about community learning!
            </p>{" "}
            <p>
              Right now, I'm getting my hands dirty with DevOps – Docker, CI/CD,
              AWS, you name it. I'm all about understanding how to scale things
              in the real world, creating battle-tested code along the way.
            </p>{" "}
            <p className="pt-2">
              {" "}
              Wanna chat about tech, share ideas, or collaborate on a project?
            </p>
          </div>
          <Link to="/ankur">
            <button className="py-4 px-8 border-gray-400 font-medium border rounded-[50px] hover:bg-input hover:text-main duration-100">
              Let's schedule a meet
            </button>
          </Link>
        </div>
        <div className="bg-home lg:w-2/5 py-6 my-6 mx-3 lg:m-0 h-full border-input rounded-[50px] flex-col flex justify-center items-center">
          <img
            src={uditProfile}
            alt="Udit Kapoor"
            className="w-[200px] rounded-[100px] pb-2"
          />
          <h1 className="text-3xl font-semibold text-center">Udit Kapoor</h1>
          <div className="text-sm w-10/12 py-4 text-input">
            <p>
              Hi 👋, I am Udit! As a React-focused developer from India,
              currently navigating through my third year of BTech, my journey in
              the tech world is full of exciting milestones. A significant
              highlight is becoming a semi-finalist in the Smart India Hackathon
              (SIH) 2023, showcasing my knack for innovation and
              problem-solving.
            </p>
            <p className="py-2">
              With a keen passion for front-end technologies, especially React,
              I'm committed to honing my skills further and diving into projects
              that challenge the status quo. My academic pursuits and
              achievements in competitions like SIH 2023 reflect my dedication
              and capability to excel in both individual and team settings.
            </p>
            <p>
              I'm on a constant lookout for new learning opportunities and
              collaborations with individuals or teams who share a passion for
              creating meaningful technological solutions.
            </p>
            <p>
              Let's connect and see what incredible things we can build
              together.{" "}
            </p>
          </div>
          <Link to="/udit060">
            <button className="py-4 px-8 border-gray-400 font-medium border rounded-[50px] hover:bg-input hover:text-main duration-100">
              Let's schedule a meet
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoundersPublicPage;
