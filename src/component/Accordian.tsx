import React from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react'

type Accordian = {
  items: {
    id:number;
    question: string;
    answer: string;
  };
};

export default function Accordian({ items }: Accordian) {
  const [animationParent] = useAutoAnimate()
  const [open, setOpen] = React.useState(false);
  function handleClick() {
    setOpen((prev) => !prev);
  }
  return (
    <div key={items.id} ref={animationParent} className="mb-4 bg-black-dark p-4 md:p-6 rounded-xl md:rounded-2xl">
      <button
        className="text-left space-x-2 font-extrabold md:font-black italic list-none flex justify-between items-center uppercase w-full"
        onClick={handleClick}
      >
        <p>{items.question}</p>
        <img
          src="../../arrow.svg"
          alt="arrow"
          className={`arrow ${open ? 'rotate' : ''}`}
        />
      </button>
      {open && (
        <div >
        <p className="pt-4 md:pt-8 text-xs md:text-base text-transWhite-medium">{items.answer}</p>
      </div>
      )}
    </div>
  );
}
