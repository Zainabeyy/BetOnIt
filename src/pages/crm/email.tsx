export default function EmailCrm() {
  return (
    <div className="containerPadding py-10 bg-black-darkest min-h-[100vh]">
      <h1 className="title">Emails</h1>
      <label
        htmlFor="search"
        className="max-w-full flex my-9 rounded-full p-4 font-medium text-slate-light box-border bg-slate-dark"
      >
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search Email"
          className="bg-transparent w-full outline-none  caret-white"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#fff"
        >
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
      </label>
      <div className="text-lg font-semibold italic capitalize bg-black-dark text-green-dark p-9 rounded-3xl flex text-center">
        <div className="flex-grow border-r-2 border-green-dark">
          <p className="number">{23}</p>
          <p>Emails recieved this Month</p>
        </div>
        <div className="flex-grow">
          <p className="number">{2}</p>
          <p>Emails recieved today</p>
        </div>
      </div>
      <table className="border-collapse w-full my-9 rounded-3xl overflow-hidden border-2 border-green-darkest">
        <tr className="bg-black-dark text-xl font-normal table-heading border-2 border-black-darkest">
          <th>Email ID</th>
          <th>Emails</th>
          <th>Date</th>
        </tr>
        <tr className="table-data border-2 border-black-darkest">
          <td>1</td>
          <td>ZainabAzeem@gmail.com</td>
          <td>05/04/2024</td>
        </tr>
        <tr className="table-data border-2 border-black-darkest">
          <td>1</td>
          <td>ZainabAzeem@gmail.com</td>
          <td>05/04/2024</td>
        </tr>
        <tr className="table-data border-2 border-black-darkest">
          <td>1</td>
          <td>ZainabAzeem@gmail.com</td>
          <td>05/04/2024</td>
        </tr>
      </table>
    </div>
  );
}
