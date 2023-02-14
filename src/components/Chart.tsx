import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const XAXISRANGE = 86400000;
let lastDate = 0;
let data: any = [];

function getNewSeries(baseval: any, yrange: any) {
  var newDate = baseval + XAXISRANGE;
  lastDate = newDate;

  for (var i = 0; i < data.length - 10; i++) {
    data[i].x = newDate - XAXISRANGE - 1000;
    data[i].y = 0;
  }

  data.push({
    x: newDate,
    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min,
  });
}

export function Chart() {
  const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
  });
  const [series, setSeries] = useState([
    {
      data: data.slice(),
    },
  ]);

  useEffect(() => {
    getNewSeries(lastDate, {
      min: 10,
      max: 90,
    });
    setSeries([{ data }]);
  }, []);

  const options = {
    chart: {
      id: "realtime",
      height: 350,
      type: "line",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Oders",
      align: "left",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
      range: XAXISRANGE,
    },
    yaxis: {
      max: 100,
    },
    legend: {
      show: false,
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
        width={700}
      />
    </div>
  );
}
