import AuthLayout from "@/components/layout/AuthLayout";
import AuthRedirect from "@/components/auth/AuthRedirect";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthRedirect />
      <AuthLayout>{children}</AuthLayout>
    </>
  );
}
