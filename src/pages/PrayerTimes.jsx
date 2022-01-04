import React from "react";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

const PrayerTimes = () => {
  // Initiate array for fetching data from AlAdhan API
  const [data, setPrayerTimes] = useState([]);

  useEffect(() => {
    fetch(
      "http://api.aladhan.com/v1/timingsByCity?city=Helsingborg&country=Sweden&method=0"
    )
      .then((resp) => resp.json())
      .then((data) => setPrayerTimes(Object.entries(data.data.timings) as any));
  }, []);

  console.log(data);

  return (
    <>
      {data.map(([key, value], index) => (
        <div className="flex justify-center items-center flex-col" key={index}>
          <Button
            variant="outlined"
            className="w-40 space-y-4"
            sx={{ textAlign: "left" }}
          >
            {key} - {value}
          </Button>
        </div>
      ))}
    </>
  );
};

export default PrayerTimes;