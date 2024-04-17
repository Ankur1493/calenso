import { toast } from "react-toastify";
import meet from "../assets/icons/meet.png";
import { useCancelBookingMutation } from "../slices/bookingApiSlice";
import { useDispatch } from "react-redux";
import { markBookingCanceled } from "../slices/bookingSlice";
import { Link } from "react-router-dom";
import LoadingComponent from "./Loader";
import { ErrorResponse, Booking } from "../interfaces/interfaces";

function BookingCard({ booking }: { booking: Booking }) {
  const formatDate = (ISOString: string) => {
    const date = new Date(ISOString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };
  const dispatch = useDispatch();

  const formatTime = (ISOString: string) => {
    const date = new Date(ISOString);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const [cancel, { isLoading }] = useCancelBookingMutation();

  const cancelBooking = async () => {
    const bookingId = booking._id;
    try {
      const response = await cancel(bookingId).unwrap();
      if (response) {
        dispatch(markBookingCanceled(bookingId));
        toast.success("booking canceled");
      }
    } catch (err) {
      const errorResponse = err as ErrorResponse;
      toast.error(errorResponse.data?.message || errorResponse.error);
    }
  };

  if (isLoading) {
    return <LoadingComponent />;
  }

  const currentDate = new Date();
  const cancelStatus =
    //@ts-ignore
    new Date(booking.startTime) < currentDate && !booking.canceled;

  return (
    <div className="p-2">
      <div className="group bg-second flex w-full max-w-full items-center justify-between overflow-hidden px-4 py-5 sm:px-6 border border-gray-400 rounded-[8px]">
        <Link
          to={`/bookings/${booking._id}`}
          className="flex-1  overflow-hidden pr-4 text-sm"
          title="Booking"
        >
          <div className="flex">
            <div className="text-left w-40">
              <p
                className="text-mainText font-heading "
                data-testid="event-type-title-705355"
              >
                {//@ts-ignore 
                  formatDate(booking.startTime)}
              </p>
              <p
                className="text-input text-[15px] opacity-80 font-heading"
                data-testid="event-type-title-705355"
              >
                { //@ts-ignore
                  formatTime(booking.startTime)} - {formatTime(booking.endTime)}
              </p>
            </div>
            <div className="text-subtle w-80 ml-16">
              <ul className="flex flex-col flex-wrap gap-x-2">
                <li>
                  <span className="text-mainText font-heading font-medium ">
                    {booking.title}
                  </span>
                </li>
                <li>
                  <span className="text-input font-heading text-[15px] ">
                    {booking.description}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Link>

        <div className="flex">
          {booking && !booking.canceled && (
            <div className="mt-4 mr-12 hidden sm:mt-0 sm:flex">
              <div className="flex justify-between space-x-2 rtl:space-x-reverse hover:bg-home">
                <a
                  className="inline-flex items-center text-sm font-medium relative rounded-md text-mainText border border-default h-9 px-4 py-2.5 whitespace-nowrap "
                  data-testid="cancel"
                  href={booking.event.meetLink}
                  target="_blank"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={meet}
                      className="h-4 w-full rounded-sm"
                      alt="Cal Video logo"
                    />
                    <span className="text-blue-400 font-heading">
                      Join Event
                    </span>
                  </div>
                </a>
              </div>
            </div>
          )}

          {booking && !booking.canceled && !cancelStatus && (
            <div className="mt-4 hidden sm:mt-0 sm:flex">
              <div className="flex justify-between space-x-2 rtl:space-x-reverse rounded-md border hover:border-black border-default  hover:bg-red-400 hover:text-home">
                <button
                  className="inline-flex items-center text-sm font-medium relative rounded-md text-mainText hover:text-home h-9 px-4 py-2.5 whitespace-nowrap gap-x-1 "
                  onClick={cancelBooking}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-x h-4 w-4 stroke-[1.5px] ltr:-ml-1 ltr:mr-2 rtl:-mr-1 rtl:ml-2"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                  <span className="font-heading text-mainText">
                    Cancel event
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
