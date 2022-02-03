import React, { FormEvent, useState } from "react";
import "./Styles.css";

interface Props {
  onSubmit: (shouts: string) => void;
}

export default function ShoutForm({ onSubmit }: Props) {
  const [form, setForm] = useState("");

  function handleOnSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit(form);
  }
  return (
    <div className="ShoutForm" >
      <form action="" onSubmit={handleOnSubmit}>
        <h2>Leave a Shout Out</h2>
        <label htmlFor="">To:</label>
        <input type="text" value={form} onChange={(e) => setForm(e.target.value)}/>
        <label htmlFor="">From:</label>
        <input type="text" value={form} onChange={(e) => setForm(e.target.value)} />
        <label htmlFor="">Shout Out:</label>
        <textarea value={form} onChange={(e) => setForm(e.target.value)}/>
        <br></br>
        <button>Submit Shout Out</button>
      </form>
    </div>
  );
}
