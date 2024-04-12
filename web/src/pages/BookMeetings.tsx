import React from "react";
import BookMeetingCard from "../components/BookingType";

function BookMeetings() {
  return (
    <div className="bg-home h-screen">
      <main className="mx-auto max-w-3xl px-4 py-24">
        <div className="mb-8 text-center">
          <span className="bg-emphasis item-center relative inline-flex aspect-square justify-center rounded-full align-top overflow-hidden w-24 h-24 min-w-24 min-h-24">
            <img
              alt="Ankur Sharma"
              className="aspect-square rounded-full w-24 h-24 min-w-24 min-h-24"
              src="https://lh3.googleusercontent.com/a/ACg8ocL8zHgRMu9d_CrZt2fNCGZPWOcuALthFOyWL-oHCWmZmEA=s96-c"
            />
          </span>
          <h1
            className="font-secondHeading text-mainText my-1 text-3xl"
            data-testid="name-title"
          >
            Ankur Sharma
          </h1>
        </div>
        <BookMeetingCard />
      </main>
    </div>
  );
}

export default BookMeetings;
