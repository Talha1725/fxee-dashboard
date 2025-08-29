  import Link from "next/link";

export default function SignBackToLogin() {
  return (
    <div className="flex flex-col items-start self-stretch mt-8 p-6 border-t-[0.8px] border-white/30">
      <div className="flex flex-col items-center self-stretch">
        <p className="text-md font-regular font-normal leading-6 dark:text-white text-black text-center">
          Remember your password?{" "}
          <Link href="/signin">
            <span className="bg-picton-blue bg-clip-text text-transparent font-satoshi-medium">
              Back to login
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
} 