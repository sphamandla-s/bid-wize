"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function Categories() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
            Discover Items <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              List or Bid
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/4866232.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
