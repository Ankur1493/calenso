import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

import booking from "../assets/images/booking.png";
import meeting from "../assets/images/meeting.png";
import bookings from "../assets/images/bookings.png";
import create from "../assets/images/create.png";
import displayMeeting from "../assets/images/displayMeetings.jpeg";
import bookingDetails from "../assets/images/bookingDetails.png";
import claimUsername from "../assets/images/claimUsername.jpeg";

export function GridLayout() {
  return (
    <BentoGrid className="max-w-8xl mx-8 md:mx-20 ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 3 || i === 6 ? " md:col-span-2 m-1" : "m-1"}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({ image1 }: { image1: any }) => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-input bg-opacity-80"
    style={{
      backgroundImage: `url(${image1})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      margin: "0",
      padding: "0",
    }}
  ></div>
);
const items = [
  {
    title: "Schedule events with others",
    description: "Book a time with other users to interact with them",
    header: <Skeleton image1={booking} />,
  },
  {
    title: "Get instant confirmation",
    description:
      "After you create a booking, you will get an confirmation with all the details",
    header: <Skeleton image1={bookingDetails} />,
  },
  {
    title: "Interact with great UI",
    description: "Discover the beauty of thoughtful and functional design",
    header: <Skeleton image1={bookings} />,
  },
  {
    title: "Have meetings which suits you both",
    description:
      "Earlier we had to go through a lot of hassle to have a discussion at a same time, it can be anything from interviews to appointments, now let us take care of that",
    header: <Skeleton image1={meeting} />,
  },
  {
    title: "Customize acc. to your schedule",
    description: "You can easily create an event, which works for you",
    header: <Skeleton image1={create} />,
  },
  {
    title: "Let others book a slot",
    description:
      "You can and should share this page with others to let them interact with you",
    header: <Skeleton image1={displayMeeting} />,
  },
  {
    title: "Start your journey by claiming a username",
    description:
      "Claim a username and let's start this journey and celebrate every milestone. Let the adventure begin!",
    header: <Skeleton image1={claimUsername} />,
  },
];
