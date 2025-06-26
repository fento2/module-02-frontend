"use client";
// import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { ThemeContext } from "@/contexts/ThemeContex";
import { useAppSelector } from "@/lib/redux/hook";
import { useRouter } from "next/navigation"; // navigasi
import { useContext } from "react";




export default function Home() {
  const router = useRouter();
  //use contex
  // const { modeContext } = useContext(ThemeContext);
  //use redux
  const mode = useAppSelector((state) => state.themeReducer.mode);


  return (
    <div>
      <div className="h-screen flex flex-col gap-20 items-center justify-center ">

        <p className="text-black">Theme mode:{mode}</p>

        <div className="text-center">
          <h1 className="text-4xl font-semibold">Welcome to Todo App</h1>
          <p className="font-light">Get started to list your daily activities</p>
        </div>
        <Button type="button"
          onClick={() => router.push("/todo")}>
          Type todo</Button>
        <Button type="button"
          onClick={() => router.push("/signup")}>
          Signup</Button>
      </div>
    </div>
  );
}
