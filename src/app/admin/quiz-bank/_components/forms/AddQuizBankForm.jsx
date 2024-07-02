"use client";

import { searchIcon } from "@/svgs/topbarSvgs";
import { useState } from "react";
import SelectDisciplineButton from "../SelectDisciplineButton";
import { addQuizBank } from "@/app/lib/actions/quizBankActions";
import { revalidateData } from "@/app/utils/revalidate-data";

const AddQuizBankForm = ({ disciplines, token }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [selectedDisciplines, setSelectedDisciplines] = useState([]);
  const [searchDisciplineValue, setSearchDisciplineValue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreateQuizBank = async () => {
    setLoading(true);
    const selectedDisciplineIds = selectedDisciplines.map(
      (discipline) => discipline._id,
    );
    try {
      const response = await addQuizBank(
        token,
        title,
        desc,
        selectedDisciplineIds,
        false,
      );
      if (response) {
        if (response.message === "Quiz created successfully") {
          setSuccess(
            "Quizbank created successfully. Create another quiz bank?",
          );
          setTitle("");
          setDesc("");
          setSelectedDisciplines([]);
          revalidateData("/admin/quiz-bank");
        } else {
          setError(response.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  // error and success only display for 5 seconds
  if (error) {
    setTimeout(() => {
      setError("");
    }, 5000);
  }
  if (success) {
    setTimeout(() => {
      setSuccess("");
    }, 5000);
  }

  const handleSelectDiscipline = (discipline) => {
    if (selectedDisciplines.includes(discipline)) {
      setSelectedDisciplines(
        selectedDisciplines.filter((selectedDiscipline) => {
          return selectedDiscipline !== discipline;
        }),
      );
    } else {
      setSelectedDisciplines([...selectedDisciplines, discipline]);
    }
  };

  const filterDisciplines = (disciplines, searchValue) => {
    return disciplines.filter((discipline) =>
      discipline.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
  };

  return (
    <div className="flex w-full max-w-[793px] flex-col">
      <div className="flex w-full flex-col gap-y-8 rounded-xl bg-white px-6 py-7 shadow">
        <div className="relative">
          <input
            className="w-full rounded-md p-0 px-4 py-3 text-sm focus:ring-transparent active:border-light-gray"
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label
            className="absolute -top-2 left-3 bg-white px-1 text-xs text-text-gray"
            htmlFor="title"
          >
            Quizbank Title
          </label>
        </div>
        <div className="relative">
          <textarea
            className="min-h-[138px] w-full rounded-md border-black/10 px-4 py-3 text-sm ring-transparent focus:ring-transparent"
            type="text"
            name="desc"
            id="desc"
            placeholder="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <label
            className="absolute -top-2 left-3 bg-white px-1 text-xs text-text-gray"
            htmlFor="desc"
          >
            Description
          </label>
        </div>
        <span className="text-center text-sm font-medium text-dark">
          Add Disciplines
        </span>
        <div className="flex w-full max-w-[375px] items-center gap-x-3 self-center rounded-md border border-black/10 px-4 py-2 ">
          <button>{searchIcon}</button>
          <input
            type="search"
            name="searchdisciplines"
            id="searchdisciplines"
            autoComplete="off"
            value={searchDisciplineValue}
            onChange={(e) => setSearchDisciplineValue(e.target.value)}
            placeholder="Search"
            className="w-full text-sm focus:ring-transparent md:min-w-[280px]"
          />
        </div>
        <div className="grid w-full grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filterDisciplines(disciplines, searchDisciplineValue).map(
            (discipline) => (
              <SelectDisciplineButton
                discipline={discipline}
                isSelected={selectedDisciplines.includes(discipline)}
                handleSelectDiscipline={handleSelectDiscipline}
              />
            ),
          )}
        </div>
      </div>
      <div className="flex w-full justify-center lg:mt-20 lg:justify-end">
        <div className="flex flex-col gap-y-3">
          {error && (
            <span className="text-center text-sm text-red-500">{error}</span>
          )}
          {success && (
            <span className="text-center text-sm text-green">{success}</span>
          )}
          <button
            className="h-[60px] min-w-[305px] rounded-md bg-primary text-white"
            onClick={() => handleCreateQuizBank()}
          >
            {loading ? "Creating..." : "+ Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddQuizBankForm;
