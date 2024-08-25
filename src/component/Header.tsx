import React, { useState } from "react";
import { database } from "../firebase.config.ts";
import {
  equalTo,
  get,
  orderByChild,
  push,
  query,
  ref,
} from "firebase/database";
import moment from "moment";

type EmailData = {
  email: string;
  date: string;
};

export default function Header() {
  const [email, setEmail] = useState("");
  const [emailData, setEmailData] = useState<EmailData>({
    email: "",
    date: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }
  
  React.useEffect(() => {
    setEmailData({
      email: email,
      date: moment().format("L"),
    });
  }, [email]);

  async function submitEmail() {
    if (!email) {
      return;
    }

    try {
      const databaseRef = ref(database, "emails");
      const emailQuery = query(
        databaseRef,
        orderByChild("email"),
        equalTo(email)
      );
      const snapshot = await get(emailQuery);
      if (snapshot.exists()) {
        alert("This email already exists.");
      } else {
        await push(databaseRef, emailData);
        alert("Your email has been successfully submitted!");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      alert("Failed to submit email. Please try again.");
    }
  }

  function handleformSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    submitEmail();
    setEmail("");
    setEmailData({ email: "", date: "" });
  }

  return (
    <header>
      <div className="containerPadding rounded-3xl overflow-hidden md:py-16 py-12 bg-[url('../home/background-img.png')] bg-no-repeat bg-cover">
        <h1 className="title">
          Join Thousands Who Are Betting Smarter with{" "}
          <span className="whitespace-nowrap text-green-bright">BET ON IT</span>
        </h1>
        <form className="md:mt-14 mt-10 max-w-96" onSubmit={handleformSubmit}>
          <label htmlFor="email">
            <input
              type="email"
              placeholder="Email Address"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
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
              <span className="font-extrabold italic whitespace-nowrap">
                Winning Community
              </span>
            </p>
            <img src="../home/arrow.svg" alt="arrow icon" />
          </button>
        </form>
      </div>
    </header>
  );
}
