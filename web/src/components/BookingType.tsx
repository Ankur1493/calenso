import { useEffect } from "react";
import { useBookingsQuery } from "../slices/bookingApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setBookings } from "../slices/bookingSlice";
import BookingCard from "./BookingCard";
import { RootState } from "../store";
import LoadingComponent from "./Loader";
import { Booking } from "../interfaces/interfaces";

interface BookingTypeProps {
  filter: 'upcoming' | 'past' | 'cancelled';
}
//@ts-ignore
const formatDate = (ISOString: string) => {
  const date = new Date(ISOString);
  const options: Intl.DateTimeFormatOptions = { weekday: "short", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

function BookingType({ filter }: BookingTypeProps) {
  const dispatch = useDispatch();
  const { data: bookings = [], isLoading, isError } = useBookingsQuery(undefined);
  const selectedBooking = useSelector(
    (state: RootState) => state?.bookings?.bookings
  );
  useEffect(() => {
    const bookingArr = bookings?.bookings?.map((book: Booking) => book);
    dispatch(setBookings(bookingArr));
  }, [bookings, dispatch]);

  const filteredBookings = () => {
    if (!selectedBooking) return [];
    const currentDate = new Date();
    switch (filter) {
      case "upcoming":
        return selectedBooking.filter(
          (booking) =>
            //@ts-ignore
            new Date(booking.startTime) > currentDate && !booking.canceled
        );
      case "past":
        return selectedBooking.filter(
          (booking) =>
            //@ts-ignore
            new Date(booking.startTime) < currentDate && !booking.canceled
        );
      case "cancelled":
        return selectedBooking.filter((booking) => booking.canceled);
      default:
        return [];
    }
  };
  if (isLoading) {
    return <div className="h-screen w-screen"> <LoadingComponent /> </div>;
  }

  return (
    <div className="px-4">
      {isError ? (
        <p>Error fetching bookings</p>
      ) : (
        <div>
          {filteredBookings().length > 0 ? (
            filteredBookings().map((booking) => (
              < div >
                {//@ts-ignore
                  <BookingCard booking={booking} />}
              </div>
            ))
          ) : (
            <main className="w-full">
              <div className="flex w-full flex-col relative;">
                <div className="flex items-center justify-center pt-2 xl:pt-0">
                  <div className="flex w-full select-none flex-col items-center justify-center rounded-lg p-7 lg:p-20 border-subtle border border-dashed">
                    <div className="bg-emphasis flex h-[72px] w-[72px] items-center justify-center rounded-full text-mainText">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-default inline-block h-10 w-10 stroke-[1.3px]"
                      >
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="4"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" x2="16" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="2" y2="6"></line>
                        <line x1="3" x2="21" y1="10" y2="10"></line>
                      </svg>
                    </div>
                    <div className="flex max-w-[420px] flex-col items-center">
                      <h2 className="font-heading text-mainText text-center text-xl mt-6">
                        No{" "}
                        {filter === "upcoming"
                          ? "upcoming"
                          : filter === "past"
                            ? "past"
                            : "cancelled"}{" "}
                        bookings
                      </h2>
                      <div className="font-heading text-mainText mb-8 mt-8 text-center text-sm font-normal leading-6 opacity-80">
                        You have no{" "}
                        {filter === "upcoming"
                          ? "upcoming"
                          : filter === "past"
                            ? "past"
                            : "cancelled"}{" "}
                        bookings.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          )}
        </div>
      )
      }
    </div >
  );
}

export default BookingType;
