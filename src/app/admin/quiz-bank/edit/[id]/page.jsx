import GoBackBar from "../../_components/GoBackBar";
import { fetchDisciplinesAdmin } from "@/app/lib/data";
import { auth } from "@/auth";
import EditQuizBankForm from "../../_components/forms/EditQuizBankForm";
import { getQuizBank } from "@/app/lib/actions/quizBankActions";
import { revalidatePath } from "next/cache";

const QuizBankEditPage = async ({ params }) => {
  const session = await auth();
  const disciplines = await fetchDisciplinesAdmin(session.user.accessToken);
  const quiz = await getQuizBank(session.user.accessToken, params.id);
  const revalidateData = async () => {
    "use server"
    revalidatePath("/admin/quiz-bank");
  }
  return (
    <div className="flex w-full flex-col py-5">
      <GoBackBar />
      <div className="flex flex-col gap-6 py-5 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-y-2">
          <span className="text-[18px]">Edit Quizbank</span>
          <span className="text-sm text-text-gray">
            Title, Description, Disciplines
          </span>
        </div>
        <EditQuizBankForm
          disciplines={disciplines}
          token={session.user.accessToken}
          quiz={quiz}
          revalidateData={revalidateData}
        />
      </div>
    </div>
  );
};

export default QuizBankEditPage;
