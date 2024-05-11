"use client";

import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
export default function Card2Graph() {
  const series = [
    {
      name: "Account Balance",
      data: [30, 5, 20, 15, 40, 30, 50],
    },
  ];

  const options = {
    chart: {
      height: "60%",
      width: "100%",
      type: "area",
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#00CB65"],
    grid: {
      show: false,
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 1,
      gradient: {
        type: "vertical",
        shadeIntensity: 0.2,
        opacityFrom: 0.7,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    yaxis: {
      labels: {
        show: false,

        style: {
          colors: "#919EAB",
          fontSize: "8px",
        },
        formatter: function (val) {
          return "$" + val;
        },
      },
      forceNiceScale: true,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      title: {
        style: {
          color: "#919EAB",
        },
      },
      labels: {
        show: false,
        style: {
          colors: "#919EAB",
          fontSize: "8px",
        },
      },
    },
    tooltip: {
      enabled: false,
    },
  };

  return (
    <div className="flex w-full flex-col">
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={"60%"}
          width={"100%"}
        />
      </div>
    </div>
  );
}
