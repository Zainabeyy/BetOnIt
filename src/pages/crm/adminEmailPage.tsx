import EmailsTable from "../../component/email";
import searchIcon from './img/search.svg';
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase.config";
import { useEffect, useState } from "react";
import moment from "moment";

type EmailData = {
  id:number,
  email: string;
  date: string;
};

export default function AdminEmailDashboard() {

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>("");
  const [emails, setEmails] = useState<EmailData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Count emails received this month and today

  const today=moment().format('L');
  const currentMonth = moment().format("M"); 
  const currentYear = moment().format("YYYY");
  const emailsReceivedToday= emails.filter(email => email.date === today).length;
  const emailsReceivedThisMonth= emails.filter(email=>{
    const emailMonth=moment(email.date,'L').format('M');
    const emailYear=moment(email.date,'L').format('YYYY');
    return emailMonth===currentMonth && emailYear === currentYear
  }).length

  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    setSearchQuery(e.target.value)
  }

  // getting data from firebase 

  useEffect(() => {
    const databaseRef = ref(database, "emails");
    onValue(
      databaseRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const emailArray: EmailData[] = Object.values(data);
          setEmails(emailArray);
          setLoading(false);
        } else {
          setEmails([]);
        }
        setLoading(false);
      },
      (error) => {
        console.error("Eror fetching emails:", error);
        setError("Failed to fetch emails. Please try again.");
        setLoading(false);
      }
    );
  }, []);


  return (
    <div className="containerPadding py-10 bg-black-darkest min-h-screen">
      <h1 className="title">Emails</h1>
      <label
        htmlFor="search"
        className="adminLabel"
      >
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search Email"
          value={searchQuery}
          onChange={handleChange}
          className="adminInput"
        />
        <img src={searchIcon} alt="search icon" />
      </label>
      <div className="text-lg font-semibold italic capitalize bg-black-dark text-green-dark p-9 rounded-3xl flex text-center">
        <div className="flex-grow border-r-2 border-green-dark">
          <p className="number">{emailsReceivedThisMonth}</p>
          <p>Emails recieved this Month</p>
        </div>
        <div className="flex-grow">
          <p className="number">{emailsReceivedToday}</p>
          <p>Emails recieved today</p>
        </div>
      </div>
      <EmailsTable item={emails} search={searchQuery} loading={loading} error={error}/>
    </div>
  );
}