import React from "react";
import { nanoid } from "nanoid";
import data from "../data.json";

type Feature = {
  id: number;
  icon: string;
  title: string;
  img: string;
  description: string;
};

export default function AboutUsFeature() {
  const featureData: Feature[] = data.AboutUsFeatures;
  const [featureItem, setFeature] = React.useState<Feature>(featureData[0]);
  const [animate,setAnimate]=React.useState(false)

  React.useEffect(()=>{
    setAnimate(true)
    const timer=setTimeout(()=>setAnimate(false),1000)
    return () => clearTimeout(timer)
  },[featureItem])

  function handleClick(data: Feature) {
    setFeature(data);
  }
  const featureElButton = featureData.map((item) => {
    let id = nanoid();
    return (
      <button
        key={id}
        onClick={() => handleClick(item)}
        className={`featureButton ${
          item.title === featureItem.title ? "activeFeatbtn" : ""
        }`}
      >
        <img
          src={`../../aboutUs/aboutUsFeature/${item.icon}${item.title===featureItem.title ? "-green" : "-white"}.svg`}
          alt={item.icon}
          className="mr-2"
        />
        {item.title}
      </button>
    );
  });
  return (
    <div className="bg-black-darkest containerPadding py-8 rounded-[1.85rem] mb-10 md:mb-20">
      <div className="flex md:flex-wrap md:flex-row flex-col items-start md:space-y-0 space-y-2 features">{featureElButton}</div>
      <div className="py-12">
      <div className={`lg:flex lg:justify-start lg:items-center lg:space-x-20 items-center min-h-[23.3125rem] ${animate ? 'animate-fade' : ''}`}>
          <img
            src={`../../aboutUs/aboutUsFeature/${featureItem.img}.svg`}
            alt={featureItem.img}
          />
          <p className="animate-fade text-transWhite-medium capitalize max-w-[57ch] lg:mt-0 mt-10" >
            {featureItem.description}
          </p>
        </div>
      </div>
    </div>
  );
}
