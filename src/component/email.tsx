type Email = {
  id:number,
  email: string;
  date: string;
};

type data={
    item:Email[],
    search:string,
    loading:boolean,
    error:string | null
}

export default function EmailsTable(props: data) {
  const emailEl: JSX.Element[] = props.item.filter((item)=>{
    return props.search.toLowerCase() === "" ? item : 
    item.email.toLowerCase().includes(props.search)
  }).map((item) => {
    return (
      <tr key={item.id} className="table-data border-black-darkest">
        <td>{item.id}</td>
        <td>{item.email}</td>
        <td>{item.date}</td>
      </tr>
    );
  });

  //   display on the page

  if (props.loading) return <p className="my-9 text-white">...Loading</p>;
  if (props.error) return <p className="my-9 text-white">{props.error}</p>;

  return (
    <table className="border-collapse w-full my-9 rounded-3xl overflow-hidden">
      <thead>
        <tr className=" text-xl font-normal table-heading">
          <th>Email ID</th>
          <th>Emails</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>{emailEl}</tbody>
    </table>
  );
}
