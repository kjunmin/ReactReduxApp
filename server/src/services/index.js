import fetch from "node-fetch";
import { API_KEY, API_URL } from "../constants/index";

const path = "/ltaodataservice/BusArrivalv2?BusStopCode=";

const headers = {
    AccountKey: API_KEY,
    accept: "application/json"
}

export function getBusSchedule(busStopCode) {
    console.log(API_URL + path + busStopCode);
    return fetch(API_URL + path + busStopCode, {
        method: 'GET',
        headers: headers
    })
}