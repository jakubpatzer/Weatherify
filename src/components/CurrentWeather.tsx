import React from "react";
import { Current } from "@/interfaces";

const CurrentWeather = ({ current }: { current: Current }) => {
  return (
    <div className="text-black text-center bg-white rounded px-5 py-5 w-full">
      <h1 className="mb-6">Current weather conditions</h1>

      <div className="flex sm:flex-row flex-col sm:text-left justify-between">
        <div>
          <p className="mb-4 text-4xl">
            {current?.condition && <img className="mx-auto sm:mx-0" src={`https:${current.condition.icon}`} alt="" />}
            {current?.temp_c}° C</p>
          <p className="mb-3">Feels like: {current?.feelslike_c}° C</p>
          <p className="mb-10">{current?.condition.text}</p>
        </div>

        <div>
          <p className="mb-5">Cloud cover: {current?.cloud}%</p>
          <p className="mb-5">Humidity: {current?.humidity}%</p>
          <p className="mb-5">Wind: {current?.wind_kph} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
