"use client";
import { House, Houses } from "@/lib/houses";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Image from "next/image";

export function SelectHouse() {
  const [selectedHouse, setHouse] = useState<House>("alterok");

  const downloadBadge = () => {
    const link = document.createElement("a");
    link.href = `/${selectedHouse}.svg`;
    link.click();
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex gap-16 mt-6">
        {Houses.map((house, index) => {
          return (
            <div
              onClick={() => setHouse(house)}
              className={cn("text-lg cursor-pointer", {
                "text-alterok-foreground": house === "alterok",
                "text-erevald-foreground": house === "erevald",
                "text-gaudmire-foreground": house === "gaudmire",
                "text-spectreseek-foreground": house === "spectreseek",
                "underline underline-offset-8": house === selectedHouse,
              })}
              key={house + index}
            >
              {house}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-2">
        <Image
          className="cursor-pointer"
          onClick={downloadBadge}
          src={`/${selectedHouse}.svg`}
          width={200}
          height={200}
          alt={selectedHouse + " badge"}
        />

        <span className="text-xs opacity-50">click to download</span>
      </div>
    </div>
  );
}
