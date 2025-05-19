import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './BlogSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

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
            videoUrl: 'https://www.youtube.com/embed/Scxs7L0vhZ4',
            youtubeLink: 'https://www.youtube.com/watch?v=Scxs7L0vhZ4',
            content: 'Explore breathtaking mountain ranges with our expert guides...'
        },
        {
            date: '15 January 2020',
            title: 'Urban Exploration',
            videoUrl: 'https://www.youtube.com/embed/2VY-GpXaAlQ?enablejsapi=1&mute=1',
            youtubeLink: 'https://www.youtube.com/embed/2VY-GpXaAlQ?enablejsapi=1&mute=1',
            content: 'Experience vibrant city life through our curated urban adventures...'
        },
        {
            date: '3 March 2020',
            title: 'Beach Getaways',
            videoUrl: 'https://www.youtube.com/embed/0ogH7rYuVtM?enablejsapi=1&mute=1',
            youtubeLink: 'https://www.youtube.com/embed/0ogH7rYuVtM?enablejsapi=1&mute=1',
            content: 'Discover pristine beaches and tropical paradises...'
        },
        {
            date: '12 April 2020',
            title: 'Lakeside Retreats',
            videoUrl: 'https://www.youtube.com/embed/IUN664s7N-c',
            youtubeLink: 'https://www.youtube.com/watch?v=IUN664s7N-c',
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
        <div className="blog-container" id='blog-slider123'>
            <div className="blog-slider" ref={sliderRef}>
                <Swiper
                    modules={[Mousewheel, Pagination, Autoplay]}
                    className="blog-slider__wrp"
                    spaceBetween={isMobile ? 0 : 40}
                    slidesPerView={isMobile ? 1 : 'auto'}
                    centeredSlides
                    loop
                    speed={800}
                    mousewheel={{ forceToAxis: true }}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                        horizontalClass: 'swiper-pagination-horizontal'
                    }}
                    autoplay={{ delay: 5000 }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="blog-slider__item">
                                <div className="blog-slider__img">
                                    <iframe
                                        src={slide.videoUrl}
                                        title={slide.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                                <div className="blog-slider__content">
                                    <span className="blog-slider__code">{slide.date}</span>
                                    <h3 className="blog-slider__title">{slide.title}</h3>
                                    <p className="blog-slider__text">{slide.content}</p>
                                    <a
                                        href={slide.youtubeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="blog-slider__button"
                                    >
                                        Watch on YouTube
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-pagination"></div>
                </Swiper>
            </div>
        </div>
    );
};

export default BlogSlider;