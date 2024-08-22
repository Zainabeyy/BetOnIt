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
    <div key={items.id} ref={animationParent} className={`mb-4 bg-black-dark p-6 rounded-2xl ${open ? 'active' : ''}`}>
      <button
        className="font-black italic list-none flex justify-between items-center uppercase w-full openBtn"
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
        <p className="pt-8 text-transWhite-medium">{items.answer}</p>
      </div>
      )}
    </div>
  );
}
