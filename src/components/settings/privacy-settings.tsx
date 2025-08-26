import ChangePasswordSection from "./change-password-section";
import FASecuritySection from "./fa-security-section";
import SessionsSection from "./sessions-section";

export default function PrivacySettings() {
  return <div className="w-full md:h-[81vh] overflow-y-auto scrollbar-hide scroll-smooth">
    <ChangePasswordSection />
    <FASecuritySection />
    <SessionsSection />
  </div>;
}