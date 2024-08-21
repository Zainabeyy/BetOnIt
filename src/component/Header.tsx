export default function Header() {
  return (
    <header>
      <div className="containerPadding py-16 bg-[url('../home/background-img.png')] bg-no-repeat bg-cover">
        <h1 className="title">
          Join Thousands Who Are Betting Smarter with{" "}
          <span className="whitespace-nowrap text-green-bright">BET ON IT</span>
        </h1>
        <form className="mt-14">
          <label htmlFor="email">
            <input
              type="email"
              placeholder="Email Address"
              id="email"
              name="email"
              className="box bg-slate-dark text-slate-light text-xs px-6"
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
              <span className="font-extrabold italic">Winning Community</span>
            </p>
            <img src="../home/arrow.svg" alt="arrow icon" />
          </button>
        </form>
      </div>
    </header>
  );
}
