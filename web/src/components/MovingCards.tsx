import InfiniteMovingCards from "./ui/infiniteMovingCards";
import doctor from "../assets/images/doctor-patient.jpg";
import employee from "../assets/images/employee-candidate.png";
import teacher from "../assets/images/teacher.jpg";
import expert from "../assets/images/experts.jpg";

interface Testimonial {
  image: string;
  title: string;
  quote: string;
}

interface Item {
  image: string;
  title: string;
  content: string;
}

export function MovingCards() {
  //@ts-ignore
  const items: Item = testimonials.map((testimonial) => ({
    image: testimonial.image,
    title: testimonial.title,
    content: testimonial.quote,
  }));
  return (
    <div className="rounded-md flex flex-col antialiased bg-transparent dark:bg-black items-center justify-center relative overflow-hidden">
      {
        <InfiniteMovingCards
          //@ts-ignore
          items={testimonials}
          direction="right"
          speed="slow"
        />}
    </div>
  );
}

const testimonials: Testimonial[] = [
  {
    image: doctor,
    title: "Doctor → Patients",
    quote:
      "Book appointments hassle-free with Calenso. Patients easily schedule consultations with trusted doctors and therapists, enjoying the convenience of virtual visits from home.",
  },
  {
    image: employee,
    title: "Company → Candidate",
    quote:
      "Effortlessly schedule interviews and appointments with Calenso. Candidates seamlessly book interviews with potential employers, streamlining the hiring process for both parties.",
  },
  {
    image: teacher,
    title: "Teachers → Students",
    quote:
      "Build an education platform and allow students to book classes with tutors, mentors and professors.",
  },
  {
    image: expert,
    title: "Experts → Fellow",
    quote:
      "Connect and collaborate effortlessly on Calenso. Experts mentor fellows while fellows book one-on-one meetings, fostering a supportive community for learning and growth.",
  },
];
