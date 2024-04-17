import { useNavigate, useParams } from "react-router-dom";
import { useBookingDetailsQuery } from "../slices/bookingApiSlice";
import getMeetingTimeStatus from "../Hooks/useGetMeetingTimeStatus";
import { useCancelBookingMutation } from "../slices/bookingApiSlice";
import { markBookingCanceled } from "../slices/bookingSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import LoadingComponent from "../components/Loader";
import { ErrorResponse } from "../interfaces/interfaces";

const BookingDetails = () => {
  const navigate = useNavigate();
  const bookingId = useParams().id;
  const dispatch = useDispatch();
  const { data, isError, isLoading } = useBookingDetailsQuery(bookingId);
  const Booking = data?.booking;
  const startingIn = Booking ? getMeetingTimeStatus(Booking.startTime) : "";
  const isOccured = Booking
    ? Date.now() < new Date(Booking.startTime).getTime()
    : false;

  const [cancel, { isLoading: isLoadingCancel, isError: isErrorCancel }] =
    useCancelBookingMutation();

  const cancelBooking = async () => {
    if (!Booking) return;
    try {
      const response = await cancel(Booking._id).unwrap();
      if (response) {
        //@ts-ignore
        dispatch(markBookingCanceled(bookingId));
        toast.success("booking canceled");
      }
    } catch (err) {
      const errorResponse = err as ErrorResponse;
      toast.error(errorResponse.data?.message || errorResponse.error);
    }
  };

  if (isLoading || isLoadingCancel) {
    return <LoadingComponent />;
  }

  if (isError || isErrorCancel) {
    return <div className="text-2xl text-white h-screen">Error</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen overflow-y-auto w-screen">
      <div className="flex flex-col items-center py-5 bg-home border rounded-[20px] border-gray-400 w-full md:w-1/3 text-white">
        <span
          className="flex justify-start w-full px-4 cursor-pointer font-heading font-semibold opacity-80"
          onClick={() => navigate(-1)}
        >
          Go Back
        </span>
        <div className="text-3xl font-semibold mb-8 text-secondHeading">
          {Booking.title}
        </div>
        <div className="flex flex-col lg:flex-row w-3/4 border-b border-b-gray-500 pb-4 sm:justify-between">
          <div className="text-[18px] font-heading">Attendees - </div>
          <div className="text-gray-300 text-right font-heading text-sm">
            <p className="mb-3">{Booking.guestUser}</p>
            <p>{Booking.first_user}</p>
          </div>
        </div>
        <div className="flex w-3/4 mt-4 pb-4 justify-between border-b border-b-gray-500">
          <div className="text-[18px] font-heading">Scheduled at -</div>
          <div className="text-gray-300 text-right font-heading text-sm">
            <div className="mb-3">
              {new Date(Booking.startTime).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div>
              {new Date(Booking.startTime).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </div>
          </div>
        </div>
        <div className="flex w-3/4 justify-between mt-4 pb-6 border-b border-b-gray-500 font-heading text-mainText">
          <div className="text-[18px] font-heading">Duration -</div>
          <div className="font-heading text-sm">
            {//@ts-ignore
              ((new Date(Booking.endTime) - new Date(Booking.startTime)) /
                60000
              ).toFixed(0)}{" "}
            minutes
          </div>
        </div>
        <div className="flex justify-between w-3/4 pb-6 text-left mt-4 border-b border-b-gray-500">
          <div className="font-heading text-[18px]">Description -</div>
          <div className="w-1/2 font-heading text-sm">
            {Booking.description}
          </div>
        </div>
        <div className="flex justify-between w-3/4 pb-6 text-left mt-4 border-b border-b-gray-500">
          <div className="text-[18px] font-heading">Additional Info -</div>
          <div className="w-1/2 font-heading text-sm">
            {Booking.description}
          </div>
        </div>
        <div className="mt-4 pb-4 text-[25px] text-center text-gray-500 font-heading">
          <div>{Booking && Booking.canceled ? "canceled" : startingIn}</div>
        </div>
        {Booking && !Booking.canceled && (
          <div className="w-full sm:w-3/4 flex flex-col justify-center items-center sm:flex-row sm:justify-between mt-4 space-y-4 sm:space-y-0">
            <a
              href={Booking.event.meetLink}
              target="_blank"
              className={`${!isOccured ? "w-3/4" : " w-3/4 md:w-1/3"
                } flex justify-center py-2 rounded-lg font-heading hover:bg-gray-500 hover:text-black duration-200 border-gray-500 border`}
            >
              Join Event
            </a>
            {isOccured && (
              <button
                onClick={cancelBooking}
                className="w-3/4 md:w-1/3 flex justify-center font-heading py-2 rounded-lg bg-mainText text-black hover:bg-home hover:text-white duration-200 border-gray-500 border"
              >
                Cancel Event
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingDetails;
