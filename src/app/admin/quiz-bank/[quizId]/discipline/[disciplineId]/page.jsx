import { auth } from "@/auth";
import BackButton from "../../_components/BackButton";
import DisciplineColumn from "../../_components/DisciplineColumn";
import AddNewQuestionButton from "../../_components/buttons/AddNewQuestionButton";
import UploadCsvButton from "../../_components/buttons/UploadCsvButton";
import {
  getQuestionsByQuizId,
  getQuizBank,
} from "@/app/lib/actions/quizBankActions";
import AddNewQuestionIconButton from "../../_components/buttons/AddNewQuestionIconButton";
import Question from "../../_components/Question";
import { revalidatePath } from "next/cache";

const SQPage = async ({ params }) => {
  const session = await auth();
  const token = session.user.accessToken;
  const { quizId, disciplineId } = params;
  const quizbank = await getQuizBank(token, quizId);
  const questions = await getQuestionsByQuizId(token, quizId);
  const selectedDiscipline = quizbank.disciplines.find(
    (discipline) => discipline._id === disciplineId,
  );
  const filteredQuestions = questions.filter(
    (question) => question.discipline._id === selectedDiscipline._id,
  );
  const renderDate = (date) => {
    if (!date) return "N/A";
    const newDate = new Date(date);
    return newDate.toDateString();
  };
  const revalidateData = async () => {
    "use server";
    revalidatePath(`/admin/quiz-bank/${quizId}/discipline/${disciplineId}`);
  };
  return (
    <section className="flex w-full flex-col gap-5 px-2 py-7">
      <BackButton />
      <div className="flex w-full flex-col justify-between gap-3 pb-4 pt-8 sm:flex-row sm:items-center">
        <h1 className="text-2xl font-semibold">{quizbank.title}</h1>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <span className="text-sm text-text-secondary">
            last updated: {renderDate(quizbank.updatedAt)}
          </span>
          <AddNewQuestionButton
            quizbank={quizbank}
            token={token}
            selectedDiscipline={selectedDiscipline}
            revalidateData={revalidateData}
          />
          <UploadCsvButton />
        </div>
      </div>
      <DisciplineColumn
        disciplines={quizbank.disciplines}
        selectedDiscipline={selectedDiscipline}
        quizId={quizId}
      >
        <div className="flex h-full w-full flex-col bg-almostBlack p-4">
          <div className="mb-7 flex w-full justify-between">
            <div className="flex items-center gap-x-2">
              <span className="text-lg">All Questions</span>
              <AddNewQuestionIconButton
                quizbank={quizbank}
                token={token}
                selectedDiscipline={selectedDiscipline}
                revalidateData={revalidateData}
              />
            </div>
            <button className="text-mattBlack">{searchIcon}</button>
          </div>
          {filteredQuestions.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {filteredQuestions.map((question) => (
                <Question
                  question={question}
                  key={question._id}
                  token={token}
                  quizbank={quizbank}
                  revalidateData={revalidateData}
                />
              ))}
            </div>
          ) : (
            <div className="flex h-full items-center justify-center pb-20 text-center text-white">
              No questions found
            </div>
          )}
        </div>
      </DisciplineColumn>
    </section>
  );
};

const searchIcon = (
  <svg
    width="22"
    height="21"
    viewBox="0 0 22 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.6589 17.6932C15.0794 17.6932 18.6629 14.1097 18.6629 9.68914C18.6629 5.26861 15.0794 1.68506 10.6589 1.68506C6.23833 1.68506 2.65479 5.26861 2.65479 9.68914C2.65479 14.1097 6.23833 17.6932 10.6589 17.6932Z"
      stroke="white"
      strokeWidth="1.51656"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.5054 18.5359L17.8203 16.8508"
      stroke="white"
      strokeWidth="1.51656"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SQPage;
