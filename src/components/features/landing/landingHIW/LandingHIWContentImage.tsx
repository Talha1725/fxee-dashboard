import Image, { StaticImageData } from "next/image";

export default function LandingHIWContentImage({
  image,
}: {
  image: StaticImageData;
}) {
  return (
    <div className="relative flex-[1_0_0] self-stretch flex items-center justify-center w-full h-[364px] sm:h-[404px] lg:h-full lg:min-w-[500px] mask-landing-hiw">
      <Image
        src={image}
        alt="Fxee"
        unoptimized
        className="w-full h-full object-cover object-center select-none z-1"
      />
      <Image
        src={image}
        alt="Fxee"
        unoptimized
        className="absolute top-0 left-0 w-full h-full object-cover object-center select-none blur-[157px]"
      />
    </div>
  );
}
