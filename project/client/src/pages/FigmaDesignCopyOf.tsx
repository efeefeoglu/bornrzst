import React from "react";
import { AboutSection } from "./sections/AboutSection";
import { BlogSection } from "./sections/BlogSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { ContactSection } from "./sections/ContactSection";
import { DineSection } from "./sections/DineSection";
import { GallerySection } from "./sections/GallerySection";
import { HomeSection } from "./sections/HomeSection";
import { OffersSection } from "./sections/OffersSection";
import { StaySection } from "./sections/StaySection";

export const FigmaDesignCopyOf = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full bg-white">
      <HomeSection />
      <AboutSection />
      <StaySection />
      <DineSection />
      <OffersSection />
      <GallerySection />
      <BlogSection />
      <ContactSection />
      <ContactFormSection />
    </main>
  );
};
