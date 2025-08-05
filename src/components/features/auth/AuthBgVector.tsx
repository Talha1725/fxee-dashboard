import React from "react";
import Image from "next/image";

import AuthBgVectorImage from "@/public/images/auth-bg-vector.png";

const AuthBgVector = React.memo(function AuthBgVector() {
  return (
    <div className="fixed w-full bottom-0 pointer-events-none -z-10">
      <div className="relative w-full h-[700px]">
        <Image
          src={AuthBgVectorImage}
          alt="Auth background"
          fill
          priority
          className="object-cover object-left"
        />
      </div>
    </div>
  );
});

AuthBgVector.displayName = "AuthBgVector";

export default AuthBgVector;
