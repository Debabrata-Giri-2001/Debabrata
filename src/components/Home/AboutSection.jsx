import React from 'react'
import styled from 'styled-components'
import Button from '../AllCpomponent/Button'
import Ptext from '../AllCpomponent/Ptext'
import SectionTitle from './SectionTitle'
import Image2 from '../../assets/image/image2.jpg'


const AboutSectionStyle = styled.div`
    padding: 10rem 0;
    .container{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
    }
    .aboutSection__left,
    .aboutSection__right{
        flex: 1;

    }
    .section_title{
        text-align: left;
    }
    .para {
    margin-top: 2rem;
    margin-left: 0;
    }
    .about_section_button{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2rem;
        margin-top: 2rem;
    }

    @media only screen and (max-width: 950px) {
        .aboutSection__left{
            flex:4;
        }
        .aboutSection__right{
            flex: 3;
        }
    }
    @media only screen and (max-width: 768px) {
        .container{
            flex-direction: column;
            text-align: center;
        }
        .aboutSection__left,
        .aboutSection__right{
            width: 100%;
        }
        .aboutSection__right{
            margin-top: 3rem;
        }
        .section_title{
            text-align: center;
        }
        .para{
            margin: 0 auto;
            margin-top: 2rem;
        }
        .about_section_button{
            flex-direction: column;
            gap: 0;
        }
        .button-wrapper, a{
            width: 100%;
            text-align: center;
        }
    }

`
export default function AboutSection() {
    return (
        <AboutSectionStyle>
            <div className='container'>
                <div className="aboutSection__left">
                    <SectionTitle
                        subheading='Let me introduce myself'
                        heading='About Me'
                    />
                    <Ptext>
                        I am a web designer and developer from Bhubaneswar,
                        Odisha,India. I create professional websites. I love art and always
                        try to show unique views to the audience through my design.
                    </Ptext>
                    <div className='about_section_button'>
                        <Button btnLink='/project' btnText='Work' />
                        <Button btnLink='/about' btnText='Read More' outline />
                    </div>
                </div>
                <div className="aboutSection__right">
                    <img src={Image2} alt="image_two" />
                </div>
            </div>
        </AboutSectionStyle>

    )
}
