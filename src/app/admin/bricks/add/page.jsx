import { auth } from "@/auth";
import GoBackBar from "../../quiz-bank/_components/GoBackBar";
import AddBrickForm from "../_components/AddBrickForm";
import { revalidatePath } from "next/cache";

const BrickAddPage = async () => {
  const session = await auth();
  const token = session.user.accessToken;
  const revalidateData = async () => {
    "use server";
    revalidatePath("/admin/bricks");
  };
  return (
    <div className="flex w-full flex-col py-5">
      <GoBackBar />
      <div className="flex flex-col gap-6 py-5 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-y-2">
          <span className="text-[18px]">Add New Brick Collection</span>
          <span className="text-sm text-text-gray">
            Title, Quote, Learning Outcomes, Topics Covered
          </span>
        </div>
        <AddBrickForm token={token} revalidateData={revalidateData} />
      </div>
    </div>
  );
};

export default BrickAddPage;
