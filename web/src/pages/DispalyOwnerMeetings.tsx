import { useParams } from "react-router-dom";
import { useDisplayMeetingsQuery } from "../slices/meetingsApiSlice";
import DisplayMeetingCard from "../components/DisplayMeetingCard";
import LoadingComponent from "../components/Loader";
import noProfile from "../assets/images/noProfile.png";

interface meeting {
  _id: string;
  title: string;
  duration: string;
  info: string;
}

const DispalyOwnerMeetings = () => {
  const { username } = useParams();
  const { data, isLoading, isError } = useDisplayMeetingsQuery(username);
  if (isLoading) {
    return (
      <div className="w-screen  h-screen">
        {" "}
        <LoadingComponent />{" "}
      </div>
    );
  }

  if (isError) {
    return <div className="text-2xl text-white h-screen">Error</div>;
  }
  const name = data.firstName
    ? `${data.firstName} ${data.lastName}`
    : data.username;

  return (
    <div className="h-screen w-screen overflow-y-auto flex flex-col justify-center items-center">
      <div className="mt-42 mb-12 flex flex-col justify-center items-center">
        <img
          src={data.userProfile ? data.userProfile : noProfile}
          alt="User Profile"
          className="rounded-[100px] w-[150px]"
        />
        <h1 className="text-3xl text-white mt-5">{name}</h1>
      </div>
      {data.meetings &&
        data.meetings.length > 0 &&
        data.meetings.map((meeting: meeting) => (
          <DisplayMeetingCard
            key={meeting._id}
            id={meeting._id}
            title={meeting.title}
            duration={meeting.duration}
            info={meeting.info}
            username={username || ""}
          />
        ))}
      <div>
        {data.status === "success" && !data.meetings && (
          <div className="text-white text-2xl md:text-3xl text-center">
            User Have No meetings, We'll notify them to create some events
          </div>
        )}
      </div>
    </div>
  );
};

export default DispalyOwnerMeetings;
