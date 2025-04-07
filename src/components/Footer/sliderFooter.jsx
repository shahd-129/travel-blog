import React from 'react'
import {
    imageSection,
    imageSection2,
    imageSection3,

} from '../../assets';
import {
    Box,

} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Footer.css';
export default function SliderFooter() {


    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            breakpoints={{
                600: { slidesPerView: 2 },
                960: { slidesPerView: 3 },
                1280: { slidesPerView: 4 }
            }}
            style={{ backgroundColor: '#f5f5f5' }}
            className="custom-swiper"
        >
            {[imageSection, imageSection2, imageSection3, imageSection, imageSection, imageSection2, imageSection].map((image, index) => (
                <SwiperSlide key={index}>
                    <Box
                        component="img"
                        src={image}
                        width="100%"
                        height="auto"
                        sx={{
                            objectFit: 'cover',
                            boxShadow: 2,
                        }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
