import React from 'react'
import SectionTitle from './SectionTitle'
import projects from '../../assets/Data/projects'
import ProjectItem from './ProjectItem'
import styled from 'styled-components'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const ProjectSectionStyle = styled.div`
  padding: 5rem 0;
  .projects__allItems{
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-wrapper{
    height: 65vh;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;

    height: 50px;
    width: 50px;
    background: var(--deep-dark);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 58rem;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .swiper-wrapper{
      height: 70vh;
      }
    .swiper-button-prev,
    .swiper-button-next{
      top: 53rem;
    }
  }
`

export default function ProjectsSection() {



  return (
    <ProjectSectionStyle>
      <div className='container'>
        <SectionTitle subheading="some of my recent works" heading="Projects" />
        <div className="projects__allItems">

          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}

            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((index) => {
              return (
                <SwiperSlide key={index.id}>
                  <ProjectItem
                    title={index.name}
                    img={index.img}
                    desc={index.desc}
                    link_url={index.link}
                  />
                </SwiperSlide>
              )
            })}

          </Swiper>

        </div>
      </div>
    </ProjectSectionStyle>
  )
}
