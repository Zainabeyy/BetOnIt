import { nanoid } from "nanoid";
import data from "../faqsData.json";
import Accordian from "../component/Accordian";

export default function Faqs() {
  const faqsData = data.faqsData;
  const faqsDataEl = faqsData.map((data) => {
    const secId = nanoid();
    const faqSec = data.data.map((item) => {
      const accordId=nanoid();
      return (
        <Accordian key={accordId} items={item}/>
      );
    });
    return (
      <div key={secId} className="my-16">
        <h2 className="text-[#414141] font-black italic text-xl mb-8 uppercase">
          {data.name}
        </h2>
        <div>{faqSec}</div>
      </div>
    );
  });
  return (
    <main className="containerPadding bg-black-darkest py-16 text-white">
      <h1 className="title w-auto">Frequently asked questions</h1>
      <div>{faqsDataEl}</div>
    </main>
  );
}
