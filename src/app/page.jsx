import React from "react";
import AdminHome from "./admin/page";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default function Rootpage({ children }) {
  return (
    <p>HELLO</p>
  )
}