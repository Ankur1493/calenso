import { Link, useNavigate } from "react-router-dom";
import github from "../assets/icons/github.png";
import calender from "../assets/images/landing.png";
import { GridLayout } from "../components/GridLayout";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { MovingCards } from "../components/MovingCards";
import { useState } from "react";
import { toast } from "react-toastify";

function Landing() {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const localName = userInfo?.username || "";
  const [username, setUsername] = useState(localName);
  const navigate = useNavigate();
  const handleUsernameSubmission = () => {
    if (username.length > 0) {
      if (!userInfo) {
        navigate(`/register/${username}`);
      } else {
        navigate("/home/event-types");
      }
    } else {
      toast.error("write a proper username");
    }
  };
  return (
    <div className="relative">
      <div>
        <div className="flex justify-between px-2 md:px-12 lg:px-16 py-10">
          <div className="py-2">
            <h1>
              <a
                href="/"
                className="text-mainText font-heading font-extrabold text-2xl sm:text-4xl mr-2 cursos-pointer"
              >
                CALENSO
              </a>
            </h1>
          </div>
          <div className="flex flex-row mx-10 sm:mx-16 gap-y-5 gap-x-4 md:gap-x-10">
            <div className="bg-mainText rounded-3xl w-24 md:w-36 h-11 px-1.5 flex items-center">
              <a
                href="https://github.com/Ankur1493/calenso/"
                target="_blank"
                className="cursos-pointer w-full"
              >
                <div className="flex flex-row justify-center sm:justify-around text-center">
                  <div>
                    <img
                      className="w-5 h-5 hidden sm:block md:w-7 md:h-7"
                      src={github}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-main font-heading font-semibold text-1xl md:text-2xl ">
                      star us
                    </p>
                  </div>
                </div>
              </a>
            </div>
            {userInfo ? (
              <div className=" flex items-center  bg-main rounded-3xl w-24 md:w-36 h-11 px-1.5 border-mainText border-2 text-mainText  hover:text-main hover:bg-mainText">
                <Link
                  to={"/home/event-types"}
                  className="cursos-pointer w-full flex justify-center"
                >
                  <p className="font-heading font-semibold text-1xl md:text-2xl ">
                    Go to App
                  </p>
                </Link>
              </div>
            ) : (
              <div className=" flex items-center bg-main rounded-3xl w-36 h-11 px-1.5 border-mainText border-2 text-mainText  hover:text-main hover:bg-mainText">
                <Link
                  to={"/register"}
                  className="cursos-pointer w-full flex justify-center"
                >
                  <p className="font-heading font-semibold text-2xl ">
                    Sign up
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row lg:px-16 justify-center mt-12 lg:px-4 lg:mt-20">
          <div className="flex flex-col w-8/12 lg:w-6/12">
            <div className="flex flex-col items-left justify-center lg:p-16 lg:pt-32">
              <div className="w-full">
                <p className="font-heading text-center md:text-left text-secondText text-2xl lg:text-2xl xl:text-2xl">
                  "Unlock your calendar's potential with Calenso.com -{" "}
                </p>
              </div>
              <div className="w-full">
                <p className="font-heading text-center md:text-left text-mainText text-2xl lg:text-3xl xl:text-3xl">
                  where every meeting matters."
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <div className="w-full  block lg:hidden">
                <img
                  src={calender}
                  alt=""
                  className="rounded-3xl w-full h-full "
                />
              </div>
            </div>
            <div className=" lg:px-16 pt-10">
              <div>
                <p className="font-secondHeading text-mainText text-center lg:text-left text-5xl lg:text-7xl xl:text-8xl">
                  Scheduling
                </p>
              </div>
            </div>
          </div>
          <div className="mr-16 w-6/12 h-3/12 h-5/12 hidden lg:block">
            <img src={calender} alt="" className="rounded-3xl w-full h-full " />
          </div>
        </div>
        <div className="text-center lg:text-left lg:px-20 lg:w-full">
          <p className="font-secondHeading text-mainText text-5xl lg:text-7xl xl:text-8xl">
            infrastructure for everyone.{" "}
          </p>
        </div>
        <div className="flex lg:flex-row flex-wrap justify-center lg:gap-y-0 lg:justify-between lg:px-16 mt-24 mx-4 lg:mx-28 lg:flex-nowrap gap-y-4 px-4">
          <div className="flex flex-row w-11/12">
            <div className="w-4/12 md:w-3/12 p-8 bg-secondText border-second border-r-2 border-dashed rounded-s-3xl">
              <div className="flex justify-center items-center h-full w-full">
                <a href="/">
                  <p className="font-secondHeading md:text-1xl xl:text-2xl">
                    Calenso.com/
                  </p>
                </a>
              </div>
            </div>
            <div className="w-9/12 h-full rounded-e-3xl p-8 bg-input">
              <div className="flex items-center h-full">
                <input
                  disabled={userInfo ? true : false}
                  type="text"
                  placeholder="Calenso123"
                  className="border-none font-heading decoration-none w-full md:text-1xl xl:text-2xl bg-transparent focus:outline-none"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="w-11/12 lg:w-4/12 flex justify-center items-center">
            <button
              onClick={handleUsernameSubmission}
              className="flex items-center justify-center p-6 w-full lg:w-8/12 bg-second rounded-3xl md:p-4 md:w-full"
            >
              <div className="flex justify-center text-mainText text-3xl lg:text-2xl xl:text-3xl font-secondHeading w-full">
                {userInfo ? (
                  <p>Go to App</p>
                )
                  : (
                    <p>Claim username</p>
                  )}
              </div>
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-20 lg:mt-24">
          <div className="w-full px-6 lg:w-7/12 lg:px-0 text-center">
            <p className="font-secondHeading text-mainText text-4xl md:5xl lg:text-7xl font-bold">
              Everything you need in a scheduling app
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-24 md:px-6">
          <GridLayout />
        </div>
        <div className="flex justify-center mt-16 md:mt-32">
          <div className="w-full px-6 lg:w-7/12 lg:px-0 text-center">
            <p className="font-secondHeading text-mainText text-4xl md:text-5xl xl:text-6xl font-bold">
              Tailored scheduling for every business, every time
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-16 lg:mt-24 pb-16 w-full">
          <MovingCards />
        </div>
      </div>
    </div>
  );
}

export default Landing;
