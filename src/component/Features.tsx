import data from "../data.json";
import { nanoid } from "nanoid";

export default function Features() {
  const features = data.Features;
  const featureEl = features.map((item) => {
    const id = nanoid();
    return (
      <div
        key={id}
        className="px-5 md:px-10 py-4 md:py-8 bg-black-dark  rounded-3xl"
      >
        <div className="flex justify-start items-center">
          <div className="mr-3 md:mr-5">
            <img
              src={`../../features/${item.icon}.svg`}
              alt={item.icon}
            />
          </div>
          <h3 className="text-white font-black italic text-lg md:text-xl uppercase">
            {item.title}
          </h3>
        </div>
        <p className="font-medium text-transWhite-medium mt-3 md:text-base text-xs md:mt-6">
          {item.description}
        </p>
      </div>
    );
  });
  return (
    <div className="containerPadding py-14 bg-black-darkest mb-10 md:mb-20 rounded-3xl md:rounded-[2rem]">
      <div className="md:my-12 mb-10">
        <h2 className="max-w-[20ch] text-green-bright font-black leading-7 italic text-[1.6rem] md:text-3xl uppercase">
          The Future of Betting is Here
        </h2>
        <p className="max-w-[60ch] font-medium text-xs text-transWhite-medium mt-4">
          Experience peer-to-peer wagering, lower fees, and a thriving social
          community.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-9">{featureEl}</div>
    </div>
  );
}
