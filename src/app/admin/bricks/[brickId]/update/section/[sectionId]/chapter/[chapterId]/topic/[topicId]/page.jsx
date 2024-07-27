import { auth } from "@/auth";
import { getTopic } from "@/app/lib/actions/brickTopicActions";
import Editor from "@/app/admin/bricks/[brickId]/add/section/[sectionId]/chapter/[chapterId]/topic/_components/Editor";

const UpdateTopicPage = async ({ params }) => {
  const { brickId, sectionId, chapterId, topicId } = params;
  const session = await auth();
  const token = session.user.accessToken;
  const topic = await getTopic(token, brickId, sectionId, chapterId, topicId);
  if (topic == undefined) {
    return <div>Topic not found</div>;
  }
  const content = "";
  console.log("CONTENT", topic);

  return (
    <div className="flex w-full flex-col justify-center gap-5 p-5 pb-16">
      <Editor
        token={token}
        brickId={brickId}
        sectionId={sectionId}
        chapterId={chapterId}
        topicId={topicId}
        title={topic.title}
        content={topic.content}
        isUpdate
      />
    </div>
  );
};

export default UpdateTopicPage;
