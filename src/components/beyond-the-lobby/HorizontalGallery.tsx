"use client"

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCards } from 'swiper/modules'
import { WarPhoto } from './PhotoCard'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'

interface HorizontalGalleryProps {
  photos: WarPhoto[]
  onPhotoClick: (photo: WarPhoto) => void
}

export default function HorizontalGallery({ photos, onPhotoClick }: HorizontalGalleryProps) {
  return (
    <div className="gallery-container relative w-full py-4">
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
      >
        {photos.map((photo) => (
          <SwiperSlide key={photo.id} className="card-slide">
            <div 
              className="card-content relative overflow-hidden cursor-pointer shadow-md"
              onClick={() => onPhotoClick(photo)}
            >
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
      
      {/* Custom pagination */}
      <div className="swiper-pagination flex justify-center mt-3"></div>
      
      {/* Custom styles */}
      <style jsx global>{`
        .gallery-container {
          width: 100%;
          max-width: 100%;
          overflow: hidden;
          padding: 10px 0 30px;
        }
        
        .card-swiper {
          width: 100%;
          padding: 15px 0 20px;
          overflow: visible;
        }
        
        .card-slide {
          width: 90% !important; /* Large but not full width to show card stack */
          max-width: 450px;
          border-radius: 10px;
          overflow: hidden;
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