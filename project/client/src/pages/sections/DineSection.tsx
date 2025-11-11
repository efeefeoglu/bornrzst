import React from "react";
import { Button } from "@/components/ui/button";

export const DineSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-auto bg-[#013927] overflow-hidden">
      <div className="relative w-full h-full flex">
        <img
          className="w-full h-full object-cover"
          alt="Background"
          src="/figmaAssets/rectangle-3.png"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-8">
        <h1 className="text-center text-[#780000] text-[106.9px] leading-[96.2px] tracking-[-7.61px] [font-family:'Inter',Helvetica] font-normal mb-8">
          More&nbsp;&nbsp;Than&nbsp;&nbsp;Clothing&nbsp;&nbsp;
          <br />
          A&nbsp;&nbsp;movement
        </h1>

        <p className="text-center text-[#f5fffa] text-[29.3px] leading-[35.2px] tracking-[-0.34px] [font-family:'Crimson_Pro',Helvetica] font-normal max-w-[694px] mb-8">
          BØRN RZST™ is not just a streetwear brand.
          <br />
          It&apos;s a statement, a protest, and a community bound by resilience.
          <br />
          Every design is rooted in truth, crafted to amplify the voices history
          tried to silence.
          <br />
          <span className="text-white">Wear it. Live it. Resist.</span>
        </p>

        <Button
          className="w-[259px] h-10 bg-[url(/figmaAssets/group-3.png)] bg-[100%_100%] border-0"
          variant="ghost"
        >
          <span className="[font-family:'Inter',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
            {""}
          </span>
        </Button>
      </div>
    </section>
  );
};
