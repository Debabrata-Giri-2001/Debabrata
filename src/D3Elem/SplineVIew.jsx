import Spline from '@splinetool/react-spline'
import React from 'react'
import styled from 'styled-components'

const SplineStyle = styled.div`
    .spline{
        z-index: 101;
        position: absolute;
    }

    canvas{
        margin: 0%;
        max-width: 48%;
        max-height: 48%;
        border: solid wheat 1px;
    }

    @media only screen and (max-width: 768px) {
        canvas{
            max-width: 90%;
        /* max-height: 100%; */
        }
        
    }

`

export default function SplineVIew() {
    return (
        <SplineStyle>
            <Spline className='spline' scene='https://prod.spline.design/k2syFWO60YoTSJJL/scene.splinecode' />
        </SplineStyle>
    )
}
