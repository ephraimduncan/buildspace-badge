"use client";
import { Houses } from "@/lib/houses";
import { cn } from "@/lib/utils";
import React, { useState, useCallback, useRef } from "react";
import { BuildspaceLogo } from "./buildspace-logo";
import { toSvg } from "html-to-image";
import { toast } from "sonner";

export function SelectHouse() {
  const [selectedHouse, setHouse] = useState<Houses>("Alterok");
  const ref = useRef<HTMLDivElement>(null);

  const downloadBadge = useCallback(() => {
    console.log("downloaddd......");

    console.log(ref.current);

    if (ref.current === null) {
      return;
    }

    toSvg(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");

        console.log(dataUrl);
        console.log(link);

        link.download = "buildspace-badge.svg";
        link.href = dataUrl;
        link.click();
      })
      .then(() => {
        toast.success("Badge downloaded");
      })
      .catch((err) => {
        toast.error("Failed to download badge");
      });
  }, [ref]);

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
        <div ref={ref}>
          <div
            onClick={downloadBadge}
            className={cn(
              "inline-flex items-center transition-all",
              "border border-dashed !px-8 !pl-7 text-3xl !py-4 font-bold space-x-5 cursor-pointer select-none",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              {
                "border-alterok-foreground text-alterok-foreground": selectedHouse === "Alterok",
                "border-erevald-foreground text-erevald-foreground": selectedHouse === "Erevald",
                "border-gaudmire-foreground text-gaudmire-foreground": selectedHouse === "Gaudmire",
                "border-spectreseek-foreground text-spectreseek-foreground": selectedHouse === "Spectreseek",
              }
            )}
          >
            <BuildspaceLogo size={40} />
            <span>n&amp;w s5</span>
          </div>
        </div>
        <span className="text-xs opacity-50">click to download</span>
      </div>
    </div>
  );
}
