import React from "react";
import InfiniteMovingCards from "./ui/infiniteMovingCards";
import doctor from "../assets/images/doctor-patient.jpg";
import employee from "../assets/images/employee-candidate.png";

export function MovingCards() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-transparent dark:bg-black items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    image: doctor,
    title: "Doctor",
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light.",
  },
  {
    image: employee,
    title: "Doctor",
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
  },
  {
    image: doctor,
    title: "Doctor",
    quote: "All that we see or seem is but a dream within a dream.",
  },
  {
    image: doctor,
    title: "Doctor",
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  },
  {
    image: doctor,
    title: "Doctor",
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
  },
];
