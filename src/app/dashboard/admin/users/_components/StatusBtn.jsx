import React from "react";

export default function StatusBtn({ status }) {
  return (
    <button
      className={`${status == "active" ? "bg-green/15 text-green border border-green/35" : "bg-orange/10  border border-orange/35 text-orange"} -ml-4 rounded-2xl  w-[88px] text-sm  py-[5px]`}
    >
      {status == "active" ? (
        <p>Active</p>
      ) : (
        <p className="px-1">Suspend</p>
      )}
      <p></p>
    </button>
  );
}
