import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const navigationLinks = [
  {
    text: "About us",
    className: "text-[22.3px] tracking-[-2.80px] leading-[20.1px]",
  },
  {
    text: "Join The Movement",
    className: "text-[24.3px] tracking-[-2.80px] leading-[21.9px]",
  },
  {
    text: "Impact",
    className: "text-[34.3px] tracking-[-2.80px] leading-[30.9px]",
  },
  {
    text: "Shop",
    className: "text-[30.3px] tracking-[-2.80px] leading-[27.3px]",
  },
  {
    text: "Contact Us",
    className: "text-[34.3px] tracking-[-2.80px] leading-[30.9px]",
  },
];

const rightNavigationLinks = [
  {
    text: "Privacy Policy",
    className: "text-[32.3px] tracking-[-2.80px] leading-[29.1px]",
  },
  {
    text: "Terms Of Service",
    className: "text-[26.3px] tracking-[-2.80px] leading-[23.7px]",
  },
  {
    text: "Refund Policy",
    className: "text-[32.3px] tracking-[-2.80px] leading-[29.1px]",
  },
  {
    text: "Return / Exchange Policy",
    className: "text-[23.3px] tracking-[-2.80px] leading-[21.0px]",
  },
  {
    text: "Shipping",
    className: "text-[34.3px] tracking-[-2.80px] leading-[30.9px]",
  },
];

export const ContactFormSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-black py-0">
      <div className="absolute top-0 left-[52px] w-[292px] h-[259px] bg-[url(/figmaAssets/rectangle-11.png)] bg-cover bg-[50%_50%]" />

      <div className="absolute top-[33px] left-[888px] w-[461px] h-[346px] bg-[url(/figmaAssets/rectangle-12.png)] bg-cover bg-[50%_50%]" />

      <img
        className="absolute top-[403px] left-[1017px] w-[297px] h-[76px]"
        alt="H"
        src="/figmaAssets/h.svg"
      />

      <div className="relative min-h-[604px]">
        <section className="absolute top-[278px] left-[426px] w-[446px] h-[200px] flex flex-col overflow-hidden">
          <h2 className="ml-0 w-[445.74px] h-[34px] mt-0 [font-family:'Crimson_Pro',Helvetica] font-normal text-white text-[38.3px] tracking-[-2.80px] leading-[34.5px]">
            SIGN UP FOR OUR NEWSLETTER
          </h2>

          <div className="ml-0 w-[433.88px] mt-[32.5px] flex bg-[url(/figmaAssets/group-6.png)] bg-[100%_100%]">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex items-center justify-center w-[433.88px] h-[64.24px] [font-family:'Crimson_Pro',Helvetica] font-normal text-black text-[24.7px] tracking-[-1.23px] leading-[29.6px] border-0 bg-transparent pl-6"
            />
          </div>

          <div className="ml-[19.5px] w-[219.39px] mt-[19.0px] flex bg-[url(/figmaAssets/group-7.png)] bg-[100%_100%]">
            <Button className="flex items-center justify-center w-[219.39px] h-[50.32px] [font-family:'Crimson_Pro',Helvetica] font-normal text-white text-[22.7px] text-center tracking-[0] leading-[normal] bg-transparent border-0 hover:bg-transparent h-auto">
              SUBMIT
            </Button>
          </div>
        </section>

        <p className="absolute top-[497px] left-[52px] w-[1001px] [font-family:'Inter',Helvetica] font-normal text-white text-[30.3px] tracking-[-2.50px] leading-[27.3px]">
          100% of Drop 1 → [Gaza Aid] | 50% of Future Drops → [Humanitarian
          Organizations]
        </p>

        <p className="absolute top-[278px] left-[66px] w-[279px] text-white text-[22.7px] tracking-[-1.13px] leading-[27.2px] [font-family:'Crimson_Pro',Helvetica] font-normal">
          BØRN RZST™ is a movement driven streetwear brand turning fashion into
          freedom. Every drop funds humanitarian aid, amplifies voices of
          resistance, and builds global solidarity.
        </p>

        <p className="absolute top-[555px] left-[52px] w-[362px] text-white text-[22.7px] tracking-[-1.13px] leading-[27.2px] [font-family:'Crimson_Pro',Helvetica] font-normal">
          © 2025 BØRN RZST LLC. All Rights Reserved.
        </p>

        <div className="absolute top-[496px] left-[998px] w-[333px] [font-family:'Inter',Helvetica] font-normal text-transparent text-[36.3px] leading-[36.3px]">
          <span className="text-white tracking-[-1.02px] leading-[32.7px]">
            Follow&nbsp;&nbsp;the&nbsp;&nbsp;Movement <br />
          </span>

          <span className="text-white tracking-[-1.02px] leading-[40.0px]">
            @BORNRZST
          </span>
        </div>

        <nav className="absolute top-16 left-[449px] w-[399px] h-[178px] overflow-hidden">
          <div className="absolute top-0 left-0 flex flex-col gap-0">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className={`w-[186px] [font-family:'Inter',Helvetica] font-normal text-white ${link.className} ${
                  index === 0
                    ? "mt-px"
                    : index === 1
                      ? "mt-9"
                      : index === 2
                        ? "mt-[76px]"
                        : index === 3
                          ? "mt-[108px]"
                          : "mt-[146px]"
                }`}
                style={{
                  position: "absolute",
                  top:
                    index === 0
                      ? "1px"
                      : index === 1
                        ? "36px"
                        : index === 2
                          ? "76px"
                          : index === 3
                            ? "108px"
                            : "146px",
                  left: index === 3 ? "0" : index === 4 ? "1px" : "0",
                }}
              >
                {link.text}
              </a>
            ))}
          </div>

          <div className="absolute top-0 left-[186px] flex flex-col gap-0">
            {rightNavigationLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className={`w-[213px] [font-family:'Inter',Helvetica] font-normal text-white ${link.className}`}
                style={{
                  position: "absolute",
                  top:
                    index === 0
                      ? "1px"
                      : index === 1
                        ? "37px"
                        : index === 2
                          ? "76px"
                          : index === 3
                            ? "111px"
                            : "146px",
                  left: "0",
                }}
              >
                {link.text}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </footer>
  );
};
