import React from "react";
import { Button } from "@/components/ui/button";

export const AboutSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 px-8 lg:px-[114px] py-[110px]">
        <div className="w-full lg:w-[416px] h-[560px] bg-[url(/figmaAssets/rectangle-2.png)] bg-cover bg-center flex-shrink-0" />

        <div className="flex flex-col w-full lg:w-[529px]">
          <h2 className="[font-family:'Crimson_Pro',Helvetica] font-normal text-[#780000] text-[89.7px] tracking-[-6.20px] leading-[88.8px]">
            Our Roots Run Deep
          </h2>

          <p className="mt-[38.4px] [font-family:'Crimson_Pro',Helvetica] font-normal text-black text-[26.3px] tracking-[-1.09px] leading-[31.6px]">
            Born from generations of struggle and resilience, BØRN RZST™ carries
            the heritage of those who never gave up.
            <br />
            Like the olive tree, we stand unshaken rooted in history, reaching
            for freedom.
            <br />
            Every design tells a story of resistance, hope, and unwavering
            strength.
          </p>

          <Button
            variant="outline"
            className="mt-[51.0px] w-[245.36px] h-auto py-4 bg-[url(/figmaAssets/group-1.png)] bg-[100%_100%] border-0 [font-family:'Crimson_Pro',Helvetica] font-normal text-[#780000] text-[22.7px] hover:bg-[url(/figmaAssets/group-1.png)] hover:opacity-90"
          >
            EXPLORE OUR STORY
          </Button>
        </div>
      </div>
    </section>
  );
};
