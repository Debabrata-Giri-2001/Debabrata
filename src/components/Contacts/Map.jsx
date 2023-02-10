import React from 'react'
import Ptext from '../AllCpomponent/Ptext'
import MapImg from '../../assets/image/map_2.jpeg'
import styled from 'styled-components'

const MapStyles = styled.div`
    background: url(${MapImg}) no-repeat;
    filter: grayscale(100%);
    background-position: center;
    background-size: cover;
    min-height: 400px;
    .container {
        position: relative;
        min-height: 400px;
    }
    .map__card {
        position: absolute;
        right: 10%;
        bottom: 10%;
        padding: 2rem;
        background: var(--deep-dark);
        width: 100%;
        max-width: 300px;
        border-radius: 12px;
    }
    .map__card__heading {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    .map__card__link {
        display: inline-block;
        font-size: 1.6rem;
        margin-top: 3rem;
        text-decoration: underline;
    }

    @media only screen and (max-width: 768px) {
        background-position: 80% center;
    }
    @media only screen and (max-width: 768px) {
        .map__card {
            max-width: none;
            right: auto;
        }
    }
`

export default function Map() {
    return (
        <MapStyles>
            <div className="container">
                <div className="map__card">
                    <h3 className="map__card__heading">Here is me</h3>
                    <Ptext>Bhubaneswar, Odisha,India</Ptext>
                    <a
                        className="map__card__link"
                        href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.44371773608!2d85.67692668479258!3d20.300986671718267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1675919737094!5m2!1sen!2sin"
                        target="_blank"
                        rel="noreferrer"
                    >
                        
                    </a>
                </div>
            </div>
        </MapStyles>
    )
}
