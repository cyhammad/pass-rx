import { getQuizBank } from "@/app/lib/actions/quizBankActions";
import BackButton from "./_components/BackButton";
import { auth } from "@/auth";
import SpecificQuizBank from "./_components/SpecificQuizBank";

const SpecificQuizBankPage = async ({ params }) => {
  const session = await auth();
  const quizbank = await getQuizBank(session.user.accessToken, params.id);
  return (
    <section className="flex flex-col gap-5 px-2 py-7 w-full">
      <BackButton />
      <SpecificQuizBank quizbank={quizbank} token={session.user.token} />
    </section>
  );
};

export default SpecificQuizBankPage;
