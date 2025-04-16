"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { WarPhoto } from './PhotoCard'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface HorizontalGalleryProps {
  photos: WarPhoto[]
  onPhotoClick: (photo: WarPhoto) => void
}

export default function HorizontalGallery({ photos, onPhotoClick }: HorizontalGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="relative w-full py-4">
      <div className="swiper-container" style={{ overflow: 'hidden', position: 'relative' }}>
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={30}
          initialSlide={0}
          loop={false}
          pagination={{ 
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active bg-[#D4A017]',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="mySwiper"
        >
          {photos.map((photo, index) => {
            const isFocused = index === activeIndex;
            
            return (
              <SwiperSlide key={photo.id} className="swiper-slide">
                <div 
                  className="slide-content-wrapper flex items-center justify-center py-4"
                  onClick={() => {
                    onPhotoClick(photo);
                  }}
                >
                  <div className={`
                    relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300
                    ${isFocused ? 'active-slide' : 'inactive-slide'}
                  `}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={isFocused ? 320 : 256}
                      height={isFocused ? 256 : 192}
                      className={`
                        object-cover transition-all duration-300
                        ${!isFocused ? 'filter blur-[2px]' : ''}
                      `}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/BfwAJcAP4i4MHowAAAABJRU5ErkJggg=="
                    />
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

      {/* Custom styles for Swiper */}
      <style jsx global>{`
        .swiper-container {
          margin: 0 auto;
          padding: 20px 0;
          height: 300px; /* Fixed height to prevent layout shifts */
        }
        
        .swiper {
          width: 100%;
          height: 100%;
        }
        
        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          width: auto !important; /* Override Swiper's inline width */
        }
        
        .active-slide {
          width: 320px !important;
          height: 256px !important;
          transform: scale(1);
          z-index: 10;
          box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
          transition: all 300ms ease;
        }
        
        .inactive-slide {
          width: 256px !important;
          height: 192px !important;
          transform: scale(0.85);
          opacity: 0.7;
          transition: all 300ms ease;
        }
        
        .swiper-pagination {
          position: absolute;
          bottom: 0;
        }
        
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #888;
          opacity: 0.7;
        }
        
        .swiper-pagination-bullet-active {
          width: 16px;
          border-radius: 4px;
          background: #D4A017 !important;
        }
        
        .swiper-button-prev,
        .swiper-button-next {
          color: #D4A017;
          background: rgba(0, 0, 0, 0.5);
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 18px;
        }
        
        @media (max-width: 768px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none;
          }
          
          .swiper-container {
            height: 260px; /* Smaller height for mobile */
          }
          
          .active-slide {
            width: 280px !important;
            height: 220px !important;
          }
          
          .inactive-slide {
            width: 220px !important;
            height: 170px !important;
          }
        }
      `}</style>
    </div>
  )
}