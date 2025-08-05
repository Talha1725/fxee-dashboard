import React from "react";

import Link from "next/link";

export default function SignSwitch({ isSignup }: { isSignup: boolean }) {
  return (
    <div className="flex flex-col items-start self-stretch mt-8 p-6 border-t-[0.8px] border-white/30 z-50">
      <div className="flex flex-col items-center self-stretch">
        <p className="text-md font-regular font-normal leading-6 dark:text-white text-black text-center">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <Link href={isSignup ? "/signin" : "/signup"}>
            <span className="bg-picton-blue bg-clip-text text-transparent font-bold">
              {isSignup ? "Sign In" : "Register"}
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
