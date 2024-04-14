import { useParams } from "react-router-dom"
import { useDisplayMeetingsQuery } from "../slices/meetingsApiSlice"
import DisplayMeetingCard from "../components/DisplayMeetingCard";

interface meeting {
  _id: string;
  title: string;
  duration: string;
  info: string;
}

const DispalyOwnerMeetings = () => {

  const { username } = useParams();
  const { data, isLoading, isError } = useDisplayMeetingsQuery(username)
  if (isLoading) {
    return (<div className="text-2xl text-white">Loading</div>)
  }

  if (isError) {
    return (<div className="text-2xl text-white h-screen">Error</div>)
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="mb-12 flex flex-col justify-center items-center">
        <img src={data.userProfile} alt="User Profile" className="rounded-[100px] w-[150px]" />
        <h1 className="text-3xl text-white mt-5">{data.username}</h1>
      </div>
      {data.meetings && data.meetings.length > 0 && data.meetings.map((meeting: meeting) => (
        <DisplayMeetingCard id={meeting._id} title={meeting.title} duration={meeting.duration} info={meeting.info} />
      ))}
    </div>
  )
}

export default DispalyOwnerMeetings
