import React from "react";
import { Button } from "@/components/ui/button";

const products = [
  {
    image: "/figmaAssets/j-2.svg",
    title: "Wanted  Hoodie",
    description:
      "Defiant design honoring voices silenced yet never forgotten. Stand  bold. Wear  resistance",
  },
  {
    image: "/figmaAssets/j-1.svg",
    title: "Martyrs  Hoodie",
    description:
      "They killed the dreamers, but not the dream.\nCarry their legacy everywhere you go",
  },
  {
    image: "/figmaAssets/j.svg",
    title: "Exile Hoodie",
    description:
      "Born in displacement, unshaken in identity. A piece that speaks louder than words.",
  },
];

export const StaySection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#780000] py-16 px-8">
      <div className="max-w-[1366px] mx-auto">
        <h2 className="[font-family:'Inter',Helvetica] font-normal text-white text-[64.7px] text-center tracking-[-5.52px] leading-[58.2px] mb-16">
          Timeless&nbsp;&nbsp;Pieces&nbsp;&nbsp;for
          a&nbsp;&nbsp;Fearless&nbsp;&nbsp;Generation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-start">
              <img
                className="w-full h-[333px] object-contain mb-6"
                alt={product.title}
                src={product.image}
              />
              <h3 className="[font-family:'Inter',Helvetica] font-normal text-white text-[49.3px] tracking-[-3.40px] leading-[44.4px] mb-4 whitespace-pre-wrap">
                {product.title}
              </h3>
              <p className="[font-family:'Crimson_Pro',Helvetica] font-normal text-white text-[19.3px] tracking-[-0.97px] leading-[23.2px] whitespace-pre-line">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            className="h-14 w-[457px] bg-[url(/figmaAssets/group-2.png)] bg-[100%_100%] [font-family:'Crimson_Pro',Helvetica] font-normal text-black text-[22.7px] hover:opacity-90 transition-opacity"
            variant="ghost"
          >
            EXPLORE THE COLLECTION
          </Button>
        </div>
      </div>
    </section>
  );
};
