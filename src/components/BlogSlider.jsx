import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './BlogSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

SwiperCore.use([Mousewheel, Pagination, Autoplay]);

const BlogSlider = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showScrollHint, setShowScrollHint] = useState(true);
    const sliderRef = useRef(null);
    const topSectionRef = useRef(null);
    const bottomSectionRef = useRef(null);

    const slides = [
        {
            date: '26 December 2019',
            title: 'Mountain Adventures',
            image: 'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp',
            content: 'Explore breathtaking mountain ranges with our expert guides...'
        },
        {
            date: '15 January 2020',
            title: 'Urban Exploration',
            image: 'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp',
            content: 'Experience vibrant city life through our curated urban adventures...'
        },
        {
            date: '3 March 2020',
            title: 'Beach Getaways',
            image: 'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp',
            content: 'Discover pristine beaches and tropical paradises...'
        },
        {
            date: '12 April 2020',
            title: 'Lakeside Retreats',
            image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            content: 'Find peace and tranquility at stunning lakeside locations...'
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleScrollHint = () => {
        setShowScrollHint(false);
        window.removeEventListener('wheel', handleScrollHint);
        window.removeEventListener('touchmove', handleScrollHint);
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScrollHint);
        window.addEventListener('touchmove', handleScrollHint);
        return () => {
            window.removeEventListener('wheel', handleScrollHint);
            window.removeEventListener('touchmove', handleScrollHint);
        };
    }, []);

    return (
        <div className="blog-container">
            {/* <section className="full-page top" ref={topSectionRef}>
        <div>
          <h2>Explore Our Travel Blog</h2>
          <p className="subtitle">Scroll down to discover amazing destinations</p>
        </div>
      </section> */}

            <div className="blog-slider" ref={sliderRef}>
                <Swiper
                    className="blog-slider__wrp"
                    spaceBetween={isMobile ? 0 : 40}
                    slidesPerView={isMobile ? 1 : 'auto'}
                    centeredSlides
                    loop
                    speed={800}
                    mousewheel={{ forceToAxis: true }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="blog-slider__item">
                                <div className="blog-slider__img">
                                    <img src={slide.image} alt={slide.title} />
                                </div>
                                <div className="blog-slider__content">
                                    <span className="blog-slider__code">{slide.date}</span>
                                    <h3 className="blog-slider__title">{slide.title}</h3>
                                    <p className="blog-slider__text">{slide.content}</p>
                                    <button className="blog-slider__button">Read More</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="blog-slider__pagination swiper-pagination" /></div>

            {/* <section className="full-page bottom" ref={bottomSectionRef}>
        <div>
          <h2>Ready for Your Next Adventure?</h2>
          <p className="subtitle">Contact us to start planning your dream vacation</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section> */}

            {/* {showScrollHint && (
        <div className="scroll-hint">
          <span>Scroll to navigate</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      )} */}
        </div>
    );
};

export default BlogSlider;