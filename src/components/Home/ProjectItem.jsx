import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ProjectImg from '../../assets/image/projectImg.png'
import { BsGithub } from 'react-icons/bs'
import SourceCode from '../AllCpomponent/SourceCode'

const ProjectItemStyle = styled.div`
    .projectItem_image {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      filter: grayscale(100%);
      height: 100%;
      transition: 0.5s ease-in-out;

    }
    img:hover {
      filter: grayscale(0%);
      height: 110%;
    }
    
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem_image {
      height: 350px;
    }
  }
`

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  link_url = 'https://github.com/'
}) {
  return (
    <ProjectItemStyle>
      <Link className='projectItem_image'>
        <img src={img} alt="project_itemImg" />
      </Link>
      <div className="projectItem__info">
        <Link to='#'>
          <h3 className='projectItem__title'>{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>

      </div>
      <SourceCode btnText={<BsGithub/>} outline btnLink={link_url} />
    </ProjectItemStyle>
  )
}
