import ChangePasswordSection from "./change-password-section";
import FASecuritySection from "./fa-security-section";

export default function PrivacySettings() {
  return <div className="w-full">
    <ChangePasswordSection />
    <FASecuritySection />
  </div>;
}