import AboutUsFeature from "../component/aboutUsFeature";

export default function AboutUsPage() {
  return (
    <main>
      <section className="containerPadding md:py-16 py-12 bg-[url('../../aboutUs/background-img.png')] bg-no-repeat bg-cover bg-center rounded-[2rem]">
        <h1 className="title">
          Revolutionizing <span className="text-green-bright">Betting</span>
        </h1>
        <p className="font-medium md:text-base text-xs text-transWhite-medium md:pt-8 md:pb-4 py-5">
          Bet On It: Your Platform for Fair, Social, and Exciting Wagers
        </p>
      </section>
      <section className="containerPadding md:py-14 py-10">
        <p className="font-medium text-black-darkest/60 capitalize">
          At Bet On It, we are redefining the betting landscape with our
          innovative peer-to-peer wagering platform. Unlike traditional betting
          software, Bet On It introduces a sustainable, interactive competition
          system that caters to a wide range of interests and skill levels. Our
          platform is designed to be a comprehensive solution for all your
          betting needs, featuring three core elements:
        </p>
      </section>
      <section>
        <AboutUsFeature/>
      </section>
    </main>
  );
}
