import Image from "next/image";
import BrickCardDropDown from "../dropdowns/BrickCardDropDown";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import DeleteBrickModal from "../modals/DeleteBrickModal";
import Link from "next/link";

export default function BrickCard({ brick, token }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  return (
    <>
      <AnimatePresence>
        {isDeleteModalOpen && (
          <DeleteBrickModal
            setIsOpen={setIsDeleteModalOpen}
            brick={brick}
            token={token}
          />
        )}
      </AnimatePresence>
      <Link
        href={`/admin/bricks/${brick._id}`}
        className="flex flex-col shadow-[0px_6.29px_15.73px_0px_#0000001A]"
      >
        <Image
          src={"/bricks/brick.png"} // Use forward slash for the path
          className="rounded-xl"
          width={284}
          height={190}
          alt="brick"
        />
      </Link>
      <div className="mt-[-20px] flex w-full flex-col justify-between gap-3 bg-white p-3 drop-shadow-md">
        <div className="flex items-center justify-between">
          <Link
            href={`/admin/bricks/${brick._id}`}
            className="text-2xl font-semibold"
          >
            {brick.title}
          </Link>
          <BrickCardDropDown
            brick={brick}
            token={token}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
          />
        </div>
        <div className="flex items-center gap-1 px-2 font-normal">
          {brick.totalTopics}
          <p className="font-bold">Topics</p>
        </div>
      </div>
    </>
  );
}
