"use client";

import { searchIcon } from "@/svgs/topbarSvgs";
import { useEffect, useState } from "react";
import SelectDisciplineButton from "../SelectDisciplineButton";
import { updateQuizBank } from "@/app/lib/actions/quizBankActions";
import { useRouter } from "next/navigation";
import { revalidateData } from "@/app/utils/revalidate-data";
import CustomTextarea from "@/components/adminComponents/inputs/CustomTextarea";
import InputField from "@/components/adminComponents/inputs/InputField";

const EditQuizBankForm = ({ disciplines, token, quiz }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [selectedDisciplines, setSelectedDisciplines] = useState([]);
  const [searchDisciplineValue, setSearchDisciplineValue] = useState("");
  const [dontAddDiscipline, setDontAddDiscipline] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTitle(quiz.title);
    setDesc(quiz.description);
    setSelectedDisciplines([...quiz.disciplines]);
  }, [quiz]);

  const checkDisciplineSelected = (discipline) => {
    const checks = selectedDisciplines.map((selectedDiscipline) => {
      if (selectedDiscipline._id === discipline._id) {
        return true;
      }
    });
    if (checks.includes(true)) {
      if (dontAddDiscipline.includes(discipline)) {
        return false;
      }
      return true;
    }
    return false;
  };

  const handleUpdateQuizBank = async () => {
    setLoading(true);
    // remove dont add disciplines
    const selectedDisciplineIds = selectedDisciplines.map(
      (discipline) => discipline._id,
    );
    const dontAddDisciplineIds = dontAddDiscipline.map(
      (discipline) => discipline._id,
    );
    const selectedIdsWithoutDontAdd = selectedDisciplineIds.filter(
      (id) => !dontAddDisciplineIds.includes(id),
    );
    try {
      const response = await updateQuizBank(
        token,
        quiz._id,
        title,
        desc,
        selectedIdsWithoutDontAdd,
        false,
      );
      if (response) {
        if (response.message === "Quiz updated successfully") {
          setSuccess(response.message);
          revalidateData("/admin/quiz-bank");
          // wait 2 seconds before redirecting
          setTimeout(() => {
            router.push("/admin/quiz-bank");
          }, 1000);
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
    const checks = quiz.disciplines.map((selectedDiscipline) => {
      if (selectedDiscipline._id === discipline._id) {
        return true;
      }
    });
    if (checks.includes(true) && !dontAddDiscipline.includes(discipline)) {
      setDontAddDiscipline([...dontAddDiscipline, discipline]);
    }
    if (dontAddDiscipline.includes(discipline)) {
      setDontAddDiscipline(
        dontAddDiscipline.filter((selectedDiscipline) => {
          return selectedDiscipline !== discipline;
        }),
      );
    }
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
        <InputField
          title="Quizbank Title"
          type="text"
          name="title"
          id="title"
          placeholder="Type your title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <CustomTextarea
          title="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder={"Old Desc: " + quiz.description}
          columns="1"
          rows="2"
          height={"100px"}
          titleClassName={"bg-white"}
        />
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
            className="w-full  text-sm   focus:ring-transparent md:min-w-[280px]"
          />
        </div>
        <div className="grid w-full grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filterDisciplines(disciplines, searchDisciplineValue).map(
            (discipline) => (
              <SelectDisciplineButton
                discipline={discipline}
                isSelected={checkDisciplineSelected(discipline)}
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
            onClick={() => handleUpdateQuizBank()}
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditQuizBankForm;
