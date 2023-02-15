// backgrounds
import saiman from './background/saiman.jpg';
import astral from './background/astral.jpg';
import eoaalien from './background/eoaalien.jpg';
import panight from './background/panight.jpg';
import heroImg from './background/hero-img.jpg';

// cards
import Pavel from './Pavel.png';
import Idan from './Idan.png';
import Michael from './Michael.png';
import Tomer from './Tomer.png';
import Dana from './Dana.png';
import Gutkin from './Gutkin.png';
import Noam from './Noam.png';
import Goldi from './Goldi.png';

// logo
import logo from './logo.svg';

// icon
import attack from './attack.png';
import defense from './defense.png';
import alertIcon from './alertIcon.svg';
import AlertIcon from './AlertIcon.jsx';

// players
import player01 from './player01.png';
import player02 from './player02.png';

export const allCards = [Pavel, Michael, Idan, Tomer, Dana, Gutkin, Goldi, Noam];

export {
  saiman,
  astral,
  eoaalien,
  panight,
  heroImg,
  Pavel,
  Michael,
  Dana,
  Gutkin,
  Goldi,
  Noam,
  Idan,
  Tomer,
  logo,
  attack,
  defense,
  alertIcon,
  AlertIcon,
  player01,
  player02,
};

export const battlegrounds = [
  { id: 'bg-saiman', image: saiman, name: 'Saiman' },
  { id: 'bg-astral', image: astral, name: 'Astral' },
  { id: 'bg-eoaalien', image: eoaalien, name: 'Eoaalien' },
  { id: 'bg-panight', image: panight, name: 'Panight' },
];

export const gameRules = [
  'Card with the same defense and attack point will cancel each other out.',
  'Attack points from the attacking card will deduct the opposing player’s health points.',
  'If P1 does not defend, their health wil be deducted by P2’s attack.',
  'If P1 defends, P2’s attack is equal to P2’s attack - P1’s defense.',
  'If a player defends, they refill 3 Mana',
  'If a player attacks, they spend 3 Mana',
];
