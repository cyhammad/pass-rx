import { auth } from "@/auth";
import GoBackBar from "../../quiz-bank/_components/GoBackBar";
import AddBrickForm from "../_components/AddBrickForm";


const BrickAddPage = async () => {
  const session = await auth();
  const token = session.user.accessToken;
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
        <AddBrickForm token={token} />
      </div>
    </div>
  );
};

export default BrickAddPage;
