import React from "react";

export const ContactSection = (): JSX.Element => {
  const socialIcons = [
    {
      src: "/figmaAssets/icon.svg",
      alt: "Social Icon 1",
      className: "w-[30px] h-[30px]",
    },
    {
      src: "/figmaAssets/i-1.svg",
      alt: "Social Icon 2",
      className: "w-[34px] h-[34px]",
    },
    {
      src: "/figmaAssets/i.svg",
      alt: "Social Icon 3",
      className: "w-[37px] h-[37px]",
    },
  ];

  return (
    <section className="relative w-full bg-black py-8 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="relative min-h-[600px] lg:min-h-[768px]">
        <div className="absolute top-0 left-0 w-[280px] sm:w-[350px] lg:w-[431px] h-[180px] sm:h-[220px] lg:h-[274px] bg-[url(/figmaAssets/rectangle-11.png)] bg-cover bg-center" />

        <div className="absolute top-[50px] sm:top-[70px] lg:top-[84px] right-0 w-[400px] sm:w-[550px] lg:w-[723px] h-[350px] sm:w-[450px] lg:h-[542px] bg-[url(/figmaAssets/rectangle-12.png)] bg-cover bg-center" />

        <div className="relative z-10 flex flex-col gap-8 pt-[220px] sm:pt-[280px] lg:pt-[348px] max-w-[333px]">
          <div>
            <h2 className="[font-family:'Inter',Helvetica] font-normal text-white text-[32px] sm:text-[40px] lg:text-[49.3px] tracking-[-2.80px] leading-[1.1] mb-6 sm:mb-8 lg:mb-10">
              Company&nbsp;&nbsp;Info
            </h2>
            <address className="not-italic text-white text-[16px] sm:text-[18px] lg:text-[20.3px] tracking-[-1.07px] leading-[1.2] [font-family:'Crimson_Pro',Helvetica] font-normal">
              BORN RZST LLC
              <br />
              Sheridan, Wyoming 82801
              <br />
              USA
              <br />
              Info@bornrzst.com
            </address>
          </div>

          <div>
            <h3 className="[font-family:'Inter',Helvetica] font-normal text-white text-[28px] sm:text-[32px] lg:text-[36.3px] tracking-[-2.80px] leading-[0.9] mb-6 sm:mb-8 lg:mb-10">
              Follow&nbsp;&nbsp;the&nbsp;&nbsp;Movement
            </h3>
            <div className="flex items-center gap-4">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="inline-flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label={icon.alt}
                >
                  <img
                    className={icon.className}
                    alt={icon.alt}
                    src={icon.src}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
