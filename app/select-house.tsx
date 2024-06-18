"use client";
import { Houses } from "@/lib/houses";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { BuildspaceLogo } from "./buildspace-logo";

export function SelectHouse() {
  const [selectedHouse, setHouse] = useState<Houses>("Alterok");

  console.log(`selectedHouse: ${selectedHouse}`);

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex gap-16 mt-6">
        {Houses.map((house, index) => {
          return (
            <div
              onClick={() => setHouse(house)}
              className={cn("text-lg cursor-pointer", {
                "text-alterok-foreground": house === "Alterok",
                "text-erevald-foreground": house === "Erevald",
                "text-gaudmire-foreground": house === "Gaudmire",
                "text-spectreseek-foreground": house === "Spectreseek",
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
        <div
          className={cn(
            "inline-flex items-center transition-all",
            "border border-dashed !px-8 text-3xl !py-4 font-bold space-x-5 cursor-pointer",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            {
              "border-alterok-background text-alterok-foreground": selectedHouse === "Alterok",
              "border-erevald-background text-erevald-foreground": selectedHouse === "Erevald",
              "border-gaudmire-background text-gaudmire-foreground": selectedHouse === "Gaudmire",
              "border-spectreseek-background text-spectreseek-foreground": selectedHouse === "Spectreseek",
            }
          )}
        >
          <BuildspaceLogo size={40} />
          <span>n&amp;w s5</span>
        </div>

        <span className="text-xs opacity-60">click to download</span>
      </div>
    </div>
  );
}
