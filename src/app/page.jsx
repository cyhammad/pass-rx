"use client";

import { increment } from "@/lib/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <main className="flex items-center justify-center text-primary">
      PASS RX ADMIN PANEL {count}
      <button
        className="h-10 w-10 bg-red-500 text-white"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </main>
  );
}
