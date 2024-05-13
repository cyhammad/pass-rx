"use client";

import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
export default function FlashFactsPerformanceCard() {
  const series = [63, 12, 15, 9];
  const options = {
    stroke: {
      width: 0,
    },
    chart: {
      height: "100%",
      width: "100%",
      type: "donut",
    },
    labels: ["Nailed It", "Answered", "Completed", "Unanswered"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: ["#2396F3", "#1C78C3", "#71A4F7", "#72C0F8"],
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "70%",
          background: "transparent",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "14px",
              fontWeight: 400,
              color: "#9F9F9F",
              offsetY: 25,
              formatter: function (val) {
                return val + "!";
              },
            },
            value: {
              show: true,
              fontSize: "28.91px",
              fontWeight: 700,
              color: undefined,
              offsetY: -14,
              formatter: function (val) {
                return val + "%";
              },
            },
          },
        },
      },
    },
    tooltip: {
      enabled: true,
      fillSeriesColor: true,
    },
    colors: ["#2396F3", "#1C78C3", "#71A4F7", "#72C0F8"],
    legend: {
      show: true,
      formatter: function (seriesName, opts) {
        return [
          "<div style='width:120px'>",
          seriesName,
          " - ",
          opts.w.globals.series[opts.seriesIndex],
          "%",
          "</div>",
        ];
      },
      position: "bottom",
      horizontalAlign: "center",
      floating: false,
      fontSize: "14px",
      fontWeight: 400,
      labels: {
        colors: "#9F9F9F",
      },
      markers: {
        width: 20,
        height: 4,
        radius: 5,
      },
      itemMargin: {
        horizontal: 8,
        vertical: 4,
      },
    },
  };

  return (
    <div className="flex h-[485px] w-full flex-col justify-between  rounded-xl bg-white pb-5  drop-shadow-sm">
      <div className="flex items-start justify-between px-6 pt-[18px] ">
        <div className="flex flex-col justify-between">
          <h3 className="text-base font-medium  leading-none sm:text-xl">
            Flash Facts Performance
          </h3>
          <p className="mt-1 text-sm text-text-gray">12 Decks</p>
        </div>
        <div className="flex items-center gap-x-1 sm:gap-x-2">
          <span className="text-[10px] font-medium">This Year</span>
          {chevronDown}
        </div>
      </div>
      <div id="chart  h-full">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width={"100%"}
          height={321}
        />
      </div>
      <button class=" mx-6 rounded-[10px]  bg-primary px-4  py-4  text-sm font-semibold text-white ">
        Create New Deck
      </button>
    </div>
  );
}

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
