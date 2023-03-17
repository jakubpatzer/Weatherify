import React from "react";
import axios from "axios";
import { useState } from "react";
import { City } from "../interfaces";
import Link from "next/link";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const [cities, setCities] = useState<City[]>([]);
  const handleSearchCity = async (city: string): Promise<void> => {
    const options = {
      method: "GET",
      url: "https://api.api-ninjas.com/v1/city",
      params: { name: city },
      headers: {
        "X-Api-Key": "0yZpfkJ4I1JABUGjKWqf8g==647wX2igSJ3yz41p",
      },
    };
    try {
      if (city) {
        const resp = await axios.request(options);
        setCities(resp.data);
      }
    } catch (error: any) {
      console.log("Error: ", error);
    }
  };
  return (
    <>
      <div className="mb-10">
        <input
          className="h-9 rounded" 
          type="text"
          required
          placeholder="Enter city"
          onChange={(e) => handleSearchCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              router.push(`/forecast/${cities[0].name}`);
            }
          }}
        />
      </div>

      <div className="text-center text-white">
        {cities.length > 0 &&
          cities.map((city: City) => (
            <div key={city.name} className="">
              <Link className="text-2xl" href={`/forecast/${city.name}`}>
                {city.name}
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Search;
