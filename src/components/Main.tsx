import React, { useEffect, useState } from "react";
import ShoutForm from "./ShoutForm";
import ShoutList from "./ShoutList";
import ShoutResult from "./ShoutResult";
import { Shoutouts } from "../models/ShoutOut";
import { fetchShoutOutApi } from "../services/ShoutOutApiService";

export default function Main() {
  const [shouts, setShouts] = useState<Shoutouts[]>([
    { id: 1, to: "Tony", from: "Parker", message: "Love you 3000" },
    {
      id: 2,
      to: "All",
      from: "IDIL",
      message:
        "February is going to bring you new energy, improved mental and physical state, spiritual growth, abundance in every area of your life,more clarity for your purpose, and a new path to clear out the old. It's goig to be a new month of blessings because you claim that right now!!!"
    },
    {
        id:3,
        to: "Pumbaa",
        from: "Timon",
        message:"Hakuna Matata, what a wonderful phrase ~ Hakuna Matata, ain't no passing craze ~ it means no worries for the rest of your days.. It's our problem free philosophy, Hakuna Matataaaaaa"
    }
   
  ]);

  //Hook
  useEffect(() => {
    fetchShoutOutApi().then((data) => setShouts(data));
  }, [shouts]);

  function handleOnSubmit(shouts: string) {
    // setShouts
  }

  return (
    <div className="Main">
      <h1>All Shout Outs</h1>
      <ShoutList shouts={shouts} />
      <ShoutForm onSubmit={handleOnSubmit} />
    </div>
  );
}
