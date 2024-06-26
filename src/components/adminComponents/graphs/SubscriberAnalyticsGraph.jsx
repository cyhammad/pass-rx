"use client";

import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const SubscribersAnalyticsGraph = () => {
  const series = [
    {
      name: "Account Balance",
      data: [
        1200, 800, 1000, 1100, 950, 1800, 850, 1050, 1250, 1600, 1350, 700,
      ],
    },
  ];

  const options = {
    chart: {
      height: "100%",
      width: "97%",
      type: "bar",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "15%",
        endingShape: "rounded",
        borderRadius: 2,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#2396F3"],
    grid: {
      borderColor: "#919EAB33",
      strokeDashArray: 3,
      row: {
        colors: ["transparent"],
      },
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 1,
      gradient: {
        type: "vertical",
        shadeIntensity: 0,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#919EAB",
          fontSize: "8px",
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
        style: {
          colors: "#919EAB",
          fontSize: "8px",
        },
      },
    },
    tooltip: {
      theme: "dark",
      intersect: false,
      onDatasetHover: {
        highlightDataSeries: false,
      },
      marker: {
        show: false,
      },
      x: {
        show: false,
      },
      y: {
        show: false,
      },
      marker: {
        show: false,
      },
    },
  };

  return (
    <div className="flex h-[336px] w-full min-w-[300px] flex-col rounded-[29px] px-1 py-5 sm:shadow">
      <div className="flex justify-between px-5">
        <div className="flex flex-col gap-y-1">
          <span className="">Subscribers Analytics</span>
          <span className="text-[8px] text-gray/50">
            (+33%) than last Month
          </span>
        </div>
        <div className="flex items-center gap-x-2">
          <span className="text-[10px] font-medium">This Year</span>
          {chevronDown}
        </div>
      </div>
      <div className="h-full" id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={"100%"}
          width={"97%"}
        />
      </div>
    </div>
  );
};

const chevronDown = (
  <svg
    width="6"
    height="3"
    viewBox="0 0 6 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.69168 2.72604C2.61206 2.7262 2.53489 2.69847 2.47358 2.64766L0.428901 0.943764C0.283982 0.823311 0.264147 0.608184 0.3846 0.463264C0.505053 0.318344 0.72018 0.29851 0.865099 0.418963L2.69168 1.94566L4.51826 0.473488C4.58866 0.416315 4.67895 0.389564 4.76913 0.399158C4.85932 0.408752 4.94196 0.4539 4.99876 0.524604C5.06185 0.595439 5.09256 0.689364 5.08351 0.783788C5.07445 0.878211 5.02645 0.964589 4.95105 1.02214L2.90637 2.66811C2.8433 2.71088 2.76771 2.73128 2.69168 2.72604Z"
      fill="#212B36"
    />
  </svg>
);

export default SubscribersAnalyticsGraph;
