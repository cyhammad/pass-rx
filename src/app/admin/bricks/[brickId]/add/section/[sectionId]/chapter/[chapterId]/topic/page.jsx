import { auth } from "@/auth";
import Editor from "./_components/Editor";

const AddTopicPage = async ({ params }) => {
  const { brickId, sectionId, chapterId } = params;
  const session = await auth();
  const token = session.user.accessToken;

  return (
    <div className="flex w-full flex-col justify-center gap-5 p-5 pb-16">
      <Editor
        token={token}
        brickId={brickId}
        sectionId={sectionId}
        chapterId={chapterId}
        content={""}
      />
    </div>
  );
};

export default AddTopicPage;
