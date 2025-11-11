import React from "react";
import { Button } from "@/components/ui/button";

export const BlogSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#780000] py-20 px-6 md:px-20">
      <div className="flex flex-col md:flex-row gap-8 max-w-[1366px] mx-auto">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-white text-[76.7px] tracking-[-6.20px] leading-[69.0px] [font-family:'Inter',Helvetica] font-normal mb-8">
              Decades&nbsp;&nbsp;of&nbsp;&nbsp;Resistance
              One&nbsp;&nbsp;Movement
            </h2>

            <p className="text-white text-[32px] tracking-[-1.28px] leading-[38.4px] [font-family:'Crimson_Pro',Helvetica] font-normal max-w-[631px]">
              From 1948 to today, our people have carried stories of exile,
              resilience, and defiance.
              <br />
              BØRN RZST™ was created to turn those stories into wearable
              activism a brand born of struggle, heritage, and an unbreakable
              will.
              <br />
              This is more than fashion. This is history stitched into every
              piece.
            </p>
          </div>

          <Button className="mt-12 w-[245px] h-14 bg-[url(/figmaAssets/group-5.png)] bg-[100%_100%] bg-cover border-0 hover:opacity-90 transition-opacity h-auto">
            <span className="[font-family:'Crimson_Pro',Helvetica] font-normal text-white text-[22.7px] tracking-[0] leading-[22.7px]">
              <span className="leading-[0.1px]">R</span>
              <span className="leading-[31.7px]">EAD MORE</span>
            </span>
          </Button>
        </div>

        <div className="flex-1 min-h-[614px]">
          <div className="w-full h-full bg-[url(/figmaAssets/rectangle-6.png)] bg-cover bg-center rounded-none" />
        </div>
      </div>
    </section>
  );
};
