"use client";
import ThreeDotLoader from "@/components/loaders/ThreeDotLoader";
import { searchIcon } from "@/svgs/topbarSvgs";
import TableDropdown from "./dropdowns/TableDropdown";
import StatusBtn from "./StatusBtn";

export default function QuizTable() {
  return (
    <div className="mt-8 flex w-full flex-col rounded-xl border border-black/10 bg-white p-7">
      <div className="flex w-full justify-between">
        <div className="flex flex-col">
          <span className="text-[18px] font-semibold text-text-charcoal">
            My Tests (12)
          </span>
          <span className="text-sm font-semibold text-text-gray">
            All Time
          </span>
        </div>
        <div className="flex justify-between lg:gap-3">
          <div className="md:flex  hidden items-center gap-x-2">
            <span className=" lg:text-base md:text-sm font-medium">All Time</span>
            {chevronDown}
          </div>
          <div className="hidden items-center justify-center gap-x-2 rounded-lg border border-border-color px-4 py-1 shadow-[0px_2px_12px_0px_#C9C9C938] md:flex">
            <button>{searchIcon}</button>
            <input
              type="search"
              name="search"
              id="search"
              autocomplete="off"
              placeholder="Search"
              className="w-[280px] bg-transparent outline-none"
            />
          </div>
        </div>
        {/* Search bar */}
      </div>
      {/* Table */}
      <div className="max-w-full overflow-x-auto bg-white">
        <table className="mt-5 w-full min-w-fit table-auto">
          <thead className="bg-table-header">
            <tr className="text-text-gray-2">
              <th className="min-w-[230px] rounded-s-md py-3 pl-6 text-start font-semibold">
                Name
              </th>
              <th className="min-w-[230px] py-3 text-start font-semibold">
                Mode
              </th>
              <th className="min-w-[230px] py-3 text-start font-semibold">
                Questions
              </th>
              <th className="min-w-[230px] py-3 text-start font-semibold">
                Date Created
              </th>
              <th className="min-w-[130px] rounded-e-md py-3 text-start font-semibold">
                Status
              </th>
              <th className="min-w-[60px] rounded-e-md py-3 text-start font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" py-7 pl-6 ">
                <span className="text-charcoal font-semibold">Test Name</span>
              </td>
              <td>
                <div className="flex -ml-10 items-center gap-x-1.5">
                  <span className="h-[10px] w-[10px] rounded-full bg-primary "></span>
                  <span className="font-semibold text-text-charcoal">
                    Study Mode
                  </span>
                </div>
              </td>
              <td>
                <span className="font-semibold ml-5 text-text-charcoal">120</span>
              </td>
              <td>
                <span className="font-semibold  ml-5 text-text-charcoal">
                  02 Jan 23
                </span>
              </td>
              <td>
                <StatusBtn status={"completed"} />
              </td>
              <td>
                <TableDropdown />
              </td>
            </tr>
            <tr>
              <td className=" py-7 pl-6 ">
                <span className="text-charcoal font-semibold">Test Name</span>
              </td>
              <td>
                <div className="flex -ml-10 items-center gap-x-1.5">
                  <span className="h-[10px] w-[10px] rounded-full bg-red-exam "></span>
                  <span className="font-semibold text-text-charcoal">
                    Exam Mode
                  </span>
                </div>
              </td>
              <td>
                <span className="font-semibold ml-5 text-text-charcoal">120</span>
              </td>
              <td>
                <span className="font-semibold  ml-5 text-text-charcoal">
                  02 Jan 23
                </span>
              </td>
              <td>
                <StatusBtn status={"completed"} />
              </td>
              <td>
                <TableDropdown />
              </td>
            </tr>
            <tr>
              <td className=" py-7 pl-6 ">
                <span className="text-charcoal font-semibold">Lebron Wayde</span>
              </td>
              <td>
                <div className="flex -ml-10 items-center gap-x-1.5">
                  <span className="h-[10px] w-[10px] rounded-full bg-red-exam "></span>
                  <span className="font-semibold text-text-charcoal">
                    Exam Mode
                  </span>
                </div>
              </td>
              <td>
                <span className="font-semibold ml-5 text-text-charcoal">120</span>
              </td>
              <td>
                <span className="font-semibold  ml-5 text-text-charcoal">
                  02 Jan 23
                </span>
              </td>
              <td>
                <StatusBtn status={"completed"} />
              </td>
              <td>
                <TableDropdown />
              </td>
            </tr>
            <tr>
              <td className=" py-7 pl-6 ">
                <span className="text-charcoal font-semibold">Test Name</span>
              </td>
              <td>
                <div className="flex -ml-10 items-center gap-x-1.5">
                  <span className="h-[10px] w-[10px] rounded-full bg-red-exam "></span>
                  <span className="font-semibold text-text-charcoal">
                    Exam Mode
                  </span>
                </div>
              </td>
              <td>
                <span className="font-semibold ml-5 text-text-charcoal">120</span>
              </td>
              <td>
                <span className="font-semibold  ml-5 text-text-charcoal">
                  02 Jan 23
                </span>
              </td>
              <td>
                <StatusBtn status={"completed"} />
              </td>
              <td>
                <TableDropdown />
              </td>
            </tr>
            <tr>
              <td className=" py-7 pl-6 ">
                <span className="text-charcoal font-semibold">Jessie Clarcson</span>
              </td>
              <td>
                <div className="flex -ml-10 items-center gap-x-1.5">
                  <span className="h-[10px] w-[10px] rounded-full bg-red-exam "></span>
                  <span className="font-semibold text-text-charcoal">
                    Exam Mode
                  </span>
                </div>
              </td>
              <td>
                <span className="font-semibold ml-5 text-text-charcoal">120</span>
              </td>
              <td>
                <span className="font-semibold  ml-5 text-text-charcoal">
                  02 Jan 23
                </span>
              </td>
              <td>
                <StatusBtn status={"InProgress"} />
              </td>
              <td>
                <TableDropdown />
              </td>
            </tr>
            <tr>
              <td colSpan={6}>
                <div className="my-5 flex sm:justify-center">
                  <ThreeDotLoader />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
const arrowUpIcon = (
  <svg
    width="15"
    height="16"
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5538 13.8675C10.8134 13.8675 13.4559 11.225 13.4559 7.96542C13.4559 4.7058 10.8134 2.06335 7.5538 2.06335C4.29418 2.06335 1.65173 4.7058 1.65173 7.96542C1.65173 11.225 4.29418 13.8675 7.5538 13.8675Z"
      stroke="#00DF80"
      strokeWidth="1.01178"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5538 10.0311V6.48987"
      stroke="#00DF80"
      strokeWidth="1.01178"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.78317 7.6704L7.55379 5.89978L9.32441 7.6704"
      stroke="#00DF80"
      strokeWidth="1.01178"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const chevronDown = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.6611 13.5927C10.4569 13.5931 10.2591 13.522 10.1018 13.3918L4.85867 9.02246C4.48706 8.71358 4.43619 8.16193 4.74507 7.79031C5.05395 7.4187 5.6056 7.36783 5.97721 7.67671L10.6611 11.5916L15.345 7.81653C15.5255 7.66992 15.7571 7.60132 15.9883 7.62593C16.2196 7.65053 16.4315 7.7663 16.5771 7.94761C16.7389 8.12925 16.8177 8.3701 16.7945 8.61223C16.7712 8.85436 16.6482 9.07586 16.4548 9.22345L11.2116 13.4442C11.0499 13.5539 10.8561 13.6062 10.6611 13.5927Z"
      fill="#212B36"
    />
  </svg>
);
