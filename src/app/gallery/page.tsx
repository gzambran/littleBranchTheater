"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader, { SiteBlurb } from "@/components/PageHeader";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Gallery images data with captions
  const galleryImages = [
    {
      id: 1,
      thumb: "/images/gallery/thumbs/Gallery photo 1 thumb.webp",
      src: "/images/gallery/Gallery 1.webp",
      alt: "Honey Brown Eyes Production Photo 1",
      caption: "Left to Right: Mirza Šuman, Majda Zahić, and Amela Karadža.",
      credit: "Photo credit: Chaz Gentry",
    },
    {
      id: 2,
      thumb: "/images/gallery/thumbs/Gallery photo 2 thumb.webp",
      src: "/images/gallery/Gallery 2.webp",
      alt: "Honey Brown Eyes Production Photo 2",
      caption: "Left to Right: Sabina Selimović and Mike Ward.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 3,
      thumb: "/images/gallery/thumbs/Gallery photo 3 thumb.webp",
      src: "/images/gallery/Gallery 3.webp",
      alt: "Honey Brown Eyes Production Photo 3",
      caption: "Trevor Ferguson",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 4,
      thumb: "/images/gallery/thumbs/Gallery photo 4 thumb.webp",
      src: "/images/gallery/Gallery 4.webp",
      alt: "Honey Brown Eyes Production Photo 4",
      caption: "Left to Right: Trevor Ferguson and Amela Karadža.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 5,
      thumb: "/images/gallery/thumbs/Gallery photo 5 thumb.webp",
      src: "/images/gallery/Gallery 5.webp",
      alt: "Honey Brown Eyes Production Photo 5",
      caption: "Left to Right: Trevor Ferguson and Amela Karadža.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 6,
      thumb: "/images/gallery/thumbs/Gallery photo 6 thumb.webp",
      src: "/images/gallery/Gallery 6.webp",
      alt: "Honey Brown Eyes Production Photo 6",
      caption: "Left to Right: Trevor Ferguson and Jovani Zambrano.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 7,
      thumb: "/images/gallery/thumbs/Gallery photo 7 thumb.webp",
      src: "/images/gallery/Gallery 7.webp",
      alt: "Honey Brown Eyes Production Photo 7",
      caption: "Mirza Šuman",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 8,
      thumb: "/images/gallery/thumbs/Gallery photo 8 thumb.webp",
      src: "/images/gallery/Gallery 8.webp",
      alt: "Honey Brown Eyes Production Photo 8",
      caption:
        "Left to Right: Anthony Parry, Lauryn Mederios, Sabina Selimović, and Mike Ward.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 9,
      thumb: "/images/gallery/thumbs/Gallery photo 9 thumb.webp",
      src: "/images/gallery/Gallery 9.webp",
      alt: "Honey Brown Eyes Production Photo 9",
      caption: "Majda Zahić",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 10,
      thumb: "/images/gallery/thumbs/Gallery photo 10 thumb.webp",
      src: "/images/gallery/Gallery 10.webp",
      alt: "Honey Brown Eyes Production Photo 10",
      caption: "Left to Right: Francisco Negron and Terri Dillion.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 11,
      thumb: "/images/gallery/thumbs/Gallery photo 11 thumb.webp",
      src: "/images/gallery/Gallery 11.webp",
      alt: "Honey Brown Eyes Production Photo 11",
      caption: "Left to Right: Terri Dillion and Francisco Negron.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 12,
      thumb: "/images/gallery/thumbs/Gallery photo 12 thumb.webp",
      src: "/images/gallery/Gallery 12.webp",
      alt: "Honey Brown Eyes Production Photo 12",
      caption: "Left to Right: Terri Dillion and Francisco Negron.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 13,
      thumb: "/images/gallery/thumbs/Gallery photo 13 thumb.webp",
      src: "/images/gallery/Gallery 13.webp",
      alt: "Honey Brown Eyes Production Photo 13",
      caption: "Majda Zahić",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 14,
      thumb: "/images/gallery/thumbs/Gallery photo 14 thumb.webp",
      src: "/images/gallery/Gallery 14.webp",
      alt: "Honey Brown Eyes Production Photo 14",
      caption: "Left to Right: Francisco Negron and Terri Dillion.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 15,
      thumb: "/images/gallery/thumbs/Gallery photo 15 thumb.webp",
      src: "/images/gallery/Gallery 15.webp",
      alt: "Honey Brown Eyes Production Photo 15",
      caption: "Left to Right: Jovani Zambrano and Mirza Šuman.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 16,
      thumb: "/images/gallery/thumbs/Gallery photo 16 thumb.webp",
      src: "/images/gallery/Gallery 16.webp",
      alt: "Honey Brown Eyes Production Photo 16",
      caption: "Left to Right: Trevor Ferguson and Mirza Šuman.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 17,
      thumb: "/images/gallery/thumbs/Gallery photo 17 thumb.webp",
      src: "/images/gallery/Gallery 17.webp",
      alt: "Honey Brown Eyes Production Photo 17",
      caption: "Left to Right: Mirza Šuman and Trevor Ferguson.",
      credit: "Photo Credit: Chaz Gentry",
    },
    {
      id: 18,
      thumb: "/images/gallery/thumbs/Gallery photo 18 thumb.webp",
      src: "/images/gallery/Gallery 18.webp",
      alt: "Honey Brown Eyes Production Photo 18",
      caption: "Set Design by Jessica Nebeker",
      credit: "Photo Credit: Chaz Gentry",
    },
  ];

  // Preload adjacent images for smoother navigation
  const preloadImage = useCallback(
    (index: number) => {
      if (index >= 0 && index < galleryImages.length) {
        const img = new window.Image();
        img.src = galleryImages[index].src;
      }
    },
    [galleryImages]
  );

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    // Only show loading state if image hasn't been loaded before
    setImageLoading(!loadedImages.has(index));
    document.body.style.overflow = "hidden";

    // Preload adjacent images
    preloadImage(index - 1);
    preloadImage(index + 1);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setImageLoading(false);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    const newIndex =
      direction === "prev"
        ? selectedImage === 0
          ? galleryImages.length - 1
          : selectedImage - 1
        : selectedImage === galleryImages.length - 1
          ? 0
          : selectedImage + 1;

    // Only show loading if image hasn't been loaded before
    if (!loadedImages.has(newIndex)) {
      setImageLoading(true);
    }

    setSelectedImage(newIndex);

    // Preload the next image in the direction of navigation
    if (direction === "prev") {
      preloadImage(newIndex - 1);
    } else {
      preloadImage(newIndex + 1);
    }
  };

  const handleImageLoad = useCallback(() => {
    setImageLoading(false);
    if (selectedImage !== null) {
      setLoadedImages((prev) => new Set(prev).add(selectedImage));
    }
  }, [selectedImage]);

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-black">
      {/* Page Header */}
      <PageHeader>
        <SiteBlurb>
          Witness the <span className="text-accent font-normal">moments</span>{" "}
          that shape our{" "}
          <span className="text-accent font-normal">productions</span>.
        </SiteBlurb>
      </PageHeader>

      {/* Gallery Section */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-4">
          {/* Production Title */}
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group bg-gray-900"
                onClick={() => openLightbox(index)}
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            onClick={closeLightbox}
          >
            {/* Close button */}
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

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
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

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
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

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Loading State & Image Container */}
              <div className="relative flex items-center justify-center min-h-[400px] min-w-[600px]">
                {/* Show blurred thumbnail immediately while loading */}
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={galleryImages[selectedImage].thumb}
                      alt={galleryImages[selectedImage].alt}
                      width={600}
                      height={400}
                      className="object-contain max-w-[90vw] max-h-[75vh] blur-xl"
                      priority
                    />
                  </div>
                )}

                {/* Full resolution image */}
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  width={1200}
                  height={800}
                  className={`object-contain max-w-[90vw] max-h-[75vh] w-auto h-auto transition-opacity duration-500 ${
                    imageLoading ? "opacity-0" : "opacity-100"
                  }`}
                  priority
                  onLoad={handleImageLoad}
                />
              </div>

              {/* Caption and Credit - Always visible */}
              <div className="mt-4 text-center max-w-2xl px-4">
                <p className="text-white text-lg mb-1">
                  {galleryImages[selectedImage].caption}
                </p>
                <p className="text-gray-400 text-sm">
                  {galleryImages[selectedImage].credit}
                </p>
              </div>

              {/* Image counter */}
              <div className="mt-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                {selectedImage + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
