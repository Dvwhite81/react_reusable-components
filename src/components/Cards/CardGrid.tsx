import { CardType } from '../../utils/data';
import Card from './Card';

import './Cards.css';

interface CardGridProps {
  cards: CardType[];
}

const CardGrid = ({ cards }: CardGridProps) => {
  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <Card card={card} index={index} />
      ))}
    </div>
  );
};

export default CardGrid;
