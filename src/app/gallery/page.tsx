"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader, { SiteBlurb } from "@/components/PageHeader";

export default function GalleryPage() {
  const [selectedHBE, setSelectedHBE] = useState<number | null>(null);
  const [selectedSC, setSelectedSC] = useState<number | null>(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const hbeImages = [
    {
      id: 1,
      thumb: "/images/gallery/thumbs/hbe-01-thumb.webp",
      src: "/images/gallery/hbe-01.webp",
      alt: "Honey Brown Eyes Production Photo 1",
      caption: "Left to Right: Mirza Šuman, Majda Zahić, and Amela Karadža.",
      credit: "Photo credit: Chaz Gentry",
    },
    {
      id: 2,
      thumb: "/images/gallery/thumbs/hbe-02-thumb.webp",
      src: "/images/gallery/hbe-02.webp",
      alt: "Honey Brown Eyes Production Photo 2",
      caption: "Left to Right: Sabina Selimović and Mike Ward.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 3,
      thumb: "/images/gallery/thumbs/hbe-03-thumb.webp",
      src: "/images/gallery/hbe-03.webp",
      alt: "Honey Brown Eyes Production Photo 3",
      caption: "Trevor Ferguson",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 4,
      thumb: "/images/gallery/thumbs/hbe-04-thumb.webp",
      src: "/images/gallery/hbe-04.webp",
      alt: "Honey Brown Eyes Production Photo 4",
      caption: "Left to Right: Trevor Ferguson and Amela Karadža.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 5,
      thumb: "/images/gallery/thumbs/hbe-05-thumb.webp",
      src: "/images/gallery/hbe-05.webp",
      alt: "Honey Brown Eyes Production Photo 5",
      caption: "Left to Right: Trevor Ferguson and Amela Karadža.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 6,
      thumb: "/images/gallery/thumbs/hbe-06-thumb.webp",
      src: "/images/gallery/hbe-06.webp",
      alt: "Honey Brown Eyes Production Photo 6",
      caption: "Left to Right: Trevor Ferguson and Jovani Zambrano.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 7,
      thumb: "/images/gallery/thumbs/hbe-07-thumb.webp",
      src: "/images/gallery/hbe-07.webp",
      alt: "Honey Brown Eyes Production Photo 7",
      caption: "Mirza Šuman",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 8,
      thumb: "/images/gallery/thumbs/hbe-08-thumb.webp",
      src: "/images/gallery/hbe-08.webp",
      alt: "Honey Brown Eyes Production Photo 8",
      caption:
        "Left to Right: Anthony Parry, Lauryn Mederios, Sabina Selimović, and Mike Ward.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 9,
      thumb: "/images/gallery/thumbs/hbe-09-thumb.webp",
      src: "/images/gallery/hbe-09.webp",
      alt: "Honey Brown Eyes Production Photo 9",
      caption: "Majda Zahić",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 10,
      thumb: "/images/gallery/thumbs/hbe-10-thumb.webp",
      src: "/images/gallery/hbe-10.webp",
      alt: "Honey Brown Eyes Production Photo 10",
      caption: "Left to Right: Francisco Negron and Terri Dillion.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 11,
      thumb: "/images/gallery/thumbs/hbe-11-thumb.webp",
      src: "/images/gallery/hbe-11.webp",
      alt: "Honey Brown Eyes Production Photo 11",
      caption: "Left to Right: Terri Dillion and Francisco Negron.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 12,
      thumb: "/images/gallery/thumbs/hbe-12-thumb.webp",
      src: "/images/gallery/hbe-12.webp",
      alt: "Honey Brown Eyes Production Photo 12",
      caption: "Left to Right: Terri Dillion and Francisco Negron.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 13,
      thumb: "/images/gallery/thumbs/hbe-13-thumb.webp",
      src: "/images/gallery/hbe-13.webp",
      alt: "Honey Brown Eyes Production Photo 13",
      caption: "Majda Zahić",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 14,
      thumb: "/images/gallery/thumbs/hbe-14-thumb.webp",
      src: "/images/gallery/hbe-14.webp",
      alt: "Honey Brown Eyes Production Photo 14",
      caption: "Left to Right: Francisco Negron and Terri Dillion.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 15,
      thumb: "/images/gallery/thumbs/hbe-15-thumb.webp",
      src: "/images/gallery/hbe-15.webp",
      alt: "Honey Brown Eyes Production Photo 15",
      caption: "Left to Right: Jovani Zambrano and Mirza Šuman.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 16,
      thumb: "/images/gallery/thumbs/hbe-16-thumb.webp",
      src: "/images/gallery/hbe-16.webp",
      alt: "Honey Brown Eyes Production Photo 16",
      caption: "Left to Right: Trevor Ferguson and Mirza Šuman.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 17,
      thumb: "/images/gallery/thumbs/hbe-17-thumb.webp",
      src: "/images/gallery/hbe-17.webp",
      alt: "Honey Brown Eyes Production Photo 17",
      caption: "Left to Right: Mirza Šuman and Trevor Ferguson.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 18,
      thumb: "/images/gallery/thumbs/hbe-18-thumb.webp",
      src: "/images/gallery/hbe-18.webp",
      alt: "Honey Brown Eyes Production Photo 18",
      caption: "Set Design by Jessica Nebeker",
      credit: "Photo Credit: Chaz Gentry",
    },
  ];

  const scImages = [
    {
      id: 1,
      thumb: "/images/gallery/sc-01.webp",
      src: "/images/gallery/sc-01.webp",
      alt: "Sanctuary City Production Photo 1",
      caption: "Left to Right: Jovani Zambrano and Neekey Habibi",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 2,
      thumb: "/images/gallery/sc-02.webp",
      src: "/images/gallery/sc-02.webp",
      alt: "Sanctuary City Production Photo 2",
      caption: "Left to Right: Jovani Zambrano and Neekey Habibi",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 3,
      thumb: "/images/gallery/sc-03.webp",
      src: "/images/gallery/sc-03.webp",
      alt: "Sanctuary City Production Photo 3",
      caption: "Left to Right: Jovani Zambrano and Neekey Habibi",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 4,
      thumb: "/images/gallery/sc-04.webp",
      src: "/images/gallery/sc-04.webp",
      alt: "Sanctuary City Production Photo 4",
      caption: "Left to Right: Jovani Zambrano and Neekey Habibi",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 5,
      thumb: "/images/gallery/sc-05.webp",
      src: "/images/gallery/sc-05.webp",
      alt: "Sanctuary City Production Photo 5",
      caption: "Left to Right: Evencio Bahena, Jovani Zambrano, and Natalia Vazquez (US)",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 6,
      thumb: "/images/gallery/sc-06.webp",
      src: "/images/gallery/sc-06.webp",
      alt: "Sanctuary City Production Photo 6",
      caption: "Left to Right: Evencio Bahena, Jovani Zambrano, and Neekey Habibi",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 7,
      thumb: "/images/gallery/sc-07.webp",
      src: "/images/gallery/sc-07.webp",
      alt: "Sanctuary City Production Photo 7",
      caption: "Evencio Bahena",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 8,
      thumb: "/images/gallery/sc-08.webp",
      src: "/images/gallery/sc-08.webp",
      alt: "Sanctuary City Production Photo 8",
      caption: "Left to Right: Jovani Zambrano and Natalia Vazquez (US)",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 9,
      thumb: "/images/gallery/sc-09.webp",
      src: "/images/gallery/sc-09.webp",
      alt: "Sanctuary City Production Photo 9",
      caption: "Left to Right: Natalia Vazquez and Jovani Zambrano",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 10,
      thumb: "/images/gallery/sc-10.webp",
      src: "/images/gallery/sc-10.webp",
      alt: "Sanctuary City Production Photo 10",
      caption: "Left to Right: Neekey Habibi and Jovani Zambrano",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 11,
      thumb: "/images/gallery/sc-11.webp",
      src: "/images/gallery/sc-11.webp",
      alt: "Sanctuary City Production Photo 11",
      caption: "Neekey Habibi",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 12,
      thumb: "/images/gallery/sc-12.webp",
      src: "/images/gallery/sc-12.webp",
      alt: "Sanctuary City Production Photo 12",
      caption: "Left to Right: Jovani Zambrano and Neekey Habibi",
      credit: "Photo Credit: Chaz Gentry",
    },
  ];

  const preloadHBEImage = useCallback(
    (index: number) => {
      if (index >= 0 && index < hbeImages.length) {
        const img = new window.Image();
        img.src = hbeImages[index].src;
      }
    },
    [hbeImages]
  );

  const preloadSCImage = useCallback(
    (index: number) => {
      if (index >= 0 && index < scImages.length) {
        const img = new window.Image();
        img.src = scImages[index].src;
      }
    },
    [scImages]
  );

  const openHBELightbox = (index: number) => {
    setSelectedHBE(index);
    setImageLoading(!loadedImages.has(`hbe-${index}`));
    document.body.style.overflow = "hidden";
    preloadHBEImage(index - 1);
    preloadHBEImage(index + 1);
  };

  const openSCLightbox = (index: number) => {
    setSelectedSC(index);
    setImageLoading(!loadedImages.has(`sc-${index}`));
    document.body.style.overflow = "hidden";
    preloadSCImage(index - 1);
    preloadSCImage(index + 1);
  };

  const closeLightbox = () => {
    setSelectedHBE(null);
    setSelectedSC(null);
    setImageLoading(false);
    document.body.style.overflow = "auto";
  };

  const navigateHBE = (direction: "prev" | "next") => {
    if (selectedHBE === null) return;
    const newIndex =
      direction === "prev"
        ? selectedHBE === 0
          ? hbeImages.length - 1
          : selectedHBE - 1
        : selectedHBE === hbeImages.length - 1
          ? 0
          : selectedHBE + 1;
    if (!loadedImages.has(`hbe-${newIndex}`)) setImageLoading(true);
    setSelectedHBE(newIndex);
    if (direction === "prev") preloadHBEImage(newIndex - 1);
    else preloadHBEImage(newIndex + 1);
  };

  const navigateSC = (direction: "prev" | "next") => {
    if (selectedSC === null) return;
    const newIndex =
      direction === "prev"
        ? selectedSC === 0
          ? scImages.length - 1
          : selectedSC - 1
        : selectedSC === scImages.length - 1
          ? 0
          : selectedSC + 1;
    if (!loadedImages.has(`sc-${newIndex}`)) setImageLoading(true);
    setSelectedSC(newIndex);
    if (direction === "prev") preloadSCImage(newIndex - 1);
    else preloadSCImage(newIndex + 1);
  };

  const handleHBEImageLoad = useCallback(() => {
    setImageLoading(false);
    if (selectedHBE !== null) {
      setLoadedImages((prev) => new Set(prev).add(`hbe-${selectedHBE}`));
    }
  }, [selectedHBE]);

  const handleSCImageLoad = useCallback(() => {
    setImageLoading(false);
    if (selectedSC !== null) {
      setLoadedImages((prev) => new Set(prev).add(`sc-${selectedSC}`));
    }
  }, [selectedSC]);

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedHBE !== null) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") navigateHBE("prev");
        if (e.key === "ArrowRight") navigateHBE("next");
      } else if (selectedSC !== null) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") navigateSC("prev");
        if (e.key === "ArrowRight") navigateSC("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedHBE, selectedSC]);

  return (
    <div className="min-h-screen bg-black-warm">
      <PageHeader variant="contextual">
        <SiteBlurb>
          Witness the <span className="text-accent font-normal">moments</span>{" "}
          that shape our{" "}
          <span className="text-accent font-normal">productions</span>.
        </SiteBlurb>
      </PageHeader>

      {/* Sanctuary City Section */}
      <section className="pt-2 pb-8 bg-black-warm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-3xl md:text-4xl text-white mb-2">
              Sanctuary City
            </h2>
            <p className="text-gray-400 text-lg">2026 Production</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {scImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group bg-gray-950"
                onClick={() => openSCLightbox(index)}
              >
                <Image
                  src={image.thumb}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Honey Brown Eyes Section */}
      <section className="pt-2 pb-8 bg-black-warm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-3xl md:text-4xl text-white mb-2">
              Honey Brown Eyes
            </h2>
            <p className="text-gray-400 text-lg">2025 Production</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {hbeImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group bg-gray-950"
                onClick={() => openHBELightbox(index)}
              >
                <Image
                  src={image.thumb || image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HBE Lightbox */}
      <AnimatePresence>
        {selectedHBE !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white z-50 p-2"
              aria-label="Close gallery"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateHBE("prev");
              }}
              className="absolute left-4 text-white/80 hover:text-white z-50 p-2"
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateHBE("next");
              }}
              className="absolute right-4 text-white/80 hover:text-white z-50 p-2"
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex items-center justify-center min-h-[400px] min-w-[600px]">
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={hbeImages[selectedHBE].thumb}
                      alt={hbeImages[selectedHBE].alt}
                      width={600}
                      height={400}
                      className="object-contain max-w-[90vw] max-h-[75vh] blur-xl"
                      priority
                    />
                  </div>
                )}

                <Image
                  src={hbeImages[selectedHBE].src}
                  alt={hbeImages[selectedHBE].alt}
                  width={1200}
                  height={800}
                  className={`object-contain max-w-[90vw] max-h-[75vh] w-auto h-auto transition-opacity duration-500 ${
                    imageLoading ? "opacity-0" : "opacity-100"
                  }`}
                  priority
                  onLoad={handleHBEImageLoad}
                />
              </div>

              <div className="mt-4 text-center max-w-2xl px-4">
                <p className="text-white text-lg mb-1">
                  {hbeImages[selectedHBE].caption}
                </p>
                <p className="text-gray-400 text-sm">
                  {hbeImages[selectedHBE].credit}
                </p>
              </div>

              <div className="mt-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                {selectedHBE + 1} / {hbeImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SC Lightbox */}
      <AnimatePresence>
        {selectedSC !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white z-50 p-2"
              aria-label="Close gallery"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateSC("prev");
              }}
              className="absolute left-4 text-white/80 hover:text-white z-50 p-2"
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateSC("next");
              }}
              className="absolute right-4 text-white/80 hover:text-white z-50 p-2"
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex items-center justify-center min-h-[400px] min-w-[600px]">
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={scImages[selectedSC].thumb}
                      alt={scImages[selectedSC].alt}
                      width={600}
                      height={400}
                      className="object-contain max-w-[90vw] max-h-[75vh] blur-xl"
                      priority
                    />
                  </div>
                )}

                <Image
                  src={scImages[selectedSC].src}
                  alt={scImages[selectedSC].alt}
                  width={1200}
                  height={800}
                  className={`object-contain max-w-[90vw] max-h-[75vh] w-auto h-auto transition-opacity duration-500 ${
                    imageLoading ? "opacity-0" : "opacity-100"
                  }`}
                  priority
                  onLoad={handleSCImageLoad}
                />
              </div>

              <div className="mt-4 text-center max-w-2xl px-4">
                <p className="text-white text-lg mb-1">
                  {scImages[selectedSC].caption}
                </p>
                <p className="text-gray-400 text-sm">
                  {scImages[selectedSC].credit}
                </p>
              </div>

              <div className="mt-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                {selectedSC + 1} / {scImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
