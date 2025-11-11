import React from "react";
import { Button } from "@/components/ui/button";

export const HomeSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-auto min-h-[768px] flex flex-col">
      <div className="relative w-full h-auto min-h-[768px] flex bg-[url(/figmaAssets/rectangle.png)] bg-cover bg-[50%_50%]">
        <div className="absolute top-[23px] left-10 w-[170px] h-[175px] bg-[url(/figmaAssets/rectangle-11.png)] bg-cover bg-[50%_50%]" />

        <img
          className="absolute top-[138px] left-[453px] w-[100px] h-[100px]"
          alt="Slice"
          src="/figmaAssets/slice-1.svg"
        />

        <div className="absolute top-[180px] left-10 w-full max-w-[617px] [font-family:'Inter',Helvetica] font-normal text-transparent text-[94.5px] leading-[94.5px]">
          <span className="text-white tracking-[-6.70px] leading-[100.2px]">
            Resistance is not a choice&nbsp;&nbsp;It&apos;s Our{" "}
          </span>
          <span className="text-[#780000] tracking-[-6.70px] leading-[100.2px]">
            Heritage
          </span>
        </div>

        <div className="absolute top-[481px] left-10 w-full max-w-[791px] [font-family:'Crimson_Pro',Helvetica] font-normal text-transparent text-[49.4px] leading-[49.4px]">
          <span className="text-white tracking-[-2.01px] leading-[51.8px]">
            Every&nbsp;&nbsp;purchase&nbsp;&nbsp;funds humanitarian aid for{" "}
          </span>
          <span className="text-[#780000] tracking-[-2.01px] leading-[51.8px]">
            Palestine
            <br />
          </span>
          <span className="text-white tracking-[-2.01px] leading-[51.8px]">
            Wear&nbsp;&nbsp;your convictions
            <br />
            Become&nbsp;&nbsp;the&nbsp;&nbsp;voice&nbsp;&nbsp;of&nbsp;&nbsp;
          </span>
          <span className="text-[#780000] tracking-[-2.01px] leading-[51.8px]">
            resistance
          </span>
        </div>

        <div className="absolute top-[624px] left-[996px] w-[293px] h-[67px]">
          <Button
            variant="link"
            className="w-full h-full bg-[url(/figmaAssets/group.png)] bg-[100%_100%] [font-family:'Crimson_Pro',Helvetica] font-normal text-white text-[22.7px] text-center tracking-[0] leading-[normal] underline hover:no-underline p-0"
          >
            JOIN THE MOVEMENT
          </Button>
        </div>
      </div>
    </section>
  );
};
