import React from "react";
import axios from "axios";
import { Shoutouts, ShoutOutsResponse } from "../models/ShoutOut";

export function fetchShoutOutApi(): Promise<Shoutouts[]> {
    const apiKey = process;
    return axios.get("", {
        params: {
            Key: apiKey
        }
    })
    .then(res => res.data.data);
}