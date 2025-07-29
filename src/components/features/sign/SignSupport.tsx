import SignForgetPassword from "@/components/features/sign/SignForgetPassword";
import SignKeepLoggedin from "@/components/features/sign/SignKeepLoggedin";

export default function SignSupport() {
  return (
    <div className="flex items-start justify-center gap-3 self-stretch">
      <SignKeepLoggedin />
      <SignForgetPassword />
    </div>
  );
}
