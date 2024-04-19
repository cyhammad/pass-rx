import ForgetPasswordHeader from "@/components/navbars/ForgetPasswordHeader";

const ForgetPasswordLayout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <ForgetPasswordHeader />
      <div className="flex w-full justify-center py-10">{children}</div>
    </div>
  );
};

export default ForgetPasswordLayout;
