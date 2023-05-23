"use client";
import InputForm from "./components/Input";
import Movies from "./components/Movies";
import { useStateValue } from "./context/contextProvider";

export default function Home() {
  const [{ searchItem }, dispatch] = useStateValue();
  return (
    <main className="flex min-h-screen flex-col w-full p-10">
      <p className=" text-black font-bold text-xl lg:hidden flex items-center justify-center">
        Show<span className=" text-purple-900 font-bold text-xl">Flix</span>
      </p>
      <div className=" flex flex-col w-full mt-6">
        <p className=" text-black font-bold text-base">Explore</p>
        <InputForm />
      </div>
      <p className=" text-gray-400 my-2">
        Results for:{" "}
        <span className=" text-black font-bold">
          {searchItem ? searchItem : "Mortal combat"}
        </span>
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        <Movies />
      </div>
    </main>
  );
}
