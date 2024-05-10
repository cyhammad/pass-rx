import ProfileSidebar from "./_components/ProfileSidebar";

export const metadata = {
  title: "Profile Settings | PASS RX",
  description: "Admin Panel of Pass RX",
};

const ProfileSettingsLayout = ({ children }) => {
  return (
    <div className="flex flex-col py-4 sm:px-4 md:flex-row md:px-7 md:py-6">
      <ProfileSidebar />
      {children}
    </div>
  );
};

export default ProfileSettingsLayout;
