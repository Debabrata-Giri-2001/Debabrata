import { v4 as uuidv4 } from 'uuid';
import UTrackerImg from '../image/AppOne.jpeg';
import GreenCtgImg from '../image/moviesik.jpeg';
import CoinTrackerImg from '../image/rock_paper.jpg';
import CavinImg from '../image/debabrata_giri.jpeg';
import ProjectImg from '../image/voice-recognition.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Travel Template',
    desc:
      'Travel is the movement of people between distant geographical locations.',
    img: UTrackerImg,
    link:'https://github.com/Debabrata-Giri-2001/Travel_Template'
  },
  {
    id: uuidv4(),
    name: 'Moviesik',
    desc:
      'New movie search engine.Use your own words, or search with titles, actors, directors, genres etc.',
    img: GreenCtgImg,
    link:'https://github.com/Debabrata-Giri-2001/Moviesik'
  },
  {
    id: uuidv4(),
    name: 'ROCK PAPER SCISSOR',
    desc:
      'Click own choice element like ROCK , PAPER & SCISSORS then show result and tab reset button .',
    img: CoinTrackerImg,
    link:'https://github.com/Debabrata-Giri-2001/ROCK-PAPER-SCISSORs'
  },
  {
    id: uuidv4(),
    name: "Debabrata Portfolio",
    desc:
      'A well thought out critique of whatever you’re doing is as valuable as gold.',
    img: CavinImg,
    link:'https://github.com/Debabrata-Giri-2001/protifol-dev'
  },
  {
    id: uuidv4(),
    name: 'voice recognition',
    desc:
      'Voice recognition is the ability of a program to receive to understand and perform spoken commands.',
    img: ProjectImg,
    link:'https://github.com/Debabrata-Giri-2001/voice-recognition'
  },
];

export default projects;

