import React from 'react'
import Ptext from '../AllCpomponent/Ptext'
import Button from '../AllCpomponent/Button'
import image from '../../assets/image/image2.jpg'
import styled from 'styled-components'
import AboutInfoItem from './AboutInfoItem'

const AboutPageStyles = styled.div`
    padding: 20rem 0 10rem 0;
    .top-section {
        display: flex;
        
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    .left {
        flex: 3;
    }
    .right {
        flex: 2;
    }
    .about__subheading {
        font-size: 2.2rem;
        margin-bottom: 2rem;
        span {
            background-color: var(--deep-dark);
            padding: 0.5rem;
            border-radius: 8px;
        }
    }
    .about__heading {
        font-size: 3.6rem;
        margin-bottom: 3rem;
    }
    .about__info {
        margin-bottom: 4rem;
        .para {
            max-width: 100%;
        }
    }
    .right {
        img {
            border: 2px solid var(--gray-1);
        }
    }
    .about__info__items {
        margin-top: 15rem;
    }
    .about__info__item {
        margin-bottom: 10rem;
    }
    .about__info__heading {
        font-size: 3.6rem;
        text-transform: uppercase;
    }

    @media only screen and (max-width: 768px) {
        padding: 10rem 0;
        .top-section{
            flex-direction: column;
            gap: 5rem;
        }
        .about__subheading{
            font-size: 1.8rem;
        }
        .about__heading{
            font-size: 2.8rem;
        }
        .about__info__heading{
            font-size: 3rem;
        }
    }
`
export default function AboutData() {
    return (
        <AboutPageStyles>
            <div className="container">
                <div className='top-section'>
                    <div className="left">
                        <p className="about__subheading">
                            Hi, I am <span>Debabrata Giri</span>
                        </p>
                        <h2 className="about__heading">A freelance Web developer</h2>
                        <div className="about__info">
                            <Ptext>
                                I am from Bhubaneswar, Odisha,India. A place of beauty and
                                nature. Since my childhood, i love art and design. I always
                                try to design stuff with my unique point of view. I also love
                                to create things that can be usefull to others.
                                <br /> <br />
                                I started coding since I was in high school. Coding is also an
                                art for me. I love it and now I have the opportunity to design
                                along with the coding. I find it really interesting and I
                                enjoyed the process a lot.
                                <br />
                                <br />
                                My vision is to make the world a better place. Now almost
                                everything is becoming better than ever. It is time for us to
                                create more good stuff that helps the world to become a better
                                place.
                            </Ptext>
                            <Button btnText="Download CV" btnLink="#"></Button>
                        </div>

                    </div>
                    <div className="right">
                        <img src={image} alt="image_two" />
                    </div>
                </div>
                {/*  about__info__items */}
                <div className='about__info__items'>
                    <div className="about__info__item">
                        <h1 className="about__info__heading">Education</h1>
                        <AboutInfoItem

                            title="School"
                            items={['Saraswati shishu vidya Mandir,champua']}
                        />
                        <AboutInfoItem
                            title="+2 Collage"
                            items={['Tetrahedron Science Collage,Cuttack']}
                        />
                        <AboutInfoItem
                            title="B.Tech"
                            items={['Gandhi Institute for Technology,Bhubaneswar']}
                        />
                    </div>

                    <div className="about__info__item">
                        <h1 className="about__info__heading">My Skills</h1>
                        <AboutInfoItem
                            title="DSA????"
                            items={['Java']}
                        />
                        <AboutInfoItem
                            title="FrontEnd"
                            items={['HTML', 'CSS', 'Tailwind', 'JavaScript', 'REACT']}
                        />
                        <AboutInfoItem
                            title="BackEnd"
                            items={['Node', 'Express', 'JavaScript']}
                        />
                        <AboutInfoItem
                            title="Design"
                            items={['Photoshop', 'Figma']}
                        />
                        
                    </div>

                    <div className="about__info__item">
                        <h1 className="about__info__heading">Experiences</h1>

                        <AboutInfoItem
                            title="2021-2023"
                            items={['Web Developer']}
                        />

                    </div>
                </div>
            </div>
        </AboutPageStyles>
    )
}
