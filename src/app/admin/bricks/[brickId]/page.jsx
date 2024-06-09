import BrickTopSection from "./_components/BrickTopSection";
import LearningObjectives from "./_components/LearningObjectives";
import Topics from "./_components/Topics";
import BackButton from "./_components/buttons/BackButton";

export default function page() {
  return (
    <div className="flex w-full flex-col">
      <BackButton />
      <BrickTopSection />
      <div className="mt-10 w-full border border-light-border"></div>
      <div className=" mt-6 flex flex-col justify-between gap-x-[4rem] pb-10 lg:flex-row lg:pr-11 xl:ml-[10rem]">
        <Topics />
        <LearningObjectives />
      </div>
    </div>
  );
}
