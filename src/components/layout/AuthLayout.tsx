import AuthBgVector from "../features/auth/AuthBgVector";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-x-hidden">
      <AuthBgVector />
      {children}
    </div>
  );
}
