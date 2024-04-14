import { useParams } from "react-router-dom";
import { useBookingDetailsQuery } from "../slices/bookingApiSlice";
import getMeetingTimeStatus from "../Hooks/useGetMeetingTimeStatus";


const BookingDetails = () => {

  const bookingId = useParams().id;
  const { data, isError, isLoading } = useBookingDetailsQuery(bookingId)
  const Booking = data?.booking;
  const startingIn = getMeetingTimeStatus(Booking?.startTime)
  console.log(startingIn)
  if (isLoading) {
    return (<div className="text-2xl text-white h-screen w-screen">Loading</div>)
  }

  if (isError) {
    return (<div className="text-2xl text-white h-screen">Error</div>)
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col items-center py-10 bg-home border rounded-[20px] border-gray-400 h-3/4 w-1/3 text-white">
        <div className="text-3xl font-semibold mb-8">{Booking.title}</div>
        <div className="flex w-3/4 border-b border-b-gray-500 pb-4 justify-between">
          <div className="text-[20px]">Attendees - </div>
          <div className="text-gray-300">
            <p className="mb-3">{Booking.guestUser}</p>
            <p>{Booking.first_user}</p>
          </div>
        </div>
        <div className="text-left flex w-3/4 mt-4 pb-4 justify-between border-b border-b-gray-500">
          <div className="text-[20px]">Scheduled at -</div>
          <div className="text-gray-300">
            <div className="mb-3">{new Date(Booking.startTime).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
            <div>{new Date(Booking.startTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
          </div>
        </div>
        <div>
          <div>Duration -</div>
          <div>{Date(Booking.endTime) - Date(Booking.startTime)} minutes</div>
        </div>
        <div className="mt-4 pb-4 text-[20px] text-gray-300">
          <div>{Booking && Booking.canceled ? "canceled" : startingIn}</div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;

