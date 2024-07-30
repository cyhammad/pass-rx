import QuizBank from "./components/QuizBank";
import { fetchDisciplinesAdmin } from "@/app/lib/data";
import { getUserTests } from "@/app/lib/user-actions/quizbankActions";
import { auth } from "@/auth";

export default async function page() {
  const session = await auth();
  const token = session.user.accessToken;
  const disciplines = await fetchDisciplinesAdmin(token);
  const tests = await getUserTests(token);
  console.log("tests", tests);

  return <QuizBank disciplines={disciplines} tests={tests} token={token} />;
}
