import React from "react";
import ChangePasswordForm from "../_components/ChangePasswordForm";

const ChangePasswordPage = () => {
  return (
    <div className="flex w-full max-w-[771px] flex-col px-10 pt-[60px]">
      <div className="flex h-[44px] w-full items-center border-b border-[#3030307A]">
        <span className="text-[23px] font-medium">Change Password</span>
      </div>
      <ChangePasswordForm />
    </div>
  );
};

export default ChangePasswordPage;
