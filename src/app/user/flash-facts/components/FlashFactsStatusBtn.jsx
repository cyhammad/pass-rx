

export default function StatusBtn({ status }) {
  return (
    <button
      className={`${status == "completed" ? "bg-green/15 text-green" : "bg-orange/10 text-orange"} rounded-2xl -ml-7 px-[15px] py-[5px]`}
    >
      {status == "completed" ? (
        <p>Completed</p>
      ) : (
        <p className="px-1">In Progress</p>
      )}
      <p></p>
    </button>
  );
}
