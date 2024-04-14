import { Link } from "react-router-dom";

interface props {
  id: string;
  title: string;
  duration: string;
  info: string;
  username: string;
}

const DisplayMeetingCard = ({ id, title, duration, info, username }: props) => {
  return (
    <div className=' h-[100px] border border-gray-400 px-4 my-2 rounded-lg w-8/12 bg-second text-white cursor-pointer' key={id} >
      <Link to={`/${username}/${id}`}>
        <div className="flex flex-col justify-around h-full py-2">
          <div className='flex w-full justify-between'>
            <div className="text-3xl">{title}</div>
            <div className="text-gray-400">{duration} minutes</div>
          </div>
          <div>{info}</div>
        </div>
      </Link>
    </div>
  )
}

export default DisplayMeetingCard
