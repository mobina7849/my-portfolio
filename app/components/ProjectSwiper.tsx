'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../../public/styles/customSwiper.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';



const swiperData = ['https://swiperjs.com/demos/images/nature-1.jpg', 'https://swiperjs.com/demos/images/nature-2.jpg', 'https://swiperjs.com/demos/images/nature-3.jpg', 'https://swiperjs.com/demos/images/nature-4.jpg', 'https://swiperjs.com/demos/images/nature-5.jpg', 'https://swiperjs.com/demos/images/nature-6.jpg', 'https://swiperjs.com/demos/images/nature-7.jpg', 'https://swiperjs.com/demos/images/nature-8.jpg', 'https://swiperjs.com/demos/images/nature-9.jpg']

const ProjectSwiper = () => {
    return (
        <Container maxWidth="md" id="projects" style={{ padding: '50px 20px' }}>
            <Grid display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant="h4" gutterBottom>
                    My Project
                </Typography>
                <Typography variant="h3" gutterBottom>
                    Lets introduce something
                </Typography>
                <Typography variant="body1" color="textSecondary" textAlign={'center'}>
                    I am a full-stack developer with expertise in building modern web applications.
                    I specialize in React, Next.js, and TypeScript to create high-performance websites.
                </Typography>
            </Grid>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >

                {swiperData.map((item) => (
                    <SwiperSlide>
                        <Image alt="Nature"
                            layout="fill"
                            objectFit="cover" src={item} />
                    </SwiperSlide>
        ))}
        </Swiper>

        </Container>
    );
};
export default ProjectSwiper;
