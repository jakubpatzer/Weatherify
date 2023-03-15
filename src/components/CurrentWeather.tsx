import React from "react";
import { Condition } from "@/interfaces";

const CurrentWeather = ({
  condition,
  temp_c,
  feelslike_c,
  cloud,
  humidity,
  wind_kph,
}: {
  condition?: Condition;
  temp_c?: number;
  feelslike_c?: number;
  cloud?: number;
  humidity?: number;
  wind_kph?: number;
}) => {
  return (
    <div className="text-black text-center bg-white rounded px-5 py-5 w-full">
      <h1 className="mb-6">Current weather conditions</h1>

      <div className="flex sm:flex-row flex-col sm:text-left justify-between">
        <div>
          <p className="mb-4 text-4xl">
            {condition && (
              <img
                className="mx-auto sm:mx-0"
                src={`https:${condition?.icon}`}
                alt=""
              />
            )}
            {temp_c}° C
          </p>
          <p className="mb-3">Feels like: {feelslike_c}° C</p>
          <p className="mb-10">{condition?.text}</p>
        </div>

        <div>
          <p className="mb-5">Cloud cover: {cloud}%</p>
          <p className="mb-5">Humidity: {humidity}%</p>
          <p className="mb-5">Wind: {wind_kph} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
