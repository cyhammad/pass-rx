"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { searchIcon } from "@/svgs/topbarSvgs";
import { motion, AnimatePresence } from "framer-motion";
import AddDisciplineModal from "./modals/AddDisciplineModal";
import DisciplineCard from "./cards/DisciplineCard";
import AddCategoryModal from "./modals/AddCategoryModal";
import AddCard from "./cards/AddCard";
import CategoryCard from "./cards/CategoryCard";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Disciplines({ disciplines, categories, token }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  if (!tab) {
    router.push(pathname + "?" + createQueryString("tab", "Disciplines"));
  }

  const [isAddDisciplineModalOpen, setIsAddDiciplineModalOpen] =
    useState(false);
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef(null);

  const filterDisciplines = disciplines.filter((discipline) =>
    discipline.name.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const filterCategories = categories?.filter((category) =>
    category.name.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const handleSearchButtonClick = () => {
    setShowSearchInput(!showSearchInput);
    setSearchValue("");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchInput(false);
        setSearchValue("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleModal = () => {
    setIsAddDiciplineModalOpen(!isAddDisciplineModalOpen);
  };

  const handleDisciplineTabClick = () => {
    router.push(pathname + "?" + createQueryString("tab", "Disciplines"), {
      scroll: false,
    });
  };

  const handleCategoryTabClick = () => {
    router.push(pathname + "?" + createQueryString("tab", "Categories"), {
      scroll: false,
    });
  };

  return (
    <div className="flex w-full flex-col">
      <AnimatePresence>
        {isAddDisciplineModalOpen && (
          <AddDisciplineModal toggleModal={toggleModal} token={token} />
        )}
        {isAddCategoryModalOpen && (
          <AddCategoryModal
            toggleModal={() => setIsAddCategoryModalOpen(false)}
            token={token}
          />
        )}
      </AnimatePresence>
      <div className="flex w-full flex-col justify-start py-10">
        <h1 className=" text-[1.125rem] font-semibold  sm:text-2xl ">
          Disciplines
        </h1>
        <div className="flex gap-x-5">
          <AddCard
            title={"Discipline"}
            onClick={() =>
              setIsAddDiciplineModalOpen(!isAddDisciplineModalOpen)
            }
          />
          <AddCard
            title={"Category"}
            onClick={() => setIsAddCategoryModalOpen(!isAddCategoryModalOpen)}
          />
        </div>
        <div className="mt-9 flex h-8 items-center justify-between">
          <div className="flex gap-5 py-9">
            <button
              className={`${tab === "Disciplines" ? "border-b-2 border-dark text-black" : "bg-transparent text-black/40"} py-2 text-sm`}
              onClick={handleDisciplineTabClick}
            >
              Disciplines ({disciplines.length})
            </button>
            <button
              className={`${tab === "Categories" ? "border-b-2 border-dark text-black" : "bg-transparent text-black/40"} py-2 text-sm`}
              onClick={handleCategoryTabClick}
            >
              Categories ({categories.length})
            </button>
          </div>
          <div className="flex">
            <AnimatePresence>
              {showSearchInput && (
                <motion.div
                  ref={searchRef}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 10 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.1 }}
                  className="flex items-center justify-center gap-x-2 rounded-lg border border-border-color bg-white px-4 py-1 shadow-[0px_2px_12px_0px_#C9C9C938] md:flex"
                >
                  <button>{searchIcon}</button>
                  <input
                    type="search"
                    name="search"
                    id="search"
                    autoComplete="off"
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className=" focus:ring-transparent md:w-[180px] lg:w-[280px]"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            {!showSearchInput && (
              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.1 }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
                onClick={handleSearchButtonClick}
              >
                {search}
              </motion.button>
            )}
          </div>
        </div>
        {tab === "Disciplines" ? (
          filterDisciplines.length > 0 ? (
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filterDisciplines.map((discipline) => (
                <div key={discipline._id}>
                  <DisciplineCard discipline={discipline} token={token} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-40 w-full items-center justify-center">
              <p className="text-text-gray">
                No discipline found with search term "{searchValue}"
              </p>
            </div>
          )
        ) : filterCategories.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filterCategories.map((category) => (
              <div key={category._id}>
                <CategoryCard category={category} token={token} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-40 w-full items-center justify-center">
            <p className="text-text-gray">
              No category found with search term "{searchValue}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const search = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.4354 19.0568C15.1966 19.0568 19.0564 15.1971 19.0564 10.4359C19.0564 5.67466 15.1966 1.81494 10.4354 1.81494C5.67423 1.81494 1.81451 5.67466 1.81451 10.4359C1.81451 15.1971 5.67423 19.0568 10.4354 19.0568Z"
      stroke="#9F9F9F"
      strokeWidth="1.51656"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.9639 19.9643L18.1489 18.1494"
      stroke="#9F9F9F"
      strokeWidth="1.51656"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
