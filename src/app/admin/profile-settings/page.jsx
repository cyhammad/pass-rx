
import ProfileUpdateForm from "./_components/ProfileUpdateForm";

const ProfileSettingsPage = () => {
  return (
    <div className="flex w-full max-w-[771px] flex-col px-2 sm:px-4 md:px-10 md:pt-[60px]">
      <div className="flex h-[44px] w-full items-center border-b border-[#3030307A]">
        <span className="text-[23px] font-medium">Profile Details</span>
      </div>
      <ProfileUpdateForm />
    </div>
  );
};

export default ProfileSettingsPage;
