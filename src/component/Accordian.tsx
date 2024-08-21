import React from "react";
import { nanoid } from "nanoid";

type Accordian = {
  items: {
    question: string;
    answer: string;
  };
};

export default function Accordian({ items }: Accordian) {
  const [open, setOpen] = React.useState(false);
  function handleClick() {
    setOpen((prev) => !prev);
  }
  const id = nanoid();
  return (
    <div key={id} className={`mb-4 bg-black-dark p-6 rounded-2xl ${open ? 'active' : ''}`}>
      <button
        className="font-black italic list-none flex justify-between items-center uppercase w-full openBtn"
        onClick={handleClick}
      >
        <p>{items.question}</p>
        <img
          src="../../arrow.svg"
          alt="arrow"
          className="arrow"
        />
      </button>
      <div className="answer">
        <p className="pt-8 text-transWhite-medium">{items.answer}</p>
      </div>
    </div>
  );
}
