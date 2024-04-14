import { useNavigate, useParams } from "react-router-dom";
import { useBookingDetailsQuery } from "../slices/bookingApiSlice";
import getMeetingTimeStatus from "../Hooks/useGetMeetingTimeStatus";
import { useCancelBookingMutation } from "../slices/bookingApiSlice";
import { markBookingCanceled } from "../slices/bookingSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const BookingDetails = () => {
  const navigate = useNavigate()
  const bookingId = useParams().id;
  const dispatch = useDispatch()
  const { data, isError, isLoading } = useBookingDetailsQuery(bookingId)
  const Booking = data?.booking;
  const startingIn = getMeetingTimeStatus(Booking?.startTime)
  const isOccured = Date.now() < new Date(Booking?.startTime).getTime()
  const [cancel, { isLoading: isLoadingCancel, isError: isErrorCancel }] = useCancelBookingMutation();

  const cancelBooking = async () => {
    const bookingId = Booking._id;
    try {
      const response = await cancel(bookingId).unwrap();
      if (response) {
        dispatch(markBookingCanceled(bookingId));
        toast.success("booking canceled");
      }
    } catch (err) {
      toast.error(err?.data?.message || err?.error);
    }
  }



  if (isLoading || isLoadingCancel) {
    return (<div className="text-2xl text-white h-screen w-screen">Loading</div>)
  }

  if (isError || isErrorCancel) {
    return (<div className="text-2xl text-white h-screen">Error</div>)
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col items-center py-10 bg-home border rounded-[20px] border-gray-400 h-3/4 w-1/3 text-white">
        <span className="flex justify-start w-full px-4 cursor-pointer" onClick={() => navigate(-1)}>Go Back</span>
        <div className="text-3xl font-semibold mb-8">{Booking.title}</div>
        <div className="flex w-3/4 border-b border-b-gray-500 pb-4 justify-between">
          <div className="text-[20px]">Attendees - </div>
          <div className="text-gray-300 text-right">
            <p className="mb-3">{Booking.guestUser}</p>
            <p>{Booking.first_user}</p>
          </div>
        </div>
        <div className="flex w-3/4 mt-4 pb-4 justify-between border-b border-b-gray-500">
          <div className="text-[20px]">Scheduled at -</div>
          <div className="text-gray-300 text-right">
            <div className="mb-3">{new Date(Booking.startTime).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
            <div>{new Date(Booking.startTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
          </div>
        </div>
        <div className="flex w-3/4 justify-between mt-4 pb-6 border-b border-b-gray-500">
          <div className="text-[20px]">Duration -</div>
          <div>
            {((new Date(Booking.endTime) - new Date(Booking.startTime)) / 60000).toFixed(0)} minutes
          </div>
        </div>
        <div className="flex justify-between w-3/4 pb-6 text-left mt-4 border-b border-b-gray-500">
          <div>Description -</div>
          <div className="w-1/2">{Booking.description}</div>
        </div>
        <div className="flex justify-between w-3/4 pb-6 text-left mt-4 border-b border-b-gray-500">
          <div>Additional Info -</div>
          <div className="w-1/2">{Booking.description}</div>
        </div>
        <div className="mt-4 pb-4 text-[30px] text-gray-500">
          <div>{Booking && Booking.canceled ? "canceled" : startingIn}</div>
        </div>
        {Booking && !Booking.canceled && (
          <div className="w-3/4 flex justify-between mt-4">
            <a href={Booking.event.meetLink} target="_blank" className={`${!isOccured ? 'w-full' : 'w-1/3'} flex justify-center py-2 rounded-lg hover:bg-gray-500 hover:text-black duration-200 border-gray-500 border`}>Join Event</a>
            {isOccured &&
              <button onClick={cancelBooking} className="w-1/3 flex justify-center py-2 rounded-lg bg-gray-500 text-black hover:bg-home hover:text-white  duration-200 border-gray-500 border">Cancel Event</button>
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingDetails;

