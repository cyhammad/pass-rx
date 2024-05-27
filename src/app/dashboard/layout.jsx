import { cookies } from "next/headers";
import { permanentRedirect, redirect } from "next/navigation";

const DashboardLayout = ({ children }) => {
  const role = cookies().get("role").value;
//   if (role === "admin") {
//     permanentRedirect("/dashboard/admin");
//   } else if (role === "user") {
//     permanentRedirect("/dashboard/user");
//   }
  return children;
};

export default DashboardLayout;
