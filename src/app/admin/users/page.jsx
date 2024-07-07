import UserTable from "./_components/tables/UserTable";

export default function page() {
  return (
    <div className="flex flex-col px-5 gap-8">
      <h1 className="mt-8 text-[1.125rem] font-medium sm:text-2xl">
        Users (15.2K)
      </h1>
      <UserTable />
    </div>
  );
}
