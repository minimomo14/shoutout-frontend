import React from "react";
import { fetchShoutOutApi } from "../services/ShoutOutApiService";
import { Shoutouts } from "../models/ShoutOut";

interface ShoutProps {
    shout: Shoutouts;
};

export default function ShoutResult({shout}: ShoutProps) {
  return (
    <div className="ShoutResult" key={shout.id}>
      <h2>Shout out to {shout.to}</h2>
      <p>{shout.from}</p>
      <p>{shout.message}</p>
    </div>
  );
}
