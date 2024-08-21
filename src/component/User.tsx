import data from "../data.json";

export default function Users() {
  const userData = data.Users;

  const userEl = userData.map((user) => {
    return (
      <div
        key={user.id}
        className="py-6 text-center min-w-80 h-80 bg-black-dark rounded-2xl mx-5"
      >
        <img
          src={`../../home/users/${user.img}.png`}
          alt={user.img}
          className="mx-auto"
        />
        <div className="my-4">
          <h3 className="text-base text-white font-semibold">{user.name}</h3>
          <p className="text-xs text-transWhite-medium font-medium">
            {user.description}
          </p>
        </div>
        <div className="bg-green-bright min-h-32 pt-6 px-10 relative rounded-2xl">
          <img
            src="../../users/qutation.png"
            alt="icon"
            className="absolute top-4 left-7"
          />
          <p className="text-black-dark text-xxs align-text-top break-word">
            {user.comment}
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="my-8 overflow-hidden">
      <h2 className="containerPadding uppercase text-2xl font-black italic text-green-darkest">
        What our users are saying...
      </h2>
      <div className="flex flex-nowrap slide">
        <div className="mt-5 flex flex-nowrap animate-slide slide-item">
          {userEl}
        </div>
        <div className="mt-5 flex flex-nowrap animate-slide slide-item">
          {userEl}
        </div>
      </div>
    </div>
  );
}
