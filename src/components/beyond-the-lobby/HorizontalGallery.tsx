"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCards } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { WarPhoto } from './PhotoCard'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'

interface HorizontalGalleryProps {
  photos: WarPhoto[]
  onPhotoClick: (photo: WarPhoto) => void
}

export default function HorizontalGallery({ photos, onPhotoClick }: HorizontalGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Handler for swiper slide change
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };
  
  // Global click handler for the gallery
  const handleGalleryClick = () => {
    // Only process click if we have photos and a valid active index
    if (photos && photos.length > 0 && activeIndex >= 0 && activeIndex < photos.length) {
      // Get the active photo
      const activePhoto = photos[activeIndex];
      // Open the modal with the active photo
      onPhotoClick(activePhoto);
    }
  };

  return (
    <div className="gallery-container relative w-full py-4">
      {/* Add a click handler to the container */}
      <div onClick={handleGalleryClick} className="relative z-20 cursor-pointer">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={0}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
          }}
          modules={[Pagination, EffectCards]}
          className="card-swiper"
          cardsEffect={{
            slideShadows: true,
            perSlideOffset: 8,
            perSlideRotate: 2,
          }}
          onSlideChange={handleSlideChange}
        >
          {photos.map((photo) => (
            <SwiperSlide key={photo.id} className="card-slide">
              <div className="card-content relative overflow-hidden shadow-md">
                <div className="relative">
                  <Image
                    src={photo.src}
                    alt={photo.alt || "Gallery image"}
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/BfwAJcAP4i4MHowAAAABJRU5ErkJggg=="
                  />
                </div>
                
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2">
                  {photo.caption && (
                    <h4 className="text-sm font-medium truncate">{photo.caption}</h4>
                  )}
                  {photo.source && (
                    <p className="text-xs text-gray-300 mt-0.5 truncate">Source: {photo.source}</p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Subtle tap indicator */}
      <div className="text-center mt-1 text-xs text-[#8B4513]/70">
        <span className="inline-flex items-center">
          <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
          Tap to enlarge
        </span>
      </div>
      
      {/* Custom pagination */}
      <div className="swiper-pagination flex justify-center mt-2 z-30 relative"></div>
      
      {/* Custom styles */}
      <style jsx global>{`
        .gallery-container {
          width: 100%;
          max-width: 100%;
          overflow: hidden;
          padding: 10px 0 30px;
          position: relative;
        }
        
        .card-swiper {
          width: 100%;
          padding: 15px 0 20px;
          overflow: visible;
        }
        
        .card-slide {
          width: 90% !important;
          max-width: 450px;
          border-radius: 10px;
          overflow: hidden;
          touch-action: pan-y;
        }
        
        .card-content {
          width: 100%;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 6px 12px rgba(139, 69, 19, 0.2);
        }
        
        /* Pagination styling to match the theme */
        .swiper-pagination {
          position: relative;
          bottom: 0 !important;
        }
        
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #D4A017;
          opacity: 0.5;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #D4A017;
          width: 16px;
          border-radius: 4px;
        }
        
        /* Cards effect overrides */
        .swiper-cards .swiper-slide {
          transform-origin: center bottom;
        }
        
        /* Animation for card currently in view */
        .swiper-slide-active .card-content {
          box-shadow: 0 8px 16px rgba(139, 69, 19, 0.25);
        }
        
        /* Larger screens */
        @media (min-width: 768px) {
          .card-slide {
            width: 70% !important;
            max-width: 500px;
          }
        }
      `}</style>
    </div>
  )
}