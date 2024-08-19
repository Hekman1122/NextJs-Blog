import Image from "next/image";
import Hero from "@/public/images/logo-walk.png";

export default function HeroImage() {
  return (
    <div className="md:w-5/6 md:h-[25rem] py-4 m-auto w-full h-[20rem]">
      <Image
        src={Hero}
        alt="Hero"
        className="rounded-md object-cover w-full h-full shadow-md"
        width={800}
        height={400}
      />
    </div>
  );
}
