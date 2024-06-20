import { fetchNotesUser } from "@/app/lib/data";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import Notes from "./_components/Notes";

export default async function NotesPage() {
  const session = await auth();
  const token = session.user.accessToken;
  const notes = await fetchNotesUser(token);
  const revalidateData = async () => {
    "use server";
    revalidatePath("/user/notes");
  };
  return (
    <Notes
    notes={notes}
      token={token}
      revalidateData={revalidateData}
    />
  );
}