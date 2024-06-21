"use client";
import Lottie from "react-lottie";
import Link from "next/link";
import Links from "@/components/Links";
import Button from "@/components/shared/Button";
import NameTag from "@/components/NameTag";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-8 p-6 h-screen">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm flex">
        <div className="max-w-fit">
          <Lottie
            height={50}
            width={50}
            options={{
              loop: true,
              autoplay: true,
              animationData: require("../public/lottie/anim-react.json"),
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
          />
        </div>
        <div className="flex gap-8 items-center">
          <Link href={"/contact"}>iletiş</Link>
          <select className="bg-transparent text-base font-mono  rounded-md p-1">
            <option className="bg-black text-white border border-gray-300 rounded-md p-1">
              TR
            </option>
            <option className="bg-black text-white border border-gray-300 rounded-md p-1">
              EN
            </option>
          </select>
        </div>
      </div>
      <div className="bg-red-50/10 w-full h-full">
        <div className="flex  items-center justify-center w-full h-full ">
          <div className="flex flex-col lg:flex-row items-center lg:gap-32 max-w-5xl w-full h-full ">
            <NameTag />
            <Links />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 ">
        <Lottie
          height={50}
          width={50}
          options={{
            loop: false,
            autoplay: true,
            animationData: require("../public/lottie/anim-scroll.json"),
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
        />
      </div>
    </main>
  );
}
