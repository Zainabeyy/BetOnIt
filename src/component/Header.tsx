export default function Header() {
  return (
    <header>
      <div className="containerPadding rounded-3xl overflow-hidden md:py-16 py-12 bg-[url('../home/background-img.png')] bg-no-repeat bg-cover">
        <h1 className="title">
          Join Thousands Who Are Betting Smarter with{" "}
          <span className="whitespace-nowrap text-green-bright">BET ON IT</span>
        </h1>
        <form className="md:mt-14 mt-10 max-w-96">
          <label htmlFor="email">
            <input
              type="email"
              placeholder="Email Address"
              id="email"
              name="email"
              className="box bg-slate-dark text-slate-light px-6"
              required
            />
          </label>
          <button
            type="submit"
            className="my-4 text-white box flex justify-between items-center bg-green-dark px-8"
          >
            <img src="../home/cup-icon.svg" alt="cup icon" />
            <p>
              Join the{" "}
              <span className="font-extrabold italic whitespace-nowrap">Winning Community</span>
            </p>
            <img src="../home/arrow.svg" alt="arrow icon" />
          </button>
        </form>
      </div>
    </header>
  );
}
