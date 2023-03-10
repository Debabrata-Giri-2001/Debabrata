import React from 'react'
import { MdDesktopMac } from 'react-icons/md'
import styled from 'styled-components'
import Ptext from '../AllCpomponent/Ptext'

const ItemStyle = styled.div`
    text-align: center;
    .servicesItem__icon{
        svg{
            width: 3rem;
        }
    }
    .servicesItem__title{
        font-size: 2.5rem;
        font-family: "Montserrat SemiBold";
    }
    .para{
        margin-top: 2rem;
    }
`
export default function ServicesSectionItem({
    icon = <MdDesktopMac />,
    title = 'Web Design',
    desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
}) {

    return (
        <ItemStyle>
            <div className="servicesItem__icon">
                {icon}
                <div className="servicesItem__title">
                    {title}
                </div>
                <Ptext>{desc}</Ptext>
            </div>
        </ItemStyle>
    )
}
