import React from "react";

import Link from "next/link";

export default function SignSwitch({ isSignup }: { isSignup: boolean }) {
  return (
    <div className="flex flex-col items-start self-stretch mt-8 p-6 border-t-[0.8px] border-white/30">
      <div className="flex flex-col items-center self-stretch">
        <p className="text-md font-regular font-normal leading-6 text-white text-center">
          {isSignup ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link href={isSignup ? "/signin" : "/signup"}>
            <span className="bg-picton-blue bg-clip-text text-transparent font-bold">
              {isSignup ? "Sign In" : "Sign Up"}
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
