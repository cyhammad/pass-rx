"use client";

import { searchIcon } from "@/svgs/topbarSvgs";
import Image from "next/image";

import ThreeDotLoader from "../../loaders/ThreeDotLoader";

const NewSubscribersTable = () => {
  return (
    <div className="flex w-full flex-col rounded-xl border border-black/10 p-7">
      <div className="flex w-full justify-between">
        <div className="flex flex-col ">
          <div className="flex items-center gap-2 ">
            <span className="text-[18px] font-semibold text-text-charcoal">
              New Subscribers
            </span>
            <span className="flex items-center gap-0.5 text-xs text-text-green">
              {arrowUpIcon} 4.25%
            </span>
          </div>
          <span className="text-sm font-semibold text-text-gray">
            In the last 30 days
          </span>
        </div>
        {/* Search bar */}
        <div className="hidden items-center max-h-[52px] justify-center gap-x-2 py-1 rounded-lg border border-border-color px-4 shadow-[0px_2px_12px_0px_#C9C9C938] sm:flex">
          <button>{searchIcon}</button>
          <input
            type="search"
            name="search"
            autoComplete="off"
            id="search"
            placeholder="Search"
            className="lg:min-w-[280px]  py-[0.55rem]  focus:border-white ring-transparent appearance-none focus:ring-transparent"
          />
        </div>
      </div>
      {/* Table */}
      <div className="max-w-full overflow-x-auto">
        <table className="mt-5 w-full min-w-fit table-auto">
          <thead className="bg-table-header">
            <tr className="text-text-gray-2">
              <th className="min-w-[400px] rounded-s-md py-3 pl-6 text-start font-semibold">
                Name
              </th>
              <th className="min-w-[200px] py-3 text-start font-semibold">
                Subscription Type
              </th>
              <th className="min-w-[180px] py-3 text-start font-semibold">
                Amount Paid
              </th>
              <th className="min-w-[180px] rounded-e-md py-3 text-start font-semibold">
                Next Bill Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center gap-x-5 py-5">
                  <div className="h-[70px] w-[70px] rounded-lg bg-[url('/example/person.png')] bg-cover bg-center"></div>
                  <div className="flex flex-col gap-y-1.5">
                    <span className="text-charcoal font-semibold">
                      Brad Simmons
                    </span>
                    <span className="text-text-gray-2 text-sm font-medium">
                      brad.simmons@gmail.com
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex flex-col gap-y-1.5 py-5">
                  <span className="text-charcoal font-semibold">Monthly</span>
                  <span className="text-text-gray-2 text-sm font-medium">
                    Both Exam Types
                  </span>
                </div>
              </td>
              <td>
                <span className="font-semibold text-text-charcoal">$800</span>
              </td>
              <td>
                <span className="font-semibold text-text-charcoal">
                  02 Jan 23
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-x-5 py-5">
                  <div className="h-[70px] w-[70px] rounded-lg bg-[url('/example/person.png')] bg-cover bg-center"></div>
                  <div className="flex flex-col gap-y-1.5">
                    <span className="text-charcoal font-semibold">
                      Brad Simmons
                    </span>
                    <span className="text-text-gray-2 text-sm font-medium">
                      brad.simmons@gmail.com
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex flex-col gap-y-1.5 py-5">
                  <span className="text-charcoal font-semibold">Monthly</span>
                  <span className="text-text-gray-2 text-sm font-medium">
                    Both Exam Types
                  </span>
                </div>
              </td>
              <td>
                <span className="font-semibold text-text-charcoal">$800</span>
              </td>
              <td>
                <span className="font-semibold text-text-charcoal">
                  02 Jan 23
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-x-5 py-5">
                  <div className="h-[70px] w-[70px] rounded-lg bg-[url('/example/person.png')] bg-cover bg-center"></div>
                  <div className="flex flex-col gap-y-1.5">
                    <span className="text-charcoal font-semibold">
                      Brad Simmons
                    </span>
                    <span className="text-text-gray-2 text-sm font-medium">
                      brad.simmons@gmail.com
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex flex-col gap-y-1.5 py-5">
                  <span className="text-charcoal font-semibold">Monthly</span>
                  <span className="text-text-gray-2 text-sm font-medium">
                    Both Exam Types
                  </span>
                </div>
              </td>
              <td>
                <span className="font-semibold text-text-charcoal">$800</span>
              </td>
              <td>
                <span className="font-semibold text-text-charcoal">
                  02 Jan 23
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-x-5 py-5">
                  <div className="h-[70px] w-[70px] rounded-lg bg-[url('/example/person.png')] bg-cover bg-center"></div>
                  <div className="flex flex-col gap-y-1.5">
                    <span className="text-charcoal font-semibold">
                      Brad Simmons
                    </span>
                    <span className="text-text-gray-2 text-sm font-medium">
                      brad.simmons@gmail.com
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex flex-col gap-y-1.5 py-5">
                  <span className="text-charcoal font-semibold">Monthly</span>
                  <span className="text-text-gray-2 text-sm font-medium">
                    Both Exam Types
                  </span>
                </div>
              </td>
              <td>
                <span className="font-semibold text-text-charcoal">$800</span>
              </td>
              <td>
                <span className="font-semibold text-text-charcoal">
                  02 Jan 23
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-x-5 py-5">
                  <div className="h-[70px] w-[70px] rounded-lg bg-[url('/example/person.png')] bg-cover bg-center"></div>
                  <div className="flex flex-col gap-y-1.5">
                    <span className="text-charcoal font-semibold">
                      Brad Simmons
                    </span>
                    <span className="text-text-gray-2 text-sm font-medium">
                      brad.simmons@gmail.com
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex flex-col gap-y-1.5 py-5">
                  <span className="text-charcoal font-semibold">Monthly</span>
                  <span className="text-text-gray-2 text-sm font-medium">
                    Both Exam Types
                  </span>
                </div>
              </td>
              <td>
                <span className="font-semibold text-text-charcoal">$800</span>
              </td>
              <td>
                <span className="font-semibold text-text-charcoal">
                  02 Jan 23
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-x-5 py-5">
                  <div className="h-[70px] w-[70px] rounded-lg bg-[url('/example/person.png')] bg-cover bg-center"></div>
                  <div className="flex flex-col gap-y-1.5">
                    <span className="text-charcoal font-semibold">
                      Brad Simmons
                    </span>
                    <span className="text-text-gray-2 text-sm font-medium">
                      brad.simmons@gmail.com
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex flex-col gap-y-1.5 py-5">
                  <span className="text-charcoal font-semibold">Monthly</span>
                  <span className="text-text-gray-2 text-sm font-medium">
                    Both Exam Types
                  </span>
                </div>
              </td>
              <td>
                <span className="font-semibold text-text-charcoal">$800</span>
              </td>
              <td>
                <span className="font-semibold text-text-charcoal">
                  02 Jan 23
                </span>
              </td>
            </tr>
            <tr>
              <td colSpan={4}>
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
};

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

export default NewSubscribersTable;
