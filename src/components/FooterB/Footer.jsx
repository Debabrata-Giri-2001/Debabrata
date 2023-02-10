import React from 'react'
import styled from 'styled-components'
import Ptext from '../AllCpomponent/Ptext'
import FooterCol from './FooterCol'


const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;

  .container{
    padding: 2px;
    display: flex;
    gap: 3;
  }
  .footer_col1{
    flex: 2;
  }
  .footer_col2,
  .footer_col3,
  .footer_col4{
    flex: 1;
  }
  .footer_col1_title{
    font-size: 3.5rem;
    margin-top: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`

export default function Footer() {
  return (
    <FooterStyle>
      <div className='container'>
        <div className='footer_col1'>
          <h1 className="footer_col1_title">
            Debabrata Giri
          </h1>
          <Ptext>
            A web designer and developer from Bhubaneswar,Odisha,India. I always make websites that have unique designs and also has a good performance rate.
          </Ptext>
        </div>
        <div className="footer_col2">
          <FooterCol
            heading='Important Links'
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer_col3">
          <FooterCol
            heading='Contact Info'
            links={[
              {
                title: '+91 70774 25525',
                path: 'tel:+917077425525',
              },
              {
                title: '📧debabratagiri',
                path: 'mailto:debabratagiri5525@gmail.com',
              },
              {
                title: 'Bhubaneswar, Odisha, India',
                path: 'http://google.com/maps',
              },
            ]}

          />
        </div>
        <div className="footer_col4">
          <FooterCol
            heading='social Links'
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/ddebabrata.giri/',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/debabrata__giri',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/_debabrata._giri._/',
              },
            ]}
          />
        </div>
      </div>
      <div className='copyright'>
        <div className='container'>
          <Ptext>
            © 2021 - Debabrata Giri | Designed By{' '}
            <a target="_blank" rel="noreferrer" href="http://debabrataGiri.com">
              Web deV
            </a>{' '}
          </Ptext>
        </div>
      </div>
    </FooterStyle>
  )
}
