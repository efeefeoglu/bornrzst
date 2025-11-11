import React from "react";
import { Button } from "@/components/ui/button";

export const OffersSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-8 px-8 lg:px-20 py-12 lg:py-24">
          <h2 className="[font-family:'Inter',Helvetica] font-normal text-[#780000] text-[48px] lg:text-[76.3px] tracking-[-6.33px] leading-[1.1]">
            Join the Resistance Club
          </h2>

          <p className="[font-family:'Crimson_Pro',Helvetica] font-normal text-[#323232] text-[20px] lg:text-[27px] tracking-[-1.12px] leading-[1.2]">
            Step inside the movement.
            <br />
            As a member, you&apos;ll get early access to drops, exclusive
            designs, and behind-the-scenes updates.
            <br />
            More than perks&nbsp;&nbsp;it&apos;s a way to stay connected,
            united, and always one step ahead.
          </p>

          <div className="flex">
            <Button
              className="h-auto bg-[url(/figmaAssets/group-4.png)] bg-[length:100%_100%] bg-no-repeat border-0 px-8 py-4 hover:opacity-90"
              variant="ghost"
            >
              <span className="[font-family:'Crimson_Pro',Helvetica] font-normal text-[22.7px] tracking-[0] leading-[22.7px]">
                <span className="text-[#780000]">B</span>
                <span className="text-[#780000]">ECOME A MEMBER</span>
              </span>
            </Button>
          </div>
        </div>

        <div className="relative h-[400px] lg:h-[672px]">
          <img
            src="/figmaAssets/rectangle-4.png"
            alt="Resistance Club members"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
