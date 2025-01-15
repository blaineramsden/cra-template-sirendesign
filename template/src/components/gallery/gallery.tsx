import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Autoplay,   
    Pagination,
} from "swiper/modules";
import "swiper/css";
import './gallery.scss';

interface GalleryProps {
    images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    return (
        <>
            <Swiper id="gallery" spaceBetween={50} slidesPerView={1}>
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="image-wrapper" style={{backgroundImage: `url(${image})`}} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Gallery;
