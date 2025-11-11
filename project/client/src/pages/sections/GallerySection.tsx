import React from "react";

const textBlocks = [
  {
    title: "Voices  of  Truth",
    description:
      "They tried to silence us, but our stories live on.\nThis collection shines a light on the power of resistance and the courage to keep speaking out.",
    top: "top-[163px]",
  },
  {
    title: "Wear  the  Message",
    description:
      "Every piece is a protest, every design a declaration.\nFashion is not just style  it's truth stitched into fabric, worn by a fearless generation.",
    top: "top-[429px]",
  },
];

export const GallerySection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white flex flex-row">
      <div className="flex-1 min-h-[768px] bg-[url(/figmaAssets/rectangle-5.png)] bg-cover bg-center" />

      <div className="flex-1 flex flex-col justify-center items-center gap-[113px] px-8 py-16">
        {textBlocks.map((block, index) => (
          <div
            key={index}
            className="w-full max-w-[333px] flex flex-col gap-[29.4px]"
          >
            <h2 className="w-full text-[#323232] text-[49.3px] text-center leading-[44.4px] [font-family:'Inter',Helvetica] font-normal tracking-[-3.40px]">
              {block.title}
            </h2>
            <p className="w-full text-[#323232] text-[16.3px] text-center tracking-[-0.87px] leading-[19.6px] [font-family:'Crimson_Pro',Helvetica] font-normal whitespace-pre-line">
              {block.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
