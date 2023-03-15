import React from "react";
import { Day } from "@/interfaces";
import { getDay } from "@/utils";

const ForecastWeather = ({ forecastday }: { forecastday?: Day | any }) => {
  return (
    <div className="flex flex-col w-full">
      {forecastday && forecastday.map(
        (data: {
          date: string;
          date_epoch: number;
          day: {
            condition: { icon: string };
            maxtemp_c: number;
            mintemp_c: number;
            daily_chance_of_rain: number;
          };
        }) => (
          <div
            key={data.date_epoch}
            className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-3 px-3 py-7 bg-white rounded"
          >
            <div className="text-center mb-3 sm:mb-0">
              {getDay(data.date)}
              {data.day?.condition.icon && (
                <img src={`https:${data.day.condition.icon}`} alt="" />
              )}
            </div>
            <div className="mb-3 sm:mb-0">
              {data.day?.maxtemp_c}° | {data.day?.mintemp_c}°
            </div>
            <div>Chance of rain: {data.day?.daily_chance_of_rain}%</div>
          </div>
        )
      )}
    </div>
  );
};

export default ForecastWeather;
