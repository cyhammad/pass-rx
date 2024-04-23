import ProfileSidebar from "./_components/ProfileSidebar";

export const metadata = {
  title: "Profile Settings | PASS RX",
  description: "Admin Panel of Pass RX",
};

const ProfileSettingsLayout = ({ children }) => {
  return (
    <div className="flex px-7 py-6">
      <ProfileSidebar />
      {children}
    </div>
  );
};

export default ProfileSettingsLayout;
