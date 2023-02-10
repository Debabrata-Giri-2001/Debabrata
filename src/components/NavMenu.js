import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'
import { MdMenu, MdClose } from 'react-icons/md'


const NavMenuStyle = styled.div`
    position:fixed;
    z-index:100;
    top:0;
    left:0;
    width:100%;
    padding:1rem 0;
    background-color: var(--dark-bg);
    ul{
        max-width: 100%;
        margin: 0 auto;
        text-align: center;
        color: var(--gray-1);
        li{
            display: inline-block;
            border-radius: 8px;
            
            transition: .3s ease background-color;
            &:hover{
                background-color: var(--deep-dark);
            }
            a{
                display: inline-block;
                font-family: RobotoMono Regular;
                padding: 1rem 2rem;
                font-size: 2rem;
                color: var(--gary-2);
                outline: none;
            }
            :active{
                color: var(--white);
            }
        }
        
    }
    .mobile-menu-icon{
            position: absolute;
            right: 1rem;
            top: 1rem;
            width: 4rem;
            cursor: pointer;
            display: none;
            outline: none;
        }
    .closeNavIcon{
        display: none;
    }
    @media only screen and (max-width: 768px){
        .mobile-menu-icon{
            display: block;
        }
        .hide-item{
            transform: translateY(calc(-100% - var(--top)));
        }
        .navItems{
            --top:1rem;
            transition: .3s ease transform;
            background-color: var(--deep-dark);
            padding: 2rem;
            width: 90%;
            max-width: 300px;
            border-radius: 12px;
            position: absolute;
            right: 1rem;
            top: var(--top);

            .closeNavIcon{
            display: block;
            cursor: pointer;
            width: 3rem;
            margin: 0 0 0 auto;
            *{
                pointer-events: none;
                }
            }
            li{
                display: block;
                margin-bottom: 1rem;
            }
        }
        
    }
`

export default function NavMenu() {
    const [showNav, setShowNav] = useState(false)
    return (
        <NavMenuStyle>
            <div className="mobile-menu-icon"
                onClick={() => setShowNav(!showNav)}
                role='button'
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}>
                <MdMenu />
            </div>
            <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
                <div className="closeNavIcon"
                    onClick={() => setShowNav(!showNav)}
                    role='button'
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0}>
                    <MdClose />
                </div>

                <li><NavLink
                    onClick={() => setShowNav(!showNav)}
                    role='button'
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0}
                    to="/" exact>Home</NavLink>
                </li>
                <li><NavLink
                    onClick={() => setShowNav(!showNav)}
                    role='button'
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0} to="/about">About</NavLink>
                </li>
                <li><NavLink
                    onClick={() => setShowNav(!showNav)}
                    role='button'
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0} to="/project">Projects</NavLink>
                </li>
                <li><NavLink
                    onClick={() => setShowNav(!showNav)}
                    role='button'
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0} to="/contact">Contact</NavLink>
                </li>
            </ul>
        </NavMenuStyle>
    )
}
