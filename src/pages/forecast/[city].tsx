import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Current, Forecast } from "../../interfaces";
import CurrentWeather from "@/components/CurrentWeather";
import ForecastWeather from "@/components/ForecastWeather";
import MainLayout from "@/layouts/MainLayout";
import { NextPageContext } from "next";

export const getServerSideProps = async (context: NextPageContext) => {
  const { query } = context;
  return { props: { query } };
};

const City = ({ query }: { query: { city: string } }) => {
  const { city } = query;
  const [current, setCurrent] = useState<Current>();
  const [forecast, setForecast] = useState<Forecast>();
  const [showForecast, setShowForecast] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGetWeather = async () => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: { q: city, days: "5" },
      headers: {
        "X-RapidAPI-Key": "fbb961b3bcmsh62ce7a8d9fca835p15d86ajsn07d0162e6999",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };
    setLoading(true);
    try {
      const resp = await axios.request(options);
      setCurrent(resp.data.current);
      setForecast(resp.data.forecast);
    } catch (error: any) {
      console.log("Error: ", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetWeather();
  }, []);

  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl my-10">{city}</h1>
        <Link className="text-white mb-5 self-start" href="/">
          ← BACK
        </Link>
        {loading ? (
          <div className="text-white text-2xl">Loading...</div>
        ) : (
          <CurrentWeather {...current} />
        )}
        <button
          className="mt-5 text-white mb-5"
          onClick={() => setShowForecast(!showForecast)}
        >
          {showForecast ? "Hide" : "Show"} forecast
          <div className="animate-bounce">{showForecast ? "↑" : "↓"}</div>
        </button>
        {showForecast && <ForecastWeather {...forecast} />}
      </div>
    </MainLayout>
  );
};

export default City;
