import data from '../data.json';
import { nanoid } from 'nanoid';

export default function Features() {
    const features=data.Features;
    const featureEl=features.map(item=>{
        const id=nanoid();
        return(
            <div key={id} className='px-10 py-8 bg-black-dark  rounded-3xl'>
                <div className='flex justify-start items-center'>
                    <img src={`../../features/${item.icon}.svg`} alt={item.icon} className='mr-5'/>
                    <h3 className='text-white font-black italic text-xl uppercase'>{item.title}</h3>
                </div>
                <p className='font-medium text-transWhite-medium mt-6'>{item.description}</p>
            </div>
        )
    })
  return (
    <div className="containerPadding py-14 bg-black-darkest mb-20 rounded-[2rem]">
      <div className="w-72 my-12">
        <h2 className="text-green-bright font-black italic text-3xl uppercase">
          The Future of Betting is Here
        </h2>
        <p className="font-medium text-xs text-transWhite-medium mt-4">
          Experience peer-to-peer wagering, lower fees, and a thriving social
          community.
        </p>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-9'>
        {featureEl}
      </div>
    </div>
  );
}
